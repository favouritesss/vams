'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Calendar, MapPin, Users, Clock } from 'lucide-react'

export default function CreateEventPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    maxVolunteers: '',
    category: '',
    image: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Event created:', formData)
  }

  return (
    <div className="p-4 sm:p-8">
      <div className="max-w-3xl animate-fade-up">
        <Link
          href="/organization/events"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-semibold"
        >
          <ArrowLeft size={20} />
          Back to Events
        </Link>

        <h1 className="text-4xl font-bold text-primary mb-8">Create New Event</h1>

        <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-8 space-y-6">
          {/* Event Title */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Event Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="e.g., Community Garden Cleanup"
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Event Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Describe your event..."
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background resize-none"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
            >
              <option value="">Select a category</option>
              <option value="environment">Environment</option>
              <option value="community">Community</option>
              <option value="animals">Animals</option>
              <option value="education">Education</option>
              <option value="health">Health</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Date */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <Calendar size={16} />
                Event Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
              />
            </div>

            {/* Time */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <Clock size={16} />
                Start Time
              </label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Location */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <MapPin size={16} />
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                placeholder="Event address"
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
              />
            </div>

            {/* Max Volunteers */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                <Users size={16} />
                Max Volunteers
              </label>
              <input
                type="number"
                name="maxVolunteers"
                value={formData.maxVolunteers}
                onChange={handleChange}
                required
                min="1"
                placeholder="30"
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
              />
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-accent text-accent-foreground py-3 rounded-lg hover:bg-accent/90 transition-all font-semibold"
            >
              Create Event
            </button>
            <Link
              href="/organization/events"
              className="flex-1 border border-primary text-primary py-3 rounded-lg hover:bg-primary/10 transition-all text-center font-semibold"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
