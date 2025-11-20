'use client'

import React, { useState } from 'react'
import { Search, Filter, Trash2, Eye } from 'lucide-react'

const volunteers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    joined: '2024-06-15',
    hours: 48,
    status: 'active',
  },
  {
    id: 2,
    name: 'Michael Chen',
    email: 'michael@example.com',
    joined: '2024-08-20',
    hours: 32,
    status: 'active',
  },
  {
    id: 3,
    name: 'Emma Davis',
    email: 'emma@example.com',
    joined: '2024-03-10',
    hours: 156,
    status: 'active',
  },
  {
    id: 4,
    name: 'James Wilson',
    email: 'james@example.com',
    joined: '2024-09-05',
    hours: 24,
    status: 'inactive',
  },
]

export default function AdminVolunteersPage() {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredVolunteers = volunteers.filter((vol) =>
    vol.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vol.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-4 sm:p-8">
      <div className="animate-fade-up">
        <h1 className="text-4xl font-bold text-primary mb-2">Manage Volunteers</h1>
        <p className="text-muted-foreground text-lg mb-8">View and manage all volunteer accounts</p>

        {/* Search and Filter */}
        <div className="bg-card border border-border rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
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
        </div>

        {/* Volunteers Table */}
        <div className="bg-card border border-border rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-primary/5 border-b border-border">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Joined</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Hours</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredVolunteers.map((vol) => (
                  <tr key={vol.id} className="border-b border-border hover:bg-primary/5 transition-colors">
                    <td className="px-6 py-4 font-semibold text-foreground">{vol.name}</td>
                    <td className="px-6 py-4 text-muted-foreground">{vol.email}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {new Date(vol.joined).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 font-semibold text-foreground">{vol.hours}h</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          vol.status === 'active'
                            ? 'bg-primary/20 text-primary'
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {vol.status === 'active' ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-6 py-4 flex justify-end gap-2">
                      <button className="p-2 hover:bg-primary/10 rounded-lg transition-all text-primary">
                        <Eye size={18} />
                      </button>
                      <button className="p-2 hover:bg-red-500/10 rounded-lg transition-all text-red-500">
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
