import React from 'react'
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { FaSquareInstagram } from "react-icons/fa6";
import Link from 'next/link';


export default function Footer() {
  const socials=[
    {
        link:"https://www.linkedin.com/company/ieee-sps-mjcet/posts/?feedView=all",
        label:"Linkedln",
        Icon: SiLinkedin    
    },
    {
        link:"https://github.com/IEEE-SPS-MJCET",
        label:"Github",
        Icon: SiGithub
    },
    {
        link:"https://www.instagram.com/ieeespsmjcet/",
        label:"Instagram",
        Icon: FaSquareInstagram  
    },
    
]
  return (
    <div className=' h-[15vh] flex flex-col items-center justify-center'>
    <div className='lg:h-16 lg:w-52 h-11 w-36 rounded-3xl flex flex-col items-center justify-center p-4 shadow-lg gap-6'>
    <div className='flex flex-row justify-evenly lg:gap-9 gap-5 items-center text-green-400'>
                {socials.map((social,index)=>{
                        const Icon=social.Icon
                        return <Link
                        href={social.link} 
                        key={index} 
                        aria-label={social.label}>
                            <span className="hover:underline decoration-green-500">
                            <Icon className="lg:w-8 lg:h-8 w-5 h-5 hover:scale-125 transition-all" />
                            </span>
                        </Link>
                })}
        </div>
        </div>
        <h4 className='text-neutral-500 lg:text-base text-xs'>Copyright© 2024 | All rights reserved</h4>
    </div>
  );
}
