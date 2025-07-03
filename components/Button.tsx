import Link from 'next/link'
import React from 'react'

type buttonProps = {
  title: string;
  linkSrc: string;
  icon: React.ReactElement;
  customClassName: string;
}

export default function Button(props:buttonProps) {
  const {title, linkSrc } = props

  // icon={<></>} to pass
  // customClassName={""}
  return (
    <Link className="relative flex justify-center self-start border-2 border-red-500 rounded-full overflow-hidden cursor-pointer px-6 py-3 button-clipath bg-white min-w-[140px] "
    href={linkSrc}>
        <div className=" absolute inset-0 bg-[var(--error-color)] "></div>
        <span className="relative z-10 font-semibold ">{title}</span>
    </Link>
  )
}
