'use client'

import React from 'react'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Calendar, User, Share2, ArrowLeft, Heart } from 'lucide-react'

const blogPosts: { [key: number]: any } = {
  1: {
    id: 1,
    title: 'The Impact of Community Service on Personal Growth',
    excerpt: 'Discover how volunteering can transform your life and help you grow as a person.',
    author: 'Sarah Johnson',
    date: '2024-12-10',
    category: 'Personal Growth',
    readTime: 5,
    image: '/nigerian-volunteers-helping-community-service.jpg',
    content: `
      <h2>Understanding the Power of Volunteering</h2>
      <p>Volunteering is more than just giving your time—it's about making a meaningful difference in your community while transforming yourself in the process. Research consistently shows that volunteers experience profound personal growth through their service.</p>
      
      <h3>Key Benefits of Community Service</h3>
      <p>When you engage in volunteer work, you're not just helping others; you're building essential skills, expanding your professional network, and developing a deeper sense of purpose. Many volunteers report increased confidence, improved communication abilities, and greater emotional resilience.</p>
      
      <h3>Building Confidence and Skills</h3>
      <p>Through volunteering, you'll tackle new challenges, lead initiatives, and work with diverse teams. These experiences naturally build self-confidence and develop leadership skills that benefit your career and personal relationships.</p>
      
      <h3>Creating Lasting Connections</h3>
      <p>Volunteer work connects you with like-minded individuals who share your values. These relationships often evolve into lifelong friendships and professional networks, enriching your life in ways you never anticipated.</p>
      
      <h3>Finding Your Purpose</h3>
      <p>Many volunteers discover their life's calling through their work. Whether it's discovering a passion for education, healthcare, environmental conservation, or social justice, volunteering helps you align your actions with your deepest values.</p>
      
      <h2>Getting Started Today</h2>
      <p>The journey to personal growth through volunteering starts with a single step. Explore our platform to find opportunities that resonate with your interests and schedule. Your transformation awaits.</p>
    `,
    relatedPosts: [2, 5, 6],
  },
  2: {
    id: 2,
    title: 'Organizing Successful Volunteer Events',
    excerpt: 'A comprehensive guide to planning and executing impactful volunteer activities.',
    author: 'Michael Chen',
    date: '2024-12-05',
    category: 'Management',
    readTime: 8,
    image: '/nigerian-organization-team-management-collaboratio.jpg',
    content: `
      <h2>The Art of Event Planning</h2>
      <p>Planning a successful volunteer event requires careful coordination, clear communication, and attention to detail. Whether you're organizing a community cleanup, a fundraiser, or a skill-sharing workshop, these principles apply universally.</p>
      
      <h3>Define Your Goals</h3>
      <p>Start by asking yourself: What impact do we want to create? How many volunteers do we need? What specific outcomes are we aiming for? Clear goals guide every subsequent decision and help measure success.</p>
      
      <h3>Create a Timeline</h3>
      <p>Successful events don't happen by accident. Create a detailed timeline starting 2-3 months before your event. Include recruitment milestones, training sessions, and final preparations. This ensures nothing falls through the cracks.</p>
      
      <h3>Recruit and Train</h3>
      <p>Find passionate volunteers who align with your event's mission. Provide thorough training to ensure everyone understands their role and feels confident. Clear expectations lead to better experiences for volunteers and participants alike.</p>
      
      <h3>Day-of Execution</h3>
      <p>Have a contingency plan for everything. Weather, no-shows, equipment failures—the best organizers anticipate challenges. Assign clear roles, maintain open communication, and stay flexible when adjustments are needed.</p>
      
      <h2>Measuring Impact</h2>
      <p>After your event, collect feedback from volunteers and participants. Track concrete metrics like hours contributed, money raised, or people served. This data helps you improve future events and demonstrates your organization's value.</p>
    `,
    relatedPosts: [1, 3, 4],
  },
  3: {
    id: 3,
    title: 'Building a Sustainable Community Garden',
    excerpt: 'Learn the basics of starting and maintaining a community garden project.',
    author: 'Emma Davis',
    date: '2024-11-28',
    category: 'Environment',
    readTime: 6,
    image: '/nigerian-environmental-conservation-volunteers-tre.jpg',
    content: `
      <h2>Growing More Than Just Plants</h2>
      <p>Community gardens are beautiful spaces where neighbors connect, grow fresh food, and steward the land together. Starting one requires planning, but the rewards—both environmental and social—are immeasurable.</p>
      
      <h3>Finding the Right Location</h3>
      <p>Look for accessible spaces that receive 6-8 hours of sunlight daily. The location should be safe, have water access, and ideally have community support. Many successful community gardens use vacant lots, schoolyards, or municipal land.</p>
      
      <h3>Assembling Your Team</h3>
      <p>Successful gardens thrive when diverse community members contribute. Recruit gardeners of all skill levels, people with equipment, fundraisers, and community organizers. Everyone has something valuable to offer.</p>
      
      <h3>Planning and Resources</h3>
      <p>Create a detailed plan including garden layout, planting schedule, and maintenance responsibilities. Develop a budget for soil, seeds, tools, and water. Reach out to local organizations, businesses, and government agencies for grants and donations.</p>
      
      <h3>Building Community</h3>
      <p>Gardens are gathering spaces. Host workshops, harvest celebrations, and storytelling events. Use the garden to strengthen neighborhood bonds and create a sense of shared ownership and pride.</p>
      
      <h2>Year-Round Engagement</h2>
      <p>Keep volunteers engaged through seasons by planning diverse activities. From spring planting to winter planning, continuous engagement ensures your garden thrives year after year.</p>
    `,
    relatedPosts: [1, 5, 2],
  },
  4: {
    id: 4,
    title: 'Technology in Volunteer Management',
    excerpt: 'How digital tools are revolutionizing the way we manage volunteer programs.',
    author: 'James Wilson',
    date: '2024-11-20',
    category: 'Technology',
    readTime: 7,
    image: '/nigerian-professional-training-workshop-skills-dev.jpg',
    content: `
      <h2>Digital Transformation in Volunteering</h2>
      <p>Technology is revolutionizing how organizations recruit, train, and manage volunteers. From cloud-based scheduling to digital impact tracking, modern tools make volunteer management more efficient than ever.</p>
      
      <h3>Volunteer Management Platforms</h3>
      <p>Modern platforms simplify recruitment, scheduling, and communication. Volunteers can browse opportunities, sign up online, and receive reminders automatically. Organizations gain real-time visibility into volunteer hours and impact metrics.</p>
      
      <h3>Communication Tools</h3>
      <p>Digital communication keeps volunteers connected and informed. Email newsletters, SMS reminders, and social media groups ensure volunteers stay engaged between events. Real-time messaging enables quick coordination during activities.</p>
      
      <h3>Data and Analytics</h3>
      <p>Track volunteer hours, costs saved, and community impact with precision. Analytics help organizations understand which programs work best, where recruitment efforts succeed, and how to improve retention rates.</p>
      
      <h3>Virtual Volunteering</h3>
      <p>Technology enables people to volunteer remotely. From online tutoring to virtual fundraising, digital opportunities expand access for volunteers who have transportation, mobility, or schedule constraints.</p>
      
      <h2>Choosing the Right Tools</h2>
      <p>The best technology is what your volunteers will actually use. Prioritize user-friendly tools, ensure good customer support, and train volunteers thoroughly. Technology should enhance, not complicate, volunteer management.</p>
    `,
    relatedPosts: [2, 1, 5],
  },
  5: {
    id: 5,
    title: 'Mentoring the Next Generation',
    excerpt: 'Tips and strategies for becoming an effective volunteer mentor.',
    author: 'Lisa Wong',
    date: '2024-11-15',
    category: 'Education',
    readTime: 5,
    image: '/nigerian-teachers-tutoring-students-education-volu.jpg',
    content: `
      <h2>The Power of Mentorship</h2>
      <p>Mentoring is one of the most impactful forms of volunteering. A single mentor can transform a young person's trajectory, expand their horizons, and provide guidance during crucial developmental years.</p>
      
      <h3>Understanding Your Role</h3>
      <p>Mentors serve many functions: advisor, role model, cheerleader, and trusted confidant. You're not there to solve all problems, but to help mentees develop their own problem-solving abilities and build confidence.</p>
      
      <h3>Building Trust and Connection</h3>
      <p>Effective mentoring starts with genuine care and consistent availability. Show up on time, listen actively, and demonstrate real interest in your mentee's life. Trust develops slowly but is the foundation of meaningful mentoring relationships.</p>
      
      <h3>Setting Goals and Expectations</h3>
      <p>Work with your mentee to establish clear, achievable goals. These might involve academic improvement, career exploration, or personal development. Regular check-ins help track progress and adjust approaches as needed.</p>
      
      <h3>Overcoming Challenges</h3>
      <p>Mentoring relationships inevitably face challenges—missed appointments, language barriers, or conflicting expectations. Address these openly and honestly. Seek support from your organization when needed.</p>
      
      <h2>Celebrating Success</h2>
      <p>Take time to celebrate milestones, both big and small. Acknowledge effort, recognize growth, and help your mentee see how far they've come. These celebrations reinforce positive change and strengthen your bond.</p>
    `,
    relatedPosts: [1, 3, 6],
  },
  6: {
    id: 6,
    title: 'Health Benefits of Volunteering',
    excerpt: 'Scientific research shows that volunteering improves mental and physical health.',
    author: 'Dr. Robert Thompson',
    date: '2024-11-10',
    category: 'Health',
    readTime: 6,
    image: '/nigerian-healthcare-volunteers-medical-outreach-cl.jpg',
    content: `
      <h2>Beyond the Feel-Good Factor</h2>
      <p>While volunteering feels good, scientific research confirms that it provides measurable health benefits. Regular volunteers experience lower stress levels, reduced anxiety, improved physical health, and greater longevity.</p>
      
      <h3>Mental Health Benefits</h3>
      <p>Volunteering provides purpose and meaning, which are fundamental to mental well-being. Volunteers report lower rates of depression and anxiety, increased life satisfaction, and stronger social connections. The sense of contributing to something larger than oneself is deeply therapeutic.</p>
      
      <h3>Physical Health Improvements</h3>
      <p>Active volunteering improves physical fitness. Community service often involves physical activity, from gardening to construction projects. Additionally, the stress reduction from volunteering lowers blood pressure and heart disease risk.</p>
      
      <h3>Cognitive Benefits</h3>
      <p>Volunteering keeps the mind active and engaged. Learning new skills, solving problems, and interacting with diverse people stimulate cognitive function. Studies show volunteers have better memory and lower rates of cognitive decline.</p>
      
      <h3>Social Connection</h3>
      <p>Loneliness is increasingly recognized as a serious health risk. Volunteering combats isolation by connecting you with others. These social bonds reduce stress hormones and improve immune function.</p>
      
      <h2>Getting Started for Better Health</h2>
      <p>If you're looking to improve your health, volunteering is an evidence-based intervention. Choose activities you enjoy, find a supportive community, and commit to regular service. Your health will thank you.</p>
    `,
    relatedPosts: [1, 5, 4],
  },
}

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  const postId = parseInt(params.id)
  const post = blogPosts[postId]

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-primary hover:text-primary/80">
            Back to Blog
          </Link>
        </main>
        <Footer />
      </div>
    )
  }

  const relatedPosts = post.relatedPosts?.map((id: number) => blogPosts[id])

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>

        {/* Hero Image */}
        <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden mb-8 shadow-2xl">
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full font-semibold text-sm">
              {post.category}
            </span>
            <span className="text-muted-foreground text-sm">{post.readTime} min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground border-b border-border pb-6">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none mb-12">
          <article className="text-lg leading-relaxed space-y-6">
            <div
              className="text-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>

        {/* Social Sharing */}
        <div className="border-t border-b border-border py-6 mb-12 flex items-center gap-4">
          <span className="text-foreground font-semibold">Share this article:</span>
          <button className="p-2 bg-card hover:bg-card/80 rounded-lg transition-colors group">
            <Share2 size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </button>
          <button className="p-2 bg-card hover:bg-card/80 rounded-lg transition-colors group">
            <Heart size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
          </button>
        </div>

        {/* Related Posts */}
        {relatedPosts && relatedPosts.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all hover-lift"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      By {relatedPost.author}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
