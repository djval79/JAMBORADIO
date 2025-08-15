'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { RadioPlayer } from '@/components/radio-player'
import { ShopSection } from '@/components/shop-section'
import { WorkPlacementCaseStudies } from '@/components/work-placement-case-studies'
import { SocialImpactReports } from '@/components/social-impact-reports'
import { ApprenticeshipOfferings } from '@/components/apprenticeship-offerings'
import { Play, ShoppingBag, Users, Award, ArrowRight, Menu, X } from 'lucide-react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const renderSection = () => {
    switch (activeSection) {
      case 'shop':
        return <ShopSection />
      case 'impact':
        return <SocialImpactReports />
      case 'apprenticeships':
        return <ApprenticeshipOfferings />
      case 'work-placements':
        return <WorkPlacementCaseStudies />
      default:
        return (
          <>
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 px-4">
              <div className="absolute inset-0 hero-gradient opacity-10"></div>
              <div className="relative max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h1 className="text-5xl lg:text-6xl font-bold gradient-text leading-tight">
                        Welcome to Jamboradio
                      </h1>
                      <p className="text-xl text-muted-foreground max-w-lg">
                        Experience the rhythm of community, education, and entertainment. 
                        Broadcasting live with purpose and passion.
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <Button size="lg" className="glass-button bg-primary text-primary-foreground">
                        <Play className="mr-2 h-5 w-5" />
                        Start Listening
                      </Button>
                      <Button variant="outline" size="lg" className="glass-button">
                        <ShoppingBag className="mr-2 h-5 w-5" />
                        Visit Shop
                      </Button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 pt-8">
                      <div className="text-center">
                        <div className="text-3xl font-bold gradient-text">10K+</div>
                        <div className="text-sm text-muted-foreground">Daily Listeners</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold gradient-text">500+</div>
                        <div className="text-sm text-muted-foreground">Students Trained</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold gradient-text">50+</div>
                        <div className="text-sm text-muted-foreground">Community Projects</div>
                      </div>
                    </div>
                  </div>

                  {/* Radio Player */}
                  <div className="flex justify-center lg:justify-end">
                    <RadioPlayer className="w-full max-w-sm" />
                  </div>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold gradient-text mb-4">What We Offer</h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    More than just a radio station - we're a hub for education, community engagement, and positive change.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="glass-card group hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-gold-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Live Streaming</h3>
                      <p className="text-muted-foreground mb-4">
                        24/7 live broadcasting with music, talk shows, and educational content.
                      </p>
                      <Button variant="ghost" className="glass-button">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="glass-card group hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-gold-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Users className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Work Placements</h3>
                      <p className="text-muted-foreground mb-4">
                        Real-world experience for students through our industry partnerships.
                      </p>
                      <Button variant="ghost" className="glass-button" onClick={() => setActiveSection('work-placements')}>
                        View Case Studies <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="glass-card group hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-gold-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Award className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">Apprenticeships</h3>
                      <p className="text-muted-foreground mb-4">
                        Earn while you learn with our comprehensive apprenticeship programs.
                      </p>
                      <Button variant="ghost" className="glass-button">
                        Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Shop Preview Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-primary/5 to-gold-accent/5">
              <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h2 className="text-4xl font-bold gradient-text">Jamboradio Merchandise</h2>
                    <p className="text-lg text-muted-foreground">
                      Show your support and wear your passion. Our exclusive merchandise collection 
                      features premium quality apparel and accessories designed for true music lovers.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Premium quality materials</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Supports community programs</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Limited edition designs</span>
                      </div>
                    </div>
                    <Button size="lg" className="glass-button bg-primary text-primary-foreground" onClick={() => setActiveSection('shop')}>
                      <ShoppingBag className="mr-2 h-5 w-5" />
                      Shop Now
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="glass-card group hover:scale-105 transition-transform">
                      <CardContent className="p-4">
                        <div className="aspect-square bg-gradient-to-br from-primary/20 to-gold-accent/20 rounded-lg mb-3 flex items-center justify-center">
                          <div className="text-4xl">👕</div>
                        </div>
                        <h4 className="font-semibold">Classic Tee</h4>
                        <p className="text-sm text-muted-foreground">£24.99</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card group hover:scale-105 transition-transform">
                      <CardContent className="p-4">
                        <div className="aspect-square bg-gradient-to-br from-primary/20 to-gold-accent/20 rounded-lg mb-3 flex items-center justify-center">
                          <div className="text-4xl">🎧</div>
                        </div>
                        <h4 className="font-semibold">Radio Headphones</h4>
                        <p className="text-sm text-muted-foreground">£89.99</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card group hover:scale-105 transition-transform">
                      <CardContent className="p-4">
                        <div className="aspect-square bg-gradient-to-br from-primary/20 to-gold-accent/20 rounded-lg mb-3 flex items-center justify-center">
                          <div className="text-4xl">☕</div>
                        </div>
                        <h4 className="font-semibold">Studio Mug</h4>
                        <p className="text-sm text-muted-foreground">£14.99</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card group hover:scale-105 transition-transform">
                      <CardContent className="p-4">
                        <div className="aspect-square bg-gradient-to-br from-primary/20 to-gold-accent/20 rounded-lg mb-3 flex items-center justify-center">
                          <div className="text-4xl">🧢</div>
                        </div>
                        <h4 className="font-semibold">Studio Cap</h4>
                        <p className="text-sm text-muted-foreground">£19.99</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
              <div className="max-w-4xl mx-auto text-center">
                <Card className="glass-card">
                  <CardContent className="p-12">
                    <h2 className="text-4xl font-bold gradient-text mb-6">
                      Ready to Join Our Community?
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8">
                      Whether you're here to listen, learn, or grow with us - there's a place for everyone at Jamboradio.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                      <Button size="lg" className="glass-button bg-primary text-primary-foreground">
                        <Play className="mr-2 h-5 w-5" />
                        Start Listening
                      </Button>
                      <Button variant="outline" size="lg" className="glass-button">
                        Get Involved
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass-card m-4 mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-gold-accent rounded-lg flex items-center justify-center">
                <Play className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Jamboradio</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => setActiveSection('home')}
                className={`glass-nav px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  activeSection === 'home' ? 'bg-primary/20' : ''
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => setActiveSection('shop')}
                className={`glass-nav px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  activeSection === 'shop' ? 'bg-primary/20' : ''
                }`}
              >
                Shop
              </button>
              <button 
                onClick={() => setActiveSection('impact')}
                className={`glass-nav px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  activeSection === 'impact' ? 'bg-primary/20' : ''
                }`}
              >
                Impact
              </button>
              <button 
                onClick={() => setActiveSection('apprenticeships')}
                className={`glass-nav px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  activeSection === 'apprenticeships' ? 'bg-primary/20' : ''
                }`}
              >
                Apprenticeships
              </button>
            </div>

            <div className="flex items-center gap-4">
              <Button className="hidden sm:flex glass-button bg-primary text-primary-foreground">
                Listen Live
              </Button>
              
              {/* Mobile menu button */}
              <button
                className="md:hidden glass-button p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden glass-card mt-4 p-4">
              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => {
                    setActiveSection('home')
                    setMobileMenuOpen(false)
                  }}
                  className={`glass-nav px-4 py-3 text-sm font-medium transition-all duration-300 text-left ${
                    activeSection === 'home' ? 'bg-primary/20' : ''
                  }`}
                >
                  Home
                </button>
                <button 
                  onClick={() => {
                    setActiveSection('shop')
                    setMobileMenuOpen(false)
                  }}
                  className={`glass-nav px-4 py-3 text-sm font-medium transition-all duration-300 text-left ${
                    activeSection === 'shop' ? 'bg-primary/20' : ''
                  }`}
                >
                  Shop
                </button>
                <button 
                  onClick={() => {
                    setActiveSection('impact')
                    setMobileMenuOpen(false)
                  }}
                  className={`glass-nav px-4 py-3 text-sm font-medium transition-all duration-300 text-left ${
                    activeSection === 'impact' ? 'bg-primary/20' : ''
                  }`}
                >
                  Impact
                </button>
                <button 
                  onClick={() => {
                    setActiveSection('apprenticeships')
                    setMobileMenuOpen(false)
                  }}
                  className={`glass-nav px-4 py-3 text-sm font-medium transition-all duration-300 text-left ${
                    activeSection === 'apprenticeships' ? 'bg-primary/20' : ''
                  }`}
                >
                  Apprenticeships
                </button>
                <button 
                  onClick={() => {
                    setActiveSection('work-placements')
                    setMobileMenuOpen(false)
                  }}
                  className={`glass-nav px-4 py-3 text-sm font-medium transition-all duration-300 text-left ${
                    activeSection === 'work-placements' ? 'bg-primary/20' : ''
                  }`}
                >
                  Work Placements
                </button>
                <Button className="w-full glass-button bg-primary text-primary-foreground mt-2">
                  Listen Live
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {renderSection()}
      </main>

      {/* Footer */}
      <footer className="glass-card m-4 mt-8">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-gold-accent rounded-lg flex items-center justify-center">
                <Play className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Jamboradio</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Jamboradio. Broadcasting with purpose.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}