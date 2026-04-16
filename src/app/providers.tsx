"use client";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ToastContainer position="top-right" theme="dark" autoClose={2000} />
    </>
  );
}
 

//use Providers in layout.tsx but while rendering it will show hydration error, becasue of nextjs server side rendering