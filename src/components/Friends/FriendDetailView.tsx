"use client";
import React, { useState, useEffect } from "react";
import { Bell, Archive, Trash2 } from "lucide-react";
import Image from "next/image";
import { getAllInteractionsFromLocalDB } from "@/utils/localDB";
import HistoryItem, { iconMap } from "./HistoryItem";
import InteractionModal from "./InteractionModal";

const FriendDetailView = ({ friend }: { friend: any }) => {
  const { name, picture, status, tags = [], bio, active, goal } = friend || {};
  const [realDateTime, setRealDateTime] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedAction, setSelectedAction] = useState<string>("");
  const [myHistory, setMyHistory] = useState<any[]>([]);
  const [showAll, setShowAll] = useState<boolean>(false);

  useEffect(() => {
    //get current date and format
    const today = new Date();
    const formattedDate = `${today.getDate()} ${today.toLocaleString("en-US", { month: "long" })}, ${today.getFullYear()}`;
    setRealDateTime(formattedDate);

    //load this friend's interactions from localStorage
    //getAllInteractions() returns all of the interactions,
    //then filter out that frnd interaction

    const allSaved = getAllInteractionsFromLocalDB();
    const thisFreindsHistory = allSaved.filter(
      (interactionRecord: any) => interactionRecord.friendId === friend?.id,
    );
    //use friend?.id instead of friend.id to avoid null error and
    //use (:any) for get rid of typescript's syntax error
    setMyHistory(thisFreindsHistory);
  }, [friend?.id]);

  const statusColors: any = {
    overdue: "bg-red-500",
    "on-track": "bg-emerald-500",
    "almost due": "bg-orange-500",
  };

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <aside className="flex flex-col gap-4">
          <div className="bg-stone-500/10 border-0 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm">
            <div className="relative mb-6">
              <Image src={picture} alt={name}
                width={128}
                height={128}
                className="rounded-full object-cover ring-4 ring-gray-50 shadow-md"
              />
              <div className={`absolute bottom-2 right-2 w-5 h-5 rounded-full border-4 border-white ${statusColors[status] || "bg-gray-300"}`}/>
            </div>

            <h2 className="text-2xl font-bold text-white">{name}</h2>
            <div className="mt-4 flex flex-col items-center gap-2">
              <span className={`px-4 py-1 text-white text-[11px] font-bold rounded-full uppercase tracking-widest ${statusColors[status] || "bg-gray-300"}`}
              >
                {status}
              </span>
              <div className="flex flex-wrap gap-2 justify-center mt-2">
                {tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-indigo-50 text-indigo-700 text-[10px] font-bold rounded-full uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-8 text-violet-500 text-sm italic">"{bio}"</p>
          </div>

          <div className="flex flex-col gap-3 mt-1.5 space-y-2">
            <button className="flex items-center justify-center gap-2 py-4 border-0 border-white/10 rounded-2xl text-base font-semibold text-white bg-stone-500/10 hover:opacity-60 transition-colors">
              <Bell className="w-6 h-6 text-indigo-500" /> Snooze 2 Weeks
            </button>
            <button className="flex items-center justify-center gap-2 py-4 border-0 border-white/10 rounded-2xl text-base font-semibold text-white bg-stone-500/10 hover:opacity-60 transition-colors">
              <Archive className="w-6 h-6 text-amber-500" /> Archive Connection
            </button>
            <button className="flex items-center justify-center gap-2 py-4 border-0 rounded-2xl text-base font-semibold text-red-500 bg-red-600/20 hover:opacity-60 transition-colors">
              <Trash2 className="w-4 h-4" /> Delete Friend
            </button>
          </div>
        </aside>

        <main className="md:col-span-2 flex flex-col gap-8">
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-stone-500/10 border-0 rounded-2xl p-6 text-center border-b-7 border-b-violet-600 shadow-sm">
              <h3 className="text-xl font-bold text-white">{active}</h3>
              <p className="text-xs font-medium text-white/50 uppercase tracking-widest mt-3">
                Days Since Contact
              </p>
            </div>
            <div className="bg-stone-500/10 border-0 rounded-2xl p-6 text-center border-b-7 border-b-violet-600 shadow-sm">
              <h3 className="text-xl font-bold text-white">{goal}</h3>
              <p className="text-xs font-medium text-white/50 uppercase tracking-widest mt-3">
                Connection Goal
              </p>
            </div>
            <div className="bg-stone-500/10 border-0 rounded-2xl p-6 text-center border-b-7 border-b-violet-600 shadow-sm">
              <h3 className="text-xl font-bold text-white">{realDateTime}</h3>
              <p className="text-xs font-medium text-white/50 uppercase tracking-widest mt-3">
                Next Due Date
              </p>
            </div>
          </section>

          <section className="bg-stone-500/10 border-0 rounded-2xl p-6 flex justify-between items-center shadow-sm">
            <div>
              <h3 className="text-lg font-semibold text-white">
                Relationship Cadence
              </h3>
              <p className="text-white/50 mt-1 text-sm italic">
                You aim to connect every{" "}
                <span className="font-bold text-indigo-600 not-italic">
                  {goal} days
                </span>
              </p>
            </div>
            <button className="px-6 py-2 bg-violet-600 rounded-full text-xs font-semibold text-white hover:bg-violet-700 transition-colors">
              Edit Goal
            </button>
          </section>

          <section className="bg-stone-500/10 border-0 rounded-3xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <div className="w-2 h-6 bg-violet-600 rounded-full" />
              Quick Check-In
            </h3>
            <div className="grid grid-cols-3 gap-6 border-blue-300 rounded-lg p-0 w-full">
              {[
                { type: "Call", label: "Call" },
                { type: "Text", label: "Text" },
                { type: "Video", label: "Video" },
              ].map((item) => (
                <button
                  key={item.type}
                  onClick={() => {
                    setSelectedAction(item.type);
                    setShowModal(true);
                  }}
                  className="flex flex-col items-center justify-center gap-4 p-4 border-0 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors"
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-stone-500/10 rounded-full shadow-sm border border-gray-50 overflow-hidden">
                    {iconMap[item.type] && (
                      <Image
                        src={iconMap[item.type]}
                        alt={item.type}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover rounded-full"
                      />
                    )}
                  </div>
                  <span className="text-sm font-semibold text-white/50">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </section>

          <section className="bg-stone-500/10 border-0 rounded-3xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <div className="w-2 h-6 bg-violet-600 rounded-full" />
                Recent History
              </h3>
              <button className="flex items-center gap-2 px-4 py-2 bg-violet-600 rounded-full text-xs font-bold text-white hover:bg-violet-700 transition-colors">
                Full History
              </button>
            </div>

            <div className="space-y-4">
              {myHistory.length > 0 ? (
                <>
                  {(showAll ? myHistory : myHistory.slice(0, 3)).map(
                    (interaction: any, i: number) => (
                      <HistoryItem
                        key={i}
                        type={interaction.type}
                        date={interaction.date}
                      />
                    ),
                  )}

                  {myHistory.length > 3 && (
                    <button
                      onClick={() => setShowAll(!showAll)}
                      className="w-full py-3 mt-2 rounded-2xl text-xs font-bold uppercase tracking-widest text-violet-400 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-violet-500/30 transition-all"
                    >
                      {showAll
                        ? "Show Less ↑"
                        : `Show ${myHistory.length - 3} More ↓`}
                    </button>
                  )}
                </>
              ) : (
                <div className="text-center py-10">
                  <p className="text-white/30 italic text-sm">
                    No interactions logged yet.
                  </p>
                  <p className="text-white/20 text-xs mt-1">
                    Use the Quick Check-In buttons above to log one!
                  </p>
                </div>
              )}
            </div>
          </section>
        </main>
      </div>

      <InteractionModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        selectedAction={selectedAction}
        friend={friend}
        onConfirm={(newInteraction: any) => {
          setMyHistory((prev) => [newInteraction, ...prev]);
        }}
      />
    </div>
  );
};

export default FriendDetailView;








{/* <p>
  ১. ইমপোর্ট সেকশন (Imports)
L1: "use client"; - এই পেজটি ইউজারের ক্লিকের ওপর ভিত্তি করে মোডাল ওপেন করে এবং ডাটা আপডেট করে, তাই এটি একটি ক্লায়েন্ট কম্পোনেন্ট।
L3: import { Bell, Archive, Trash2 } from "lucide-react"; - আইকন লাইব্রেরি থেকে প্রোফাইলের বিভিন্ন বাটন বা আইকন লোড করা হয়েছে।
L5: import { getAllInteractionsFromLocalDB } from "@/utils/localDB"; - লোকাল স্টোরেজ থেকে ডাটা পড়ার Helper ফাংশন।
L6-7: 

HistoryItem
 এবং 

InteractionModal
 - পেজের নিচের দিকের ইতিহাস দেখানো এবং পপ-আপ মোডালটি এখানে ইমপোর্ট করা হয়েছে।
২. স্টেট এবং প্যারামিটার (Parameters & State)
L9: const FriendDetailView = ({ friend }: { friend: any }) - এটি ফ্রেন্ডের সব ডাটা (যেমন: নাম, ছবি) প্রপস হিসেবে অন্য পেজ থেকে গ্রহণ করে।
L11-15: এখানে অনেকগুলো স্টেট ডিক্লেয়ার করা হয়েছে:
realDateTime: আজকের তারিখ দেখানোর জন্য।
showModal: পপ-আপ মোডালটি ওপেন বা ক্লোজ করার জন্য।
selectedAction: আপনি "Call" নাকি "Text" বাটনে ক্লিক করেছেন তা মনে রাখার জন্য।
myHistory: শুধুমাত্র এই ফ্রেন্ডের সাথে করা সব কাজের লিস্ট জমা রাখার জন্য।
৩. ডাটা লোডিং (useEffect)
L17-34: পেজটি ওপেন হলে প্রথমেই এটি আজকের তারিখ সেট করে।
L27-33: এটি লোকাল স্টোরেজ থেকে আপনার সব কাজের ডাটা এনে চেক করে কন ডাটাগুলো এই ফ্রেন্ডের (friend?.id) সাথে মিলে যায়। যা মিলে যায়, তা myHistory বক্সে জমা করে।
৪. লেআউট ডিজাইন - প্রোফাইল কার্ড (Left Sidebar)
L46-67: এটি প্রোফাইলের বামদিকের অংশ। এখানে ফ্রেন্ডের ছবি, গোল রিং আইকন, বড় করে নাম এবং তার বর্তমান স্ট্যাটাস (যেমন: On-Track) দেখানো হয়েছে।
L66: bio - ফ্রেন্ডের সম্পর্কে ছোট একটি উদ্ধৃতি বা বায়ো দেখানো হচ্ছে।
L69-79: এখানে ৩টি অ্যাকশন বাটন আছে (Snooze, Archive, Delete) যা ভবিষ্যতে ফিচার যোগ করার জন্য রাখা হয়েছে।
৫. পরিসংখ্যান সেকশন (Stats Section)
L83-102: এখানে ৩টি কার্ডে ৩টি তথ্য দেখানো হয়েছে:
কতদিন আগে শেষ আলাপ হয়েছে।
আপনার গোল বা লক্ষ্য কী।
পরবর্তী ডেট বা সময় কবে।
৬. কুইক চেক-ইন এবং মোডাল (Quick Check-In)
L121-147: এটি পেজের সবচেয়ে কার্যকরী অংশ। এখানে Call, Text এবং Video এর ৩টি বাটন আছে।
L132: যখনই আপনি কোনো বাটনে ক্লিক করবেন, selectedAction এর মান বদলে যাবে এবং মোডালটি স্ক্রিনে ফুটে উঠবে (setShowModal(true))।
৭. ইতিহাস দেখা (Recent History)
L149-187: এটি পেজের নিচের অংশ। এখানে ওই ফ্রেন্ডের সাথে আপনার শেষ ৩টি বাটন ক্লিকের ইতিহাস দেখানো হয়।
L171-178: এখানে "Show More" বাটন আছে যদি ইতিহাসের সংখ্যা ৩ এর বেশি হয়। এটি ক্লিক করলে পুরো লিস্টটি বড় হয়ে যাবে।
৮. মোডাল কন্ট্রোল (Modal Callback)
L191-199: এটি সেই পপ-আপ মোডাল। এখানে onConfirm প্রপসটি খুব গুরুত্বপূর্ণ। যখন আপনি মোডাল থেকে "Confirm" বাটন টিপবেন, তখন এটি সাথে সাথে আপনার স্ক্রিনের ইতিহাসে নতুন ডাটাটি যোগ করে দেয় (setMyHistory).
সংক্ষেপে: এই ফাইলটি অ্যাপের "অ্যাকশন সেন্টার"। এখান থেকেই আপনি কারো প্রোফাইল দেখেন, তার সাথে কথা বলার রেকর্ড সেভ করেন এবং আপনার মেলামেশার ইতিহাস সুন্দরভাবে পর্যবেক্ষণ করেন। এটি ইউজারের সাথে ফ্রেন্ডের বন্ধন ঠিক কতটুকু মজবুত, তা বুঝতে সাহায্য করে।
</p> */}