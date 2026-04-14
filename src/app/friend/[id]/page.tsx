"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import FriendDetailView from "@/components/Friends/FriendDetailView";

export default function FriendDetailPage() {
  const RoutingData = useParams();
  //handle dynamic files from one place, so create id folder
  //it will tell this url has [id], so work with it.
  const [friend, setFriend] = useState<any>(null);

  useEffect(() => {
    fetch("/data/friendsInfo.json").then((response) => response.json())
      .then((allFriends) => {
        //search through the list to find the right friend
        const result = allFriends.find((eachFriend: any) => {
          //checking friend's id == route ID, then return them
          return eachFriend.id == RoutingData.id;
        });
        setTimeout(() => {
          setFriend(result);
        }, 1500);
      });
  }, [RoutingData.id]);

  if (!friend) {
    return (
      <div className="min-h-[70vh] flex justify-center items-center gap-7">
        <span className="loading loading-dots loading-xl"></span>
        <span className="loading loading-dots loading-xl"></span>
        <span className="loading loading-dots loading-xl"></span>
        <span className="loading loading-dots loading-xl"></span>
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="py-10">
      <FriendDetailView friend={friend} />
    </div>
  );
}
