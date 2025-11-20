'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Search, Filter, Clock, Award, CheckCircle } from 'lucide-react'

const volunteers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    hours: 48,
    events: 6,
    status: 'active',
    image: '/placeholder.svg?key=fk5pi',
  },
  {
    id: 2,
    name: 'Michael Chen',
    email: 'michael@example.com',
    hours: 32,
    events: 4,
    status: 'active',
    image: '/placeholder.svg?key=xypwe',
  },
  {
    id: 3,
    name: 'Emma Davis',
    email: 'emma@example.com',
    hours: 24,
    events: 3,
    status: 'inactive',
    image: '/placeholder.svg?key=75erc',
  },
]

export default function VolunteersPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredVolunteers = volunteers.filter((vol) =>
    vol.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vol.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-4 sm:p-8">
      <div className="animate-fade-up">
        <h1 className="text-4xl font-bold text-primary mb-2">My Volunteers</h1>
        <p className="text-muted-foreground text-lg mb-8">Manage and track your volunteer team</p>

        {/* Search */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8">
          <div className="relative">
            <Search size={20} className="absolute left-3 top-3 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search volunteers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
            />
          </div>
        </div>

        {/* Volunteers List */}
        <div className="space-y-4">
          {filteredVolunteers.map((volunteer) => (
            <div
              key={volunteer.id}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all animate-zoom-in"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <img
                    src={volunteer.image || "/placeholder.svg"}
                    alt={volunteer.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{volunteer.name}</h3>
                    <p className="text-sm text-muted-foreground">{volunteer.email}</p>
                  </div>
                </div>
                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    volunteer.status === 'active'
                      ? 'bg-primary/20 text-primary'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {volunteer.status === 'active' ? 'Active' : 'Inactive'}
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Clock size={18} className="text-primary" />
                  <span>
                    <strong>{volunteer.hours}</strong> hours logged
                  </span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Award size={18} className="text-accent" />
                  <span>
                    <strong>{volunteer.events}</strong> events attended
                  </span>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <Link
                  href={`/organization/volunteers/${volunteer.id}`}
                  className="flex-1 bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-all text-center font-semibold"
                >
                  View Profile
                </Link>
                <button className="flex-1 border border-primary text-primary py-2 rounded-lg hover:bg-primary/10 transition-all font-semibold">
                  Send Message
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredVolunteers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No volunteers found.</p>
          </div>
        )}
      </div>
    </div>
  )
}
