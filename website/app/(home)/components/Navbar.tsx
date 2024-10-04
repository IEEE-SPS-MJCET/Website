import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    const navcontent = [
        {text:'About', link:'#about'},
        {text:'Events', link:'#events'},
        {text:'Contact', link:'#contact'}
    ]
  return (
    <nav className='py-5 flex justify-between items-center'>
        <img src='spslogo.png' className='lg:w-44 lg:h-28 w-28 h-16' alt='image' />

        <div className='flex gap-6 lg:gap-14'>
            {navcontent.map((social,index)=>{
                return <Link 
                href={social.link} key={index} className='text-sm lg:text-2xl font-bold text-lime-200 hover:scale-110 transition' scroll={false}>{social.text}</Link>
            })}
        </div>
    </nav>
  )
}
