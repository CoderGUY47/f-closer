import Image from "next/image";
import React from "react";

const TimeLineCard = ({ type, personName, date }: { type?: string; personName?: string; date?: string }) => {

  const iconMap: any = {
    Call: "/assets/telephone.gif",
    Text: "/assets/conversation.gif",
    Video: "/assets/video.gif",
    Meetup: "/assets/handshake.gif",
  };

  return (
    <div className="flex items-center gap-6 border border-white/10 rounded-2xl px-6 py-4 bg-stone-500/10 w-full hover:bg-stone-500/20 transition-all duration-300 shadow-lg group">
      <div className="w-16 h-16 bg-white rounded-2xl shrink-0 flex items-center justify-center overflow-hidden border border-white/10 shadow-sm">
        <Image src={iconMap[type || "Call"]} alt={type || "Icon"} width={64} height={64} className="w-full h-full object-cover"/>
      </div>

      <div className="flex-1">
        <p className="text-lg text-white font-medium group-hover:text-violet-400 transition-colors">
          <span className="font-bold">{type}</span> <span className="text-white/40 font-normal">with</span> {personName}
        </p>
        <p className="text-sm text-white/50">{date}</p>
      </div>
    </div>
  );
};

export default TimeLineCard;
