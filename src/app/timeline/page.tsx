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