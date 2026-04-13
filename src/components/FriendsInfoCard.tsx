import React from "react";
import Image from "next/image";

const FriendsInfoCard = ({ friend }: { friend: any }) => {

  return (
    <div className="bg-zinc-900 border border-white/10 rounded-2xl p-4 w-full flex flex-col justify-center items-center">
      <div className="relative aspect-square w-[70px] h-[70px] rounded-full overflow-hidden mb-4">
        <Image
          src={friend.picture}
          alt={friend.name}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-2xl text-white font-bold">{friend.name}</h3>
      <p className="text-sm text-gray-400 mt-1">{friend.active} days ago</p>
      <span className="flex gap-2 text-xs px-4 py-2 rounded-full font-semibold mt-0.5">
        {friend.tags?.map((tag: string, index: number) => (
            <span key={index} 
            className="bg-emerald-500/10 text-emerald-50 border border-emerald-500/30 text-xs px-4 py-2 rounded-full font-semibold mt-2">
                {tag}
            </span>
        ))}
      </span>
      
      
      
      <span className={`${
        friend.status === "Overdue" ? "bg-rose-600/80 text-white" : 
        friend.status === "On-Track" ? "bg-green-600/80 text-white" : 
        friend.status === "Almost due" ? "bg-yellow-600/80 text-white" : "bg-blue-600/80 text-white"
      } text-white text-xs px-4 py-2 rounded-full font-semibold mt-2`}>
        {friend.status} 
      </span>
      <div className="flex gap-2 mb-3"></div>
    </div>
  );
};

export default FriendsInfoCard;
