"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

//interface হচ্ছে একটা "শর্ত", "চুক্তি" বা "চেকলিস্ট" (Checklist)
//FriendCard বানানোর জন্য এমন একজন friend ডাটা দরকার, 
//যার অবশ্যই name (নাম), picture (ছবি) এবং status (স্ট্যাটাস) থাকতে হবে
interface FriendCardProps {
  friend: {
    name: string;
    picture: string;
    active: number;
    status: string;
    tags: string[];
  };
}

function FriendCard({ friend }: FriendCardProps) {
  //create a "state" (a variable that React remembers) to hold our CSS classes
  const [statusStyle, setStatusStyle] = useState(
    "bg-slate-500/5 text-slate-600 border-slate-600/20",
  );

  //use "useEffect" to run some code whenever the "friend.status" changes
  useEffect(() => {
    //make sure we have a status, and convert it to lowercase to easily check it
    const currentStatus = friend.status ? friend.status.toLowerCase() : "";

    if (currentStatus === "overdue") {
      setStatusStyle("bg-rose-500/5 text-rose-600 border-rose-600/20");
    } else if (currentStatus === "on-track") {
      setStatusStyle("bg-emerald-500/5 text-emerald-600 border-emerald-600/20");
    } else if (currentStatus === "almost due") {
      setStatusStyle("bg-amber-500/5 text-amber-600 border-amber-600/20");
    } else {
      setStatusStyle("bg-slate-500/5 text-slate-600 border-slate-600/20");
    }
  }, [friend.status]); 
  //array here tells React: "only run the inner code when friend.status changes"

  
  return (
    <div className="group relative bg-zinc-900/30 hover:bg-zinc-900/60 border border-white/5 rounded-3xl p-8 transition-all hover:border-white/10 shadow-2xl overflow-hidden">
      <div className="relative flex flex-col items-center">
        <div className="relative w-26 h-26 rounded-full ring-3 ring-violet-600 overflow-hidden mb-5">
          <Image src={friend.picture} alt={friend.name} fill sizes="(max-width: 768px) 100vw, 100px" className="object-cover" />
        </div>
        <h3 className="text-xl text-white font-bold mb-1">{friend.name}</h3>
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
          {friend.active} days ago
        </p>

        <div className="flex flex-wrap gap-1.5 justify-center mb-5">
          {friend.tags?.map((tag, index) => {
            //যদি index ২ এর চেয়ে ছোট হয় (অর্থাৎ 0 বা 1), শুধু তাহলেই ট্যাগ দেখাবে
            if (index < 2) {
              return (
                <span key={index} className="bg-indigo-700/15 text-violet-500 text-xs font-bold uppercase px-4 py-1 rounded-full border border-white/5">
                  {tag}
                </span>
              );
            }
          })}
        </div>
        <span className={`w-full py-2.5 rounded-full text-xs font-bold uppercase tracking-widest text-center border transition-colors ${statusStyle}`}
        >
          {friend.status}
        </span>
      </div>
    </div>
  );
}

export default FriendCard;
