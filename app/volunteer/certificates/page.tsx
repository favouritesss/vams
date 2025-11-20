'use client'

import React from 'react'
import { Download, Award } from 'lucide-react'

const certificates = [
  {
    id: 1,
    title: 'Community Service Excellence',
    date: '2024-11-15',
    hours: 40,
    event: 'Community Garden Cleanup',
  },
  {
    id: 2,
    title: 'Environmental Champion',
    date: '2024-10-30',
    hours: 32,
    event: 'Park Restoration Project',
  },
  {
    id: 3,
    title: 'Volunteer Recognition',
    date: '2024-10-01',
    hours: 28,
    event: 'Food Bank Organization',
  },
]

export default function VolunteerCertificates() {
  return (
    <div className="p-4 sm:p-8">
      <div className="animate-fade-up">
        <h1 className="text-4xl font-bold text-primary mb-2">My Certificates</h1>
        <p className="text-muted-foreground text-lg mb-8">Your earned recognition and achievements</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105 animate-zoom-in"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Award size={24} className="text-accent" />
                </div>
                <button className="text-accent hover:text-accent/80 transition-colors">
                  <Download size={20} />
                </button>
              </div>
              <h3 className="text-lg font-bold text-primary mb-3">{cert.title}</h3>
              <div className="space-y-2 text-sm text-muted-foreground mb-4">
                <p>
                  <strong>Event:</strong> {cert.event}
                </p>
                <p>
                  <strong>Earned:</strong> {new Date(cert.date).toLocaleDateString()}
                </p>
                <p>
                  <strong>Hours:</strong> {cert.hours} hours
                </p>
              </div>
              <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-all font-semibold">
                View Certificate
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
