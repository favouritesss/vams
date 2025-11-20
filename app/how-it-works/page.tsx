'use client'

import React from 'react'
import { ArrowRight, CheckCircle, Users, Calendar, Award, TrendingUp, Zap, Shield } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const steps = [
  {
    id: 1,
    icon: Users,
    title: 'Create Your Profile',
    description: 'Sign up in minutes with your basic information. Choose your role as a volunteer or organization and set your preferences.',
    details: [
      'Fill out your profile with skills and interests',
      'Choose volunteer categories you\'re passionate about',
      'Set your availability and location preferences',
      'Upload a profile photo to build trust',
    ],
    image: '/placeholder.svg?key=2ei2q',
  },
  {
    id: 2,
    icon: Calendar,
    title: 'Discover Opportunities',
    description: 'Browse through hundreds of volunteer activities, events, and projects tailored to your skills and interests.',
    details: [
      'Filter by category, location, and skill level',
      'See real-time availability and participant counts',
      'Read detailed descriptions and requirements',
      'Check organizer ratings and reviews',
    ],
    image: '/placeholder.svg?key=9g72n',
  },
  {
    id: 3,
    icon: Zap,
    title: 'Register & Prepare',
    description: 'Register for events you\'re interested in and receive all the information you need to prepare and participate.',
    details: [
      'Get event reminders and updates',
      'Access detailed guidelines and requirements',
      'Connect with other volunteers',
      'Join event-specific community groups',
    ],
    image: '/placeholder.svg?key=fc4hm',
  },
  {
    id: 4,
    icon: TrendingUp,
    title: 'Volunteer & Track',
    description: 'Participate in activities, make an impact, and watch your hours and achievements grow in real-time.',
    details: [
      'Log your volunteer hours automatically',
      'Document your contributions with photos',
      'Interact with other volunteers',
      'Get activity feedback and testimonials',
    ],
    image: '/placeholder.svg?key=03i11',
  },
  {
    id: 5,
    icon: Award,
    title: 'Earn Recognition',
    description: 'Receive certificates, badges, and recognition for your contributions and build your professional volunteer portfolio.',
    details: [
      'Earn digital certificates for each event',
      'Unlock achievement badges',
      'Build a portfolio of impact',
      'Get recommendations from organizers',
    ],
    image: '/placeholder.svg?key=vmdqn',
  },
  {
    id: 6,
    icon: TrendingUp,
    title: 'Inspire Others',
    description: 'Share your journey, inspire others, and become a community leader. Help new volunteers get started.',
    details: [
      'Share your volunteer story',
      'Mentor new volunteers',
      'Lead community initiatives',
      'Build lasting connections',
    ],
    image: '/placeholder.svg?key=dlwjf',
  },
]

const benefits = [
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'All organizations and volunteers are verified for your safety and peace of mind.',
  },
  {
    icon: TrendingUp,
    title: 'Track Impact',
    description: 'See exactly how much time you\'ve invested and the lives you\'ve touched.',
  },
  {
    icon: Award,
    title: 'Build Portfolio',
    description: 'Create a professional portfolio of your volunteer work for job applications.',
  },
  {
    icon: Users,
    title: 'Join Community',
    description: 'Connect with thousands of like-minded volunteers and organizations.',
  },
]

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card to-background overflow-hidden">
        <div className="absolute top-10 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6 text-balance">
            How VAMS Works
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Six simple steps to transform from a curious person into an inspiring community changemaker
          </p>
          <Link
            href="/auth/signup"
            className="inline-flex items-center gap-2 bg-gradient-primary text-white px-8 py-4 rounded-lg font-bold hover:shadow-lg transition-all hover:scale-105"
          >
            Start Your Journey
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isEven = index % 2 === 0

            return (
              <div key={step.id} className="mb-24 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-cols-2'}`}>
                  {/* Image */}
                  <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                      <img
                        src={step.image || "/placeholder.svg"}
                        alt={step.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                    <div className="absolute -top-6 -right-6 bg-gradient-primary text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-3xl shadow-lg">
                      {step.id}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="text-primary" size={28} />
                      </div>
                      <span className="text-primary font-bold text-sm">STEP {step.id}</span>
                    </div>

                    <h2 className="text-4xl font-bold text-primary mb-4">
                      {step.title}
                    </h2>

                    <p className="text-lg text-muted-foreground mb-8">
                      {step.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle size={24} className="text-accent flex-shrink-0 mt-1" />
                          <span className="text-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="/auth/signup"
                      className="inline-flex items-center gap-2 text-accent font-bold hover:text-accent/80 transition-colors"
                    >
                      Get Started
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>

                {/* Divider */}
                {index < steps.length - 1 && (
                  <div className="mt-24 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-card border-y border-border/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-6">
              Why Choose VAMS?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of volunteers using our platform to make a real difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon
              return (
                <div
                  key={idx}
                  className="bg-background p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all hover:shadow-xl hover-lift"
                >
                  <div className="p-4 bg-gradient-primary w-fit rounded-lg mb-4 shadow-lg">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Join our community of changemakers and start your volunteer journey today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/signup"
              className="bg-gradient-primary text-white px-8 py-4 rounded-lg font-bold hover:shadow-lg transition-all hover:scale-105"
            >
              Get Started Free
            </Link>
            <Link
              href="/contact"
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold hover:bg-primary/10 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
