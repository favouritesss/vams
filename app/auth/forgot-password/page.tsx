'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Password reset email:', email)
    setSubmitted(true)
    // TODO: Connect to backend API
  }

  if (submitted) {
    return (
      <div className="bg-card rounded-2xl shadow-xl border border-border p-8 animate-zoom-in text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-primary mb-3">Check Your Email</h1>
        <p className="text-muted-foreground mb-6">
          We've sent a password reset link to <span className="font-semibold text-foreground">{email}</span>
        </p>
        <p className="text-sm text-muted-foreground mb-8">
          The link will expire in 24 hours. If you don't see the email, check your spam folder.
        </p>
        <Link
          href="/auth/login"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-all font-semibold"
        >
          <ArrowLeft size={20} />
          Back to Login
        </Link>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-xl border border-border p-8 animate-zoom-in">
      <Link
        href="/auth/login"
        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-semibold"
      >
        <ArrowLeft size={20} />
        Back to Login
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-primary mb-2">Reset Password</h1>
        <p className="text-muted-foreground">
          Enter your email and we'll send you a link to reset your password.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg font-semibold mt-6"
        >
          Send Reset Link
        </button>
      </div>
    </form>
  )
}
