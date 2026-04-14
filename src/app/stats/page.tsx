"use client";
import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip,} from "recharts";

const StatsPage = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch("/data/friendsInfo.json")
      .then((res) => res.json())
      .then((friends) => {
        const counts: Record<string, number> = {
          Call: 0,
          Text: 0,
          Video: 0,
          Meetup: 0,
        };

        friends.forEach((friend: any) => {
          if (friend.interactions) {
            friend.interactions.forEach((i: any) => {
              if (counts[i.type] !== undefined) {
                counts[i.type]++;
              }
            });
          }
        });

        const chartData = Object.keys(counts).map((key) => ({
          name: key,
          value: counts[key],
        }));

        setData(chartData);
      });
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
    <div className="container mx-auto mt-4 md:mt-20 p-6 max-w-4xl">
      <div className="flex flex-col gap-2 mb-10">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-tl from-purple-700 to-indigo-700">
          Friendship Analytics
        </h1>
        <p className="text-lg text-white/50 font-medium">
          Visualization of your connection habits
        </p>
      </div>

      <div className="bg-stone-500/10 border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
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
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    className="hover:opacity-80 transition-opacity cursor-pointer focus:outline-none"
                  />
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

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {data.map((item, index) => (
            <div
              key={item.name}
              className="text-center p-4 bg-white/5 rounded-2xl border border-white/5"
            >
              <p className="text-xs text-white/40 uppercase tracking-widest mb-1">
                {item.name}
              </p>
              <p className="text-2xl font-bold text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
