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
