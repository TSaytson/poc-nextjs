import { prisma } from "@/config/database";
import { Finding } from "@prisma/client";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../../../layouts/Layout";

type StaticProps = {
  finding: Finding
}

type StaticParams = {
  id: string;
}

export const getStaticPaths: GetStaticPaths<StaticParams> = async () => {
  const findings = await prisma.finding.findMany({
    select: { id: true }
  })

  return {
    paths: findings.map(({ id }) => (
      { params: { id } }
    )),
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<StaticProps, StaticParams> = async ({ params }) => {
  const finding = await prisma.finding.findUnique({
    where: { id: params?.id }
  });

  return {
    props: {
      finding: JSON.parse(JSON.stringify(finding))
    }
  }
}

const PeopleFinding: NextPage<StaticProps> = ({ finding }) => {
  const router = useRouter();

  if (router.isFallback || !finding) return <span>Loading...</span>

  return (
    <Layout>
      <div className="max-w-screen-lg mx-auto flex flex-col px-4">
        <h1 className="text-2xl font-bold mb-2">{finding.title}</h1>
        <span className="text-xl mb-8">
          {finding.description}
        </span>
        <div className="relative w-full h-[30rem] mb-4">
          <Image
            src={finding.imageUrl}
            alt={finding.title}
            width={400}
            height={400}
          />
        </div>
        <div className="h-12 flex justify-between">
          <Link href={`/findings/${finding.id}/update`} className="flex justify-center w-20 linear duration-500 bg-sky-500 hover:bg-sky-400 text-white rounded-lg">
            <button>
              Update
            </button>
          </Link>
          <a href={finding.link} target='_blank' className="flex justify-center w-20 linear duration-500 bg-sky-500 hover:bg-sky-400 text-white rounded-lg">
            <button className="w-20 linear duration-500 bg-sky-500 hover:bg-sky-400 text-white rounded-lg">
              Visit
            </button>
          </a>
        </div>

      </div>
    </Layout>
  )
}

export default PeopleFinding;