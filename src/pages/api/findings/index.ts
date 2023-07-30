// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/config/database'
import { Finding } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message:string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).
      send({ message: `HTTP method ${req.method} is not allowed` })
  }

  const data = req.body as Omit<Finding, 'id' | 'createdAt' | 'updatedAt'>;

  if (!data.title || !data.description || !data.imageUrl) {
    return res.status(422).send({
      message: 'Title, description and image url are required'
    })
  }
  
  const { title, description, imageUrl, link } = data;
  try {
    await prisma.finding.create({ data: {title, description, imageUrl, link}})
    return res.status(201).send({ message: 'created'});
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: 'error' });
  }
}
