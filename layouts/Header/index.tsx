import Logo from "@/components/Logo";
import Link from "next/link";

export default function Header() {
  return (
    <header className='w-full shadow-md py-6 px-4 mb-32'>
      <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
        <Logo />
        <Link href='/findings/create'>
          <span className='text-base'>Share a finding</span>
        </Link>
      </div>
    </header>
  )
}