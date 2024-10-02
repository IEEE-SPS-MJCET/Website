import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import { Hero } from './components/Hero'
import { Events } from './components/Events'

export default function page() {
  return (
    <div className='min-h-screen bg-black overflow-hidden'>
      <div className='max-w-7xl mx-auto p-5'>
        <Navbar/>
        <Hero/>
      </div>

      <div className='dark:bg-black max-w-full bg-white  dark:bg-grid-white/[0.5] bg-grid-black/[0.2]'>
      <div className='max-w-7xl mx-auto p-5'>
      <About/>
      </div>
      </div>

      <div className='max-w-full mx-auto pt-11 p-14'>
        <Events/>
      </div>

    </div>
  )
}
