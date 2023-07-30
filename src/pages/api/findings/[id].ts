// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@/config/database'
import { Finding } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'PUT') {
    res.setHeader('Allow', ['PUT'])
    return res.status(405).
      json({ message: `HTTP method ${req.method} is not allowed` })
  }

  const data = req.body as Omit<Finding, 'id' | 'createdAt' | 'updatedAt'>;

  if (!data.title || !data.description) {
    return res.status(422).json({
      message: 'Title and description are required'
    })
  }

  if (!req.query.id) return res.status(404).json({
    message: "Resource not found"
  });

  const id = req.query.id as string;

  const findingExists = await prisma.finding.findUnique({
    where: { id }
  });

  if (!findingExists) return res.status(404).json({
    message: "Resource not found"
  });

  const { title, description } = data;
  try {
    await prisma.finding.update({
      where: { id },
      data: { title, description }
    })
    return res.status(201).json({ message: 'updated' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'error' });
  }
}
