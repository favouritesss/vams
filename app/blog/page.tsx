'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Calendar, User, Search, ChevronRight } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'The Impact of Community Service on Personal Growth',
    excerpt: 'Discover how volunteering can transform your life and help you grow as a person.',
    author: 'Sarah Johnson',
    date: '2024-12-10',
    category: 'Personal Growth',
    readTime: 5,
    image: '/nigerian-volunteers-helping-community-service.jpg',
  },
  {
    id: 2,
    title: 'Organizing Successful Volunteer Events',
    excerpt: 'A comprehensive guide to planning and executing impactful volunteer activities.',
    author: 'Michael Chen',
    date: '2024-12-05',
    category: 'Management',
    readTime: 8,
    image: '/nigerian-organization-team-management-collaboratio.jpg',
  },
  {
    id: 3,
    title: 'Building a Sustainable Community Garden',
    excerpt: 'Learn the basics of starting and maintaining a community garden project.',
    author: 'Emma Davis',
    date: '2024-11-28',
    category: 'Environment',
    readTime: 6,
    image: '/nigerian-environmental-conservation-volunteers-tre.jpg',
  },
  {
    id: 4,
    title: 'Technology in Volunteer Management',
    excerpt: 'How digital tools are revolutionizing the way we manage volunteer programs.',
    author: 'James Wilson',
    date: '2024-11-20',
    category: 'Technology',
    readTime: 7,
    image: '/nigerian-professional-training-workshop-skills-dev.jpg',
  },
  {
    id: 5,
    title: 'Mentoring the Next Generation',
    excerpt: 'Tips and strategies for becoming an effective volunteer mentor.',
    author: 'Lisa Wong',
    date: '2024-11-15',
    category: 'Education',
    readTime: 5,
    image: '/nigerian-teachers-tutoring-students-education-volu.jpg',
  },
  {
    id: 6,
    title: 'Health Benefits of Volunteering',
    excerpt: 'Scientific research shows that volunteering improves mental and physical health.',
    author: 'Dr. Robert Thompson',
    date: '2024-11-10',
    category: 'Health',
    readTime: 6,
    image: '/nigerian-healthcare-volunteers-medical-outreach-cl.jpg',
  },
]

const POSTS_PER_PAGE = 3

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({})

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleImageError = (postId: number) => {
    setImageErrors(prev => ({ ...prev, [postId]: true }))
  }

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 text-balance">
            Blog & News
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Read articles about volunteering, community impact, and personal growth
          </p>
        </div>

        {/* Search */}
        <div className="bg-card border border-border rounded-2xl p-6 mb-12 animate-slide-in">
          <div className="relative">
            <Search size={24} className="absolute left-4 top-3 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setCurrentPage(1)
              }}
              className="w-full pl-12 pr-4 py-3 text-lg border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
            />
          </div>
        </div>

        {/* Blog Posts */}
        <div className="space-y-8 mb-12">
          {paginatedPosts.map((post, index) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:border-primary/50 animate-zoom-in block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid md:grid-cols-3 gap-6 p-6">
                <div className="md:col-span-2 order-2 md:order-1">
                  <div className="flex items-center gap-2 text-sm text-accent mb-3 font-semibold">
                    <span className="px-3 py-1 bg-accent/10 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-primary/80 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </div>
                    <div>{post.readTime} min read</div>
                  </div>
                  <button className="mt-4 text-primary group-hover:text-primary/80 font-semibold flex items-center gap-2 transition-colors">
                    Read More
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div className="md:col-span-1 order-1 md:order-2">
                  <img
                    src={imageErrors[post.id] ? `/placeholder.svg?height=192&width=256&query=${post.title}` : post.image}
                    alt={post.title}
                    onError={() => handleImageError(post.id)}
                    className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300 bg-muted"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {paginatedPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">No articles found matching your search.</p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-semibold"
            >
              Previous
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                    page === currentPage
                      ? 'bg-primary text-primary-foreground'
                      : 'border border-primary text-primary hover:bg-primary/10'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-semibold"
            >
              Next
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
