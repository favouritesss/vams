'use client'

import React, { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { ChevronDown, Search } from 'lucide-react'

const faqs = [
  {
    id: 1,
    category: 'Getting Started',
    question: 'How do I create a volunteer account?',
    answer: 'Click the "Get Started" button on the homepage and select "I\'m a Volunteer". Fill out your profile information including your name, email, skills, and availability. Once your account is verified, you can start browsing and registering for events.',
  },
  {
    id: 2,
    category: 'Getting Started',
    question: 'How do I register my organization?',
    answer: 'Click "Get Started" and select "I\'m an Organization". Provide your organization details, contact information, and upload your logo. Our admin team will review your registration and approve it within 24-48 hours.',
  },
  {
    id: 3,
    category: 'Events',
    question: 'How can I find events to volunteer for?',
    answer: 'Visit the Events page to browse all available volunteer opportunities. You can filter by category, date, or location. Click on any event to see more details and register.',
  },
  {
    id: 4,
    category: 'Events',
    question: 'Can I cancel my event registration?',
    answer: 'Yes, you can cancel your registration up to 24 hours before the event. Go to "My Events" in your dashboard and click the cancel button.',
  },
  {
    id: 5,
    category: 'Hours & Certificates',
    question: 'How are volunteer hours tracked?',
    answer: 'Organization managers track volunteer hours during each event. Hours are automatically recorded in your volunteer profile and can be viewed in your dashboard.',
  },
  {
    id: 6,
    category: 'Hours & Certificates',
    question: 'When do I receive my volunteer certificate?',
    answer: 'Certificates are issued after you complete an event. You can download them from your dashboard in the "Certificates" section.',
  },
  {
    id: 7,
    category: 'Account',
    question: 'How do I update my profile?',
    answer: 'Go to your dashboard and click "My Profile". You can update your personal information, skills, and availability. Remember to save your changes.',
  },
  {
    id: 8,
    category: 'Account',
    question: 'How do I reset my password?',
    answer: 'Click "Forgot Password" on the login page. Enter your email and we\'ll send you a password reset link. Follow the instructions to create a new password.',
  },
  {
    id: 9,
    category: 'Support',
    question: 'What if I have a technical issue?',
    answer: 'Please contact us at support@vams.com or use the contact form on our Contact page. Our team will respond within 24 hours.',
  },
  {
    id: 10,
    category: 'Support',
    question: 'Is my personal information secure?',
    answer: 'Yes, we use industry-standard encryption and security measures to protect your data. Please refer to our Privacy Policy for more details.',
  },
]

export default function FAQPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const categories = ['All', ...new Set(faqs.map((faq) => faq.category))]

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 text-balance">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about VAMS
          </p>
        </div>

        {/* Search */}
        <div className="bg-card border border-border rounded-2xl p-6 mb-12 animate-slide-in">
          <div className="relative">
            <Search size={24} className="absolute left-4 top-3 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 text-lg border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
            />
          </div>
        </div>

        {/* FAQs */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => (
            <div
              key={faq.id}
              className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all animate-zoom-in"
              style={{ animationDelay: `${(index % 5) * 0.1}s` }}
            >
              <button
                onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-primary/5 transition-all"
              >
                <div className="text-left flex-1">
                  <p className="text-xs font-semibold text-accent mb-1">
                    {faq.category}
                  </p>
                  <h3 className="text-lg font-bold text-foreground">
                    {faq.question}
                  </h3>
                </div>
                <ChevronDown
                  size={24}
                  className={`text-primary transition-transform flex-shrink-0 ml-4 ${
                    expandedId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedId === faq.id && (
                <div className="px-6 pb-4 border-t border-border pt-4 bg-primary/2 text-muted-foreground">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-4">No FAQs found matching your search.</p>
            <button
              onClick={() => setSearchTerm('')}
              className="text-primary hover:text-primary/80 font-semibold underline"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-16 bg-primary text-primary-foreground rounded-2xl p-8 text-center animate-fade-up">
          <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
          <p className="mb-6 text-primary-foreground/90">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg hover:bg-accent/90 transition-all font-semibold"
          >
            Contact Us
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}
