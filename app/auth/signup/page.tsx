'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff, ChevronRight, UserPlus, Briefcase } from 'lucide-react'

export default function SignupPage() {
  const [userType, setUserType] = useState<'volunteer' | 'organization' | null>(null)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
    organizationName: '',
    contactPerson: '',
    address: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  
    // Normalize the name based on userType
    const name = userType === 'volunteer' ? formData.fullName : formData.contactPerson || formData.organizationName
  
    if (!name || !formData.email || !formData.password || !userType) {
      alert('Please fill all required fields')
      return
    }
  
    const payload = {
      name,
      email: formData.email,
      password: formData.password,
      userType,
    }
  
    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
  
    const data = await res.json()
  
    if (res.ok) {
      alert('Signup successful!')
      // redirect to dashboard
      window.location.href = data.redirect
    } else {
      alert(data.error || 'Signup failed')
    }
  }
  
  

  if (!userType) {
    return (
      <div className="bg-card/80 backdrop-blur-md rounded-3xl shadow-2xl border border-border/50 p-10 animate-zoom-in">
        <div className="mb-10 text-center">
          <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <UserPlus size={32} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
            Create Account
          </h1>
          <p className="text-muted-foreground text-lg">Choose how you want to join VAMS</p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => setUserType('volunteer')}
            className="w-full bg-gradient-primary hover:shadow-xl text-white p-6 rounded-2xl transition-all hover:scale-105 font-bold text-lg flex items-center justify-between group border border-primary/20 hover:border-primary/50"
          >
            <div className="flex items-center gap-3">
              <UserPlus size={24} />
              <span>I'm a Volunteer</span>
            </div>
            <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => setUserType('organization')}
            className="w-full bg-gradient-secondary hover:shadow-xl text-white p-6 rounded-2xl transition-all hover:scale-105 font-bold text-lg flex items-center justify-between group border border-secondary/20 hover:border-secondary/50"
          >
            <div className="flex items-center gap-3">
              <Briefcase size={24} />
              <span>I'm an Organization</span>
            </div>
            <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="mt-10 p-6 bg-gradient-overlay backdrop-blur-sm rounded-2xl border border-primary/20">
          <p className="text-center text-muted-foreground">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-accent font-bold hover:text-accent/80 transition-colors">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    )
  }

  const isVolunteer = userType === 'volunteer'

  return (
    <form onSubmit={handleSubmit} className="bg-card/80 backdrop-blur-md rounded-3xl shadow-2xl border border-border/50 p-10 animate-zoom-in max-h-screen overflow-y-auto">
      <div className="mb-10">
        <button
          type="button"
          onClick={() => setUserType(null)}
          className="text-primary hover:text-accent transition-colors font-bold mb-6 flex items-center gap-2 group"
        >
          <ChevronRight size={20} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
          {isVolunteer ? 'Volunteer Sign Up' : 'Organization Sign Up'}
        </h1>
        <p className="text-muted-foreground text-lg">Create your account to get started</p>
      </div>

      <div className="space-y-5">
        {/* Shared Fields */}
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            placeholder="you@example.com"
            className="w-full px-5 py-3 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background/50 backdrop-blur-sm transition-all hover:border-primary/50 font-medium"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-bold text-foreground mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            required
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+234 (123) 456-7890"
            className="w-full px-5 py-3 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background/50 backdrop-blur-sm transition-all hover:border-primary/50 font-medium"
          />
        </div>

        {/* Volunteer Fields */}
        {isVolunteer && (
          <div>
            <label htmlFor="fullName" className="block text-sm font-bold text-foreground mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              required
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="John Doe"
              className="w-full px-5 py-3 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background/50 backdrop-blur-sm transition-all hover:border-primary/50 font-medium"
            />
          </div>
        )}

        {/* Organization Fields */}
        {!isVolunteer && (
          <>
            <div>
              <label htmlFor="organizationName" className="block text-sm font-bold text-foreground mb-2">
                Organization Name
              </label>
              <input
                type="text"
                name="organizationName"
                id="organizationName"
                required
                value={formData.organizationName}
                onChange={handleInputChange}
                placeholder="Community Care Foundation"
                className="w-full px-5 py-3 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background/50 backdrop-blur-sm transition-all hover:border-primary/50 font-medium"
              />
            </div>
            <div>
              <label htmlFor="contactPerson" className="block text-sm font-bold text-foreground mb-2">
                Contact Person
              </label>
              <input
                type="text"
                name="contactPerson"
                id="contactPerson"
                required
                value={formData.contactPerson}
                onChange={handleInputChange}
                placeholder="Jane Smith"
                className="w-full px-5 py-3 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background/50 backdrop-blur-sm transition-all hover:border-primary/50 font-medium"
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-bold text-foreground mb-2">
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                required
                value={formData.address}
                onChange={handleInputChange}
                placeholder="123 Main Street, Lagos"
                className="w-full px-5 py-3 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background/50 backdrop-blur-sm transition-all hover:border-primary/50 font-medium"
              />
            </div>
          </>
        )}

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-sm font-bold text-foreground mb-2">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="password"
              required
              value={formData.password}
              onChange={handleInputChange}
              placeholder="••••••••"
              className="w-full px-5 py-3 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background/50 backdrop-blur-sm transition-all hover:border-primary/50 font-medium"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* Confirm Password */}
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-bold text-foreground mb-2">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              id="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="••••••••"
              className="w-full px-5 py-3 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background/50 backdrop-blur-sm transition-all hover:border-primary/50 font-medium"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* Terms */}
        <div className="flex items-start gap-3 pt-3">
          <input
            type="checkbox"
            name="agreeTerms"
            id="agreeTerms"
            required
            checked={formData.agreeTerms}
            onChange={handleInputChange}
            className="mt-1 w-5 h-5 rounded border-border cursor-pointer accent-primary"
          />
          <label htmlFor="agreeTerms" className="text-sm text-muted-foreground cursor-pointer font-medium">
            I agree to the{' '}
            <Link href="/terms" className="text-accent hover:text-accent/80 font-bold transition-colors">
              Terms & Conditions
            </Link>
            {' '}and{' '}
            <Link href="/privacy" className="text-accent hover:text-accent/80 font-bold transition-colors">
              Privacy Policy
            </Link>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-primary text-white py-4 rounded-xl hover:shadow-xl transition-all hover:scale-105 font-bold text-lg mt-8 flex items-center justify-center gap-2 group"
        >
          <UserPlus size={20} />
          Create My Account
        </button>
      </div>

      {/* Footer */}
      <p className="text-center text-muted-foreground mt-8">
        Already have an account?{' '}
        <Link href="/auth/login" className="text-accent font-bold hover:text-accent/80 transition-colors">
          Sign in
        </Link>
      </p>
    </form>
  )
}
