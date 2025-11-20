'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Eye, EyeOff, ChevronRight, LogIn } from 'lucide-react'

export default function LoginPage() {
  const [userType, setUserType] = useState<'volunteer' | 'organization' | 'admin' | null>(null)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userType, ...formData }),
    });

    const data = await res.json();

    if (data.success) {
      window.location.href = data.redirect;
    } else {
      alert(data.message);
    }
  };


  if (!userType) {
    return (
      <div className="bg-card/80 backdrop-blur-md rounded-3xl shadow-2xl border border-border/50 p-10 animate-zoom-in">
        <div className="mb-10 text-center">
          <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <LogIn size={32} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
            Welcome Back
          </h1>
          <p className="text-muted-foreground text-lg">Choose your account type to continue</p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => setUserType('volunteer')}
            className="w-full bg-gradient-primary hover:shadow-xl text-white p-5 rounded-2xl transition-all hover:scale-105 font-bold text-lg flex items-center justify-between group border border-primary/20 hover:border-primary/50"
          >
            <span>Volunteer Login</span>
            <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => setUserType('organization')}
            className="w-full bg-gradient-secondary hover:shadow-xl text-white p-5 rounded-2xl transition-all hover:scale-105 font-bold text-lg flex items-center justify-between group border border-secondary/20 hover:border-secondary/50"
          >
            <span>Organization Login</span>
            <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => setUserType('admin')}
            className="w-full bg-gradient-to-r from-accent via-accent/80 to-accent/60 hover:shadow-xl text-accent-foreground p-5 rounded-2xl transition-all hover:scale-105 font-bold text-lg flex items-center justify-between group border border-accent/20 hover:border-accent/50"
          >
            <span>Admin Portal</span>
            <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="mt-10 p-6 bg-gradient-overlay backdrop-blur-sm rounded-2xl border border-primary/20">
          <p className="text-center text-muted-foreground">
            New to VAMS?{' '}
            <Link href="/auth/signup" className="text-accent font-bold hover:text-accent/80 transition-colors">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card/80 backdrop-blur-md rounded-3xl shadow-2xl border border-border/50 p-10 animate-zoom-in">
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
          {userType === 'volunteer' && 'Volunteer Login'}
          {userType === 'organization' && 'Organization Login'}
          {userType === 'admin' && 'Administrator Portal'}
        </h1>
        <p className="text-muted-foreground text-lg">Welcome back! Sign in to your account</p>
      </div>

      <div className="space-y-6">
        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-foreground mb-3">
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

        {/* Password Field */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <label htmlFor="password" className="block text-sm font-bold text-foreground">
              Password
            </label>
            <Link href="/auth/forgot-password" className="text-sm text-accent hover:text-accent/80 font-semibold transition-colors">
              Forgot?
            </Link>
          </div>
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

        {/* Remember Me */}
        <div className="flex items-center gap-3 pt-2">
          <input
            type="checkbox"
            name="rememberMe"
            id="rememberMe"
            checked={formData.rememberMe}
            onChange={handleInputChange}
            className="w-5 h-5 rounded border-border cursor-pointer accent-primary"
          />
          <label htmlFor="rememberMe" className="text-sm text-muted-foreground cursor-pointer font-medium">
            Remember me on this device
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-primary text-white py-4 rounded-xl hover:shadow-xl transition-all hover:scale-105 font-bold text-lg mt-8 flex items-center justify-center gap-2 group"
        >
          <LogIn size={20} />
          Sign In to Account
        </button>
      </div>

      {/* Divider */}
      <div className="my-8 flex items-center gap-3">
        <div className="flex-1 h-px bg-border/50" />
        <span className="text-xs text-muted-foreground font-semibold">OR</span>
        <div className="flex-1 h-px bg-border/50" />
      </div>

      {/* Footer */}
      <p className="text-center text-muted-foreground">
        Don't have an account?{' '}
        <Link href="/auth/signup" className="text-accent font-bold hover:text-accent/80 transition-colors">
          Sign up here
        </Link>
      </p>
    </form>
  )
}
