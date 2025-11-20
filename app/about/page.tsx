'use client'

import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Users, Target, Zap, Heart } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 text-balance">
            About VAMS
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering communities through volunteer activity management
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center animate-slide-in">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-4">
              VAMS is dedicated to connecting volunteers with meaningful opportunities to make a real impact in their communities. We believe that volunteering is a powerful force for social change.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              Our platform simplifies volunteer management, making it easy for organizations to recruit, organize, and recognize volunteers while enabling individuals to find fulfilling ways to contribute.
            </p>
            <p className="text-lg text-muted-foreground">
              Together, we're building stronger communities, one volunteer at a time.
            </p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Community Focused</h3>
                  <p className="text-muted-foreground">We prioritize community impact in everything we do.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Goal Oriented</h3>
                  <p className="text-muted-foreground">We help organizations achieve their volunteer goals.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Efficient & Easy</h3>
                  <p className="text-muted-foreground">Our platform is designed for simplicity and efficiency.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-primary mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8 animate-zoom-in">
            {[
              {
                title: 'Integrity',
                description: 'We operate with transparency and honesty in all our interactions.',
              },
              {
                title: 'Inclusivity',
                description: 'We welcome volunteers of all backgrounds and abilities.',
              },
              {
                title: 'Impact',
                description: 'We measure success by the positive change we create in communities.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all hover:scale-105"
              >
                <h3 className="text-2xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {[
            { number: '1.2K', label: 'Active Volunteers' },
            { number: '48', label: 'Organizations' },
            { number: '12.5K', label: 'Total Hours' },
            { number: '150+', label: 'Events Completed' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 text-center animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-4xl font-bold text-primary mb-2">{stat.number}</p>
              <p className="text-muted-foreground font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* System Architecture */}
        <div className="bg-card border border-border rounded-2xl p-8 mb-20 animate-zoom-in">
          <h2 className="text-3xl font-bold text-primary mb-6">System Architecture</h2>
          <p className="text-muted-foreground mb-6">
            VAMS is built with a modern, scalable architecture designed to support growing communities:
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-foreground mb-4">Frontend</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• React with Next.js App Router</li>
                <li>• Tailwind CSS for responsive design</li>
                <li>• Real-time UI updates with SWR</li>
                <li>• Mobile-first approach</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4">Backend</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• RESTful API architecture</li>
                <li>• Role-based access control</li>
                <li>• Secure authentication & authorization</li>
                <li>• Cloud-based database</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary text-primary-foreground rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Join thousands of volunteers and organizations already creating positive change.
          </p>
          <a
            href="/auth/signup"
            className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded-lg hover:bg-accent/90 transition-all font-semibold"
          >
            Get Started Today
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}
