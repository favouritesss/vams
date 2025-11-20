'use client'

import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="animate-fade-up">
          <h1 className="text-5xl font-bold text-primary mb-8">Terms & Conditions</h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using VAMS, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">2. User Accounts</h2>
              <p className="text-muted-foreground mb-3">
                When you create an account on VAMS, you must provide accurate information. You are responsible for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Maintaining the confidentiality of your password</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us of unauthorized access</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">3. Volunteer Conduct</h2>
              <p className="text-muted-foreground mb-3">
                As a volunteer, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Fulfill your volunteer commitments in good faith</li>
                <li>Treat others with respect and courtesy</li>
                <li>Maintain professional behavior</li>
                <li>Comply with all organizational policies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Organization Responsibilities</h2>
              <p className="text-muted-foreground mb-3">
                Organizations using VAMS agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Provide safe and appropriate volunteer opportunities</li>
                <li>Treat volunteers fairly and respectfully</li>
                <li>Accurately describe volunteer opportunities</li>
                <li>Comply with all applicable laws</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Intellectual Property</h2>
              <p className="text-muted-foreground">
                The VAMS platform, including all content, features, and functionality, is owned by VAMS, its licensors, or other providers. You may not reproduce, distribute, or transmit any content without permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                VAMS is provided on an "as is" basis. We do not warrant that the service will be uninterrupted or error-free. In no event shall VAMS be liable for any indirect, incidental, or consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">7. Termination</h2>
              <p className="text-muted-foreground">
                We may terminate or suspend your account at any time for violations of these terms. Termination will not affect your rights or obligations under this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">8. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. Continued use of the service following such modifications constitutes your acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">9. Governing Law</h2>
              <p className="text-muted-foreground">
                These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which VAMS operates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">10. Contact Information</h2>
              <p className="text-muted-foreground">
                If you have questions about these Terms & Conditions, please contact us at legal@vams.com.
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
