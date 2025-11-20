'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Calendar, MapPin, Users, Search, Filter } from 'lucide-react'

const events = [
  {
    id: 1,
    title: 'Community Garden Cleanup',
    date: '2024-12-15',
    time: '09:00 AM',
    location: 'Downtown Park',
    category: 'Environment',
    participants: 24,
    image: '/placeholder.svg?key=n8dyd',
    registered: true,
  },
  {
    id: 2,
    title: 'Food Bank Organization',
    date: '2024-12-20',
    time: '10:00 AM',
    location: 'City Food Bank',
    category: 'Community',
    participants: 18,
    image: '/placeholder.svg?key=a3fcb',
    registered: true,
  },
  {
    id: 3,
    title: 'Animal Shelter Support',
    date: '2024-12-22',
    time: '02:00 PM',
    location: 'City Animal Shelter',
    category: 'Animals',
    participants: 12,
    image: '/placeholder.svg?key=pw1yc',
    registered: false,
  },
  {
    id: 4,
    title: 'Youth Mentorship Program',
    date: '2024-12-28',
    time: '03:00 PM',
    location: 'Community Center',
    category: 'Education',
    participants: 15,
    image: '/placeholder.svg?key=4t9bp',
    registered: false,
  },
]

export default function VolunteerEventsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Environment', 'Community', 'Animals', 'Education']

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="p-4 sm:p-8">
      <div className="animate-fade-up">
        <h1 className="text-4xl font-bold text-primary mb-2">Available Events</h1>
        <p className="text-muted-foreground text-lg mb-8">Find and register for volunteer opportunities</p>

        {/* Search and Filter */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search size={20} className="absolute left-3 top-3 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
              />
            </div>
          </div>

          {/* Category Filter */}
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

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all hover:scale-105 animate-zoom-in"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 flex gap-2">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {event.category}
                  </span>
                  {event.registered && (
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      Registered
                    </span>
                  )}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-primary mb-3">
                  {event.title}
                </h3>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {new Date(event.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })} at {event.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} />
                    {event.participants} volunteers
                  </div>
                </div>
                {event.registered ? (
                  <button className="w-full bg-muted text-foreground py-2 rounded-lg font-semibold cursor-default">
                    ✓ Already Registered
                  </button>
                ) : (
                  <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-all font-semibold">
                    Register Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No events found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  )
}
