import Link from "next/link";
import { PropsWithChildren } from "react";

type CategoryLinkProps = {
  link: string,
  active?: boolean
}
export default function CategoryLink(
  { children, link, active }: PropsWithChildren<CategoryLinkProps>) {
  return (
    <Link
      href={link}
      className={`text-base ${active ? 'text-black' : 'text-sky-500'}`}
    >
      {children}
    </Link>
  )
}