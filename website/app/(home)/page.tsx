"use client"
import React, { Suspense } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import { Hero } from './components/Hero'
import { Events } from './components/Events'
import  Footer  from './components/Footer'
import { Team } from './components/Team'
import dynamic from 'next/dynamic'

const Model = dynamic(() => import('./components/Model'), { ssr: false })

export default function page() {
  return (
    <div className='min-h-screen gradient-bg overflow-hidden scroll-smooth'>
      <div className='max-w-7xl mx-auto p-5'>
        <Navbar/>
      </div>

      <div className='max-w-full overflow-hidden dark:gradient-bg dark:bg-grid-white/[0.02] bg-grid-black/[0.2]'>
        <Hero/>
      </div>

      {/* <div className='max-w-full mx-auto h-[40vh] pt-24'>
        <Model/>
      </div> */}

      <div id="about">
        <div className=' max-w-full dark:gradient-bg dark:bg-grid-white/[0.04] bg-grid-black/[0.2]'>
        <div className='max-w-7xl mx-auto p-5'>
        <About/>
        </div>
        </div>
      </div>

      <div>
        <div className='max-w-full mx-auto p-5 pt-24 lg:pt-0 dark:gradient-bg dark:bg-grid-white/[0.05] bg-grid-black/[0.2]'>
          <Team/>
        </div>
      </div>

      <div id="events">
        <div className='max-w-full mx-auto pt-11 p-14 lg:pt-24 dark:gradient-bg dark:bg-grid-white/[0.05] bg-grid-black/[0.2]'>
          <Events/>
        </div>
      </div>

      <div id="contact">
      <div className='max-w-full mx-auto lg:pt-36 pt-28 dark:gradient-bg dark:bg-grid-white/[0.05] bg-grid-black/[0.2]'>
        <Footer/>
      </div>
      </div>

      <style jsx>{`
              body {
          margin: 0;
          padding: 0;
        }
        .gradient-bg {
          background: linear-gradient(90deg, #161f16, #00172D, #014122);
          background-size: 200% 200%;
          animation: gradient-flow 15s ease infinite;
        }

        @keyframes gradient-flow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
            `}</style>

    </div>
  )
}
