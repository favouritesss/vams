'use client'

import React, { useState } from 'react'
import { ArrowLeft, Calendar, MapPin, Users, Share2, Heart, Clock, Tag, AlertCircle, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

// Mock event data - replace with real data fetching
const eventDetails = {
  id: 1,
  title: 'Community Healthcare Outreach Program',
  image: '/images/Community-Healthcare-Outreach-Program.jpg',
  date: '2024-12-15',
  time: '09:00 AM - 04:00 PM',
  location: 'Lagos Medical Center, VI, Lagos',
  participants: 45,
  status: 'Active',
  category: 'Healthcare',
  description: `Join us for a comprehensive healthcare outreach program designed to provide free medical checkups, health education, and wellness consultations to underserved communities in Lagos. This is a unique opportunity to make a real difference in people's lives while gaining valuable experience in healthcare volunteering.

Our team will be providing:
- Free health screenings and checkups
- Blood pressure and glucose monitoring
- Health education workshops
- One-on-one wellness consultations
- Basic first aid training demonstrations

This event is perfect for healthcare professionals, students, or anyone passionate about community health. No prior experience necessary - we'll provide full training and supervision.`,
  requirements: [
    'Valid ID or student card',
    'Comfortable walking shoes',
    'Light refreshments provided',
    'Medical gloves and PPE supplied',
  ],
  benefits: [
    'Certificate of participation',
    'Networking with healthcare professionals',
    '8 volunteer hours credited',
    'Professional volunteer portfolio addition',
    'Team impact meal provided',
  ],
  impact: {
    estimatedPeople: 500,
    healthScreenings: 400,
    consultations: 150,
  },
  organizer: {
    name: 'Healthcare for All Foundation',
    image: '/images/nigerian-man-professional-headshot.jpg',
    verified: true,
  },
  relatedEvents: [
    { id: 2, title: 'Environmental Conservation Drive', participants: 60 },
    { id: 3, title: 'Youth Education Program', participants: 35 },
    { id: 4, title: 'Skills Training Workshop', participants: 28 },
  ],
}

export default function EventDetails() {
  const [isRegistered, setIsRegistered] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={eventDetails.image || "/placeholder.svg"}
          alt={eventDetails.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

        {/* Back Button */}
        <div className="absolute top-6 left-6 z-10">
          <Link
            href="/events"
            className="flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Events
          </Link>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-4">
              <span className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-bold">
                {eventDetails.category}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-balance">
              {eventDetails.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Quick Info */}
              <div className="bg-card rounded-2xl p-8 mb-8 border border-border/50">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Calendar className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm font-semibold">DATE & TIME</p>
                      <p className="text-foreground font-bold text-lg">
                        {new Date(eventDetails.date).toLocaleDateString('en-NG', {
                          weekday: 'long',
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </p>
                      <p className="text-primary font-semibold flex items-center gap-2 mt-1">
                        <Clock size={16} />
                        {eventDetails.time}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <MapPin className="text-secondary" size={24} />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm font-semibold">LOCATION</p>
                      <p className="text-foreground font-bold text-lg">
                        {eventDetails.location}
                      </p>
                      <button className="text-accent font-semibold text-sm hover:text-accent/80 transition-colors mt-2">
                        Get Directions →
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Users className="text-accent" size={24} />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm font-semibold">PARTICIPANTS</p>
                      <p className="text-foreground font-bold text-lg">
                        {eventDetails.participants} Joined
                      </p>
                      <p className="text-muted-foreground text-sm mt-1">
                        Spaces still available
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-500/10 rounded-lg">
                      <CheckCircle className="text-green-500" size={24} />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm font-semibold">STATUS</p>
                      <p className="text-green-500 font-bold text-lg">
                        {eventDetails.status}
                      </p>
                      <p className="text-muted-foreground text-sm mt-1">
                        Registration open
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary mb-6">About This Event</h2>
                <p className="text-foreground text-lg leading-relaxed whitespace-pre-line mb-6">
                  {eventDetails.description}
                </p>
              </div>

              {/* What to Bring */}
              <div className="mb-8 bg-gradient-overlay backdrop-blur-sm p-8 rounded-2xl border border-primary/20">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                  <AlertCircle size={28} className="text-accent" />
                  What to Bring
                </h3>
                <ul className="space-y-3">
                  {eventDetails.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-accent mt-1 flex-shrink-0" />
                      <span className="text-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                  <CheckCircle size={28} className="text-accent" />
                  What You'll Gain
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {eventDetails.benefits.map((benefit, idx) => (
                    <div key={idx} className="bg-card p-4 rounded-lg border border-border/50 hover:border-accent/50 transition-all">
                      <p className="text-foreground font-semibold flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full" />
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Stats */}
              <div className="bg-card rounded-2xl p-8 border border-border/50">
                <h3 className="text-2xl font-bold text-primary mb-6">Our Impact</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <p className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      ~{eventDetails.impact.estimatedPeople}
                    </p>
                    <p className="text-muted-foreground mt-2">People Reached</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                      {eventDetails.impact.healthScreenings}
                    </p>
                    <p className="text-muted-foreground mt-2">Health Screenings</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                      {eventDetails.impact.consultations}
                    </p>
                    <p className="text-muted-foreground mt-2">Consultations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* CTA Card */}
              <div className="bg-card rounded-2xl p-8 border border-border/50 sticky top-24">
                {/* Organizer */}
                <div className="mb-8 pb-8 border-b border-border/50">
                  <p className="text-muted-foreground text-sm font-semibold mb-4">ORGANIZED BY</p>
                  <div className="flex items-center gap-3">
                    <img
                      src={eventDetails.organizer.image || "/placeholder.svg"}
                      alt={eventDetails.organizer.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-accent"
                    />
                    <div>
                      <p className="font-bold text-primary flex items-center gap-1">
                        {eventDetails.organizer.name}
                        {eventDetails.organizer.verified && <CheckCircle size={16} className="text-accent" />}
                      </p>
                      <p className="text-xs text-muted-foreground">Verified Organization</p>
                    </div>
                  </div>
                </div>

                {/* Registration Button */}
                <button
                  onClick={() => setIsRegistered(!isRegistered)}
                  className={`w-full py-4 rounded-lg font-bold text-lg mb-4 transition-all hover:scale-105 ${
                    isRegistered
                      ? 'bg-green-500/20 text-green-500 border-2 border-green-500'
                      : 'bg-gradient-primary text-white hover:shadow-lg'
                  }`}
                >
                  {isRegistered ? '✓ Registered' : 'Register Now'}
                </button>

                {/* Action Buttons */}
                <div className="flex gap-3 mb-6">
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={`flex-1 py-2 rounded-lg font-semibold transition-all border ${
                      isFavorite
                        ? 'bg-accent/20 border-accent text-accent'
                        : 'bg-primary/10 border-primary/20 text-primary hover:border-primary/50'
                    }`}
                  >
                    <Heart size={18} fill={isFavorite ? 'currentColor' : 'none'} className="mx-auto" />
                  </button>
                  <button className="flex-1 py-2 rounded-lg font-semibold bg-primary/10 border border-primary/20 text-primary hover:border-primary/50 transition-all flex items-center justify-center gap-2">
                    <Share2 size={18} />
                    Share
                  </button>
                </div>

                {/* Info Card */}
                <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-3">
                    <span className="font-bold text-primary">Early Bird Bonus:</span> Register by Dec 12th to get a special volunteer kit!
                  </p>
                </div>
              </div>

              {/* Related Events */}
              <div className="mt-8">
                <h4 className="text-lg font-bold text-primary mb-4">Related Events</h4>
                <div className="space-y-3">
                  {eventDetails.relatedEvents.map((event) => (
                    <Link
                      key={event.id}
                      href={`/events/${event.id}`}
                      className="bg-card p-4 rounded-lg border border-border/50 hover:border-accent/50 transition-all hover:shadow-lg group"
                    >
                      <p className="font-semibold text-primary group-hover:text-accent transition-colors">
                        {event.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {event.participants} volunteers
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
