'use client'

import React from 'react'
import Link from 'next/link'
import { Calendar, MapPin, Users, Edit, Trash2, Plus } from 'lucide-react'

const events = [
  {
    id: 1,
    title: 'Community Garden Cleanup',
    date: '2024-12-15',
    time: '09:00 AM',
    location: 'Downtown Park',
    volunteers: '24/30',
    status: 'upcoming',
  },
  {
    id: 2,
    title: 'Food Bank Organization',
    date: '2024-12-20',
    time: '10:00 AM',
    location: 'City Food Bank',
    volunteers: '18/25',
    status: 'upcoming',
  },
  {
    id: 3,
    title: 'Animal Shelter Support',
    date: '2024-12-08',
    time: '02:00 PM',
    location: 'City Animal Shelter',
    volunteers: '12/20',
    status: 'completed',
  },
]

export default function OrganizationEventsPage() {
  return (
    <div className="p-4 sm:p-8">
      <div className="animate-fade-up">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-primary mb-2">My Events</h1>
            <p className="text-muted-foreground text-lg">Create and manage your volunteer events</p>
          </div>
          <Link
            href="/organization/events/create"
            className="bg-accent text-accent-foreground px-6 py-3 rounded-lg hover:bg-accent/90 transition-all font-semibold flex items-center gap-2"
          >
            <Plus size={20} />
            Create Event
          </Link>
        </div>

        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all animate-zoom-in"
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-primary mb-3">{event.title}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {new Date(event.date).toLocaleDateString()} at {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} />
                      {event.volunteers} Volunteers
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-foreground">Volunteer Registration</span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          event.status === 'upcoming'
                            ? 'bg-accent/20 text-accent'
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {event.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div
                        className="bg-primary h-3 rounded-full"
                        style={{ width: `${(parseInt(event.volunteers) / 30) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2">
                  <Link
                    href={`/organization/events/${event.id}/edit`}
                    className="p-3 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-all"
                  >
                    <Edit size={20} />
                  </Link>
                  <button className="p-3 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500/20 transition-all">
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
