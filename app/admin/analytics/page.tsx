'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, TrendingUp, TrendingDown, Users, Calendar, Clock } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts'

const volunteerGrowthData = [
  { month: 'Jan', volunteers: 280, hours: 450 },
  { month: 'Feb', volunteers: 320, hours: 520 },
  { month: 'Mar', volunteers: 380, hours: 680 },
  { month: 'Apr', volunteers: 420, hours: 750 },
  { month: 'May', volunteers: 480, hours: 920 },
  { month: 'Jun', volunteers: 550, hours: 1200 },
  { month: 'Jul', volunteers: 620, hours: 1450 },
  { month: 'Aug', volunteers: 700, hours: 1680 },
  { month: 'Sep', volunteers: 780, hours: 1920 },
  { month: 'Oct', volunteers: 850, hours: 2150 },
  { month: 'Nov', volunteers: 920, hours: 2380 },
  { month: 'Dec', volunteers: 1000, hours: 2650 },
]

const eventCategoryData = [
  { name: 'Education', value: 85, color: '#06b6d4' },
  { name: 'Healthcare', value: 62, color: '#3b82f6' },
  { name: 'Environment', value: 48, color: '#8b5cf6' },
  { name: 'Community', value: 75, color: '#f59e0b' },
  { name: 'Humanitarian', value: 55, color: '#ec4899' },
]

const organizationStats = [
  { name: 'Active', count: 42 },
  { name: 'Pending', count: 6 },
  { name: 'Inactive', count: 8 },
  { name: 'Suspended', count: 2 },
]

export default function AdminAnalyticsPage() {
  return (
    <div className="p-4 sm:p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 animate-fade-up">
        <div>
          <h1 className="text-4xl font-bold text-primary mb-2">Analytics Dashboard</h1>
          <p className="text-muted-foreground text-lg">System-wide performance metrics and insights</p>
        </div>
        <Link
          href="/admin"
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Dashboard
        </Link>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-4 gap-6 animate-slide-in">
        <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Users className="text-primary" size={24} />
            </div>
            <TrendingUp className="text-primary" size={20} />
          </div>
          <p className="text-muted-foreground text-sm mb-1">Total Volunteers</p>
          <p className="text-3xl font-bold text-foreground">1,247</p>
          <p className="text-xs text-primary mt-2">+12% this month</p>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
              <Calendar className="text-accent" size={24} />
            </div>
            <TrendingUp className="text-accent" size={20} />
          </div>
          <p className="text-muted-foreground text-sm mb-1">Total Events</p>
          <p className="text-3xl font-bold text-foreground">325</p>
          <p className="text-xs text-accent mt-2">+28 this month</p>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
              <Clock className="text-secondary" size={24} />
            </div>
            <TrendingUp className="text-secondary" size={20} />
          </div>
          <p className="text-muted-foreground text-sm mb-1">Total Hours</p>
          <p className="text-3xl font-bold text-foreground">12,540</p>
          <p className="text-xs text-secondary mt-2">+450 this month</p>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
              <Users className="text-purple-500" size={24} />
            </div>
            <TrendingDown className="text-red-500" size={20} />
          </div>
          <p className="text-muted-foreground text-sm mb-1">Organizations</p>
          <p className="text-3xl font-bold text-foreground">48</p>
          <p className="text-xs text-purple-500 mt-2">6 pending approval</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Volunteer Growth Chart */}
        <div className="bg-card border border-border rounded-xl p-6 animate-zoom-in">
          <h3 className="text-xl font-bold text-primary mb-6">Volunteer Growth & Hours Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={volunteerGrowthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="month" stroke="#cbd5e1" />
              <YAxis stroke="#cbd5e1" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}
                labelStyle={{ color: '#f8fafc' }}
              />
              <Legend />
              <Line type="monotone" dataKey="volunteers" stroke="#06b6d4" strokeWidth={2} dot={{ r: 4 }} name="Volunteers" />
              <Line type="monotone" dataKey="hours" stroke="#f59e0b" strokeWidth={2} dot={{ r: 4 }} name="Hours" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Event Categories Chart */}
        <div className="bg-card border border-border rounded-xl p-6 animate-zoom-in">
          <h3 className="text-xl font-bold text-primary mb-6">Events by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={eventCategoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {eventCategoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}
                labelStyle={{ color: '#f8fafc' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Organization Status & Detailed Stats */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Organization Status */}
        <div className="bg-card border border-border rounded-xl p-6 animate-zoom-in">
          <h3 className="text-xl font-bold text-primary mb-6">Organization Status Breakdown</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={organizationStats}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="name" stroke="#cbd5e1" />
              <YAxis stroke="#cbd5e1" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}
                labelStyle={{ color: '#f8fafc' }}
              />
              <Bar dataKey="count" fill="#06b6d4" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Performance Metrics */}
        <div className="bg-card border border-border rounded-xl p-6 animate-zoom-in space-y-4">
          <h3 className="text-xl font-bold text-primary mb-6">Performance Metrics</h3>
          
          <div className="border border-border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-foreground font-semibold">Platform Uptime</span>
              <span className="text-primary text-lg font-bold">99.9%</span>
            </div>
            <div className="w-full bg-card rounded-full h-2 overflow-hidden">
              <div className="bg-primary h-full rounded-full" style={{ width: '99.9%' }} />
            </div>
          </div>

          <div className="border border-border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-foreground font-semibold">Volunteer Retention</span>
              <span className="text-secondary text-lg font-bold">87%</span>
            </div>
            <div className="w-full bg-card rounded-full h-2 overflow-hidden">
              <div className="bg-secondary h-full rounded-full" style={{ width: '87%' }} />
            </div>
          </div>

          <div className="border border-border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-foreground font-semibold">Event Completion Rate</span>
              <span className="text-accent text-lg font-bold">94%</span>
            </div>
            <div className="w-full bg-card rounded-full h-2 overflow-hidden">
              <div className="bg-accent h-full rounded-full" style={{ width: '94%' }} />
            </div>
          </div>

          <div className="border border-border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-foreground font-semibold">Volunteer Satisfaction</span>
              <span className="text-purple-500 text-lg font-bold">92%</span>
            </div>
            <div className="w-full bg-card rounded-full h-2 overflow-hidden">
              <div className="bg-purple-500 h-full rounded-full" style={{ width: '92%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Statistics Table */}
      <div className="bg-card border border-border rounded-xl p-6 animate-zoom-in overflow-x-auto">
        <h3 className="text-xl font-bold text-primary mb-6">Detailed Monthly Statistics</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 text-muted-foreground font-semibold">Month</th>
              <th className="text-left py-3 px-4 text-muted-foreground font-semibold">Volunteers</th>
              <th className="text-left py-3 px-4 text-muted-foreground font-semibold">Events</th>
              <th className="text-left py-3 px-4 text-muted-foreground font-semibold">Hours</th>
              <th className="text-left py-3 px-4 text-muted-foreground font-semibold">Avg Hours/Person</th>
            </tr>
          </thead>
          <tbody>
            {volunteerGrowthData.map((row, index) => (
              <tr key={index} className="border-b border-border/50 hover:bg-primary/5 transition-colors">
                <td className="py-3 px-4 text-foreground font-semibold">{row.month} 2024</td>
                <td className="py-3 px-4 text-foreground">{index * 50 + 280}</td>
                <td className="py-3 px-4 text-foreground">{index * 2 + 15}</td>
                <td className="py-3 px-4 text-foreground">{row.hours}</td>
                <td className="py-3 px-4 text-primary font-semibold">{(row.hours / (index * 50 + 280)).toFixed(1)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
