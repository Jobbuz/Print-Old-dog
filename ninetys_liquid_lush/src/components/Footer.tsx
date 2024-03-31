import Link from 'next/link'
import React from 'react'

export default function Footer() {

    const pageArr = [
        {name:"Home", path:"/"},
        {name:"Menu", path:"/menu"},
        {name:"About Us", path:"/aboutus"},
        {name:"Contact", path:"/contact"},
    ]

  return (
    <div>
        <div className="pb-16 p-8 w-full bg-gradient-to-r from-[#219C90] to-[#5E1675] flex justify-evenly">
            <div className='w-1/3 px-5'>
                <h1 className='text-[#FFD23F] text-lg'>Bar</h1>
                <div className='text-white text-xs mt-5 w-2/3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu dictum ipsum. 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu dictum ipsum. </div>
            </div>
            
            <div className='w-1/3 pl-40'>
                <h1 className='text-[#FFD23F] text-lg'>Quick Link</h1>
                <div className='flex flex-col gap-5 text-white text-xs mt-5'>
                    {
                        pageArr.map((page)=>(
                            <div key={page.name} ><Link href={page.path}>{page.name}</Link></div>
                        ))
                    }
                </div>
            </div>

            <div className='w-1/3 pl-40'>
                <div>
                    <h1 className='text-[#FFD23F] text-lg'>Quick Link</h1>
                    <div className='text-white text-xs mt-5 w-2/3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu dictum ipsum. </div>
                </div>
                <div className='mt-5'>
                    <h1 className='text-white text-lg'>Follow Us</h1>
                    <div className='flex gap-5 mt-3'>
                        <div className='w-10 h-10 rounded-full bg-gradient-to-r from-[#FFD23F] via-[#EE9322] to-[#EE4266]'></div>
                        <div className='w-10 h-10 rounded-full bg-gradient-to-r from-[#FFD23F] via-[#EE9322] to-[#EE4266]'></div>
                        <div className='w-10 h-10 rounded-full bg-gradient-to-r from-[#FFD23F] via-[#EE9322] to-[#EE4266]'></div>
                        <div className='w-10 h-10 rounded-full bg-gradient-to-r from-[#FFD23F] via-[#EE9322] to-[#EE4266]'></div>
                    </div>
                </div>

            </div>
            

        </div>
    </div>
  )
}
