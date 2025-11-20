'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Clock, Calendar, Award, Users, CheckCircle } from 'lucide-react'

interface User {
  name: string
  email: string
  userType: string
}

export default function VolunteerDashboard() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const cookie = document.cookie
      .split('; ')
      .find(row => row.startsWith('session_user='))
    if (cookie) {
      const value = cookie.split('=')[1]
      setUser(JSON.parse(decodeURIComponent(value)))
    }
  }, [])

  const stats = [
    { label: 'Total Hours', value: '48', icon: Clock, color: 'primary' },
    { label: 'Events Attended', value: '12', icon: Calendar, color: 'accent' },
    { label: 'Certificates', value: '3', icon: Award, color: 'primary' },
    { label: 'People Helped', value: '156', icon: Users, color: 'accent' },
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: 'Community Garden Cleanup',
      date: '2024-12-15',
      time: '09:00 AM',
      location: 'Downtown Park',
      status: 'registered',
    },
    {
      id: 2,
      title: 'Food Bank Organization',
      date: '2024-12-20',
      time: '10:00 AM',
      location: 'City Food Bank',
      status: 'registered',
    },
    {
      id: 3,
      title: 'Youth Mentorship',
      date: '2024-12-28',
      time: '02:00 PM',
      location: 'Community Center',
      status: 'interested',
    },
  ]

  const recentActivity = [
    { date: '2024-12-01', activity: 'Completed 8 hours at Community Garden', icon: CheckCircle },
    { date: '2024-11-28', activity: 'Earned Certificate of Service', icon: Award },
    { date: '2024-11-20', activity: 'Registered for Food Bank event', icon: Calendar },
  ]

  return (
    <div className="p-4 sm:p-8 space-y-8">
      {/* Welcome Header */}
      <div className="animate-fade-up">
        <h1 className="text-4xl font-bold text-primary mb-2">
          Welcome back, {user?.name || 'Guest'}!
        </h1>
        <p className="text-muted-foreground text-lg">Here's your volunteer activity summary</p>
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
        {/* Upcoming Events */}
        <div className="lg:col-span-2">
          <div className="bg-card border border-border rounded-xl p-6 animate-zoom-in">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-primary">Upcoming Events</h2>
              <Link
                href="/volunteer/events"
                className="text-primary hover:text-primary/80 transition-colors font-semibold"
              >
                View All
              </Link>
            </div>

            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="border border-border rounded-lg p-4 hover:bg-primary/5 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-foreground">{event.title}</h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        event.status === 'registered'
                          ? 'bg-accent/20 text-accent'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {event.status === 'registered' ? 'Registered' : 'Interested'}
                    </span>
                  </div>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>
                      <strong>Date:</strong> {new Date(event.date).toLocaleDateString()} at {event.time}
                    </p>
                    <p>
                      <strong>Location:</strong> {event.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions & Recent Activity */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-card border border-border rounded-xl p-6 animate-zoom-in">
            <h3 className="text-lg font-bold text-primary mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link
                href="/events"
                className="block bg-primary text-primary-foreground px-4 py-3 rounded-lg hover:bg-primary/90 transition-all text-center font-semibold"
              >
                Find Events
              </Link>
              <Link
                href="/volunteer/certificates"
                className="block border border-primary text-primary px-4 py-3 rounded-lg hover:bg-primary/10 transition-all text-center font-semibold"
              >
                My Certificates
              </Link>
              <Link
                href="/volunteer/profile"
                className="block border border-primary text-primary px-4 py-3 rounded-lg hover:bg-primary/10 transition-all text-center font-semibold"
              >
                Edit Profile
              </Link>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-card border border-border rounded-xl p-6 animate-zoom-in">
            <h3 className="text-lg font-bold text-primary mb-4">Recent Activity</h3>
            <div className="space-y-3">
              {recentActivity.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 text-accent">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.activity}</p>
                      <p className="text-xs text-muted-foreground">{item.date}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="bg-card border border-border rounded-xl p-6 animate-zoom-in">
        <h2 className="text-2xl font-bold text-primary mb-6">Your Goals This Month</h2>
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-foreground">Volunteer Hours Target</span>
              <span className="text-sm text-muted-foreground">48 / 50 hours</span>
            </div>
            <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
              <div className="bg-primary h-3 rounded-full" style={{ width: '96%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-foreground">Events Attended</span>
              <span className="text-sm text-muted-foreground">12 / 15 events</span>
            </div>
            <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
              <div className="bg-accent h-3 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
