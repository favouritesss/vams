'use client'

import React from 'react'
import { Users, Calendar, Award, ArrowRight } from 'lucide-react'

const steps = [
  {
    id: 1,
    icon: Users,
    title: 'Create Your Profile',
    description: 'Sign up as a volunteer or organization in just minutes. Tell us about your skills and interests.',
    link: '/auth/signup',
  },
  {
    id: 2,
    icon: Calendar,
    title: 'Discover Opportunities',
    description: 'Browse hundreds of volunteer activities, events, and projects happening in your community.',
    link: '/events',
  },
  {
    id: 3,
    icon: Award,
    title: 'Make an Impact',
    description: 'Volunteer your time, track your hours, earn certificates, and build your portfolio of impact.',
    link: '/volunteer/events',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-card to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-fade-up">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6 text-balance">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three powerful steps to transform your community and make a real difference
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection lines */}
          <div className="hidden md:block absolute top-1/4 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent/30 -z-10" />

          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={step.id}
                className="animate-slide-in hover-lift cursor-pointer group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative">
                  <div className="bg-gradient-overlay backdrop-blur-sm p-8 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all h-full">
                    {/* Icon Container */}
                    <div className="mb-6 relative">
                      <div className="bg-gradient-primary p-6 rounded-2xl inline-block shadow-lg group-hover:shadow-2xl transition-all group-hover:scale-110">
                        <Icon size={32} className="text-white" />
                      </div>
                      <div className="absolute top-0 right-0 w-16 h-16 bg-accent/20 rounded-full blur-xl -z-10 group-hover:bg-accent/40 transition-all" />
                    </div>

                    {/* Number Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                        {step.id}
                      </span>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* CTA Link */}
                    <a
                      href={step.link}
                      className="inline-flex items-center gap-2 text-primary font-semibold group-hover:text-accent transition-colors"
                    >
                      Learn More
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
