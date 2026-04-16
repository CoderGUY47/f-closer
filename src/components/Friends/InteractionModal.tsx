"use client";
import React from "react";
import { toast } from "react-toastify";
import { saveInteractionToLocalDB } from "@/utils/localDB";

interface InteractionModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedAction: string;
  friend: any;
  onConfirm: (newInteraction: any) => void;
}

const InteractionModal: React.FC<InteractionModalProps> = ({ 
  isOpen, 
  onClose, 
  selectedAction, 
  friend,
  onConfirm 
}) => {
  if (!isOpen) return null;

  const handleConfirm = () => {
    const today = new Date();
    const dateStr = `${today.getDate()} ${today.toLocaleString("en-US", { month: "long" })}, ${today.getFullYear()}`;

    const newInteraction = {
      friendId: friend?.id,
      friendName: friend?.name,
      friendPicture: friend?.picture,
      type: selectedAction,
      date: dateStr,
    };

    //লোকাল স্টোরেজে সেভ করা এবং প্যারেন্ট স্টেট আপডেট করা 
    saveInteractionToLocalDB(newInteraction);
    onConfirm(newInteraction);

    //সাকসেস মেসেজ দেখানো
    toast.success(`${selectedAction} with ${friend?.name} logged!`);
    
    //মোডাল বন্ধ করা
    onClose();
  };

  return (
    <dialog className="modal modal-open">
      <div className="modal-box bg-stone-900 border border-white/10 rounded-3xl p-8 max-w-sm text-center">
        <h3 className="font-bold text-2xl text-white mb-2">Log Interaction</h3>
        <p className="py-4 text-white/50">
          Do you want to log a 
          <span className="font-semibold text-violet-400">{selectedAction}</span> with {friend?.name}?
        </p>
        
        <div className="modal-action mt-6 flex justify-center gap-4">
          <button className="btn btn-ghost text-white border-white/20 px-8" onClick={onClose}>
            Cancel
          </button>

          <button className="btn bg-violet-600 hover:bg-violet-500 border-none text-white px-8" onClick={handleConfirm}>
            Confirm
          </button>
        </div>
      </div>
      
      {/* Backdrop ক্লিক করলে বন্ধ হবে */}
      <form method="dialog" className="modal-backdrop bg-stone-950/70" onClick={onClose}>
        <button>close</button>
      </form>
    </dialog>
  );
};

export default InteractionModal;















{/* <p>
  ১. ইমপোর্ট সেকশন (Imports)
L1: "use client"; - মোডালের ওপেন/ক্লোজ এবং বাটন ক্লিকের জন্য এটি ক্লায়েন্ট কম্পোনেন্ট হিসেবে কাজ করে।
L3: import { toast } from "react-toastify"; - এটি একটি লাইব্রেরি যা স্ক্রিনের কোণায় সুন্দর সাকসেস মেসেজ (Toast Notification) দেখায়।
L4: import { saveInteractionToLocalDB } from "@/utils/localDB"; - ডাটাবেস (LocalStorage)-এ ডাটা সেভ করার মেইন লজিকটি এখানে আনা হয়েছে।
২. টাইপ-স্ক্রিপ্ট ইন্টারফেস (Interface)
L6-12: interface InteractionModalProps - এটি ডিফাইন করে যে এই মোডালটি কাজ করার জন্য প্যারেন্ট থেকে কী কী ডাটা লাগবে:
isOpen: মোডাল কি এখন দেখা যাবে?
onClose: মোডাল বন্ধ করার ফাংশন।
selectedAction: কোন বাটনে ক্লিক করেছেন (Call/Text)।
friend: কোন ফ্রেন্ডের প্রোফাইলে আপনি কাজ করছেন।
onConfirm: কাজ নিশ্চিত হওয়ার পর স্টেট আপডেট করার ফাংশন।
৩. মেইন কম্পোনেন্ট এবং রিঅ্যাক্ট টাইপ (Main Component)
L14: const InteractionModal: React.FC<InteractionModalProps> = (...) - এখানে React.FC ব্যবহার করা হয়েছে যা রিঅ্যাক্ট ফাংশনাল কম্পোনেন্ট নির্দেশ করে এবং <InteractionModalProps> নিশ্চিত করে যে সব প্রপস সঠিকভাবে পাঠানো হয়েছে।
L21: if (!isOpen) return null; - এটি একটি 'Guard Clause'। যদি মোডাল ওপেন না থাকে, তবে এই ফাংশনটি কিছুই দেখাবে না (খালি স্ক্রিন)।
৪. ডাটা সেভ করার লজিক (handleConfirm Function)
L23: const handleConfirm = () => { - যখন আপনি মোডালের "Confirm" বাটনে ক্লিক করবেন, এই ফাংশনটি কাজ শুরু করবে।
L24-25: এটি বর্তমান সময় এবং তারিখ তৈরি করে যাতে আমরা জানতে পারি ঠিক কখন কল বা টেক্সট করা হয়েছে।
L27-33: newInteraction অবজেক্ট তৈরি করা হয়। এখানে ফ্রেন্ডের আইডি, নাম, ছবি এবং আপনার সিলেক্ট করা কাজ (Type) এবং তারিখ গুছিয়ে রাখা হয়।
L36: saveInteractionToLocalDB(newInteraction) - এই এক লাইনের মাধ্যমেই ডাটা আপনার ডিরেক্টরি বা লোকাল স্টোরেজে চিরস্থায়ীভাবে সেভ হয়ে যায়।
L37: onConfirm(newInteraction) - এটি প্যারেন্ট কম্পোনেন্টকে (Detail View) জানিয়ে দেয় যে ডাটা সেভ শেষ, এখন রিফ্রেশ ছাড়াই স্ক্রিনে ইতিহাস দেখাও।
L40: toast.success(...) - ব্যবহারকারীকে একটি সুন্দর সবুজ সাকসেস মেসেজ দেখায়।
L43: onClose() - কাজ শেষ হওয়ার পর পপ-আপ মোডালটি অটোমেটিক বন্ধ করে দেয়।
৫. ইউজার ইন্টারফেস - ডিজাইন (JSX)
L47: <dialog className="modal modal-open"> - এটি HTML5 এর আধুনিক ডাইয়ালগ ট্যাগ যা সুন্দর মোডাল তৈরি করতে ব্যবহৃত হয়।
L48: মোডাল বক্সের ডিজাইন (ডার্ক ব্যাকগ্রাউন্ড এবং কার্ভ বর্ডার)।
L52: এখানে আপনার সিলেক্ট করা অ্যাকশনটি (যেমন: Call) বেগুনি রঙে হাইলাইট করা হয়েছে।
L55-63: দুটি বাটন: একটি Cancel (বাতিল) এবং একটি Confirm (নিশ্চিত)।
L67-69: modal-backdrop - মোডালের বাইরে কালো অংশের ওপর ক্লিক করলেও যেন মোডাল বন্ধ হয়ে যায়, সেই ফিচারটি এখানে দেওয়া হয়েছে।
সারসংক্ষেপ: এই ফাইলটি এই প্রোজেক্টের সবচেয়ে গুরুত্বপূর্ণ কাজ করে—ইউজারের ইনপুট নিয়ে তা লোকাল ডিবিতে সেভ করা। এটি আপনার করা কল বা টেক্সটের হিসাব রাখে যাতে ভবিষ্যতে আপনি টাইমলাইন বা স্ট্যাটাস পেজে সেগুলো গ্রাফ আকারে দেখতে পারেন।
</p> */}