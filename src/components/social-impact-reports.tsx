'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { 
  TrendingUp, 
  Users, 
  Heart, 
  Award, 
  Download, 
  Calendar,
  MapPin,
  Target,
  Globe,
  BookOpen,
  Radio,
  Building
} from 'lucide-react'

interface ImpactMetric {
  id: number
  title: string
  value: string
  description: string
  icon: string
  trend: 'up' | 'down' | 'stable'
  trendValue: string
}

interface Initiative {
  id: number
  title: string
  description: string
  category: string
  location: string
  beneficiaries: number
  status: 'completed' | 'ongoing' | 'planned'
  impact: string
  image: string
}

interface Report {
  id: number
  title: string
  year: string
  description: string
  downloadUrl: string
  fileSize: string
  format: string
  publishedDate: string
  category: string
}

const impactMetrics: ImpactMetric[] = [
  {
    id: 1,
    title: "Community Reach",
    value: "250K+",
    description: "People impacted through our programs",
    icon: "👥",
    trend: "up",
    trendValue: "+25%"
  },
  {
    id: 2,
    title: "Students Trained",
    value: "1,200+",
    description: "Young people gained media skills",
    icon: "🎓",
    trend: "up",
    trendValue: "+40%"
  },
  {
    id: 3,
    title: "Community Projects",
    value: "85",
    description: "Local initiatives supported",
    icon: "🏗️",
    trend: "up",
    trendValue: "+15%"
  },
  {
    id: 4,
    title: "Partnerships",
    value: "120+",
    description: "Organizations collaborating with us",
    icon: "🤝",
    trend: "up",
    trendValue: "+30%"
  },
  {
    id: 5,
    title: "Volunteer Hours",
    value: "15K+",
    description: "Hours contributed by community",
    icon: "⏰",
    trend: "up",
    trendValue: "+20%"
  },
  {
    id: 6,
    title: "Content Created",
    value: "500+",
    description: "Educational programs produced",
    icon: "📻",
    trend: "stable",
    trendValue: "0%"
  }
]

const initiatives: Initiative[] = [
  {
    id: 1,
    title: "Youth Media Training Program",
    description: "Comprehensive training program for young people aged 16-25 to develop media production, broadcasting, and digital content creation skills.",
    category: "Education",
    location: "London, Manchester, Birmingham",
    beneficiaries: 450,
    status: "ongoing",
    impact: "85% of participants secured employment in media industry",
    image: "📺"
  },
  {
    id: 2,
    title: "Community Voices Project",
    description: "Amplifying underrepresented community voices through dedicated radio programming and podcast series.",
    category: "Community",
    location: "Nationwide",
    beneficiaries: 50000,
    status: "ongoing",
    impact: "Reached 50,000 listeners monthly",
    image: "🎙️"
  },
  {
    id: 3,
    title: "Digital Literacy Campaign",
    description: "Free digital skills workshops for elderly and disadvantaged communities to bridge the digital divide.",
    category: "Digital Inclusion",
    location: "Glasgow, Leeds, Bristol",
    beneficiaries: 1200,
    status: "completed",
    impact: "90% of participants improved digital confidence",
    image: "💻"
  },
  {
    id: 4,
    title: "Mental Health Awareness",
    description: "Radio campaign and support services focusing on mental health awareness in partnership with local health organizations.",
    category: "Health",
    location: "Nationwide",
    beneficiaries: 75000,
    status: "ongoing",
    impact: "25% increase in help line calls",
    image: "❤️"
  },
  {
    id: 5,
    title: "Environmental Education",
    description: "Educational programming and community events focused on climate change and environmental sustainability.",
    category: "Environment",
    location: "Cardiff, Edinburgh, Belfast",
    beneficiaries: 30000,
    status: "planned",
    impact: "Launching in Q3 2024",
    image: "🌱"
  },
  {
    id: 6,
    title: "Music Therapy Program",
    description: "Using music and radio to support mental health and wellbeing in hospitals and care homes.",
    category: "Healthcare",
    location: "Liverpool, Newcastle, Southampton",
    beneficiaries: 2500,
    status: "ongoing",
    impact: "Improved wellbeing scores by 40%",
    image: "🎵"
  }
]

