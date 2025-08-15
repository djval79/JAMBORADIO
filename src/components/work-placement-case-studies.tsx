'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Building, Calendar, Users, Award, TrendingUp, MapPin } from 'lucide-react'

interface CaseStudy {
  id: number
  studentName: string
  company: string
  role: string
  industry: string
  location: string
  duration: string
  startDate: string
  description: string
  achievements: string[]
  skills: string[]
  testimonial: string
  outcome: string
  logo: string
  image: string
  featured: boolean
}

const mockCaseStudies: CaseStudy[] = [
  {
    id: 1,
    studentName: "Sarah Johnson",
    company: "BBC Radio",
    role: "Broadcast Assistant",
    industry: "Media",
    location: "London, UK",
    duration: "6 months",
    startDate: "Jan 2024",
    description: "Worked alongside professional broadcasters to assist with daily show production, content creation, and studio operations.",
    achievements: [
      "Assisted in producing 15+ live radio shows",
      "Developed content for social media platforms",
      "Learned professional audio editing techniques",
      "Gained experience in studio management"
    ],
    skills: ["Audio Production", "Content Creation", "Social Media", "Studio Operations"],
    testimonial: "This placement transformed my understanding of professional broadcasting. The hands-on experience was invaluable.",
    outcome: "Offered full-time position as Production Assistant",
    logo: "📻",
    image: "🎙️",
    featured: true
  },
  {
    id: 2,
    studentName: "Michael Chen",
    company: "Global Media Group",
    role: "Digital Content Producer",
    industry: "Digital Media",
    location: "Manchester, UK",
    duration: "4 months",
    startDate: "Mar 2024",
    description: "Created digital content for multiple radio stations, including podcasts, social media content, and website articles.",
    achievements: [
      "Produced 8 podcast episodes",
      "Increased social media engagement by 45%",
      "Developed content strategy for new shows",
      "Collaborated with marketing team on campaigns"
    ],
    skills: ["Podcast Production", "Social Media Strategy", "Content Writing", "Analytics"],
    testimonial: "The opportunity to work with industry professionals helped me build a strong portfolio and network.",
    outcome: "Freelance contract with the company",
    logo: "🌐",
    image: "📱",
    featured: true
  },
  {
    id: 3,
    studentName: "Emily Rodriguez",
    company: "Heart FM",
    role: "Marketing Intern",
    industry: "Radio Broadcasting",
    location: "Birmingham, UK",
    duration: "3 months",
    startDate: "Feb 2024",
    description: "Supported the marketing team with campaign development, audience research, and promotional activities.",
    achievements: [
      "Contributed to 3 major marketing campaigns",
      "Conducted audience research surveys",
      "Assisted with event coordination",
      "Created promotional content for social media"
    ],
    skills: ["Marketing Strategy", "Audience Research", "Event Planning", "Content Creation"],
    testimonial: "I gained practical marketing skills that I couldn't have learned in a classroom setting.",
    outcome: "Extended internship for additional 3 months",
    logo: "❤️",
    image: "📊",
    featured: false
  },
  {
    id: 4,
    studentName: "David Thompson",
    company: "Capital Radio",
    role: "Technical Producer",
    industry: "Broadcast Technology",
    location: "Leeds, UK",
    duration: "5 months",
    startDate: "Dec 2023",
    description: "Worked with the technical team to maintain broadcasting equipment, assist with live shows, and troubleshoot technical issues.",
    achievements: [
      "Mastered professional broadcasting software",
      "Assisted with 20+ live broadcasts",
      "Improved studio workflow efficiency",
      "Trained 3 other interns on equipment"
    ],
    skills: ["Broadcast Technology", "Live Production", "Technical Troubleshooting", "Software Training"],
    testimonial: "The technical skills I gained are directly applicable to my career goals in broadcast engineering.",
    outcome: "Job offer as Junior Technical Producer",
    logo: "🎵",
    image: "🔧",
    featured: false
  },
  {
    id: 5,
    studentName: "Lisa Park",
    company: "Smooth Radio",
    role: "Journalism Intern",
    industry: "Radio Journalism",
    location: "Glasgow, UK",
    duration: "4 months",
    startDate: "Jan 2024",
    description: "Researched and wrote news stories, conducted interviews, and assisted with current affairs programming.",
    achievements: [
      "Wrote 25+ news stories for broadcast",
      "Conducted 10+ interviews",
      "Assisted with documentary production",
      "Built network of industry contacts"
    ],
    skills: ["News Writing", "Interviewing", "Research", "Documentary Production"],
    testimonial: "This placement gave me real-world journalism experience and helped me understand the fast-paced nature of radio news.",
    outcome: "Acceptance to journalism graduate program",
    logo: "📰",
    image: "🎤",
    featured: false
  },
  {
    id: 6,
    studentName: "James Wilson",
    company: "Absolute Radio",
    role: "Music Programming Assistant",
    industry: "Music Radio",
    location: "London, UK",
    duration: "6 months",
    startDate: "Nov 2023",
    description: "Assisted with music selection, playlist creation, and artist relations for the station's music programming.",
    achievements: [
      "Curated playlists for 3 different shows",
      "Liaised with record labels and artists",
      "Analyzed listener data and trends",
      "Contributed to programming strategy meetings"
    ],
    skills: ["Music Curation", "Data Analysis", "Artist Relations", "Programming Strategy"],
    testimonial: "I developed a deep understanding of music programming and built valuable relationships in the industry.",
    outcome: "Part-time position as Music Assistant",
    logo: "🎸",
    image: "🎼",
    featured: false
  }
]

