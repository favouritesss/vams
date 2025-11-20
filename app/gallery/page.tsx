'use client'

import React, { useState, useEffect } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  {
    id: 1,
    title: 'Community Garden',
    category: 'Environment',
    image: '/images/community-garden-volunteers.jpg',
  },
  {
    id: 2,
    title: 'Food Bank',
    category: 'Community',
    image: '/images/food-bank-volunteers.jpg',
  },
  {
    id: 3,
    title: 'Animal Shelter',
    category: 'Animals',
    image: '/images/animal-shelter-volunteers.jpg',
  },
  {
    id: 4,
    title: 'Youth Mentorship',
    category: 'Education',
    image: '/images/youth-mentorship-community.jpg',
  },
  {
    id: 5,
    title: 'Volunteers Helping',
    category: 'Community',
    image: '/images/volunteers-community-helping.jpg',
  },
  {
    id: 6,
    title: 'Team Organization',
    category: 'Organization',
    image: '/images/team-organization-management.jpg',
  },
  {
    id: 7,
    title: 'Growth & Achievement',
    category: 'Achievement',
    image: '/images/growth-achievement-community.jpg',
  },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [imageErrors, setImageErrors] = useState<{[key: number]: boolean}>({})

  useEffect(() => {
    window.scrollTo(0, 0)
    setSelectedImage(null)
    setSelectedCategory('All')
    setImageErrors({})
  }, [])

  const categories = ['All', 'Environment', 'Community', 'Animals', 'Education', 'Organization', 'Achievement']

  const filteredImages = galleryImages.filter(
    (img) => selectedCategory === 'All' || img.category === selectedCategory
  )

  const handlePrevImage = () => {
    if (selectedImage === null) return
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage)
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1].id)
    }
  }

  const handleNextImage = () => {
    if (selectedImage === null) return
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage)
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1].id)
    }
  }

  const handleImageError = (imageId: number) => {
    setImageErrors(prev => ({ ...prev, [imageId]: true }))
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 text-balance">
            Our Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse through moments of community service and volunteer impact
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12 animate-slide-in">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-foreground mb-4">Filter by Category</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground hover:bg-primary/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img.id)}
              className="group relative h-48 rounded-xl overflow-hidden cursor-pointer border border-border hover:border-primary/50 transition-all animate-zoom-in bg-muted"
            >
              <img
                src={imageErrors[img.id] ? `/placeholder.svg?height=192&width=256&query=${img.title}` : img.image}
                alt={img.title}
                onError={() => handleImageError(img.id)}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-white text-center">
                    <p className="font-semibold">{img.title}</p>
                    <p className="text-sm text-gray-200">{img.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">No images found in this category.</p>
          </div>
        )}
      </main>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-all z-10"
            >
              <X size={24} />
            </button>

            {/* Image */}
            <div className="relative">
              <img
                src={
                  imageErrors[selectedImage]
                    ? `/placeholder.svg?height=600&width=800&query=gallery image`
                    : filteredImages.find((img) => img.id === selectedImage)?.image ||
                      "/placeholder.svg"
                }
                alt="Gallery"
                onError={() => handleImageError(selectedImage)}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-2xl font-bold">
                  {filteredImages.find((img) => img.id === selectedImage)?.title}
                </h3>
                <p className="text-gray-300">
                  {filteredImages.find((img) => img.id === selectedImage)?.category}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={handlePrevImage}
                className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-lg transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <span className="text-white">
                {filteredImages.findIndex((img) => img.id === selectedImage) + 1} /{' '}
                {filteredImages.length}
              </span>
              <button
                onClick={handleNextImage}
                className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-lg transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
