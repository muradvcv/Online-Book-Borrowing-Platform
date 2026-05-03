"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = href == pathname;
  return (
    <Link href={href} className={`${isActive ? "border-b-3 border-b-[#0044d5] text-[#1586f7] shadow-2xl text-[15px]" : "text-[15px]"}`}>
      {children}
    </Link>
  );
};

export default Navlink;