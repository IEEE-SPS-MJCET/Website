import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import { Hero } from './components/Hero'
import { Events } from './components/Events'
import  Footer  from './components/Footer'
import { Team } from './components/Team'

export default function page() {
  return (
    <div className='min-h-screen bg-black overflow-hidden scroll-smooth'>
      <div className='max-w-7xl mx-auto p-5'>
        <Navbar/>
        <Hero/>
      </div>

      <div id="about">
        <div className='dark:bg-black max-w-full bg-white dark:bg-grid-white/[0.04] bg-grid-black/[0.2]'>
        <div className='max-w-7xl mx-auto p-5'>
        <About/>
        </div>
        </div>
      </div>

      <div>
        <div className='max-w-full mx-auto p-5 pt-24 lg:pt-12  dark:bg-black dark:bg-grid-white/[0.05] bg-grid-black/[0.2]'>
          <Team/>
        </div>
      </div>

      <div id="events">
        <div className='max-w-full mx-auto pt-11 p-14 lg:pt-24 dark:bg-black dark:bg-grid-white/[0.05] bg-grid-black/[0.2]'>
          <Events/>
        </div>
      </div>

      <div id="contact">
      <div className='max-w-full mx-auto lg:pt-36 pt-28 dark:bg-black dark:bg-grid-white/[0.05] bg-grid-black/[0.2]'>
        <Footer/>
      </div>
      </div>

    </div>
  )
}
