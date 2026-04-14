import React, { useState, useEffect } from "react";
import { Bell, Archive, Trash2, History } from "lucide-react";
import Image from "next/image";

const FriendDetailView = ({ friend }: { friend: any }) => {
  const { name, picture, status, tags = [], bio, active, goal, interactions = [], } = friend || {};
  const [realDateTime, setRealDateTime] = useState<string>("");

  useEffect(() => {
    const today = new Date();
    const formattedDate = `${today.getDate()} ${today.toLocaleString("en-US", { month: "long" })}, ${today.getFullYear()}`;
    setRealDateTime(formattedDate);
  }, []);

  const iconMap: any = {
    Call: "/assets/telephone.gif",
    Text: "/assets/conversation.gif",
    Video: "/assets/video.gif",
    Meetup: "/assets/handshake.gif",
  };

  const getIcon = (type: string) => {
    const src = iconMap[type];
    if (src) {
      return (
        <Image src={src} alt={type} width={64} height={64} className="w-full h-full object-cover rounded-full"/>
      );
    }
    return null;
  };

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
              <Image src={picture} alt={name} width={128} height={128} className="rounded-full object-cover ring-4 ring-gray-50 shadow-md"/>
              <div
                className={`absolute bottom-2 right-2 w-5 h-5 rounded-full border-4 border-white ${statusColors[status] || "bg-gray-300"}`}
              />
            </div>

            <h2 className="text-2xl font-bold text-white">{name}</h2>
            <div className="mt-4 flex flex-col items-center gap-2">
              <span
                className={`px-4 py-1 text-white text-[11px] font-bold rounded-full uppercase tracking-widest ${statusColors[status] || "bg-gray-300"}`}
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
                  className="flex flex-col items-center justify-center gap-4 p-4 border-0 bg-white/5 rounded-2xl"
                >
                  <div className="w-16 h-16 flex items-center justify-center bg-stone-500/10 rounded-full shadow-sm border border-gray-50 overflow-hidden">
                    {getIcon(item.type)}
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
                <History className="w-5 h-5" /> Full History
              </button>
            </div>

            <div className="space-y-4">
              {interactions.length > 0 ? (
                interactions.map((interaction: any, i: number) => (
                  <div
                    key={i}
                    className="py-4 px-6 flex justify-between items-center border-0 rounded-full hover:opacity-70 duration-500 transition-colors group"
                  >
                    <div className="flex gap-5 items-center">
                      <div className="w-14 h-14 bg-white border border-slate-100 rounded-2xl flex items-center justify-center shadow-sm group-hover:border-indigo-100 transition-colors overflow-hidden">
                        {getIcon(interaction.type)}
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-base">
                          {interaction.type}
                        </h4>
                        <p className="text-xs text-white/50 mt-0.5">
                          {interaction.desc}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-normal text-white/50">
                      {interaction.date}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-center py-10 text-slate-400 italic text-sm">
                  No recent interactions found.
                </p>
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default FriendDetailView;
