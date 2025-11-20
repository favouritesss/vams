'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Calendar, MapPin, Users, Search, Filter, ChevronRight } from 'lucide-react'

const allEvents = [
  {
    id: 1,
    title: 'Community Garden Cleanup',
    date: '2024-12-15',
    time: '09:00 AM',
    location: 'Downtown Park',
    category: 'Environment',
    participants: 24,
    image: '/images/nigerian-organization-team-management-collaboratio.jpg',
    description: 'Join us in beautifying our community garden and learning about sustainable living practices.',
  },
  {
    id: 2,
    title: 'Food Bank Organization',
    date: '2024-12-20',
    time: '10:00 AM',
    location: 'City Food Bank',
    category: 'Community',
    participants: 18,
    image: '/images/nigerian-volunteers-helping-community-service.jpg',
    description: 'Help organize and distribute food to families in need.',
  },
  {
    id: 3,
    title: 'Animal Shelter Support',
    date: '2024-12-22',
    time: '02:00 PM',
    location: 'City Animal Shelter',
    category: 'Animals',
    participants: 12,
    image: '/images/nigerian-youth-achieving-success-growth.jpg',
    description: 'Assist with animal care, cleaning, and socialization at the local shelter.',
  },
  {
    id: 4,
    title: 'Youth Mentorship Program',
    date: '2024-12-28',
    time: '03:00 PM',
    location: 'Community Center',
    category: 'Education',
    participants: 15,
    image: '/images/growth-achievement-community.jpg',
    description: 'Mentor young students and help them achieve their academic goals.',
  },
  {
    id: 5,
    title: 'Senior Care Visits',
    date: '2024-12-30',
    time: '11:00 AM',
    location: 'Senior Living Center',
    category: 'Health',
    participants: 8,
    image: '/images/food-bank-volunteers.jpg',
    description: 'Spend time with seniors, listen to their stories, and provide companionship.',
  },
  {
    id: 6,
    title: 'Park Restoration Project',
    date: '2025-01-10',
    time: '08:00 AM',
    location: 'Riverside Park',
    category: 'Environment',
    participants: 32,
    image: '/images/team-organization-management.jpg',
    description: 'Help restore native plants and clean up the park ecosystem.',
  },
];

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Environment', 'Community', 'Animals', 'Education', 'Health']

  const filteredEvents = allEvents.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 text-balance">
            Discover Events
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find and join volunteer opportunities that match your interests and schedule
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-12 animate-slide-in">
          <div className="mb-6">
            <div className="relative">
              <Search size={24} className="absolute left-4 top-3 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search events by title or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 text-lg border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
              <Filter size={18} />
              Filter by Category
            </h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground hover:bg-primary/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredEvents.map((event) => (
            <Link
              key={event.id}
              href={`/events/${event.id}`}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-2xl transition-all hover:scale-105 hover:border-primary/50 animate-zoom-in"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {event.category}
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-primary/80 transition-colors line-clamp-2">
                  {event.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {event.description}
                </p>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-primary" />
                    {new Date(event.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                    })} at {event.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-primary" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-primary" />
                    {event.participants} volunteers registered
                  </div>
                </div>
                <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg group-hover:bg-primary/90 transition-all font-semibold flex items-center justify-center gap-2">
                  View Details
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </Link>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">No events found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('All')
              }}
              className="mt-4 text-primary hover:text-primary/80 font-semibold underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Events Count */}
        <div className="text-center text-muted-foreground">
          <p>Showing {filteredEvents.length} of {allEvents.length} events</p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
