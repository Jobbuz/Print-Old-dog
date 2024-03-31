import React from 'react'
import Image from 'next/image'
export default function Grid() {
  return (
    <div className='flex center justify'>
    <div className="gap-x-12 gap-y-6 grid grid-cols-2 grid-rows-2 w-[50vw] h-[50vw]"> 
    <div className='col-span-1 row-span-1 bg-F5F5F5-100 rounded-md'><Image src={"/bg1.png"} alt="bg1" width={400} height={150} className='h-full'></Image></div>
    <div className='col-span-1 row-span-1 bg-F5F5F5-100 rounded-md'><Image src={"/bg2.png"} alt="bg2" width={400} height={150} className='h-full'></Image></div>
    <div className='col-span-1 row-span-1 bg-F5F5F5-100 rounded-md'><Image src={"/bg3.png"} alt="bg3" width={400} height={150} className='h-full'></Image></div>
    <div className='col-span-1 row-span-1 bg-F5F5F5-100 rounded-md'><Image src={"/bg4.png"} alt="bg4" width={400} height={150} className='h-full'></Image></div>
    </div>
    </div>
  )
}
