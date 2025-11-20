'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, LogOut, Settings, Bell, BarChart3, Users, Building2, Calendar, Shield, LogOutIcon } from 'lucide-react'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      setSidebarOpen(window.innerWidth >= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const menuItems = [
    { icon: BarChart3, label: 'Dashboard', href: '/admin' },
    { icon: BarChart3, label: 'Analytics', href: '/admin/analytics' },
    { icon: Users, label: 'Volunteers', href: '/admin/volunteers' },
    { icon: Building2, label: 'Organizations', href: '/admin/organizations' },
    { icon: Calendar, label: 'Events', href: '/admin/events' },
    { icon: Shield, label: 'Settings', href: '/admin/settings' },
  ]

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={`fixed md:relative top-0 left-0 h-screen bg-card border-r border-border transition-all duration-300 z-40 ${
          sidebarOpen && isMobile ? 'w-64' : isMobile ? 'w-0' : 'w-64'
        } ${!isMobile && 'w-64'}`}
      >
        <div className="p-6 border-b border-border">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">A</span>
            </div>
            <span className="font-bold text-lg text-primary">VAMS Admin</span>
          </Link>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/10 text-foreground hover:text-primary transition-colors font-medium"
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
          <button className="w-full flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium px-4 py-3 rounded-lg hover:bg-primary/10">
            <LogOutIcon size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-card border-b border-border h-16 flex items-center justify-between px-6 sticky top-0 z-30 shadow-sm">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="flex-1" />

          <div className="flex items-center gap-6">
            <button className="relative text-foreground hover:text-primary transition-colors">
              <Bell size={24} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-accent rounded-full" />
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-border">
              <div className="text-right">
                <p className="text-sm font-semibold text-foreground">Admin User</p>
                <p className="text-xs text-muted-foreground">System Admin</p>
              </div>
              <img
                src="/placeholder.svg?key=u3jkl"
                alt="Admin"
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </main>

      {/* Mobile Overlay */}
      {sidebarOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}
