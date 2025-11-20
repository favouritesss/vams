'use client'

import React, { useState } from 'react'
import { Search, Calendar, MapPin, Users, CheckCircle, XCircle } from 'lucide-react'

const events = [
  {
    id: 1,
    title: 'Community Garden Cleanup',
    organization: 'Community Care',
    date: '2024-12-15',
    location: 'Downtown Park',
    volunteers: '24/30',
    status: 'approved',
  },
  {
    id: 2,
    title: 'Food Bank Organization',
    organization: 'Community Care',
    date: '2024-12-20',
    location: 'City Food Bank',
    volunteers: '18/25',
    status: 'approved',
  },
  {
    id: 3,
    title: 'Beach Cleanup Drive',
    organization: 'Green Initiative',
    date: '2024-12-22',
    location: 'Beach Area',
    volunteers: '15/40',
    status: 'pending',
  },
]

export default function AdminEventsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.organization.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-4 sm:p-8">
      <div className="animate-fade-up">
        <h1 className="text-4xl font-bold text-primary mb-2">Manage Events</h1>
        <p className="text-muted-foreground text-lg mb-8">Review and manage all system events</p>

        {/* Search */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8">
          <div className="relative">
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

        {/* Events Table */}
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-primary/5 border-b border-border">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Event</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Organization</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Volunteers</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredEvents.map((event) => (
                  <tr key={event.id} className="border-b border-border hover:bg-primary/5 transition-colors">
                    <td className="px-6 py-4 font-semibold text-foreground">{event.title}</td>
                    <td className="px-6 py-4 text-muted-foreground">{event.organization}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {new Date(event.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{event.volunteers}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 w-fit ${
                          event.status === 'approved'
                            ? 'bg-primary/20 text-primary'
                            : 'bg-accent/20 text-accent'
                        }`}
                      >
                        {event.status === 'approved' ? (
                          <>
                            <CheckCircle size={14} />
                            Approved
                          </>
                        ) : (
                          <>
                            <XCircle size={14} />
                            Pending
                          </>
                        )}
                      </span>
                    </td>
                    <td className="px-6 py-4 flex justify-end gap-2">
                      {event.status === 'pending' && (
                        <>
                          <button className="px-3 py-1 text-xs bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-all font-semibold">
                            Approve
                          </button>
                          <button className="px-3 py-1 text-xs border border-primary text-primary rounded hover:bg-primary/10 transition-all font-semibold">
                            Decline
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No events found.</p>
          </div>
        )}
      </div>
    </div>
  )
}
