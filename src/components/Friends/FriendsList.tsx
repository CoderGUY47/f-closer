"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import FriendCard from "./FriendCard";
import { getAllInteractionsFromLocalDB } from "@/utils/localDB";

const FriendsList: React.FC = () => {
  const [friends, setFriends] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalInteractions, setTotalInteractions] = useState(0);

  useEffect(() => {
    //fetch friends data from JSON
    fetch("/data/friendsInfo.json")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Failed to load friends:", error);
        setLoading(false);
      });

    //get the number of real interactions logged in localStorage
    const saved = getAllInteractionsFromLocalDB();
    setTotalInteractions(saved.length);
  }, []); 

  const stats = {
    total: friends.length,
    onTrack: friends.filter(f => f.status?.toLowerCase() === 'on-track').length,
    attention: friends.filter(f => f.status?.toLowerCase() === 'overdue').length,
    interactions: totalInteractions //show the count here
  };

  if(loading){ 
    return (
      <div className="container mx-auto p-10 text-center text-white/50 font-bold">
        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="w-4 h-4 bg-white rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-white rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 md:py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {[
          { label: 'Total Friends', value: stats.total, color: 'from-blue-500 to-indigo-600' },
          { label: 'On Track', value: stats.onTrack, color: 'from-emerald-500 to-teal-600' },
          { label: 'Need Attention', value: stats.attention, color: 'from-rose-500 to-orange-600' },
          { label: 'Moments This Month', value: stats.interactions, color: 'from-purple-500 to-pink-600' }
        ].map((stat, ind) => (
          <div key={ind} className="group relative overflow-hidden bg-zinc-900/30 border border-white/5 rounded-3xl p-8 transition-all hover:border-white/10 shadow-2xl">
            <span className="text-4xl font-bold text-white">{stat.value}</span>
            <p className="text-sm uppercase font-semibold tracking-widest text-gray-400 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>

      <section>
        <div className="flex items-end justify-between mb-10 border-b border-white/5 pb-6">
          <div>
            <h2 className="text-4xl font-bold text-white tracking-tight">Your Circle</h2>
            <p className="text-base text-white/50 mt-1 font-normal">Nurture the relationships that matter most.</p>
          </div>
          <p className="text-sm font-semibold uppercase text-indigo-500 tracking-[0.2em]">{friends.length} Friends Total</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {friends.map((friend) => (
            <Link key={friend.id} href={`/friend/${friend.id}`} className="block">
              <FriendCard friend={friend} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FriendsList;



{/* <span>
১. ইমপোর্ট সেকশন (Imports)
L1: "use client"; - এই লাইনটি দিয়ে নেক্সট জেএসকে জানানো হচ্ছে যে এটি একটি ক্লায়েন্ট-সাইড কম্পোনেন্ট (যেখানে ব্রাউজারের ইন্টারঅ্যাকশন যেমন ক্লিক বা ডাটা ফেচিং হবে)।
L2: import React, { useEffect, useState } from "react"; - রিঅ্যাক্টের স্টেট (useState) এবং সাইড-ইফেক্ট (useEffect) কন্ট্রোল করার টুল।
L3: import Link from "next/link"; - অন্য পেজে নেভিগেট করার জন্য ব্যবহৃত হয়।
L4: import FriendCard from "./FriendCard"; - প্রতিটি বন্ধুর ডাটা দেখানোর জন্য ছোট কার্ড কম্পোনেন্টটি আনা হয়েছে।
L5: import { getAllInteractionsFromLocalDB } from "@/utils/localDB"; - লোকাল স্টোরেজ থেকে ডাটা পড়ারHelper ফাংশন।

React.FC এর পুরো নাম হলো React Functional Component। টাইপ-স্ক্রিপ্টে (TypeScript) রিঅ্যাক্ট কম্পোনেন্ট লেখার সময় এটি একটি বিশেষ 'টাইপ' হিসেবে ব্যবহৃত হয়।
নিচে এর সহজ ব্যাখ্যা দেওয়া হলো:
১. React.FC কি?
এটি রিঅ্যাক্টকে বলে দেয় যে, আপনি যে ফাংশনটি লিখছেন সেটি একটি রিঅ্যাক্ট কম্পোনেন্ট। এটি ব্যবহার করলে টাইপ-স্ক্রিপ্ট বুঝতে পারে যে এই ফাংশনটি অবশ্যই একটি JSX (UI) রিটার্ন করবে।
React.FC: এটি নিশ্চিত করে যে এটি একটি Functional Component।
: এটি একটি ডিক্লারেশন যা জানায় যে এই কম্পোনেন্টে isOpen, onClose, selectedAction ইত্যাদি প্রপসগুলো অবশ্যই থাকতে হবে।
৩. এটি ব্যবহার করার সুবিধা (Bengali):
ভুল ধরা: আপনি যদি ভুল করে কোনো প্রপস পাঠাতে ভুলে যান বা ভুল টাইপের ডাটা পাঠান (যেমন: নম্বরের জায়গায় টেক্সট), তবে টাইপ-স্ক্রিপ্ট সাথে সাথে লাল দাগ দিয়ে ভুল ধরিয়ে দেবে।
Autocompletion: কোড লেখার সময় আপনি যখন প্রপসের নাম টাইপ করবেন, তখন এডিটর আপনাকে অটোমেটিক সাজেস্ট করবে যে সেখানে কী কী আছে।
Children Support: আগে React.FC ব্যবহার করলে অটোমেটিক children সাপোর্ট পাওয়া যেত, তবে আধুনিক ভার্সনে এটি আরও সুনির্দিষ্ট করা হয়েছে।
 : React.FC: এটি হলো টাইপ-স্ক্রিপ্টের একটি টাইপ অ্যাসাইনমেন্ট।
React.FC এর মানে হলো Functional Component।
এই কোলন (:) দিয়ে আপনি কম্পিউটারকে বলে দিচ্ছেন যে, 
FriendsList
 কোনো সাধারণ ফাংশন নয়, এটি একটি রিঅ্যাক্ট কম্পোনেন্ট যা UI (ইন্টারফেস) রিটার্ন করবে।
৩. = () => {: এটি একটি Arrow Function। অর্থাৎ, আপনি একটি বড় ফাংশন শুরু করছেন যার ভেতরে সব কোড থাকবে।

পূর্ণাঙ্গ বাংলা অর্থ: "আমি 

FriendsList
 নামে একটি রিঅ্যাক্ট ফাংশনাল কম্পোনেন্ট তৈরি করছি যা ব্রাউজারে ফ্রেন্ড লিস্ট দেখানোর জন্য ব্যবহৃত হবে।"

কেন এটি ব্যবহার করা হয়েছে? এটি ব্যবহার করলে কোড অনেক বেশি নিরাপদ থাকে এবং ভুল হওয়ার সম্ভাবনা কমে যায়। টাইপ-ক্রিপ্ট বুঝতে পারে যে এটি একটি রিঅ্যাক্ট কম্পোনেন্ট, তাই এটি আপনার কোড লেখার সময় অটোমেটিক অনেক সাহায্য (Suggestions) দিতে পারে।

২. স্টেট ডিক্লারেশন (State Declaration)
L8: const [friends, setFriends] = useState<any[]>([]); - এটি বন্ধুদের ডাটা জমা রাখার বক্স। শুরুতে এটি একটি খালি অ্যারে থাকে।
L9: const [loading, setLoading] = useState(true); - পেজ লোড হওয়ার সময় একটি লোডিং এনিমেশন দেখানোর জন্য এটি true রাখা হয়েছে।
L10: const [totalInteractions, setTotalInteractions] = useState(0); - মোট কয়টি কথোপকথন হয়েছে তার সংখ্যা জমা রাখার জন্য।
৩. ডাটা লোড করা (useEffect)
L12-28: এটি পেজটি প্রথমবার খোলার সাথে সাথেই রান হয়।
L14-23: fetch("/data/friendsInfo.json") - এটি আপনার JSON ফাইল থেকে ডাটা এনে friends নামক স্টেটে জমা করে এবং শেষে লোডিং বন্ধ করে দেয় (setLoading(false))।
L26-27: লোকাল ডিবি থেকে কতগুলো ডাটা সেভ আছে তা গুনে totalInteractions এ সেট করে।
৪. স্ট্যাটাস ফিল্টারিং (Stats Calculation)
L30-35: এটি প্রতিটি ফ্রেন্ডের ডাটা চেক করে দেখে কারা "On-Track" আর কাদের জন্য "Attention" দরকার। এই ফলাফলগুলো হোম পেজের উপরের ৪টি স্ট্যাটাস কার্ডে ব্যবহার করা হয়।
৫. লোডিং ইন্টারফেস (Loading Screen)
L37-47: যতক্ষণ ডাটা ফেচ হচ্ছে, ততক্ষণ ইউজারকে ৩টি ডট এনিমেটেড বল দেখায় যাতে পেজটি খালি না মনে হয়।
৬. মেইন ডিজাইন (Return Block)
L50: পুরো পেজের মেইন কন্টেইনার।
L51-63: এখানে একটি লুপ চালিয়ে ৪টি ছোট ইনফরমেশন কার্ড (Total Friends, On Track ইত্যাদি) বানানো হয়েছে।
L68-71: "Your Circle" শিরোনাম এবং মোট কতজন বন্ধু আছে তার সংখ্যা দেখানো হয়েছে।
৭. ফ্রেন্ড কার্ড লুপ (The Dynamic Grid)
L74: একটি গ্রিড লেআউট তৈরি করা হয়েছে যা বড় স্ক্রিনে ৪ কলামে থাকে।
L75-80: friends.map() মেথড ব্যবহার করে প্রতিটি ফ্রেন্ডের জন্য একটি ডাইনামিক লিঙ্ক তৈরি করা হয়েছে।
L76: <Link href={\/friend/${friend.id}`}>` - এই লাইনটি ইউজারকে সঠিক ফ্রেন্ডের আইডি অনুযায়ী তার ডিটেইলস পেজে নিয়ে যায়।
</span> */}
