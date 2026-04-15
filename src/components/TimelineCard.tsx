"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const TimeLineCard = ({ type, personName, date }: { type?: string; personName?: string; date?: string }) => {
  const [currentIcon, setCurrentIcon] = useState("/assets/telephone.gif");

  useEffect(() => {
    const icon = type === "Text" ? "/assets/conversation.gif" 
               : type === "Video" ? "/assets/video.gif" 
               : type === "Meetup" ? "/assets/handshake.gif" 
               : "/assets/telephone.gif"; //by default to call if none match
               
    setCurrentIcon(icon);
  }, [type]);

  return (
    <div className="group relative flex flex-col md:flex-row items-start md:items-center gap-5 border border-white/5 rounded-3xl p-5 bg-stone-900/30 backdrop-blur-xl w-full hover:bg-stone-900/60 hover:border-violet-500/30 transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden">
      <div className="relative z-10 w-16 h-16 bg-white rounded-2xl shrink-0 flex items-center justify-center p-2 border border-white/10 overflow-hidden">
        <Image src={currentIcon} alt={type || "Icon"} width={64} height={64} className="w-full h-full object-cover"/>
      </div>
      <div className="relative z-10 flex-1 flex flex-col md:flex-row md:items-center justify-between w-full gap-4 md:gap-0">
        <div>
          <p className="text-xl text-white font-medium flex items-center flex-wrap gap-2 mb-2">
            <span className="font-semibold bg-clip-text text-transparent bg-linear-to-r from-white to-white/70 group-hover:to-violet-400 transition-all">
              {type}
            </span> 
            <span className="text-white/30 text-base font-normal px-1">with</span> 
            <span className="font-semibold text-violet-600 transition-colors">{personName}</span>
          </p>
          <div className="inline-flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
            <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
            <p className="text-xs text-white/60 font-semibold tracking-widest uppercase">{date}</p>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/30 group-hover:text-violet-400 group-hover:border-violet-500/30 group-hover:bg-violet-500/10 transition-all duration-500">
          <ArrowRight size={18} />
        </div>
      </div>
    </div>
  );
};

export default TimeLineCard;
