import CategoryLink from '@/components/Category';
import { prisma } from '@/config/database';
import { Finding } from '@prisma/client';
import Layout from '../../layouts/Layout';
import FindingsGrid from '@/components/FindingsGrid';

export async function getServerSideProps() {
  const findings = await prisma.finding.findMany();
  return {
    props: {
      findings: JSON.parse(JSON.stringify(findings))
    }
  };
}

type Props = {
  findings: Finding[]
}

export default function Home({findings = []}:Props) {
  return (
    <Layout>

      <main className='max-w-screen-2xl mx-auto flex justify-between items-start gap-20 px-20'>
        <aside className='flex flex-col gap-4'>
          <CategoryLink link='' active>
            All resources
          </CategoryLink>
          <CategoryLink link=''>
            Remote jobs
          </CategoryLink>
          <CategoryLink link=''>
            Research
          </CategoryLink>
          <CategoryLink link=''>
            Accommodation
          </CategoryLink>
          <CategoryLink link=''>
            Travel
          </CategoryLink>
          <CategoryLink link=''>
            Tax
          </CategoryLink>
          <CategoryLink link=''>
            Leisure
          </CategoryLink>
        </aside>
        <div className='flex-1'>
          <h1 className='text-2xl font-bold mb-7'>
            All resources
          </h1>

          <FindingsGrid findings={findings}/>
          
        </div>

      </main>
    </Layout>
  )
}
