import { Finding as FindingModel } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

type FindingComponentProps = Omit<FindingModel, 'createdAt' | 'updatedAt'>

export default function Finding(
  {id, title, description, imageUrl }: FindingComponentProps) {
  return (
    <Link href={`/findings/${id}`}>
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
    </Link>
  )
}