const reports: Report[] = [
  {
    id: 1,
    title: "Annual Impact Report 2023",
    year: "2023",
    description: "Comprehensive overview of our social impact and community initiatives throughout 2023.",
    downloadUrl: "/reports/annual-2023.pdf",
    fileSize: "4.2 MB",
    format: "PDF",
    publishedDate: "March 2024",
    category: "Annual"
  },
  {
    id: 2,
    title: "Youth Training Outcomes",
    year: "2023",
    description: "Detailed analysis of our youth media training program outcomes and success stories.",
    downloadUrl: "/reports/youth-training-2023.pdf",
    fileSize: "2.8 MB",
    format: "PDF",
    publishedDate: "February 2024",
    category: "Education"
  },
  {
    id: 3,
    title: "Community Engagement Study",
    year: "2023",
    description: "Research report on community engagement effectiveness and reach across different demographics.",
    downloadUrl: "/reports/community-engagement-2023.pdf",
    fileSize: "3.5 MB",
    format: "PDF",
    publishedDate: "January 2024",
    category: "Research"
  },
  {
    id: 4,
    title: "Environmental Impact Assessment",
    year: "2023",
    description: "Assessment of our environmental initiatives and carbon footprint reduction efforts.",
    downloadUrl: "/reports/environmental-impact-2023.pdf",
    fileSize: "2.1 MB",
    format: "PDF",
    publishedDate: "December 2023",
    category: "Environment"
  },
  {
    id: 5,
    title: "Diversity & Inclusion Report",
    year: "2023",
    description: "Annual report on diversity, equity, and inclusion progress within our organization.",
    downloadUrl: "/reports/diversity-inclusion-2023.pdf",
    fileSize: "1.9 MB",
    format: "PDF",
    publishedDate: "November 2023",
    category: "Governance"
  },
  {
    id: 6,
    title: "Financial Transparency Report",
    year: "2023",
    description: "Detailed financial report showing how funds are allocated and used across our programs.",
    downloadUrl: "/reports/financial-2023.pdf",
    fileSize: "1.5 MB",
    format: "PDF",
    publishedDate: "October 2023",
    category: "Financial"
  }
]

