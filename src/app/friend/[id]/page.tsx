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
          //checking friend's id == route id, then return them
          return eachFriend.id == RoutingData.id;
        });
        setTimeout(() => {
          setFriend(result);
        }, 1500);
      });
  }, [RoutingData.id]);

  if (!friend) {
    return (
      <div className="min-h-[70vh] flex justify-center items-center gap-4">
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



{/* <p>
### ১. ইমপোর্ট সেকশন (Imports)
*   **L1:** `"use client";` - এই ফাইলটি ক্লায়েন্ট-সাইড কম্পোনেন্ট। কারণ এটি ইউআরএল থেকে ডাটা পড়ে এবং ইউজারের ব্রাউজারে ইন্টারঅ্যাকশন হ্যান্ডেল করে।
*   **L2:** `import React, { useEffect, useState } from "react";` - ডাটা লোড করা এবং স্টেট ম্যানেজমেন্টের জন্য রিঅ্যাক্ট হুকসমূহ।
*   **L3:** `import { useParams } from "next/navigation";` - এটি সবচেয়ে গুরুত্বপূর্ণ। ইউআরএল এ থাকা ID (যেমন: `/friend/1` থেকে `1`) পড়ার জন্য এটি নেক্সট জেএস এর একটি মেথড।
*   **L4:** `import FriendDetailView from "@/components/Friends/FriendDetailView";` - ফ্রেন্ডের সব ডিটেইলস দেখানোর জন্য আমরা আলাদা একটি ডিজাইন্ড কম্পোনেন্ট এখানে ইমপোর্ট করেছি।

### ২. মেইন ফাংশন এবং ডাইনামিক রুট (Main Logic)
*   **L6:** `export default function FriendDetailPage()` - এটি এই পেজের মেইন ফাংশন।
*   **L7:** `const RoutingData = useParams();` - এটি ইউআরএল এর আইডি-টি `RoutingData.id` ভেরিয়েবলে জমা করে রাখে।
*   **L10:** `const [friend, setFriend] = useState<any>(null);` - এটি একটি স্টেট যেখানে আমরা খুঁজে পাওয়া সঠিক ফ্রেন্ডের ডাটা সেভ করব। শুরুতে এটি খালি (`null`) থাকে।

### ৩. সঠিক ফ্রেন্ড খুঁজে বের করা (Search Logic)
*   **L12-24:** `useEffect` - পেজটি ওপেন হলেই এই সাইড-ইফেক্টটি রান করে।
*   **L13-14:** `fetch("/data/friendsInfo.json")` - এটি সব ফ্রেন্ডের ডাটা সম্বলিত JSON ফাইলটি রিড করে।
*   **L16-19:** `allFriends.find(...)` - এই লুপটি সব ফ্রেন্ডের মধ্য থেকে সেই ফ্রেন্ডকে খুঁজে বের করে যার `id` আমাদের ইউআরএল এর `RoutingData.id` এর সাথে মিলে যায়।
*   **L20-22:** `setTimeout(..., 1500)` - এটি কৃত্রিমভাবে ১.৫ সেকেন্ড দেরি করায় যাতে আমরা সুন্দর একটি লোডিং এনিমেশন দেখতে পারি। খুঁজে পাওয়া ফ্রেন্ডের ডাটা `setFriend` স্টেটে সেট করা হয়।

### ৪. লোডিং স্টেট (Loading Screen)
*   **L26-34:** `if (!friend)` - যতক্ষণ ফ্রেন্ডের ডাটা খুঁজে পাওয়া না যায় (অর্থাৎ লোড হচ্ছে), ততক্ষণ ইউজারের স্ক্রিনে ৩টি এনিমেটেড ডট (`loading-dots`) দেখানো হয়। এটি ইউজার এক্সপেরিয়েন্স ভালো করে।

### ৫. ডাটা রেন্ডারিং (Final Display)
*   **L36-40:** যখন সঠিক ফ্রেন্ডের ডাটা লোড হয়ে যায়, তখন এই অংশটি রান করে।
*   **L38:** `<FriendDetailView friend={friend} />` - এটি লোড হওয়া ফ্রেন্ডের সব তথ্য `friend` প্রপস হিসেবে মেইন ডিটেইলস ভিউ কম্পোনেন্টে পাঠিয়ে দেয় যা স্ক্রিনে সুন্দর প্রোফাইল দেখায়।

**সংক্ষেপে:** এই পেজটি একটি **"Bridge"** বা সেতুর মতো কাজ করে। এটি ইউআরএল দেখে আইডি চিনে নেয়, সেই আইডি অনুযায়ী ফাইল থেকে ডাটা খুঁজে বের করে এবং সবশেষে সেই ডাটাগুলো ডিটেইলস ভিউ কম্পোনেন্টকে দিয়ে দেয় দেখানোর জন্য।
</p> */}