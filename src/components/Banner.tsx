import { Plus } from 'lucide-react'
import React from 'react'

const Banner = () => {
  return (
    <div className='container mx-auto mt-4 md:mt-20 p-10 flex flex-col gap-4 justify-center items-center'>
        <h1 className='text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-tl from-purple-700 to-indigo-700 text-center'>
            Friends to keep close in your life
        </h1>
        <p className='text-lg md:text-xl text-gray-400 text-center max-w-2xl'>
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>
        <button className='btn bg-violet-700 hover:bg-violet-800 text-white border-none'>
            <Plus size={20}/> Add Friend
        </button>
    </div>
  )
}

export default Banner;