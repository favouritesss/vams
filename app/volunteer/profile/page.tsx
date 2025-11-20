'use client'

import React, { useState } from 'react'
import { Camera, Save, X } from 'lucide-react'

export default function VolunteerProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    gender: 'Male',
    bio: 'Passionate about community service and environmental conservation.',
    skills: 'Gardening, Teaching, Mentoring',
    availability: 'Weekends and evenings',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSave = () => {
    console.log('Profile updated:', formData)
    setIsEditing(false)
  }

  return (
    <div className="p-4 sm:p-8">
      <div className="max-w-3xl animate-fade-up">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-primary">My Profile</h1>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-semibold"
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>

        {/* Profile Picture */}
        <div className="bg-card border border-border rounded-xl p-8 mb-6 text-center">
          <div className="relative inline-block mb-4">
            <img
              src="/placeholder.svg?key=xyk2l"
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-accent/30"
            />
            {isEditing && (
              <button className="absolute bottom-0 right-0 bg-accent text-accent-foreground p-3 rounded-full hover:bg-accent/90 transition-all">
                <Camera size={20} />
              </button>
            )}
          </div>
          <h2 className="text-2xl font-bold text-foreground">{formData.fullName}</h2>
          <p className="text-muted-foreground">Volunteer Member since 2024</p>
        </div>

        {/* Profile Form */}
        <div className="bg-card border border-border rounded-xl p-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Full Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
                />
              ) : (
                <p className="text-foreground font-semibold py-3">{formData.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Email
              </label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
                />
              ) : (
                <p className="text-foreground font-semibold py-3">{formData.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Phone
              </label>
              {isEditing ? (
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
                />
              ) : (
                <p className="text-foreground font-semibold py-3">{formData.phone}</p>
              )}
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Gender
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
                />
              ) : (
                <p className="text-foreground font-semibold py-3">{formData.gender}</p>
              )}
            </div>

            {/* Skills */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-foreground mb-2">
                Skills
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="e.g., Gardening, Teaching, Mentoring"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
                />
              ) : (
                <p className="text-foreground font-semibold py-3">{formData.skills}</p>
              )}
            </div>

            {/* Availability */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-foreground mb-2">
                Availability
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  placeholder="e.g., Weekends and evenings"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
                />
              ) : (
                <p className="text-foreground font-semibold py-3">{formData.availability}</p>
              )}
            </div>

            {/* Bio */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-foreground mb-2">
                Bio
              </label>
              {isEditing ? (
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background resize-none"
                />
              ) : (
                <p className="text-foreground font-semibold py-3">{formData.bio}</p>
              )}
            </div>
          </div>

          {/* Save Button */}
          {isEditing && (
            <div className="flex gap-4 mt-8">
              <button
                onClick={handleSave}
                className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-all font-semibold"
              >
                <Save size={20} />
                Save Changes
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
