'use client'

import React from 'react'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { MapPin, Clock, Users, ArrowLeft, Briefcase, Heart, Share2, CheckCircle } from 'lucide-react'

const opportunitiesData: { [key: number]: any } = {
  1: {
    id: 1,
    title: 'Community Education Tutor',
    organization: 'Lagos Education Initiative',
    description: 'Help underprivileged students with math, english, and science tutoring.',
    image: '/nigerian-teachers-tutoring-students-education-volu.jpg',
    location: 'Lagos, Nigeria',
    commitment: '5 hours/week',
    volunteers: 12,
    category: 'Education',
    skills: ['Teaching', 'Patience', 'Communication'],
    impact: '50+ students helped last year',
    fullDescription: `
      <h2>About This Opportunity</h2>
      <p>Join our team of dedicated tutors making a real difference in students' lives. We provide free education to underprivileged children in Lagos, and we need passionate volunteers like you to help us expand our reach.</p>
      
      <h3>What You'll Do</h3>
      <ul>
        <li>Teach math, English, and science to students aged 8-16</li>
        <li>Prepare lesson plans and learning materials</li>
        <li>Monitor student progress and provide feedback</li>
        <li>Mentor students on study techniques and academic goals</li>
        <li>Participate in monthly volunteer training sessions</li>
      </ul>
      
      <h3>Requirements</h3>
      <ul>
        <li>Secondary school education minimum (preferably university)</li>
        <li>Patience and genuine care for student success</li>
        <li>Reliability and commitment to students</li>
        <li>Ability to work with diverse learning styles</li>
      </ul>
      
      <h3>What You'll Gain</h3>
      <p>Volunteer tutors report increased confidence in teaching, deeper understanding of subject matter, and profound fulfillment from student breakthroughs. Many tutors gain valuable experience for career development and build lifelong connections with students and fellow volunteers.</p>
    `,
    schedule: 'Flexible - 5 hours per week',
    startDate: 'Immediate',
    benefits: ['Certificate of service', 'Training provided', 'Flexible schedule', 'Community impact'],
  },
  2: {
    id: 2,
    title: 'Healthcare Outreach Worker',
    organization: 'Medical Mission Nigeria',
    description: 'Provide healthcare education and support in rural communities.',
    image: '/nigerian-healthcare-volunteers-medical-outreach-cl.jpg',
    location: 'Rural Communities',
    commitment: '8 hours/week',
    volunteers: 8,
    category: 'Healthcare',
    skills: ['Healthcare Knowledge', 'Empathy', 'Teamwork'],
    impact: '200+ people screened monthly',
    fullDescription: `
      <h2>About This Opportunity</h2>
      <p>Medical professionals and passionate healthcare advocates are needed to bring essential health services to underserved rural communities. This role combines education, outreach, and direct patient support.</p>
      
      <h3>What You'll Do</h3>
      <ul>
        <li>Conduct health awareness workshops in communities</li>
        <li>Assist with patient screenings and basic health checks</li>
        <li>Distribute health education materials</li>
        <li>Support medical professionals during outreach missions</li>
        <li>Document health data and patient information</li>
      </ul>
      
      <h3>Requirements</h3>
      <ul>
        <li>Healthcare background or passion for health advocacy</li>
        <li>Ability to work in varying climate conditions</li>
        <li>Strong communication and cultural sensitivity</li>
        <li>Commitment to serving vulnerable populations</li>
      </ul>
      
      <h3>Impact</h3>
      <p>Last year our healthcare outreach screened over 2000 people, provided health education to 40+ communities, and directly supported preventive care initiatives that saved lives.</p>
    `,
    schedule: '8 hours per week - Weekend missions',
    startDate: 'Next month',
    benefits: ['Medical training', 'Travel covered', 'Community connections', 'Life-changing impact'],
  },
  3: {
    id: 3,
    title: 'Environmental Conservation Lead',
    organization: 'Green Nigeria Foundation',
    description: 'Lead tree planting and environmental conservation initiatives.',
    image: '/nigerian-environmental-conservation-volunteers-tre.jpg',
    location: 'Multiple Locations',
    commitment: '6 hours/week',
    volunteers: 15,
    category: 'Environment',
    skills: ['Leadership', 'Environmental Awareness', 'Physical Fitness'],
    impact: '5000+ trees planted this year',
    fullDescription: `
      <h2>About This Opportunity</h2>
      <p>Be part of Nigeria's green revolution! We're expanding our environmental conservation efforts and need leaders to coordinate tree planting and ecosystem restoration projects across multiple communities.</p>
      
      <h3>What You'll Do</h3>
      <ul>
        <li>Plan and coordinate tree planting events</li>
        <li>Recruit and train other volunteers</li>
        <li>Manage seedling distribution and planting materials</li>
        <li>Monitor tree survival rates and ecosystem health</li>
        <li>Document environmental impact and growth metrics</li>
      </ul>
      
      <h3>Requirements</h3>
      <ul>
        <li>Leadership experience or demonstrated initiative</li>
        <li>Environmental awareness and passion for conservation</li>
        <li>Physical ability to work outdoors</li>
        <li>Organizational skills and attention to detail</li>
      </ul>
      
      <h3>Success Stories</h3>
      <p>This year alone, we've planted 5000+ trees, improving air quality in multiple neighborhoods and creating green spaces for communities to gather and enjoy nature.</p>
    `,
    schedule: '6 hours per week - Mostly weekends',
    startDate: 'Immediate',
    benefits: ['Leadership development', 'Environmental impact', 'Team coordination', 'Recognition program'],
  },
  4: {
    id: 4,
    title: 'Youth Mentorship Coach',
    organization: 'Future Leaders Academy',
    description: 'Mentor young professionals and students for career development.',
    image: '/nigerian-professional-training-workshop-skills-dev.jpg',
    location: 'Abuja, Nigeria',
    commitment: '4 hours/week',
    volunteers: 10,
    category: 'Mentorship',
    skills: ['Career Guidance', 'Leadership', 'Communication'],
    impact: '80+ mentees placed in jobs',
    fullDescription: `
      <h2>About This Opportunity</h2>
      <p>Shape the future of Nigeria's youth by becoming a career mentor. We connect experienced professionals with young people seeking guidance for education and career development.</p>
      
      <h3>What You'll Do</h3>
      <ul>
        <li>Meet with assigned mentees monthly</li>
        <li>Provide career and academic guidance</li>
        <li>Help develop professional skills and networking</li>
        <li>Support job search and interview preparation</li>
        <li>Share real-world experience and insights</li>
      </ul>
      
      <h3>Requirements</h3>
      <ul>
        <li>Professional experience in your field</li>
        <li>Patience and genuine interest in youth development</li>
        <li>Ability to commit to long-term mentoring relationships</li>
        <li>Willing to share knowledge and experience</li>
      </ul>
      
      <h3>Results</h3>
      <p>80+ mentees have been placed in meaningful employment, and over 200 mentees have improved their academic performance. Mentors report personal growth and deep satisfaction from their work.</p>
    `,
    schedule: '4 hours per week - Flexible timing',
    startDate: 'This month',
    benefits: ['Leadership skills', 'Professional network', 'Personal fulfillment', 'Mentor training'],
  },
  5: {
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
    fullDescription: `
      <h2>About This Opportunity</h2>
      <p>Join our community kitchen where we prepare and serve nutritious meals to vulnerable and homeless populations. Your work directly addresses food insecurity in Port Harcourt.</p>
      
      <h3>What You'll Do</h3>
      <ul>
        <li>Prepare meals in our community kitchen</li>
        <li>Package and distribute food to recipients</li>
        <li>Maintain kitchen cleanliness and organization</li>
        <li>Collect and sort donated food items</li>
        <li>Build relationships with community members</li>
      </ul>
      
      <h3>Requirements</h3>
      <ul>
        <li>Basic cooking or food handling experience helpful but not required</li>
        <li>Compassion and respect for all people</li>
        <li>Ability to work in fast-paced environments</li>
        <li>Team player mentality</li>
      </ul>
      
      <h3>Our Reach</h3>
      <p>We serve 500+ meals every week, ensuring that no one in our community goes hungry. Your contribution directly improves lives.</p>
    `,
    schedule: '3 hours per week - Morning shifts',
    startDate: 'Immediate',
    benefits: ['Community connection', 'Meaningful work', 'Flexible scheduling', 'Meals provided'],
  },
  6: {
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
    fullDescription: `
      <h2>About This Opportunity</h2>
      <p>Love organizing? Help us coordinate exciting community events that bring people together and strengthen neighborhood bonds. From planning to execution, you'll play a key role.</p>
      
      <h3>What You'll Do</h3>
      <ul>
        <li>Plan and coordinate community events</li>
        <li>Recruit and schedule volunteer teams</li>
        <li>Manage budgets and resources</li>
        <li>Communicate with stakeholders and sponsors</li>
        <li>Evaluate events and gather feedback</li>
      </ul>
      
      <h3>Requirements</h3>
      <ul>
        <li>Event planning or organizational experience</li>
        <li>Excellent communication skills</li>
        <li>Detail-oriented and deadline-focused</li>
        <li>Ability to manage multiple tasks simultaneously</li>
      </ul>
      
      <h3>Events We Organize</h3>
      <p>We coordinate 30+ events annually including community cleanups, skill-sharing workshops, cultural celebrations, and volunteer appreciation gatherings. Each event strengthens community bonds.</p>
    `,
    schedule: '6 hours per week - Flexible',
    startDate: 'Immediate',
    benefits: ['Event management experience', 'Leadership development', 'Community network', 'Portfolio building'],
  },
}

