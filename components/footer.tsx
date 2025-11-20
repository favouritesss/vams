'use client'

import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-card to-background text-foreground border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white text-sm font-bold">V</span>
              </div>
              <span className="font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">VAMS</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Empowering communities through organized volunteering and meaningful connections across Nigeria.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, href: '#' },
                { Icon: Twitter, href: '#' },
                { Icon: Linkedin, href: '#' },
                { Icon: Instagram, href: '#' },
              ].map(({ Icon, href }, idx) => (
                <Link
                  key={idx}
                  href={href}
                  className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center hover:bg-gradient-primary hover:text-white transition-all hover:scale-110"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-primary">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Events', href: '/events' },
                { label: 'Blog', href: '/blog' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-muted-foreground hover:text-accent transition-colors group flex items-center gap-2">
                    <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-primary">Support</h4>
            <ul className="space-y-3">
              {[
                { label: 'FAQ', href: '/faq' },
                { label: 'Contact', href: '/contact' },
                { label: 'Terms', href: '/terms' },
                { label: 'Privacy', href: '/privacy' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-muted-foreground hover:text-accent transition-colors group flex items-center gap-2">
                    <span className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-primary">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 hover:text-accent transition-colors group">
                <Mail size={20} className="mt-1 flex-shrink-0 text-accent" />
                <a href="mailto:info@vams.ng" className="text-muted-foreground group-hover:text-accent transition-colors">
                  info@vams.ng
                </a>
              </li>
              <li className="flex items-start gap-3 hover:text-accent transition-colors group">
                <Phone size={20} className="mt-1 flex-shrink-0 text-accent" />
                <a href="tel:+2341234567890" className="text-muted-foreground group-hover:text-accent transition-colors">
                  +234 123 456 7890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 flex-shrink-0 text-accent" />
                <span className="text-muted-foreground">
                  Lagos, Nigeria
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-sm">
            <p className="flex items-center gap-2">
              &copy; {currentYear} VAMS. Made with <Heart size={16} className="text-accent fill-accent" /> for communities
            </p>
            <div className="flex gap-6">
              <Link href="/terms" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
