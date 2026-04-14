"use client";

import React, { useState, useEffect } from 'react';
import TimeLineCard from '@/components/TimelineCard';

const TimelinePage = () => {
  const [interactions, setInteractions] = useState<any[]>([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch("/data/friendsInfo.json")
      .then((res) => res.json())
      .then((data) => {
        const allInteractions: any[] = [];
        data.forEach((friend: any) => {
          if (friend.interactions) {
            friend.interactions.forEach((interaction: any) => {
              allInteractions.push({
                ...interaction,
                personName: friend.name,
              });
            });
          }
        });

        setInteractions(allInteractions);
      });
  }, []);

  const filteredInteractions = filter === "All" 
    ? interactions 
    : interactions.filter((i) => i.type === filter);

  return (
    <div className='container mx-auto mt-4 md:mt-20 p-6 max-w-4xl'>
        <div className='flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-4xl md:text-5xl font-bold bg-clip-text text-transparent 
                bg-linear-to-tl from-purple-700 to-indigo-700'>
                    Timeline
                </h1>
                <p className='text-lg text-white/50'>
                    History of your meaningful connections
                </p>
            </div>
            
            <select value={filter} onChange={(e) => setFilter(e.target.value)} 
            className="select select-bordered bg-stone-700/80 border-white/10 text-white w-full max-w-xs">
              <option value="All">All Interactions</option>
              <option value="Call">Calls</option>
              <option value="Text">Texts</option>
              <option value="Video">Videos</option>
              <option value="Meetup">Meetups</option>
            </select>
        </div>

        <div className="flex flex-col gap-4">
          {filteredInteractions.length > 0 ? (
            filteredInteractions.map((item, index) => (
              <TimeLineCard key={index} type={item.type} personName={item.personName} date={item.date} />
            ))
          ) : (
            <div className="text-center py-20 bg-stone-500/5 rounded-3xl border border-dashed border-white/10">
              <p className="text-white/30 italic">No interactions found for this filter.</p>
            </div>
          )}
        </div>
    </div>
  );
};

export default TimelinePage;