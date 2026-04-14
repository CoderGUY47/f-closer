import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 mt-8">
      <div className="relative w-full h-[55vh] rounded-4xl overflow-hidden shadow-2xl border border-white/5 bg-zinc-900/50">
        <Image src="/assets/banner.jpg" alt="Hero Banner" width={1440} height={900} className="w-full h-[55vh] object-cover"/>
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent z-10" />
        <div className="absolute inset-0 w-full z-20 flex flex-col justify-center items-center text-center">
          <div className="bg-black/20 backdrop-blur-md p-6 md:p-12 rounded-4xl border border-white/10 w-full h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
              Bring Your <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-orange-400 to-amber-500">
                Circle Closer
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-medium mb-8 leading-relaxed">
              Your personal workspace for tracking meaningful moments and nurturing 
              the relationships that define your life.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="btn btn-lg bg-orange-600 hover:bg-orange-500 border-none text-white px-10 rounded-2xl shadow-xl transition-all hover:scale-105">
                Add New Friend
              </button>
              <button className="btn btn-lg btn-outline text-white border-white/20 hover:bg-white/10 px-10 rounded-2xl transition-all">
                View History
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;