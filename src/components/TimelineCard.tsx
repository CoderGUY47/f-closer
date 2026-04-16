"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const TimeLineCard = ({
  type,
  personName,
  date,
}: {
  type?: string;
  personName?: string;
  date?: string;
}) => {
  const [currentIcon, setCurrentIcon] = useState("/assets/telephone.gif");

  useEffect(() => {
    const icon =
      type === "Text"
        ? "/assets/conversation.gif"
        : type === "Video"
          ? "/assets/video.gif"
          : type === "Meetup"
            ? "/assets/handshake.gif"
            : "/assets/telephone.gif"; //by default to call if none match

    setCurrentIcon(icon);
  }, [type]);

  return (
    <div className="group relative flex flex-col md:flex-row items-start md:items-center gap-5 border border-white/5 rounded-3xl p-5 bg-stone-900/30 backdrop-blur-xl w-full hover:bg-stone-900/60 hover:border-violet-500/30 transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden">
      <div className="relative z-10 w-16 h-16 bg-white rounded-2xl shrink-0 flex items-center justify-center p-2 border border-white/10 overflow-hidden">
        <Image
          src={currentIcon}
          alt={type || "Icon"}
          width={64}
          height={64}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 flex-1 flex flex-col md:flex-row md:items-center justify-between w-full gap-4 md:gap-0">
        <div>
          <p className="text-xl text-white font-medium flex items-center flex-wrap gap-2 mb-2">
            <span className="font-semibold bg-clip-text text-transparent bg-linear-to-r from-white to-white/70 group-hover:to-violet-400 transition-all">
              {type}
            </span>
            <span className="text-white/30 text-base font-normal px-1">
              with
            </span>
            <span className="font-semibold text-violet-600 transition-colors">
              {personName}
            </span>
          </p>
          <div className="inline-flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
            <div className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
            <p className="text-xs text-white/60 font-semibold tracking-widest uppercase">
              {date}
            </p>
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














{/* <p>
  ১. ইমপোর্ট এবং সেটআপ (Imports & Setup)
L1: "use client"; - এই কম্পোনেন্টে আমরা useState এবং useEffect ব্যবহার করছি, তাই এটি একটি ক্লায়েন্ট কম্পোনেন্ট।
L2: import Image from "next/image"; - অপ্টিমাইজড ছবি দেখানোর জন্য।
L4: import { ArrowRight } from "lucide-react"; - কার্ডের ডান পাশে একটি ছোট অ্যারো (Arrow) আইকন দেখানোর জন্য এই লাইব্রেরিটি ব্যবহার করা হয়েছে।
২. কম্পোনেন্ট প্যারামিটার (Parameters)
L6: const TimeLineCard = ({ type, personName, date }: { ... }) - এই কার্ডটি তৈরি করার জন্য ডাইনামিক ডাটা হিসেবে ৩টি জিনিস লাগে:
type: কাজের ধরন (যেমন: Call, Text)।
personName: কার সাথে কথা হয়েছে তার নাম।
date: কত তারিখে হয়েছে।
৩. আইকন পরিবর্তন লজিক (Icon Selection)
L7: const [currentIcon, setCurrentIcon] = useState("/assets/telephone.gif"); - এটি একটি স্টেট যা কার্ডের বাম পাশের আইকনটি ধরে রাখে। শুরুতে এটি ফোনের আইকন সেট করা থাকে।
L9-16: useEffect - এই অংশটি খুবই স্মার্ট। এটি চেক করে দেখে কাজের ধরন (type) কী।
যদি কাজের ধরন হয় "Text", তবে এটি কথোপকথন বা মেসেজের আইকন (conversation.gif) দেখায়।
যদি হয় "Video" বা "Meetup", তবে সেই অনুযায়ী ভিডিও বা হ্যান্ডশেক আইকন সেট করে।
L16: [type] - রিঅ্যাক্টকে বলা হয়েছে, শুধুমাত্র তখনই আইকন বদলাবে যখন কাজের ধরন পরিবর্তন হবে।
৪. লেআউট ডিজাইন (Main Layout)
L19: মেইন কন্টেইনার। এখানে bg-stone-900/30 এবং backdrop-blur-xl ব্যবহার করে একটি আধুনিক "গ্লাস-মরফিজম" লুক দেওয়া হয়েছে। মাউস নিলে এটি হালকা বেগুনি বর্ডার (hover:border-violet-500/30) দেয়।
L20-22: বামদিকের আইকন অংশ। এখানে একটি সাদা বক্সের ভেতর ফ্রেন্ডলি এনিমেটেড GIF আইকনটি বড় করে দেখানো হয়েছে।
৫. টেক্সট এবং টাইটেল (Title & Text)
L25-31: এখানে আপনার কাজের ধরন (যেমন: Call) এবং ফ্রেন্ডের নাম বড় বড় করে দেখানো হয়েছে।
L26: bg-linear-to-r - টাইটেলের ওপর একটি সুন্দর গ্রেডিয়েন্ট ইফেক্ট দেওয়া হয়েছে।
L30: ফ্রেন্ডের নামটি বেগুনি রঙে হাইলাইট করা হয়েছে যাতে সহজেই নজরে পড়ে।
৬. টাইম স্ট্যাম্প (Time Stamp)
L32-35: তারিখের জন্য একটি ছোট ট্যাবলেট বা পিল-আকারের ডিজাইন।
L33: animate-pulse - এখানে একটি ছোট বেগুনি ডট আছে যা মানুষের হার্টবিটের মতো পালস করে, যা কার্ডটিকে "Alive" বা জীবন্ত লুক দেয়।
৭. ফিনিশিং টাচ (Final Details)
L37-39: ডান পাশের অ্যারো আইকন। এটি শুধুমাত্র বড় স্ক্রিনে দেখা যায় এবং মাউস কার্ডের ওপর নিলে এটি অ্যাক্টিভ হয়। এটি ইঙ্গিত দেয় যে এটি একটি লিস্ট আইটেম।
সারসংক্ষেপ: এই ফাইলটি অত্যন্ত যত্ন সহকারে ডিজাইন করা হয়েছে। এর কাজ হলো শুধুমাত্র ডাটা দেখানো নয়, বরং ডাটাকে একটি এনিমেটেড এবং ইনটারেক্টিভ কার্ডে রূপান্তর করা, যা ইউজারের টাইমলাইন দেখাকে আনন্দদায়ক করে তোলে।
</p> */}