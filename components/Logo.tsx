'use client'
import Image from "next/image";
import Link from 'next/link';

type NavbarProps = {
  handleSelectedNav: (nav: string) => void;
};

export default function Logo(props:NavbarProps) {
    const {handleSelectedNav } = props
    
  return (
    <Link className='flex items-center '
    href={"/"}
    onClick={() => handleSelectedNav("/")}
    >
      <Image
      src="/alllogo.jpg"
      alt="Company Logo"
      className='rounded-full min-h-11 min-w-11 h-11 w-11 object-cover border-2 transition-all duration-300 hover:scale-125 cursor-pointer border-[#D32F2F] '
      width={120}
      height={60}         
      />
    </Link>
  )
}
