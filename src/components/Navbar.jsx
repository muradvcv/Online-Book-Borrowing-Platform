import React from 'react';
import Navlink from './Navlink';
import Image from 'next/image';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';
import Logo from '@/assets/logo.png';


const Navbar = () => {
  return (
    <div className='bg-base-100 shadow-sm'>
      <div className="navbar  container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <RxHamburgerMenu />
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><Navlink href="/">Home</Navlink></li>
              <li><Navlink href="/all-tiles">All Books</Navlink></li>
              <li><Navlink href="/my-profile">My Profile</Navlink></li>
            </ul>
          </div>
          <div className='flex gap-2 items-center'>
            <Link href="/">
              <Image src={Logo} alt="Logo" className="w-10 h-auto" />
            </Link>
            <h1 className="text-md md:text-xl whitespace-nowrap">
             Book Borrowing
            </h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Navlink href="/">Home</Navlink></li>
            <li><Navlink href="/all-tiles">All tiles</Navlink></li>
            <li><Navlink href="/my-profile">My Profile</Navlink></li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-outline btn-success">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;