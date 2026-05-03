import Link from "next/link";
import React from "react";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#023d51] to-[#091733] text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo & About */}
        <div>
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <FaBookOpen /> Book Haven
          </h2>

          <p className="text-gray-300 leading-7">
            Your digital library to explore, read, and borrow books anytime.
            Discover knowledge, stories, and inspiration all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <nav>
          <h6 className="text-xl font-semibold mb-5">
            Quick Links
          </h6>

          <div className="flex flex-col gap-3 text-gray-300">
            <Link href="/" className="hover:text-white duration-300">
              Home
            </Link>

            <Link href="/all-tiles" className="hover:text-white duration-300">
              All Books
            </Link>

            <Link href="/profile" className="hover:text-white duration-300">
              My Profile
            </Link>

            <Link href="/login" className="hover:text-white duration-300">
              Login
            </Link>
          </div>
        </nav>

        {/* Categories */}
        <nav>
          <h6 className="text-xl font-semibold mb-5">
            Categories
          </h6>

          <div className="flex flex-col gap-3 text-gray-300">
            <p className="hover:text-white cursor-pointer">📘 Programming</p>
            <p className="hover:text-white cursor-pointer">💰 Finance</p>
            <p className="hover:text-white cursor-pointer">🌱 Self Development</p>
            <p className="hover:text-white cursor-pointer">📖 Fiction</p>
          </div>
        </nav>

        {/* Newsletter */}
        <div>
          <h6 className="text-xl font-semibold mb-5">
            Subscribe
          </h6>

          <p className="text-gray-300 mb-4">
            Get updates about new books & offers.
          </p>

          <div className="flex">
            <input 
              type="email"
              placeholder="Your email"
              className="px-4 py-2 w-full rounded-l-lg text-black outline-none border border-white"
            />
            <button className="bg-[#D72050] px-5 rounded-r-lg font-semibold">
              Join
            </button>
          </div>

          {/* Social */}
          <div className="flex gap-4 mt-5">
            <Link href="https://x.com/" className="social-btn">
              <BsTwitter />
            </Link>

            <Link href="https://youtube.com/" className="social-btn">
              <BsYoutube />
            </Link>

            <Link href="https://facebook.com/" className="social-btn">
              <FaFacebook />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-5 text-center text-sm text-gray-400">
        © 2026 Book Haven. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;