const industries = ["All", "Media", "Digital Media", "Radio Broadcasting", "Broadcast Technology", "Radio Journalism", "Music Radio"]

export function WorkPlacementCaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = useState("All")
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null)

  const filteredStudies = selectedIndustry === "All" 
    ? mockCaseStudies 
    : mockCaseStudies.filter(study => study.industry === selectedIndustry)

  const featuredStudies = mockCaseStudies.filter(study => study.featured)

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Work Placement Case Studies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how our students are gaining real-world experience and launching their careers 
            through our industry partnerships and work placement programs.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="glass-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold gradient-text mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Students Placed</div>
            </CardContent>
          </Card>
          <Card className="glass-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold gradient-text mb-2">85%</div>
              <div className="text-sm text-muted-foreground">Employment Rate</div>
            </CardContent>
          </Card>
          <Card className="glass-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold gradient-text mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Partner Companies</div>
            </CardContent>
          </Card>
          <Card className="glass-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold gradient-text mb-2">4.8/5</div>
              <div className="text-sm text-muted-foreground">Student Satisfaction</div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Case Studies */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8">Featured Success Stories</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredStudies.map((study) => (
              <Card key={study.id} className="glass-card group hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-gold-accent/20 rounded-lg flex items-center justify-center text-2xl">
                        {study.logo}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">{study.industry}</Badge>
                        <Badge className="bg-green-500 text-white">Featured</Badge>
                      </div>
                      <h4 className="text-lg font-semibold mb-1">{study.studentName}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{study.role} at {study.company}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {study.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {study.duration}
                        </div>
                      </div>
                      <p className="text-sm mb-4">{study.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-green-600">{study.outcome}</div>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => setSelectedStudy(study)}
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Industry Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {industries.map((industry) => (
              <Button
                key={industry}
                variant={selectedIndustry === industry ? "default" : "outline"}
                className="glass-button"
                onClick={() => setSelectedIndustry(industry)}
              >
                {industry}
              </Button>
            ))}
          </div>
        </div>

        {/* All Case Studies */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study) => (
            <Card key={study.id} className="glass-card group hover:scale-105 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-gold-accent/20 rounded-lg flex items-center justify-center text-xl">
                    {study.logo}
                  </div>
                  <Badge variant="outline">{study.industry}</Badge>
                </div>
                
                <h4 className="font-semibold text-lg mb-1">{study.studentName}</h4>
                <p className="text-sm text-muted-foreground mb-2">{study.role}</p>
                <p className="text-sm font-medium text-primary mb-3">{study.company}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {study.location}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {study.duration} • {study.startDate}
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {study.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {study.skills.slice(0, 3).map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {study.skills.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{study.skills.length - 3} more
                    </Badge>
                  )}
                </div>
                
                <div className="text-xs text-green-600 font-medium mb-4">
                  {study.outcome}
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full glass-button"
                  onClick={() => setSelectedStudy(study)}
                >
                  View Full Story
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed View Modal */}
        {selectedStudy && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <Card className="glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-gold-accent/20 rounded-lg flex items-center justify-center text-2xl">
                      {selectedStudy.logo}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{selectedStudy.studentName}</h3>
                      <p className="text-muted-foreground">{selectedStudy.role} at {selectedStudy.company}</p>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => setSelectedStudy(null)}
                  >
                    ×
                  </Button>
                </div>

                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="achievements">Achievements</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="testimonial">Testimonial</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">Industry</label>
                        <p>{selectedStudy.industry}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Duration</label>
                        <p>{selectedStudy.duration}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Location</label>
                        <p>{selectedStudy.location}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Start Date</label>
                        <p>{selectedStudy.startDate}</p>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Description</label>
                      <p className="mt-1">{selectedStudy.description}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Outcome</label>
                      <p className="mt-1 text-green-600 font-medium">{selectedStudy.outcome}</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="achievements" className="space-y-4">
                    <ul className="space-y-2">
                      {selectedStudy.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Award className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>

                  <TabsContent value="skills" className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {selectedStudy.skills.map((skill, index) => (
                        <Badge key={index} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="testimonial" className="space-y-4">
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <p className="italic">"{selectedStudy.testimonial}"</p>
                      <p className="text-sm text-muted-foreground mt-2">- {selectedStudy.studentName}</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="glass-card bg-gradient-to-r from-primary/10 to-gold-accent/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold gradient-text mb-4">Ready to Start Your Journey?</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Join our work placement program and gain invaluable industry experience.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="glass-button bg-primary text-primary-foreground">
                  Apply Now
                </Button>
                <Button variant="outline" size="lg" className="glass-button">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}