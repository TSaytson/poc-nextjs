import { prisma } from "@/config/database";
import { Finding } from "@prisma/client";
import axios from "axios";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import swal from "sweetalert";
import Layout from "../../../../layouts/Layout";

type StaticProps = {
  finding: Finding;
}

type StaticParams = {
  id: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const findings = await prisma.finding.findMany({
    select: { id: true }
  });

  return {
    paths: findings.map(({ id }) => (
      {params: {id}}
    )),
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<StaticProps, StaticParams> = async ({params}) => {
  const finding = await prisma.finding.findUnique({
    where: { id: params?.id }
  });

  return {
    props: {
      finding: JSON.parse(JSON.stringify(finding))
    }
  }
}

const UpdateResource: NextPage<StaticProps> = ({ finding }) => {
 
  const [form, setForm] = useState({
    title: finding.title,
    description: finding.description,
    imageUrl: finding.imageUrl as string | ArrayBuffer | null,
    link: finding.link
  });
  
  async function handleForm(e: React.ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) {
    const file = e.target.files?.item(0);
    const reader = new FileReader();

    if (file?.type.match('image.*')) {
      reader.addEventListener("load", () => {
        setForm({ ...form, imageUrl: reader.result })
      })
      reader.readAsDataURL(file);
    };

    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function updateFinding(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await axios.put(`/api/findings/${finding.id}`, form);
      swal({
        title: 'Sucesso!',
        text: response.data.message,
        icon: 'success',
        timer: 1500
      })
    } catch (error: any) {
      console.log(error);
      swal({
        title: 'Erro!',
        text: error.response.data.message,
        icon: 'error',
        timer: 1500
      })
    }
  }

  return (
    <Layout>
      <form onSubmit={updateFinding} className="max-w-screen-lg mx-auto flex flex-col px-4">
        <h1 className="text-2xl font-bold mb-2">
          Share a finding
        </h1>
        <span className="text-xl text-gray-500 mb-14">
          Share what you found with others
        </span>
        <div className="w-full flex flex-col gap-2 mb-5">
          <label htmlFor="image" className="text-base text-gray-500">
            Image
          </label>
          <input
            name='image'
            type='file'
            onChange={handleForm}
            id='image'
            className="w-full border-[1px] h-32 rounded-lg shadow-sm p-2 outline-none 
            focus:outline-gray-400 focus:outline-[3px] transition-all"
          />
        </div>
        <div className="w-full flex flex-col gap-2 mb-6">
          <label htmlFor='title' className="text-base text-gray-500">
            Title
          </label>
          <input
            name='title'
            value={form.title}
            onChange={handleForm}
            id='title'
            type='text'
            className='w-full border-[1px] h-9 rounded-lg shadow-sm p-2 outline-none 
            focus:outline-offset-0 focus:outline-gray-400 focust:outline-[3px] transition-all'
          />
        </div>
        <div className="w-full flex flex-col gap-2 mb-5">
          <label htmlFor="description" className="text-base text-gray-500">
            Description
          </label>
          <textarea
            name='description'
            value={form.description}
            onChange={handleForm}
            id='description'
            className="w-full border-[1px] h-32 rounded-lg shadow-sm p-2 outline-none 
            focus:outline-gray-400 focus:outline-[3px] transition-all"
          />
        </div>
        <div className="w-full flex flex-col gap-2 mb-6">
          <label htmlFor='link' className="text-base text-gray-500">
            Link
          </label>
          <input
            name='link'
            value={form.link}
            onChange={handleForm}
            id='link'
            type='url'
            className='w-full border-[1px] h-9 rounded-lg shadow-sm p-2 outline-none 
            focus:outline-offset-0 focus:outline-gray-400 focust:outline-[3px] transition-all'
          />
        </div>
        <button className="px-6 py-3 bg-sky-700 text-white rounded-lg ml-auto outline-none
        focus:outline-offset-0 focus:outline-sky-300 focus:outline-[3px] transition-all">
          Update
        </button>
      </form>
    </Layout>
  )
}

export default UpdateResource;