"use client";
import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip,} from "recharts";
import { getAllInteractionsFromLocalDB } from "@/utils/localDB";
import { BiError } from "react-icons/bi";

const StatsPage = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    //get all interactions that user has actually logged
    const interactions = getAllInteractionsFromLocalDB();

    //initialize counts with zero for each type
    const counts: Record<string, number> = {
      Call: 0,
      Text: 0,
      Video: 0,
      Meetup: 0,
    };

    //loop through each logged interaction and increment the counter
    interactions.forEach((i: any) => {
      if (counts[i.type] !== undefined) {
        counts[i.type]++;
      }
    });

    //transform the counts into the format Recharts needs
    const chartData = Object.keys(counts).map((key) => ({
      name: key,
      value: counts[key],
    }));

    setData(chartData);
  }, []);

  const COLORS = ["#6366f1", "#10b981", "#f59e0b", "#8b5cf6"];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-stone-900 border border-white/10 p-4 rounded-xl shadow-2xl">
          <p className="text-white font-bold">{payload[0].name}</p>
          <p className="text-violet-400 font-semibold">
            {payload[0].value} Interactions
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="container mx-auto mt-4 md:mt-20 p-6 w-full">
      <div className="flex flex-col gap-2 mb-10">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-tl from-purple-700 to-indigo-700">
          Friendship Analytics
        </h1>
        <p className="text-lg text-white/50 font-medium">
          Visualization of your connection habits
        </p>
      </div>

      <div className="bg-stone-500/10 border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl min-h-[500px] flex flex-col items-center justify-center">
        {data.some(item => item.value > 0) ? (
          <>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={100}
                    outerRadius={140}
                    paddingAngle={6}
                    cornerRadius={10}
                    dataKey="value"
                    stroke="none"
                    isAnimationActive={true}
                    animationBegin={200}
                    animationDuration={1200}
                    animationEasing="ease-out"
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} 
                      className="hover:opacity-80 transition-opacity cursor-pointer focus:outline-none"/>
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                  <Legend
                    verticalAlign="bottom"
                    height={36}
                    formatter={(value) => (
                      <span className="text-white/70 font-semibold px-2">
                        {value}
                      </span>
                    )}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto w-full">
              {data.map((statInfo, index) => (
                <div key={statInfo.name} className="text-center p-4 bg-white/5 rounded-2xl border border-white/5">
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-1">{statInfo.name}</p>
                  <p className="text-2xl font-bold text-white">{statInfo.value}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-20 px-6">
            <div className="w-24 h-24 bg-violet-600/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-violet-500/30">
               <BiError className="w-12 h-12 text-violet-600" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-3">No Analytics Available</h2>
            <p className="text-white/40 max-w-xl mx-auto text-lg">
              There is no interaction going on now. Start logging your calls and texts to see your friendship insights here!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsPage;




{/* <p>
  ১. ইমপোর্ট সেকশন (Imports)
L1: "use client"; - এটি নির্দেশ করে যে পেজটি ইউজারের ব্রাউজারে চলবে, কারণ এখানে এনিমেশন এবং ডাটা ভিজুয়ালাইজেশন (Recharts) আছে।
L3: import { PieChart, Pie, ... } from "recharts"; - এটি একটি শক্তিশালী লাইব্রেরি যা সুন্দর পাই চার্ট (Pie Chart) এবং গ্রাফ তৈরি করতে ব্যবহৃত হয়।
L4: import { getAllInteractionsFromLocalDB } from "@/utils/localDB"; - লোকাল স্টোরেজ থেকে আপনার সব অ্যাক্টিভিটি বা ডাটা পড়ার Helper ফাংশন।
২. ডাটা প্রসেসিং (Data Processing Logic)
L10-36: useEffect - পেজটি ওপেন করার সাথে সাথে আপনার পুরো ইতিহাস (History) এনালাইসিস করে।
L12: interactions = getAllInteractionsFromLocalDB() - লোকাল স্টোরেজ থেকে সব জমানো ডাটা রিড করে।
L15-20: counts অবজেক্টটি শুরুতে প্রতিটি কাজের (Call, Text, etc.) মান 0 হিসেবে ধরে নেয়।
L23-27: interactions.forEach - এটি একটি লুপ যা আপনার সব ইতিহাসের মধ্য দিয়ে যায় এবং চেক করে কোনটি কল আর কোনটি টেক্সট, তারপর তার সংখ্যা ১ করে বাড়িয়ে দেয়।
L30-35: এটি ক্যালকুলেট করা ডাটাগুলোকে এমন একটি ফরম্যাটে সাজায় যা Recharts লাইব্রেরি সহজেই বুঝতে পারে এবং গ্রাফে দেখাতে পারে।
৩. গ্রাফের ডিজাইন (Styling & Tooltip)
L38: COLORS - গ্রাফের প্রতিটি স্লাইস বা অংশের জন্য আলাদা আলাদা রঙ সেট করা হয়েছে।
L40-52: 

CustomTooltip
 - এটি একটি ছোট পপ-আপ যা গ্রাফের ওপর মাউস নিলে দেখায় যে ঠিক কতটি ইন্টারঅ্যাকশন হয়েছে।
৪. ইউজার ইন্টারফেস (User Interface)
L55-63: পেজের টাইটেল এবং সাবটাইটেল সেকশন।
L66: data.some(item => item.value > 0) - এটি চেক করে আপনার কোনো হিস্ট্রি আছে কিনা। যদি ডাটা থাকে তবে গ্রাফ দেখাবে, আর না থাকলে একটি "No Analytics" মেসেজ দেখাবে।
L69-103: ResponsiveContainer এবং PieChart - এই অংশটি আসল পাই চার্ট রেন্ডার করে। এখানে innerRadius এবং outerRadius ব্যবহার করে চার্টটিকে একটি "Doughnut" এর মতো সুন্দর আকার দেওয়া হয়েছে।
L81-84: এটি চার্ট লোড হওয়ার সময় একটি সুন্দর এনিমেশন (ease-out) নিশ্চিত করে।
৫. কার্ডস সামারি (Bottom Summary)
L105-112: চার্টের নিচে ৪টি ছোট কার্ডে আলাদা আলাদা করে মোট কয়টি কল বা টেক্সট হয়েছে তার সংখ্যা সরাসরি লিখে দেখানো হয়।
৬. এম্পটি স্টেট (Empty State Message)
L115-124: যদি আপনার কোনো হিস্ট্রি বা ডাটা সেভ না থাকে, তবে একটি "Error" আইকনসহ মেসেজ দেখায় যে, "আগে কিছু কল বা টেক্সট লগ করুন যাতে আমরা গ্রাফ দেখাতে পারি"।
সংক্ষেপে: এই পেজটি আপনার সব অ্যাক্টিভিটি রিড করে, সেগুলোকে গুনে ফেলে এবং রিচার্টস (Recharts) লাইব্রেরি ব্যবহার করে একটি প্রফেশনাল গ্রাফ আকারে আপনার "Friendship Analytics" প্রদর্শন করে।
</p> */}