export default function OpportunityDetailPage({ params }: { params: { id: string } }) {
  const opportunityId = parseInt(params.id)
  const opportunity = opportunitiesData[opportunityId]

  if (!opportunity) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Opportunity Not Found</h1>
          <Link href="/opportunities" className="text-primary hover:text-primary/80">
            Back to Opportunities
          </Link>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/opportunities"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Opportunities
        </Link>

        <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden mb-8 shadow-2xl">
          <img
            src={opportunity.image || "/placeholder.svg"}
            alt={opportunity.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full font-semibold text-sm">
                {opportunity.category}
              </span>
              <span className="text-muted-foreground text-sm">{opportunity.commitment}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {opportunity.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">{opportunity.organization}</p>

            <div className="prose prose-invert max-w-none mb-8">
              <div
                className="text-foreground space-y-6"
                dangerouslySetInnerHTML={{ __html: opportunity.fullDescription }}
              />
            </div>

            <div className="border-t border-border pt-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Skills & Experience</h3>
              <div className="flex flex-wrap gap-2">
                {opportunity.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-card border border-primary/30 text-foreground rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="bg-card border border-border rounded-2xl p-6 space-y-6 sticky top-20">
              <button className="w-full bg-gradient-primary text-white py-3 rounded-lg font-bold text-lg hover:shadow-lg transition-all hover:scale-105">
                Apply Now
              </button>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <div className="flex items-center gap-2 text-foreground">
                    <MapPin size={18} className="text-primary" />
                    {opportunity.location}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Time Commitment</p>
                  <div className="flex items-center gap-2 text-foreground">
                    <Clock size={18} className="text-primary" />
                    {opportunity.schedule}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Active Volunteers</p>
                  <div className="flex items-center gap-2 text-foreground">
                    <Users size={18} className="text-primary" />
                    {opportunity.volunteers} volunteers
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Start Date</p>
                  <p className="text-foreground font-semibold">{opportunity.startDate}</p>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <p className="text-sm text-muted-foreground mb-3">Benefits</p>
                <ul className="space-y-2">
                  {opportunity.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle size={16} className="text-primary flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border pt-4 flex gap-2">
                <button className="flex-1 p-2 bg-card hover:bg-card/80 rounded-lg transition-colors">
                  <Heart size={20} className="mx-auto text-muted-foreground hover:text-accent transition-colors" />
                </button>
                <button className="flex-1 p-2 bg-card hover:bg-card/80 rounded-lg transition-colors">
                  <Share2 size={20} className="mx-auto text-muted-foreground hover:text-primary transition-colors" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
