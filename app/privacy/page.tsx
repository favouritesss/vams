'use client'

import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="animate-fade-up">
          <h1 className="text-5xl font-bold text-primary mb-8">Privacy Policy</h1>

          <div className="space-y-8 prose prose-invert max-w-none">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
              <p className="text-muted-foreground">
                At VAMS (Volunteer Activity Management System), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground mb-3">We collect information in various ways:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Personal Information:</strong> Name, email, phone number, address, gender</li>
                <li><strong>Profile Information:</strong> Skills, availability, volunteer hours, certificates</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent, interactions with the platform</li>
                <li><strong>Device Information:</strong> IP address, browser type, device type</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-3">We use your information to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Create and maintain your account</li>
                <li>Match you with volunteer opportunities</li>
                <li>Track volunteer hours and achievements</li>
                <li>Send notifications about events and opportunities</li>
                <li>Improve our platform and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Data Security</h2>
              <p className="text-muted-foreground">
                We implement industry-standard security measures to protect your personal information, including SSL encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Third-Party Disclosure</h2>
              <p className="text-muted-foreground">
                We do not sell, trade, or rent your personal information to third parties. We may share your information with service providers who assist us in operating our website and conducting our business.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground mb-3">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of communications</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">7. Cookies and Tracking</h2>
              <p className="text-muted-foreground">
                We use cookies to enhance your user experience and track website analytics. You can disable cookies in your browser settings, though this may limit functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">8. Policy Changes</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy periodically. We will notify you of significant changes by email or prominent notice on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">9. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about this Privacy Policy, please contact us at privacy@vams.com or use our contact form.
              </p>
            </section>
          </div>

          <div className="mt-12 bg-card border border-border rounded-xl p-6">
            <p className="text-muted-foreground text-sm">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