export function SocialImpactReports() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedInitiative, setSelectedInitiative] = useState<Initiative | null>(null)

  const filteredReports = selectedCategory === "All" 
    ? reports 
    : reports.filter(report => report.category === selectedCategory)

  const categories = ["All", "Annual", "Education", "Research", "Environment", "Governance", "Financial"]

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Social Impact Reports</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're committed to transparency and accountability. Explore our impact metrics, 
            community initiatives, and detailed reports on how we're making a difference.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8">Our Impact at a Glance</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {impactMetrics.map((metric) => (
              <Card key={metric.id} className="glass-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{metric.icon}</div>
                    <div className={`flex items-center gap-1 text-sm ${
                      metric.trend === 'up' ? 'text-green-600' : 
                      metric.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                    }`}>
                      {metric.trend === 'up' && <TrendingUp className="h-4 w-4" />}
                      {metric.trendValue}
                    </div>
                  </div>
                  <div className="text-2xl font-bold gradient-text mb-1">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Initiatives */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8">Featured Initiatives</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {initiatives.slice(0, 2).map((initiative) => (
              <Card key={initiative.id} className="glass-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-gold-accent/20 rounded-lg flex items-center justify-center text-2xl">
                        {initiative.image}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{initiative.category}</Badge>
                        <Badge className={
                          initiative.status === 'completed' ? 'bg-green-500 text-white' :
                          initiative.status === 'ongoing' ? 'bg-blue-500 text-white' :
                          'bg-yellow-500 text-white'
                        }>
                          {initiative.status}
                        </Badge>
                      </div>
                      <h4 className="text-lg font-semibold mb-2">{initiative.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{initiative.description}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {initiative.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {initiative.beneficiaries.toLocaleString()} beneficiaries
                        </div>
                      </div>
                      <div className="text-sm font-medium text-green-600 mb-3">
                        {initiative.impact}
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setSelectedInitiative(initiative)}
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Initiatives */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8">All Initiatives</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initiatives.map((initiative) => (
              <Card key={initiative.id} className="glass-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-gold-accent/20 rounded-lg flex items-center justify-center text-xl">
                      {initiative.image}
                    </div>
                    <Badge className={
                      initiative.status === 'completed' ? 'bg-green-500 text-white' :
                      initiative.status === 'ongoing' ? 'bg-blue-500 text-white' :
                      'bg-yellow-500 text-white'
                    }>
                      {initiative.status}
                    </Badge>
                  </div>
                  
                  <h4 className="font-semibold text-lg mb-2">{initiative.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {initiative.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {initiative.location}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Users className="h-3 w-3" />
                      {initiative.beneficiaries.toLocaleString()} beneficiaries
                    </div>
                  </div>
                  
                  <div className="text-xs text-green-600 font-medium mb-4">
                    {initiative.impact}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full glass-button"
                    onClick={() => setSelectedInitiative(initiative)}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Reports Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8">Download Reports</h3>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className="glass-button"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReports.map((report) => (
              <Card key={report.id} className="glass-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline">{report.category}</Badge>
                    <div className="text-xs text-muted-foreground">{report.year}</div>
                  </div>
                  
                  <h4 className="font-semibold text-lg mb-2">{report.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {report.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      Published: {report.publishedDate}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Download className="h-3 w-3" />
                      {report.fileSize} • {report.format}
                    </div>
                  </div>
                  
                  <Button className="w-full glass-button bg-primary text-primary-foreground">
                    <Download className="mr-2 h-4 w-4" />
                    Download Report
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Initiative Detail Modal */}
        {selectedInitiative && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <Card className="glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-gold-accent/20 rounded-lg flex items-center justify-center text-2xl">
                      {selectedInitiative.image}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{selectedInitiative.title}</h3>
                      <p className="text-muted-foreground">{selectedInitiative.category}</p>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => setSelectedInitiative(null)}
                  >
                    ×
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="text-sm font-medium">Status</label>
                    <Badge className={
                      selectedInitiative.status === 'completed' ? 'bg-green-500 text-white' :
                      selectedInitiative.status === 'ongoing' ? 'bg-blue-500 text-white' :
                      'bg-yellow-500 text-white'
                    }>
                      {selectedInitiative.status}
                    </Badge>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Location</label>
                    <p>{selectedInitiative.location}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Beneficiaries</label>
                    <p>{selectedInitiative.beneficiaries.toLocaleString()}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Impact</label>
                    <p className="text-green-600 font-medium">{selectedInitiative.impact}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="text-sm font-medium">Description</label>
                  <p className="mt-1">{selectedInitiative.description}</p>
                </div>

                <div className="bg-primary/5 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Key Achievements</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Successfully engaged {selectedInitiative.beneficiaries.toLocaleString()} community members</li>
                    <li>• Created lasting partnerships with local organizations</li>
                    <li>• Measured positive impact on community wellbeing</li>
                    <li>• Received recognition from industry leaders</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center">
          <Card className="glass-card bg-gradient-to-r from-primary/10 to-gold-accent/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold gradient-text mb-4">Get Involved</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Join us in making a difference. Whether volunteering, partnerships, or donations.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="glass-button bg-primary text-primary-foreground">
                  Volunteer With Us
                </Button>
                <Button variant="outline" size="lg" className="glass-button">
                  Partner With Us
                </Button>
                <Button variant="outline" size="lg" className="glass-button">
                  Support Our Work
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}