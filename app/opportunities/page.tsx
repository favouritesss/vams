'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Search, MapPin, Clock, Users, ChevronRight, Briefcase } from 'lucide-react'

const opportunities = [
  {
    id: 1,
    title: 'Community Education Tutor',
    organization: 'Lagos Education Initiative',
    description: 'Help underprivileged students with math, english, and science tutoring.',
    image: '/images/nigerian-teachers-tutoring-students-education-volu.jpg',
    location: 'Lagos, Nigeria',
    commitment: '5 hours/week',
    volunteers: 12,
    category: 'Education',
    skills: ['Teaching', 'Patience', 'Communication'],
    impact: '50+ students helped last year',
  },
  {
    id: 2,
    title: 'Healthcare Outreach Worker',
    organization: 'Medical Mission Nigeria',
    description: 'Provide healthcare education and support in rural communities.',
    image: '/images/nigerian-healthcare-volunteers-medical-outreach-cl.jpg',
    location: 'Rural Communities',
    commitment: '8 hours/week',
    volunteers: 8,
    category: 'Healthcare',
    skills: ['Healthcare Knowledge', 'Empathy', 'Teamwork'],
    impact: '200+ people screened monthly',
  },
  {
    id: 3,
    title: 'Environmental Conservation Lead',
    organization: 'Green Nigeria Foundation',
    description: 'Lead tree planting and environmental conservation initiatives.',
    image: '/images/nigerian-environmental-conservation-volunteers-tre.jpg',
    location: 'Multiple Locations',
    commitment: '6 hours/week',
    volunteers: 15,
    category: 'Environment',
    skills: ['Leadership', 'Environmental Awareness', 'Physical Fitness'],
    impact: '5000+ trees planted this year',
  },
  {
    id: 4,
    title: 'Youth Mentorship Coach',
    organization: 'Future Leaders Academy',
    description: 'Mentor young professionals and students for career development.',
    image: '/images/nigerian-professional-training-workshop-skills-dev.jpg',
    location: 'Abuja, Nigeria',
    commitment: '4 hours/week',
    volunteers: 10,
    category: 'Mentorship',
    skills: ['Career Guidance', 'Leadership', 'Communication'],
    impact: '80+ mentees placed in jobs',
  },
  {
    id: 5,
    title: 'Community Kitchen Helper',
    organization: 'Food for All Initiative',
    description: 'Help prepare and distribute meals to vulnerable populations.',
    image: '/nigerian-volunteers-helping-community-service.jpg',
    location: 'Port Harcourt, Nigeria',
    commitment: '3 hours/week',
    volunteers: 20,
    category: 'Humanitarian',
    skills: ['Cooking', 'Organization', 'Compassion'],
    impact: '500+ meals served weekly',
  },
  {
    id: 6,
    title: 'Event Coordinator Volunteer',
    organization: 'Community Development Board',
    description: 'Help organize community events and volunteer activities.',
    image: '/nigerian-organization-team-management-collaboratio.jpg',
    location: 'Multiple Locations',
    commitment: '6 hours/week',
    volunteers: 12,
    category: 'Community',
    skills: ['Organization', 'Planning', 'Leadership'],
    impact: '30+ events organized annually',
  },
]

const categories = ['All', 'Education', 'Healthcare', 'Environment', 'Mentorship', 'Humanitarian', 'Community']

export default function OpportunitiesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredOpportunities = opportunities.filter((opp) => {
    const matchesSearch =
      opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opp.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || opp.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-overlay">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Volunteer <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Opportunities
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find meaningful ways to make a difference in your community
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search Bar */}
        <div className="bg-card border border-border rounded-2xl p-6 mb-8 animate-slide-in">
          <div className="relative">
            <Search size={24} className="absolute left-4 top-3.5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search opportunities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 text-lg border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-gradient-primary text-white shadow-lg'
                  : 'bg-card border border-border text-foreground hover:border-primary/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Opportunities Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {filteredOpportunities.map((opp, index) => (
            <Link
              key={opp.id}
              href={`/opportunities/${opp.id}`}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all hover-lift animate-zoom-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={opp.image || "/placeholder.svg"}
                  alt={opp.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    {opp.category}
                  </span>
                  <Briefcase size={18} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {opp.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {opp.description}
                </p>
                <div className="space-y-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    {opp.location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    {opp.commitment}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} />
                    {opp.volunteers} active volunteers
                  </div>
                </div>
                <button className="text-primary group-hover:text-primary/80 font-semibold flex items-center gap-2 transition-colors">
                  Learn More
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </Link>
          ))}
        </div>

        {filteredOpportunities.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">
              No opportunities found matching your criteria.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
