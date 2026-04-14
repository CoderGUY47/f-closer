import React from 'react';
import FriendsList from '@/components/Friends/FriendsList';
import Banner from '@/components/Banner';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Banner />
      <FriendsList />
    </main>
  );
}
