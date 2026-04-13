import { BarChart3, History, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
      <div className="container mx-auto navbar px-4 border-b border-white/10 shadow-xl mt-4">
        <div className="flex-1">
          <Link href="/">
            <Image src="/assets/logo.png" alt="" width={150} height={150} className="brightness-300"/>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/" className="flex items-center gap-2">
                <Home size={20}/>
                <span className="hidden md:inline">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/timeline" className="flex items-center gap-2">
                <History size={20}/>
                <span className="hidden md:inline">Timeline</span>
              </Link>
            </li>
            <li>
              <Link href="/stats" className="flex items-center gap-2">
                <BarChart3 size={20}/>
                <span className="hidden md:inline">Stats</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
  );
};

export default Navbar;
