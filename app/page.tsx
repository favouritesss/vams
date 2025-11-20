'use client'

import React, { useState, useEffect } from 'react'
import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import HowItWorks from '@/components/how-it-works'
import UpcomingEvents from '@/components/upcoming-events'
import FeaturedVolunteers from '@/components/featured-volunteers'
import Testimonials from '@/components/testimonials'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      <UpcomingEvents />
      <FeaturedVolunteers />
      <Testimonials />
      <Footer />
    </div>
  )
}
