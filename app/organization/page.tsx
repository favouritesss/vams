'use client'

import React from 'react'
import Link from 'next/link'
import { Calendar, Users, Clock, TrendingUp } from 'lucide-react'

const stats = [
  { label: 'Active Events', value: '8', icon: Calendar, color: 'accent' },
  { label: 'Total Volunteers', value: '156', icon: Users, color: 'primary' },
  { label: 'Total Hours', value: '1,240', icon: Clock, color: 'accent' },
  { label: 'Growth', value: '+23%', icon: TrendingUp, color: 'primary' },
]

const recentApplications = [
  {
    id: 1,
    volunteer: 'Sarah Johnson',
    event: 'Community Garden Cleanup',
    date: '2024-12-13',
    status: 'pending',
  },
  {
    id: 2,
    volunteer: 'Mike Chen',
    event: 'Food Bank Organization',
    date: '2024-12-12',
    status: 'pending',
  },
  {
    id: 3,
    volunteer: 'Emma Davis',
    event: 'Animal Shelter Support',
    date: '2024-12-11',
    status: 'approved',
  },
]

const upcomingEvents = [
  {
    id: 1,
    title: 'Community Garden Cleanup',
    date: '2024-12-15',
    volunteers: '24/30',
  },
  {
    id: 2,
    title: 'Food Bank Organization',
    date: '2024-12-20',
    volunteers: '18/25',
  },
]

export default function OrganizationDashboard() {
  return (
    <div className="p-4 sm:p-8 space-y-8">
      {/* Welcome Header */}
      <div className="animate-fade-up">
        <h1 className="text-4xl font-bold text-primary mb-2">Welcome back, Community Care!</h1>
        <p className="text-muted-foreground text-lg">Manage your volunteer activities and team</p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-in">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          const bgClass = stat.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'
          return (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${bgClass} mb-4`}>
                <Icon size={24} />
              </div>
              <p className="text-muted-foreground text-sm mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
            </div>
          )
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Applications */}
        <div className="lg:col-span-2">
          <div className="bg-card border border-border rounded-xl p-6 animate-zoom-in">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-primary">Recent Applications</h2>
              <Link
                href="/organization/volunteers"
                className="text-primary hover:text-primary/80 transition-colors font-semibold"
              >
                View All
              </Link>
            </div>

            <div className="space-y-4">
              {recentApplications.map((app) => (
                <div
                  key={app.id}
                  className="border border-border rounded-lg p-4 hover:bg-primary/5 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-foreground">{app.volunteer}</h3>
                      <p className="text-sm text-muted-foreground">{app.event}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        app.status === 'approved'
                          ? 'bg-primary/20 text-primary'
                          : 'bg-accent/20 text-accent'
                      }`}
                    >
                      {app.status === 'approved' ? 'Approved' : 'Pending'}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Applied on {new Date(app.date).toLocaleDateString()}
                  </p>
                  {app.status === 'pending' && (
                    <div className="flex gap-2 mt-3">
                      <button className="flex-1 text-sm bg-primary text-primary-foreground py-2 rounded hover:bg-primary/90 transition-all font-semibold">
                        Approve
                      </button>
                      <button className="flex-1 text-sm border border-primary text-primary py-2 rounded hover:bg-primary/10 transition-all font-semibold">
                        Decline
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-6 animate-zoom-in">
            <h3 className="text-lg font-bold text-primary mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link
                href="/organization/events/create"
                className="block bg-accent text-accent-foreground px-4 py-3 rounded-lg hover:bg-accent/90 transition-all text-center font-semibold"
              >
                Create Event
              </Link>
              <Link
                href="/organization/volunteers"
                className="block border border-accent text-accent px-4 py-3 rounded-lg hover:bg-accent/10 transition-all text-center font-semibold"
              >
                Manage Volunteers
              </Link>
              <Link
                href="/organization/settings"
                className="block border border-primary text-primary px-4 py-3 rounded-lg hover:bg-primary/10 transition-all text-center font-semibold"
              >
                Organization Settings
              </Link>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-card border border-border rounded-xl p-6 animate-zoom-in">
            <h3 className="text-lg font-bold text-primary mb-4">Upcoming Events</h3>
            <div className="space-y-3">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="border border-border rounded-lg p-3">
                  <p className="font-semibold text-foreground text-sm">{event.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(event.date).toLocaleDateString()}
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-xs font-semibold text-muted-foreground">
                      {event.volunteers} registered
                    </span>
                    <div className="w-16 bg-muted rounded-full h-2">
                      <div
                        className="bg-accent h-2 rounded-full"
                        style={{ width: `${(parseInt(event.volunteers) / 30) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
