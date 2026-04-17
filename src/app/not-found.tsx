"use client";

import Link from "next/link";
import { Home, MoveLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[160px] animate-pulse delay-700" />
      <div className="relative z-10 text-center flex flex-col items-center">
        <h1 className="text-9xl md:text-[12rem] font-black text-white/[0.03] tracking-tighter absolute -top-24 md:-top-40 select-none pointer-events-none">
          404
        </h1>
        <div className="space-y-8">
          <div className="space-y-3">
             <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Lost in <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-indigo-500">Space?</span>
            </h2>
            <p className="text-lg md:text-xl text-white/40 font-medium max-w-md mx-auto">
              The page you&apos;re looking for has vanished into another dimension. Let&apos;s get you back to your circle.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link href="/" className="group flex items-center gap-3 px-10 py-5 bg-violet-600 text-white font-bold rounded-2xl hover:bg-violet-700 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(124,58,237,0.3)] shadow-violet-600/20">
              <Home size={22} className="group-hover:-translate-y-0.5 transition-transform" />
              Go Back Home
            </Link>
            <button onClick={() => typeof window !== 'undefined' && window.history.back()} className="group flex items-center gap-3 px-10 py-5 bg-white/5 text-white/70 font-bold rounded-2xl border border-white/10 hover:bg-white/10 transition-all hover:border-white/20 hover:text-white">
              <MoveLeft size={22} className="group-hover:-translate-x-1 transition-transform" />
              Previous Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
