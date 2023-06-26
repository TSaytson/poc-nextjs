import axios from "axios";
import React, { useState } from "react";
import swal from "sweetalert";
import Layout from "../../../layouts/Layout";

export default function CreateResource() {
  const [form, setForm] = useState({
    title: '',
    description: ''
  });

  async function handleForm(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({...form, [e.target.name]: e.target.value})
  }

  async function addFinding(e:React.FormEvent) {
    e.preventDefault();
    try {
      const response = await axios.post('/api/finding', form);
      swal({
        title: 'Sucesso!',
        text: response.data.message,
        icon: 'success',
        timer: 1500
      })
    } catch (error:any) {
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
      <form onSubmit={addFinding} className="max-w-screen-lg mx-auto flex flex-col px-4">
        <h1 className="text-2xl font-bold mb-2">
          Share a finding
        </h1>
        <span className="text-xl text-gray-500 mb-14">
          Share what you found with others
        </span>
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
        <button className="px-6 py-3 bg-sky-700 text-white rounded-lg ml-auto outline-none
        focus:outline-offset-0 focus:outline-sky-300 focus:outline-[3px] transition-all">
          Add finding
        </button>
      </form>
    </Layout>
  )
}