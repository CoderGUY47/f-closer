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
          <Image src={friend.picture} alt={friend.name} fill
            sizes="(max-width: 768px) 100vw, 100px"
            className="object-cover"
          />
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
                <span
                  key={index}
                  className="bg-indigo-700/15 text-violet-500 text-xs font-bold uppercase px-4 py-1 rounded-full border border-white/5"
                >
                  {tag}
                </span>
              );
            }
          })}
        </div>
        <span
          className={`w-full py-2.5 rounded-full text-xs font-bold uppercase tracking-widest text-center border transition-colors ${statusStyle}`}
        >
          {friend.status}
        </span>
      </div>
    </div>
  );
}

export default FriendCard;









{/* <span>
  ১. সেটআপ সেকশন (Setup)
L1: "use client"; - এটি নির্দেশ করে যে এই কম্পোনেন্টটি ব্রাউজারে চলবে, কারণ এখানে আমরা ইন্টারঅ্যাকশন এবং হুক (useState, useEffect) ব্যবহার করছি।
L2: import React, { useState, useEffect } from "react"; - রিঅ্যাক্টের স্টেট এবং সাইড-ইফেক্ট ম্যানেজমেন্ট সিস্টেম।
L3: import Image from "next/image"; - নেক্সট জেএস এর অপ্টিমাইজড ইমেজ কম্পোনেন্ট, যা ছবি দ্রুত লোড করে।
২. টাইপ-স্ক্রিপ্ট ইন্টারফেস (Interface)
L8-16: interface FriendCardProps - এটি একটি নিয়ম বা চেকলিস্ট। এটি নিশ্চিত করে যে প্রতিটি ফ্রেন্ড কার্ডে অবশ্যই নাম (name), ছবি (picture), দিন সংখ্যা (active), এবং স্ট্যাটাস (status) থাকতে হবে। এটি ভুল ডাটা আসা রোধ করে।
৩. স্টাইল লজিক (Style Logic)
L18: function FriendCard({ friend }: FriendCardProps) - এটি মেইন ফাংশন যা বন্ধুদের ডাটা প্রপস হিসেবে গ্রহণ করে।
L20-22: const [statusStyle, setStatusStyle] = useState(...) - এটি একটি স্টেট যা কার্ডের নিচের স্ট্যাটাস বারের রঙ (কালার) ধরে রাখে। শুরুতে এটি একটি সাধারণ ধূসর (slate) রঙে থাকে।
৪. রঙ পরিবর্তন লজিক (useEffect)
L25-38: useEffect - এই অংশটি নজর রাখে ফ্রেন্ডের স্ট্যাটাস কি।
যদি স্ট্যাটাস হয় "overdue", তবে এটি রঙ লাল (rose) করে দেয়।
যদি হয় "on-track", তবে রঙ সবুজ (emerald) করে।
যদি হয় "almost due", তবে এটি হলুদ/কমলা (amber) রঙে সেট করে।
L38: [friend.status] - এটি রিঅ্যাক্টকে বলে, শুধুমাত্র তখনই রঙ বদলাবে যখন ফ্রেন্ডের স্ট্যাটাস ডাটা পরিবর্তন হবে।
৫. ডিজাইন সেকশন (Return/UI)
L42: মেইন কার্ড কন্টেইনার। এখানে hover:bg-zinc-900/60 ব্যবহার করা হয়েছে যাতে মাউস নিলে কার্ডের রঙ একটু গাঢ় হয়।
L44-52: এটি ছবির অংশ।
L45: ছবির বাইরে একটি বেগুনি রঙ এর রিং (ring-violet-600) ব্যবহার করে স্টাইল করা হয়েছে।
L46: নেক্সট ইমেজের ডাইনামিক সোর্স ব্যবহার করে ফ্রেন্ডের ছবি দেখানো হচ্ছে।
L53-56: এখানে ফ্রেন্ডের নাম এবং তিনি কতদিন আগে এক্টিভ ছিলেন তা বড় করে দেখানো হচ্ছে।
৬. ট্যাগ সেকশন (Tags)
L54-72: এখানে ফ্রেন্ডের সাথে সম্পর্কিত ট্যাগগুলো (যেমন: School, Work) লুপ করে দেখানো হয়।
L56: if (index < 2) - এটি নিশ্চিত করে যে কার্ডে যেন ২টির বেশি ট্যাগ না দেখায়, যাতে কার্ডটি দেখতে হিজিবিজি না লাগে।
৭. স্ট্যাটাস বার (Status Bar)
L74-77: কার্ডের একদম নিচের অংশ। এটি ডাইনামিকভাবে statusStyle থেকে ক্লাসগুলো নিয়ে স্ট্যাটাসটি প্রদর্শন করে।
সারসংক্ষেপ: এই ফাইলটির কাজ হলো একজন বন্ধুর সব তথ্য (ছবি, নাম, স্ট্যাটাস) গ্রহণ করা এবং তার স্ট্যাটাসের উপর ভিত্তি করে সঠিক রঙ ব্যবহার করে একটি সুন্দর কার্ড সাজিয়ে তোলা।
</span> */}