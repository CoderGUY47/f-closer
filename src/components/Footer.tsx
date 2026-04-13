import React from 'react'
import Image from 'next/image'
import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
    <div className="bg-linear-to-b from-purple-800 to-indigo-800">
    <footer className="container mx-auto footer footer-center p-10 text-stone-400 border-0 py-10 md:py-24 mt-10 md:mt-20 space-y-4">
      <aside>
        <div className="font-bold text-lg text-white">
          <Image src="/assets/logo-xl.png" alt="" width={300} height={300} className="brightness-300"/>
        </div>
        <p className='text-center text-white/70 text-lg mt-3 mb-7'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p> 
        <div className="flex flex-col mt-6">
          <p className='text-white font-bold text-lg mb-3'>Social Links</p>
          <ul className='flex gap-4'>
            <li className='bg-white text-black/80 py-3 px-3 rounded-full hover:bg-black/90 hover:text-white transition-colors duration-500 cursor-pointer'><Link href="/"><FaFacebookF size={24}/></Link></li>
            <li className='bg-white text-black/80 py-3 px-3 rounded-full hover:bg-black/90 hover:text-white transition-colors duration-500 cursor-pointer'><Link href="/timeline"><RiInstagramFill size={24}/></Link></li>
            <li className='bg-white text-black/80 py-3 px-3 rounded-full hover:bg-black/90 hover:text-white transition-colors duration-500 cursor-pointer'><Link href="/stats"><FaXTwitter size={24}/></Link></li>
          </ul>
        </div>
      </aside> 
    </footer>
    <div className="flex justify-between items-center py-6 px-2 bg-black/60">
    <div className="container mx-auto flex justify-between items-center">
      <p className='text-white/70'>Copyright © 2026 KeenKeeper. All rights reserved.</p>
      <div className="flex items-center gap-2">
        <p className='text-white/70'>Made with ❤️ by </p>
        <span className='text-white font-bold'><Image src="/assets/logo.png" alt="" width={120} height={120} className="brightness-300"/></span>
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Footer
