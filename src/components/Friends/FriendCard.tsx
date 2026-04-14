import React, { useState, useEffect } from "react";
import Image from "next/image";

interface FriendCardProps {
  friend: {
    name: string;
    picture: string;
    active: number;
    status: string;
    tags: string[];
  };
}

const FriendCard: React.FC<FriendCardProps> = ({ friend }) => {
  const [statusStyle, setStatusStyle] = useState("");

  useEffect(() => {
    const s = friend.status?.toLowerCase();
    let style = "bg-slate-500/5 text-slate-600 border-slate-600/20";

    if (s === "overdue") {
      style = "bg-rose-500/5 text-rose-600 border-rose-600/20";
    } else if (s === "on-track") {
      style = "bg-emerald-500/5 text-emerald-600 border-emerald-600/20";
    } else if (s === "almost due") {
      style = "bg-amber-500/5 text-amber-600 border-amber-600/20";
    }

    setStatusStyle(style);
  }, [friend.status]);

  return (
    <div className="group relative bg-zinc-900/30 hover:bg-zinc-900/60 border border-white/5 rounded-3xl p-8 transition-all hover:border-white/10 shadow-2xl overflow-hidden">
      <div className="relative flex flex-col items-center">
        <div className="relative w-26 h-26 rounded-full ring-3 ring-violet-600 overflow-hidden mb-5">
          <Image
            src={friend.picture}
            alt={friend.name}
            fill
            className="object-cover"
          />
        </div>

        <h3 className="text-xl text-white font-bold mb-1">{friend.name}</h3>
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">
          {friend.active} days ago
        </p>

        <div className="flex flex-wrap gap-1.5 justify-center mb-5">
          {friend.tags?.slice(0, 2).map((tag, index) => (
            <span
              key={index}
              className="bg-indigo-700/15 text-violet-500 text-xs font-bold uppercase px-4 py-1 rounded-full border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>

        <span
          className={`w-full py-2.5 rounded-full text-xs font-bold uppercase tracking-widest text-center border transition-colors ${statusStyle}`}
        >
          {friend.status}
        </span>
      </div>
    </div>
  );
};

export default FriendCard;
