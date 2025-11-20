'use client'

import React, { useState } from 'react'
import { Star, TrendingUp, Heart } from 'lucide-react'

const volunteers = [
  {
    id: 1,
    name: 'Chioma Adeyemi',
    hours: 340,
    events: 28,
    image: '/images/nigerian-woman-professional-smiling-portrait.jpg',
    specialty: 'Healthcare',
    impact: 'Lives changed',
  },
  {
    id: 2,
    name: 'Tunde Okafor',
    hours: 285,
    events: 22,
    image: '/images/nigerian-man-professional-headshot.jpg',
    specialty: 'Education',
    impact: 'Students mentored',
  },
  {
    id: 3,
    name: 'Zainab Hassan',
    hours: 420,
    events: 35,
    image: '/images/nigerian-woman-leader-confident-portrait.jpg',
    specialty: 'Community',
    impact: 'Communities served',
  },
  {
    id: 4,
    name: 'David Obi',
    hours: 256,
    events: 19,
    image: '/images/nigerian-young-man-volunteer-happy.jpg',
    specialty: 'Environment',
    impact: 'Projects led',
  },
]

export default function FeaturedVolunteers() {
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({})

  const handleImageError = (volunteerId: number) => {
    setImageErrors(prev => ({ ...prev, [volunteerId]: true }))
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card border-y border-border/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-fade-up">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent mb-6 text-balance">
            Meet Our Top Heroes
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Celebrating the passionate volunteers transforming communities across Nigeria
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {volunteers.map((volunteer, index) => (
            <div
              key={volunteer.id}
              className="text-center animate-slide-in hover-lift group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="mb-6 relative">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-secondary rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img
                    src={imageErrors[volunteer.id] ? `/placeholder.svg?height=160&width=160&query=${volunteer.name} volunteer` : volunteer.image}
                    alt={volunteer.name}
                    onError={() => handleImageError(volunteer.id)}
                    className="w-40 h-40 rounded-full mx-auto object-cover shadow-xl border-4 border-primary/30 group-hover:border-accent transition-all group-hover:scale-105 relative z-10"
                  />
                </div>

                {/* Badge */}
                <div className="absolute top-0 right-6 bg-gradient-primary text-white p-2 rounded-full shadow-lg group-hover:scale-125 transition-transform">
                  <Star size={20} fill="currentColor" />
                </div>
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-secondary transition-colors">
                {volunteer.name}
              </h3>
              <p className="text-sm text-accent font-bold mb-4">
                {volunteer.specialty}
              </p>

              {/* Stats */}
              <div className="bg-gradient-overlay backdrop-blur-sm rounded-xl p-5 mb-4 border border-primary/20 group-hover:border-accent/50 transition-all">
                <div className="flex items-baseline justify-center gap-2 mb-3">
                  <span className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {volunteer.hours}h
                  </span>
                  <span className="text-xs text-muted-foreground">Served</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {volunteer.events} activities • {volunteer.impact}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 justify-center">
                <button className="flex-1 bg-primary/20 text-primary hover:bg-primary/30 py-2 rounded-lg transition-all font-semibold flex items-center justify-center gap-1">
                  <TrendingUp size={16} />
                  View
                </button>
                <button className="flex-1 bg-accent/20 text-accent hover:bg-accent/30 py-2 rounded-lg transition-all font-semibold flex items-center justify-center gap-1">
                  <Heart size={16} />
                  Follow
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
