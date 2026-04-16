"use client";
import React, { useState, useEffect } from 'react';
import TimeLineCard from '@/components/TimelineCard';
import { getAllInteractionsFromLocalDB } from '@/utils/localDB';

const TimelinePage = () => {
  //interactions holds ALL the interactions the user has logged across all friends
  const [interactions, setInteractions] = useState<any[]>([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    //read all interactions the user has saved from localStorage
    const savedInteractions = getAllInteractionsFromLocalDB();
    setInteractions(savedInteractions);
  }, []); //[] means this code will run only once when the page loads

  //filter the list based on what is selected in the dropdown
  let filteredInteractions = [];

  if (filter === "All") {
    //show everything
    filteredInteractions = interactions;
  } 
  else {
    //show only the type that was selected (e.g. only "Call" interactions)
    filteredInteractions = interactions.filter((item) => item.type === filter);
  }

  return (
    <div className='container mx-auto mt-4 md:mt-7 p-6 w-full'>
        <div className='flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-tl from-purple-700 to-indigo-700'>
                    Timeline
                </h1>
                <p className='text-lg text-white/50'>History of your meaningful connections</p>
            </div>
            
            <select value={filter} onChange={(e) => setFilter(e.target.value)}       
              className="select select-bordered bg-stone-800 border-white/10 text-white w-full max-w-xs">
              <option value="All">All Interactions</option>
              <option value="Call">Calls</option>
              <option value="Text">Texts</option>
              <option value="Video">Videos</option>
              <option value="Meetup">Meetups</option>
            </select>
        </div>

        <div className="flex flex-col gap-4 max-w-4xl mx-auto">
          {filteredInteractions.length > 0 ? (
            // interaction কার্ডগুলো লুপ করে দেখানো হচ্ছে
            filteredInteractions.map((interaction, index) => (
              <TimeLineCard
                key={index}
                type={interaction.type}
                personName={interaction.friendName}
                date={interaction.date}
              />
            ))
          ) : (
            //if no interactions yet, show an empty state message
            <div className="text-center py-20 bg-stone-500/5 rounded-3xl border border-dashed border-white/10">
              <p className="text-white/30 italic text-lg">No interactions logged yet.</p>
              <p className="text-white/20 text-sm mt-2">
                Go to a friend&apos;s profile and use Quick Check-In to log one!
              </p>
            </div>
          )}
        </div>
    </div>
  );
};

export default TimelinePage;










{/* <p>
  ১. ইমপোর্ট সেকশন (Imports)
L1: "use client"; - এই পেজটি ড্রপ-ডাউন এবং ফিল্টারিং লজিক হ্যান্ডেল করে, তাই এটি একটি ক্লায়েন্ট কম্পোনেন্ট।
L3: import TimeLineCard from '@/components/TimelineCard'; - প্রতিটি টাইমলাইন ইভেন্ট দেখানোর জন্য একটি নকশা করা কার্ড কম্পোনেন্ট।
L4: import { getAllInteractionsFromLocalDB } from '@/utils/localDB'; - আপনার সব হিস্ট্রি একসাথে পড়ার জন্য ডাটাবেস Helper।
২. স্টেট এবং ডাটা লোড (State & Initialization)
L8: const [interactions, setInteractions] = useState<any[]>([]); - এটি একটি মেমোরি বক্স যেখানে আপনার করা সব কল, টেক্সট বা মিটআপের ডাটা একসাথে রাখা হয়।
L9: const [filter, setFilter] = useState("All"); - এটি মনে রাখে ইউজার বর্তমানে ড্রপ-ডাউন থেকে কোন ক্যাটাগরি (All, Call, Text ইত্যাদি) সিলেক্ট করে রেখেছেন। শুরুতে এটি "All" থাকে।
L11-15: useEffect - পেজটি ওপেন করার সাথে সাথে এটি একবার রান করে এবং getAllInteractionsFromLocalDB ফাংশনের মাধ্যমে সব ডাটা বক্সের ভেতরে (setInteractions) নিয়ে আসে।
৩. ফিল্টারিং লজিক (Filtering Logic)
L18: let filteredInteractions = []; - এটি একটি অস্থায়ী ভেরিয়েবল যা ফিল্টার করা রেজাল্ট ধরে রাখে।
L20-27: এই if-else ব্লকটি চেক করে:
যদি ফিল্টার "All" হয়, তবে সব ডাটা দেখাবে।
যদি "Call" বা "Text" সিলেক্ট করা হয়, তবে শুধুমাত্র সেই কাজগুলোই (item.type === filter) লিস্টে দেখাবে। এটি আপনার টাইমলাইনকে ক্যাটাগরি অনুযায়ী সাজাতে সাহায্য করে।
৪. ইউজার ইন্টারফেস - টাইটেল এবং ফিল্টার (Header Section)
L30-37: পেজের উপরে সুন্দর করে "Timeline" টাইটেল এবং একটি ছোট স্লোগান দেখানো হয়েছে।
L39-46: <select> - এটি একটি ড্রপ-ডাউন মেনু। যখন আপনি এখানে অপশন পরিবর্তন করেন, তখন onChange ইভেন্টটি কল হয় এবং setFilter মেথড ব্যবহার করে আপনার সিলেকশনটি আপডেট করে দেয়।
৫. টাইমলাইন লিস্ট রেন্ডারিং (Timeline Feed)
L49-59: filteredInteractions.length > 0 - এটি চেক করে আপনার ইতিহাসে দেখানোর মতো কিছু আছে কিনা।
L52-59: filteredInteractions.map(...) - এটি একটি লুপ যা প্রতিটি সেভ করা কাজের জন্য একটি করে 

TimeLineCard
 তৈরি করে। এখানে কার্ডটির ভেতরে ফ্রেন্ডের নাম, কাজের ধরন এবং তারিখ পাঠিয়ে দেওয়া হয়।
৬. এম্পটি স্টেট (Empty State Message)
L62-67: যদি আপনি এখন পর্যন্ত কোনো কল বা টেক্সট লগ না করে থাকেন, তবে এটি সুন্দর করে একটি মেসেজ দেখায় যে—"এখনো কোনো কাজ পাওয়া যায়নি, বন্ধু প্রোফাইলে গিয়ে কুইক চেক-ইন করুন"।
সংক্ষেপে: এই পেজটি আপনার পুরো মেলামেশার ইতিহাসকে একটি ফিড বা টাইমলাইন আকারে দেখায়। এখানে আধুনিক ফিল্টার অপশন আছে যাতে আপনি সহজেই দেখতে পারেন কার সাথে শুধু ভিডিও কল করেছেন বা কার সাথে শুধু মিটআপ করেছেন। এটি ইউজারের সব মেমোরিকে এক জায়গায় রাখার জন্য একটি ডায়েরির মতো কাজ করে।
</p> */}