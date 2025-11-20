'use client'

import React from 'react'
import Link from 'next/link'
import { Users, Building2, Calendar, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react'

const stats = [
  { label: 'Total Volunteers', value: '1,247', icon: Users, color: 'primary' },
  { label: 'Organizations', value: '48', icon: Building2, color: 'accent' },
  { label: 'Active Events', value: '23', icon: Calendar, color: 'primary' },
  { label: 'Total Hours', value: '12,540', icon: TrendingUp, color: 'accent' },
]

const pendingApprovals = [
  {
    id: 1,
    type: 'organization',
    name: 'Green Community Initiative',
    date: '2024-12-13',
  },
  {
    id: 2,
    type: 'event',
    name: 'Beach Cleanup Drive',
    date: '2024-12-12',
  },
  {
    id: 3,
    type: 'organization',
    name: 'Tech for Good',
    date: '2024-12-11',
  },
]

const recentActivity = [
  {
    id: 1,
    action: 'New volunteer registered',
    details: 'Sarah Johnson joined VAMS',
    timestamp: '2 hours ago',
    icon: CheckCircle,
  },
  {
    id: 2,
    action: 'Event created',
    details: 'Community Care created "Garden Cleanup"',
    timestamp: '4 hours ago',
    icon: Calendar,
  },
  {
    id: 3,
    action: 'Organization approved',
    details: 'Tech Volunteers was approved',
    timestamp: '1 day ago',
    icon: CheckCircle,
  },
]

export default function AdminDashboard() {
  return (
    <div className="p-4 sm:p-8 space-y-8">
      {/* Welcome Header */}
      <div className="animate-fade-up">
        <h1 className="text-4xl font-bold text-primary mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground text-lg">System overview and management</p>
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
        {/* Pending Approvals */}
        <div className="lg:col-span-2">
          <div className="bg-card border border-border rounded-xl p-6 animate-zoom-in">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <AlertCircle className="text-accent" size={24} />
                <h2 className="text-2xl font-bold text-primary">Pending Approvals</h2>
              </div>
              <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                {pendingApprovals.length}
              </span>
            </div>

            <div className="space-y-4">
              {pendingApprovals.map((item) => (
                <div
                  key={item.id}
                  className="border border-border rounded-lg p-4 hover:bg-primary/5 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-foreground">{item.name}</h3>
                      <p className="text-sm text-muted-foreground capitalize">
                        Pending {item.type} approval
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {new Date(item.date).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <button className="flex-1 text-sm bg-primary text-primary-foreground py-2 rounded hover:bg-primary/90 transition-all font-semibold">
                      Approve
                    </button>
                    <button className="flex-1 text-sm border border-primary text-primary py-2 rounded hover:bg-primary/10 transition-all font-semibold">
                      Decline
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/admin/approvals"
              className="block text-center mt-6 text-primary hover:text-primary/80 transition-colors font-semibold"
            >
              View All Pending Approvals
            </Link>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="space-y-6">
          {/* System Status */}
          <div className="bg-card border border-border rounded-xl p-6 animate-zoom-in">
            <h3 className="text-lg font-bold text-primary mb-4">System Status</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">API Status</span>
                <span className="text-xs font-semibold bg-primary/20 text-primary px-2 py-1 rounded">
                  Operational
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Database</span>
                <span className="text-xs font-semibold bg-primary/20 text-primary px-2 py-1 rounded">
                  Healthy
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Uptime</span>
                <span className="text-xs font-semibold bg-primary/20 text-primary px-2 py-1 rounded">
                  99.9%
                </span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-card border border-border rounded-xl p-6 animate-zoom-in">
            <h3 className="text-lg font-bold text-primary mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link
                href="/admin/volunteers"
                className="block bg-primary text-primary-foreground px-4 py-3 rounded-lg hover:bg-primary/90 transition-all text-center font-semibold"
              >
                Manage Volunteers
              </Link>
              <Link
                href="/admin/organizations"
                className="block border border-accent text-accent px-4 py-3 rounded-lg hover:bg-accent/10 transition-all text-center font-semibold"
              >
                Manage Organizations
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-card border border-border rounded-xl p-6 animate-zoom-in">
        <h2 className="text-2xl font-bold text-primary mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivity.map((activity) => {
            const Icon = activity.icon
            return (
              <div key={activity.id} className="flex items-start gap-4 pb-4 border-b border-border last:border-0">
                <div className="mt-1 text-primary">
                  <Icon size={20} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.details}</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {activity.timestamp}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
