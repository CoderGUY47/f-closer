import React from "react";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="bg-linear-to-b from-violet-700 to-indigo-900">
        <footer className="container mx-auto footer footer-center p-10 text-stone-400 border-0 py-10 md:py-24 mt-10 md:mt-20 space-y-4">
          <aside>
            <div className="font-bold text-lg text-white">
              <div className="bg-black/50 p-4 rounded-3xl border-0 flex items-center gap-2">
                <Image src="/assets/logo-no-bg.png" alt="Icon" width={100} height={100} className="rounded-sm"/>
                <span className="font-bold bg-clip-text text-2xl text-transparent bg-linear-to-r from-orange-600 via-orange-500/80 to-amber-500">
                  F-Closer
                </span> 
              </div>
            </div>
            <p className="text-center text-white/70 text-lg mt-6 mb-7 max-w-2xl font-medium">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
            </p>
            <div className="flex flex-col mt-6">
              <p className="text-white font-bold text-lg mb-3 uppercase tracking-[0.2em] opacity-50">
                Social Links
              </p>
              <ul className="flex gap-4">
                <li className="bg-white text-black/80 py-3 px-3 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-500 cursor-pointer shadow-lg hover:scale-110">
                  <Link href="/">
                    <FaFacebookF size={24} />
                  </Link>
                </li>
                <li className="bg-white text-black/80 py-3 px-3 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-500 cursor-pointer shadow-lg hover:scale-110">
                  <Link href="/">
                    <RiInstagramFill size={24} />
                  </Link>
                </li>
                <li className="bg-white text-black/80 py-3 px-3 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-500 cursor-pointer shadow-lg hover:scale-110">
                  <Link href="/">
                    <FaXTwitter size={24} />
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </footer>
        <div className="flex justify-between items-center py-6 px-4 bg-black/40">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm">
              Copyright © 2026 F-Closer. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <p className="text-white/70 text-sm">Made with ❤️ by </p>
              <div className="bg-black/20 p-4 rounded-3xl border-0 flex items-center gap-2 px-3 py-3">
                <Image src="/assets/logo-V-1.png" alt="Icon" width={50} height={50} className="rounded-sm"/>
                <span className="font-black bg-clip-text text-transparent bg-linear-to-r from-orange-600 via-orange-500/80 to-amber-500 text-sm">
                  F-Closer
                </span> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
