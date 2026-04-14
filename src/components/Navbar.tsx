"use client";

import { BarChart3, History, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? "bg-violet-600 text-white" : "text-white/70";
  };

  return (
    <div className="sticky top-0 z-50 w-full bg-stone-950/70 backdrop-blur-xl border-b border-white/5 py-2">
      <div className="container mx-auto navbar px-4">
      <div className="flex-1">
        <Link href="/">
          <Image src="/assets/logo-no-bg.png" alt="F-Closer" width={100} height={50} className="rounded-lg object-cover"/>
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <Link href="/" className={`btn btn-ghost flex items-center gap-2 rounded-lg py-2 px-4 transition-all ${isActive("/")}`}>
              <Home size={20} />
              <span className="hidden md:inline font-semibold">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/timeline" className={`btn btn-ghost flex items-center gap-2 rounded-lg py-2 px-4 transition-all ${isActive("/timeline")}`}>
              <History size={20} />
              <span className="hidden md:inline font-semibold">Timeline</span>
            </Link>
          </li>
          <li>
            <Link href="/stats" className={`btn btn-ghost flex items-center gap-2 rounded-lg py-2 px-4 transition-all ${isActive("/stats")}`}>
              <BarChart3 size={20} />
              <span className="hidden md:inline font-semibold">Stats</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  );
};

export default Navbar;
