"use client";
import React, { useEffect, useState } from "react";
import FriendsInfoCard from "./FriendsInfoCard";

const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    fetch("/data/friendsInfo.json")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);

  return (
    <div className="container mx-auto mt-4 md:mt-20 ">
      <div className="counters bg-white/5 rounded-2xl gap-7 p-6 items-center text-center justify-center ">
        <div className="grid grid-cols-4 gap-7">
          <div className="counter bg-white/5 rounded-2xl p-10">
            <span className="text-5xl font-bold">0</span>
            <p className="text-gray-300 text-base mt-4">Total Friends</p>
          </div>
          <div className="counter bg-white/5 rounded-2xl p-10">
            <span className="text-5xl font-bold">0</span>
            <p className="text-gray-300 text-lg mt-4">On Track</p>
          </div>
          <div className="counter bg-white/5 rounded-2xl p-10">
            <span className="text-5xl font-bold mb-10">0</span>
            <p className="text-pray-300 text-lg mt-4">Need Attention</p>
          </div>
          <div className="counter bg-white/5 rounded-2xl p-10">
            <span className="text-5xl font-bold">0</span>
            <p className="text-gray-300 text-lg mt-4">
              Interactions This Month
            </p>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-2xl font-bold text-center md:text-left">
            Your Friends
          </p>
          <div className="mt-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 pb-6">
              {friends.map((friend, index) => (
                <FriendsInfoCard key={index} friend={friend} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
