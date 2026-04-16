//লোকাল স্টোরেজ থেকে সব হিস্ট্রি নিয়ে আসার ফাংশন
const getAllInteractionsFromLocalDB = () => {
  //if (typeof window === "undefined") return [];
  const allInteractions = localStorage.getItem("f-closer-history");
  if (allInteractions) {
    return JSON.parse(allInteractions);
  }
  return [];
};

//নতুন ইন্টারঅ্যাকশন (Call/Text/Video) সেভ করার ফাংশন
const saveInteractionToLocalDB = (interaction) => {
  const allHistory = getAllInteractionsFromLocalDB();
  
  //নতুন ডাটাটি লিস্টের প্রথমে যুক্ত করছি (যাতে সাম্প্রতিকটা আগে থাকে)
  allHistory.unshift(interaction); 
  localStorage.setItem("f-closer-history", JSON.stringify(allHistory));
};

export {
  getAllInteractionsFromLocalDB,
  saveInteractionToLocalDB
};
