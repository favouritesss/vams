'use client'

import React, { useState } from 'react'
import { Search, MapPin, Users, Edit, Trash2 } from 'lucide-react'

const organizations = [
  {
    id: 1,
    name: 'Community Care Foundation',
    contact: 'Jane Smith',
    email: 'jane@communitycare.org',
    location: 'Downtown, City',
    volunteers: 45,
    status: 'approved',
  },
  {
    id: 2,
    name: 'Green Initiative',
    contact: 'Tom Brown',
    email: 'tom@greeninitiative.org',
    location: 'East Side, City',
    volunteers: 28,
    status: 'approved',
  },
  {
    id: 3,
    name: 'Tech for Good',
    contact: 'Lisa Wong',
    email: 'lisa@techforgood.org',
    location: 'Tech Park, City',
    volunteers: 62,
    status: 'pending',
  },
]

export default function AdminOrganizationsPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredOrganizations = organizations.filter((org) =>
    org.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    org.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-4 sm:p-8">
      <div className="animate-fade-up">
        <h1 className="text-4xl font-bold text-primary mb-2">Manage Organizations</h1>
        <p className="text-muted-foreground text-lg mb-8">View and manage all registered organizations</p>

        {/* Search */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8">
          <div className="relative">
            <Search size={20} className="absolute left-3 top-3 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search organizations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
            />
          </div>
        </div>

        {/* Organizations Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredOrganizations.map((org) => (
            <div
              key={org.id}
              className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all animate-zoom-in"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-primary">{org.name}</h3>
                  <p className="text-sm text-muted-foreground">{org.contact}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    org.status === 'approved'
                      ? 'bg-primary/20 text-primary'
                      : 'bg-accent/20 text-accent'
                  }`}
                >
                  {org.status === 'approved' ? 'Approved' : 'Pending'}
                </span>
              </div>

              <div className="space-y-2 text-sm text-muted-foreground mb-4">
                <p className="truncate">{org.email}</p>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  {org.location}
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  {org.volunteers} volunteers
                </div>
              </div>

              <div className="flex gap-2">
                {org.status === 'pending' && (
                  <>
                    <button className="flex-1 bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-all text-sm font-semibold">
                      Approve
                    </button>
                    <button className="flex-1 border border-primary text-primary py-2 rounded-lg hover:bg-primary/10 transition-all text-sm font-semibold">
                      Decline
                    </button>
                  </>
                )}
                {org.status === 'approved' && (
                  <>
                    <button className="flex-1 p-2 hover:bg-primary/10 rounded-lg transition-all text-primary flex items-center justify-center gap-1">
                      <Edit size={16} />
                      Edit
                    </button>
                    <button className="flex-1 p-2 hover:bg-red-500/10 rounded-lg transition-all text-red-500 flex items-center justify-center gap-1">
                      <Trash2 size={16} />
                      Remove
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredOrganizations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No organizations found.</p>
          </div>
        )}
      </div>
    </div>
  )
}
