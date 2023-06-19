import { Finding as FindingModel } from "@prisma/client";
import Image from "next/image";

type FindingComponentProps = Omit<FindingModel, 'createdAt' | 'updatedAt'> & {
  link: string,
  imageUrl: string
}
export default function Finding(
  { title, description, imageUrl, link }: FindingComponentProps) {
  return (
    <a href={link}>
      <div className='flex flex-col gap-2 max-w-xs'>
        <div className="w-full">
          <Image
            src={imageUrl}
            alt={title}
            width={400}
            height={400}
          />
        </div>
        
        <span className='text-xl font-bold'>{title}</span>
        <p className='text-base'>
          {description}
        </p>
      </div>
    </a>
  )
}