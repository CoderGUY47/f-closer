"use client";
import React from "react";
import Image from "next/image";

// interaction এর ধরন অনুযায়ী আইকন পাথ (এটি আমরা অন্য ফাইল থেকেও ব্যবহার করতে পারব)
// ১. কোন কাজের জন্য কোন আইকন ব্যবহার হবে তার একটি তালিকা (Icon List)
export const iconMap: any = {
  Call: "/assets/telephone.gif",
  Text: "/assets/conversation.gif",
  Video: "/assets/video.gif",
  Meetup: "/assets/handshake.gif",
};

// ২. এই কার্ডটি তৈরির জন্য আমরা কী কী তথ্য নিচ্ছি (Data Check)
interface HistoryItemProps {
  type: string; // কাজের ধরন (যেমন: Call)
  date: string; // তারিখ (Date)
}

// ৩. মেইন কার্ড কম্পোনেন্ট
const HistoryItem = ({ type, date }: HistoryItemProps) => {
  // লিস্ট থেকে পছন্দমতো আইকনটি খুঁজে নেওয়া
  const iconPath = iconMap[type];

  return (
    <div className="py-4 px-6 flex justify-between items-center border-0 rounded-full hover:opacity-70 duration-500 transition-colors group">
      <div className="flex gap-5 items-center">
        <div className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center shadow-sm group-hover:border-indigo-100 transition-colors overflow-hidden">
          {iconPath && (
            <Image
              src={iconPath}
              alt={type}
              width={64}
              height={64}
              className="w-full h-full object-cover rounded-full"
            />
          )}
        </div>
        <div>
          <h4 className="font-bold text-white text-base">{type}</h4>
          <p className="text-xs text-white/50 mt-0.5">Logged on {date}</p>
        </div>
      </div>
    </div>
  );
};

export default HistoryItem;
