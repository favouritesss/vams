'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronRight, Play } from 'lucide-react'

const heroSlides = [
  {
    id: 1,
    title: 'Empower Your Community Today',
    subtitle: 'Join thousands of passionate volunteers creating real change across Nigeria and beyond',
    image: '/nigerian-volunteers-helping-community-service.jpg',
    cta: 'Start Your Journey',
    badge: 'Join 50K+ Volunteers',
  },
  {
    id: 2,
    title: 'Organize Impact, Scale Change',
    subtitle: 'Streamline your volunteer program and build the next generation of changemakers',
    image: '/nigerian-organization-team-management-collaboratio.jpg',
    cta: 'For Organizations',
    badge: 'Trusted by 500+ Orgs',
  },
  {
    id: 3,
    title: 'Grow Skills, Build Legacy',
    subtitle: 'Track your impact, earn recognition, and create lasting change in your community',
    image: '/nigerian-youth-achieving-success-growth.jpg',
    cta: 'Discover Opportunities',
    badge: '100K+ Hours Served',
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({})

  useEffect(() => {
    if (!isAutoPlay) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [isAutoPlay])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlay(false)
  }

  const handleImageError = (slideId: number) => {
    setImageErrors(prev => ({ ...prev, [slideId]: true }))
  }

  return (
    <section className="relative h-screen overflow-hidden bg-background/50">
      {/* Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative w-full h-full">
            <img
              src={imageErrors[slide.id] ? '/placeholder.svg?height=1080&width=1920&query=volunteer community service' : slide.image}
              alt={slide.title}
              onError={() => handleImageError(slide.id)}
              className="w-full h-full object-cover"
              priority={index === currentSlide ? 'high' : 'low'}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-left text-white max-w-3xl mx-auto px-4 md:px-8 animate-fade-up">
              <div className="mb-6 inline-block">
                <span className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {slide.badge}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-gray-100 text-pretty max-w-2xl">
                {slide.subtitle}
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="/auth/signup"
                  className="inline-flex items-center gap-2 bg-gradient-primary hover:shadow-2xl text-white px-8 py-4 rounded-lg font-bold transition-all hover:scale-105 text-lg"
                >
                  {slide.cta}
                  <ChevronRight size={24} />
                </Link>
                <button className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all">
                  <Play size={20} fill="currentColor" />
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? 'bg-accent w-8 h-3 rounded-full'
                : 'bg-white/40 hover:bg-white/60 w-3 h-3 rounded-full'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-slide-in" />
        </div>
      </div>
    </section>
  )
}
