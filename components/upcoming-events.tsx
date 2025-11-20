'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Calendar, MapPin, Users, ChevronLeft, ChevronRight, Flame } from 'lucide-react'

const events = [
  {
    id: 1,
    title: 'Community Healthcare Outreach',
    date: '2024-12-15',
    location: 'Lagos Medical Center',
    participants: 45,
    image: '/images/nigerian-healthcare-volunteers-medical-outreach-cl.jpg',
    category: 'Healthcare',
    trending: true,
  },
  {
    id: 2,
    title: 'Environmental Conservation Drive',
    date: '2024-12-20',
    location: 'Lekki Conservation Area',
    participants: 60,
    image: '/images/nigerian-environmental-conservation-volunteers-tre.jpg',
    category: 'Environment',
    trending: true,
  },
  {
    id: 3,
    title: 'Youth Education Program',
    date: '2024-12-22',
    location: 'Ikeja Community Center',
    participants: 35,
    image: '/images/nigerian-teachers-tutoring-students-education-volu.jpg',
    category: 'Education',
    trending: false,
  },
  {
    id: 4,
    title: 'Skills Training Workshop',
    date: '2024-12-28',
    location: 'VI Business Hub',
    participants: 28,
    image: '/images/nigerian-professional-training-workshop-skills-dev.jpg',
    category: 'Skills',
    trending: false,
  },
]

export default function UpcomingEvents() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const itemsToShow = 3
  const canGoNext = currentIndex < events.length - itemsToShow
  const canGoPrev = currentIndex > 0

  const goNext = () => {
    if (canGoNext) setCurrentIndex(currentIndex + 1)
  }

  const goPrev = () => {
    if (canGoPrev) setCurrentIndex(currentIndex - 1)
  }

  const visibleEvents = events.slice(currentIndex, currentIndex + itemsToShow)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="animate-fade-up mb-8 md:mb-0">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4 text-balance">
              Upcoming Events
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Discover amazing volunteer opportunities and join thousands making a difference
            </p>
          </div>
          <Link
            href="/events"
            className="hidden md:inline-flex text-accent hover:text-accent/80 font-bold transition-colors items-center gap-2 text-lg group"
          >
            Explore All
            <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Events Slider */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {visibleEvents.map((event) => (
              <div
                key={event.id}
                className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 animate-zoom-in border border-border/50 hover:border-primary/30 group"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {event.trending && (
                    <div className="absolute top-3 left-3 bg-gradient-accent text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                      <Flame size={14} fill="currentColor" />
                      Trending
                    </div>
                  )}
                  
                  <div className="absolute top-3 right-3 bg-gradient-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {event.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors line-clamp-2">
                    {event.title}
                  </h3>

                  <div className="space-y-3 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2 hover:text-foreground transition-colors">
                      <Calendar size={16} className="text-accent flex-shrink-0" />
                      <span>{new Date(event.date).toLocaleDateString('en-NG', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-foreground transition-colors">
                      <MapPin size={16} className="text-accent flex-shrink-0" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-foreground transition-colors">
                      <Users size={16} className="text-accent flex-shrink-0" />
                      <span>{event.participants} volunteers joined</span>
                    </div>
                  </div>

                  <Link
                    href={`/events/${event.id}`}
                    className="w-full bg-gradient-primary text-white py-3 rounded-lg hover:shadow-lg transition-all font-bold text-center block group-hover:scale-105"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={goPrev}
              disabled={!canGoPrev}
              className="p-3 bg-primary/10 text-primary rounded-full hover:bg-primary/20 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <Link href="/events" className="md:hidden text-accent font-bold text-lg">
              View All Events
            </Link>
            <button
              onClick={goNext}
              disabled={!canGoNext}
              className="p-3 bg-primary/10 text-primary rounded-full hover:bg-primary/20 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
