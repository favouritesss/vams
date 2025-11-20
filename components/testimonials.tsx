'use client'

import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    quote: 'VAMS changed my life! I found meaningful volunteer opportunities and met incredible people. The platform is so intuitive and rewarding.',
    author: 'Amara Okonkwo',
    role: 'Active Volunteer',
    image: '/images/nigerian-woman-smiling-testimonial.jpg',
    rating: 5,
    location: 'Lagos',
  },
  {
    id: 2,
    quote: 'As an organization manager, VAMS is a game-changer. Volunteer coordination went from chaos to seamless. Highly recommended!',
    author: 'Kunle Adebayo',
    role: 'NGO Director',
    image: '/images/nigerian-man-professional-headshot.jpg',
    rating: 5,
    location: 'Abuja',
  },
  {
    id: 3,
    quote: 'The system helped us scale from 50 to 500 active volunteers in just 6 months. Incredible platform for community impact.',
    author: 'Dr. Folake Ojelade',
    role: 'Community Leader',
    image: '/images/nigerian-woman-leader-portrait.jpg',
    rating: 5,
    location: 'Port Harcourt',
  },
  {
    id: 4,
    quote: 'Seeing my volunteer hours and certificates displayed motivated me so much. VAMS celebrates our contributions beautifully.',
    author: 'Emeka Nwosu',
    role: 'Student Volunteer',
    image: '/images/nigerian-young-man-happy.jpg',
    rating: 5,
    location: 'Enugu',
  },
]


export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [autoPlay])

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setAutoPlay(false)
  }

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
    setAutoPlay(false)
  }

  const current = testimonials[currentIndex]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-card/50 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4 text-balance">
            Voices of Impact
          </h2>
          <p className="text-lg text-muted-foreground">
            Real stories from volunteers and organizations transforming Nigeria
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="bg-card rounded-3xl shadow-2xl border border-border/50 p-8 md:p-12 animate-zoom-in hover:shadow-3xl transition-shadow">
          {/* Quote Icon */}
          <div className="flex justify-center mb-8">
            <Quote size={48} className="text-accent/40" />
          </div>

          {/* Rating */}
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: current.rating }).map((_, i) => (
              <Star key={i} size={20} className="text-accent fill-accent" />
            ))}
          </div>

          {/* Quote */}
          <p className="text-2xl md:text-3xl text-center text-foreground mb-12 italic font-medium text-balance leading-relaxed">
            "{current.quote}"
          </p>

          {/* Author Info */}
          <div className="flex flex-col md:flex-row items-center justify-center mb-10 gap-4 md:gap-6">
            <img
              src={current.image || "/placeholder.svg"}
              alt={current.author}
              className="w-20 h-20 rounded-full object-cover border-3 border-accent/30 shadow-lg"
            />
            <div className="text-center md:text-left">
              <p className="font-bold text-primary text-xl">
                {current.author}
              </p>
              <p className="text-accent font-semibold text-sm">
                {current.role}
              </p>
              <p className="text-muted-foreground text-sm">
                {current.location}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6">
            <button
              onClick={goPrev}
              className="p-3 bg-primary/10 text-primary rounded-full hover:bg-primary/20 hover:scale-110 transition-all"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setAutoPlay(false)
                  }}
                  className={`transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-accent w-8 h-3 rounded-full'
                      : 'bg-border hover:bg-muted-foreground w-3 h-3 rounded-full'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              className="p-3 bg-primary/10 text-primary rounded-full hover:bg-primary/20 hover:scale-110 transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
