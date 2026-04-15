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
    // 1.fetch friends data from JSON
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

    // 2. get the number of real interactions logged in localStorage
    const saved = getAllInteractionsFromLocalDB();
    setTotalInteractions(saved.length);
  }, []); 

  const stats = {
    total: friends.length,
    onTrack: friends.filter(f => f.status?.toLowerCase() === 'on-track').length,
    attention: friends.filter(f => f.status?.toLowerCase() === 'overdue').length,
    interactions: totalInteractions //show the count here
  };

  if (loading) {
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
