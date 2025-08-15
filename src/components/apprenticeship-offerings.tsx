'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { 
  GraduationCap, 
  Clock, 
  DollarSign, 
  Users, 
  Target, 
  Award,
  BookOpen,
  Briefcase,
  Calendar,
  MapPin,
  TrendingUp,
  CheckCircle,
  Star
} from 'lucide-react'

interface Apprenticeship {
  id: number
  title: string
  description: string
  category: string
  level: string
  duration: string
  salary: string
  requirements: string[]
  skills: string[]
  benefits: string[]
  locations: string[]
  startDate: string
  applicationDeadline: string
  status: 'open' | 'closed' | 'upcoming'
  featured: boolean
  icon: string
}

interface SuccessStory {
  id: number
  name: string
  apprenticeship: string
  company: string
  year: string
  story: string
  outcome: string
  image: string
}

const apprenticeships: Apprenticeship[] = [
  {
    id: 1,
    title: "Radio Broadcasting Apprenticeship",
    description: "Learn the art of radio broadcasting from industry professionals. Gain hands-on experience in show production, presenting, and station operations.",
    category: "Broadcasting",
    level: "Level 3",
    duration: "18 months",
    salary: "£18,000 - £22,000",
    requirements: [
      "GCSEs at grade 4/C or above including English and Maths",
      "Passion for radio and media",
      "Good communication skills",
      "Basic computer literacy"
    ],
    skills: [
      "Radio Production",
      "Presenting Skills",
      "Audio Editing",
      "Content Creation",
      "Studio Operations"
    ],
    benefits: [
      "Professional qualification",
      "Mentorship from industry experts",
      "Real work experience",
      "Networking opportunities"
    ],
    locations: ["London", "Manchester", "Birmingham"],
    startDate: "September 2024",
    applicationDeadline: "31 July 2024",
    status: "open",
    featured: true,
    icon: "🎙️"
  },
  {
    id: 2,
    title: "Digital Media Producer Apprenticeship",
    description: "Master digital content creation for radio and online platforms. Learn video production, social media management, and digital marketing.",
    category: "Digital Media",
    level: "Level 4",
    duration: "24 months",
    salary: "£20,000 - £25,000",
    requirements: [
      "A-levels or equivalent",
      "Experience with social media platforms",
      "Creative thinking skills",
      "Basic video editing knowledge"
    ],
    skills: [
      "Video Production",
      "Social Media Strategy",
      "Content Marketing",
      "Analytics",
      "Graphic Design"
    ],
    benefits: [
      "Industry-recognized certification",
      "Portfolio development",
      "Industry connections",
      "Career progression opportunities"
    ],
    locations: ["London", "Bristol", "Glasgow"],
    startDate: "October 2024",
    applicationDeadline: "15 August 2024",
    status: "open",
    featured: true,
    icon: "📱"
  },
  {
    id: 3,
    title: "Audio Engineering Apprenticeship",
    description: "Develop technical expertise in audio production, sound engineering, and studio management for professional broadcasting environments.",
    category: "Technical",
    level: "Level 3",
    duration: "24 months",
    salary: "£19,000 - £24,000",
    requirements: [
      "GCSEs including Maths and Science",
      "Interest in audio technology",
      "Problem-solving skills",
      "Attention to detail"
    ],
    skills: [
      "Audio Engineering",
      "Studio Management",
      "Live Sound",
      "Equipment Maintenance",
      "Acoustic Design"
    ],
    benefits: [
      "Technical certification",
      "Hands-on equipment training",
      "Industry standard practices",
      "Professional network"
    ],
    locations: ["London", "Manchester", "Leeds"],
    startDate: "September 2024",
    applicationDeadline: "31 July 2024",
    status: "open",
    featured: false,
    icon: "🔧"
  },
  {
    id: 4,
    title: "Journalism & Content Creation Apprenticeship",
    description: "Build skills in radio journalism, news writing, and content creation across multiple media platforms.",
    category: "Journalism",
    level: "Level 3",
    duration: "18 months",
    salary: "£17,000 - £21,000",
    requirements: [
      "GCSEs at grade 4/C or above including English",
      "Strong writing skills",
      "Research abilities",
      "Current affairs awareness"
    ],
    skills: [
      "News Writing",
      "Interviewing",
      "Research",
      "Digital Journalism",
      "Content Strategy"
    ],
    benefits: [
      "Journalism qualification",
      "Byline opportunities",
      "Industry mentorship",
      "Portfolio development"
    ],
    locations: ["London", "Edinburgh", "Cardiff"],
    startDate: "January 2025",
    applicationDeadline: "30 November 2024",
    status: "upcoming",
    featured: false,
    icon: "📰"
  },
  {
    id: 5,
    title: "Marketing & Communications Apprenticeship",
    description: "Learn marketing strategies specific to media and broadcasting, including brand management, audience engagement, and promotional campaigns.",
    category: "Marketing",
    level: "Level 3",
    duration: "15 months",
    salary: "£18,000 - £22,000",
    requirements: [
      "GCSEs including English and Maths",
      "Creative thinking",
      "Social media knowledge",
      "Team working skills"
    ],
    skills: [
      "Digital Marketing",
      "Brand Management",
      "Campaign Planning",
      "Analytics",
      "Public Relations"
    ],
    benefits: [
      "Marketing certification",
      "Campaign experience",
      "Industry insights",
      "Professional development"
    ],
    locations: ["London", "Birmingham", "Bristol"],
    startDate: "September 2024",
    applicationDeadline: "31 July 2024",
    status: "open",
    featured: false,
    icon: "📢"
  },
  {
    id: 6,
    title: "Business Administration Apprenticeship",
    description: "Gain essential business skills in media management, operations, and administration within a dynamic broadcasting environment.",
    category: "Business",
    level: "Level 3",
    duration: "12 months",
    salary: "£16,000 - £19,000",
    requirements: [
      "GCSEs including English and Maths",
      "Organizational skills",
      "IT proficiency",
      "Communication skills"
    ],
    skills: [
      "Office Management",
      "Project Coordination",
      "Business Communication",
      "Financial Administration",
      "HR Support"
    ],
    benefits: [
      "Business administration qualification",
      "Management experience",
      "Professional environment",
      "Career progression"
    ],
    locations: ["London", "Manchester"],
    startDate: "August 2024",
    applicationDeadline: "15 July 2024",
    status: "open",
    featured: false,
    icon: "💼"
  }
]

const successStories: SuccessStory[] = [
  {
    id: 1,
    name: "Emma Thompson",
    apprenticeship: "Radio Broadcasting",
    company: "BBC Radio",
    year: "2023",
    story: "Started as an apprentice with no prior experience. Through hands-on training and mentorship, I developed my presenting skills and technical knowledge.",
    outcome: "Now a full-time presenter on BBC Radio 1",
    image: "🎙️"
  },
  {
    id: 2,
    name: "Marcus Chen",
    apprenticeship: "Digital Media Producer",
    company: "Global Media",
    year: "2022",
    story: "The apprenticeship gave me the perfect foundation to build my digital media career. I learned from industry experts and worked on real campaigns.",
    outcome: "Promoted to Digital Content Manager after 18 months",
    image: "📱"
  },
  {
    id: 3,
    name: "Sarah Williams",
    apprenticeship: "Audio Engineering",
    company: "Capital Radio",
    year: "2023",
    story: "Always passionate about the technical side of radio. The apprenticeship provided the structured learning and practical experience I needed.",
    outcome: "Now lead audio engineer for live broadcasts",
    image: "🔧"
  }
]

export function ApprenticeshipOfferings() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedApprenticeship, setSelectedApprenticeship] = useState<Apprenticeship | null>(null)
  const [activeTab, setActiveTab] = useState("programs")

  const filteredApprenticeships = selectedCategory === "All" 
    ? apprenticeships 
    : apprenticeships.filter(app => app.category === selectedCategory)

  const categories = ["All", "Broadcasting", "Digital Media", "Technical", "Journalism", "Marketing", "Business"]

  const openApprenticeships = apprenticeships.filter(app => app.status === 'open').length
  const totalApprentices = 150
  const employmentRate = 92

  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Apprenticeship Programs</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Earn while you learn with our comprehensive apprenticeship programs. 
            Gain real-world experience, professional qualifications, and launch your career in the media industry.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="glass-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold gradient-text mb-2">{openApprenticeships}</div>
              <div className="text-sm text-muted-foreground">Open Positions</div>
            </CardContent>
          </Card>
          <Card className="glass-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold gradient-text mb-2">{totalApprentices}</div>
              <div className="text-sm text-muted-foreground">Total Apprentices</div>
            </CardContent>
          </Card>
          <Card className="glass-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold gradient-text mb-2">{employmentRate}%</div>
              <div className="text-sm text-muted-foreground">Employment Rate</div>
            </CardContent>
          </Card>
          <Card className="glass-card text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold gradient-text mb-2">4.8/5</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rating</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
            <TabsTrigger value="programs">Programs</TabsTrigger>
            <TabsTrigger value="success">Success Stories</TabsTrigger>
            <TabsTrigger value="apply">Apply Now</TabsTrigger>
          </TabsList>

          <TabsContent value="programs" className="space-y-8">
            {/* Featured Programs */}
            <div>
              <h3 className="text-2xl font-semibold mb-8">Featured Programs</h3>
              <div className="grid lg:grid-cols-2 gap-8">
                {apprenticeships.filter(app => app.featured).map((app) => (
                  <Card key={app.id} className="glass-card group hover:scale-105 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-gold-accent/20 rounded-lg flex items-center justify-center text-2xl">
                            {app.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline">{app.category}</Badge>
                            <Badge className={
                              app.status === 'open' ? 'bg-green-500 text-white' :
                              app.status === 'upcoming' ? 'bg-yellow-500 text-white' :
                              'bg-red-500 text-white'
                            }>
                              {app.status}
                            </Badge>
                            <Badge className="bg-purple-500 text-white">Featured</Badge>
                          </div>
                          <h4 className="text-lg font-semibold mb-2">{app.title}</h4>
                          <p className="text-sm text-muted-foreground mb-3">{app.description}</p>
                          <div className="grid grid-cols-2 gap-4 text-xs text-muted-foreground mb-4">
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {app.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <DollarSign className="h-3 w-3" />
                              {app.salary}
                            </div>
                            <div className="flex items-center gap-1">
                              <GraduationCap className="h-3 w-3" />
                              {app.level}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {app.startDate}
                            </div>
                          </div>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => setSelectedApprenticeship(app)}
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
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

            {/* All Programs */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredApprenticeships.map((app) => (
                <Card key={app.id} className="glass-card group hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-gold-accent/20 rounded-lg flex items-center justify-center text-xl">
                        {app.icon}
                      </div>
                      <Badge className={
                        app.status === 'open' ? 'bg-green-500 text-white' :
                        app.status === 'upcoming' ? 'bg-yellow-500 text-white' :
                        'bg-red-500 text-white'
                      }>
                        {app.status}
                      </Badge>
                    </div>
                    
                    <h4 className="font-semibold text-lg mb-2">{app.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {app.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <GraduationCap className="h-3 w-3" />
                        {app.level}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {app.duration}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <DollarSign className="h-3 w-3" />
                        {app.salary}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {app.skills.slice(0, 2).map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {app.skills.length > 2 && (
                        <Badge variant="secondary" className="text-xs">
                          +{app.skills.length - 2} more
                        </Badge>
                      )}
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full glass-button"
                      onClick={() => setSelectedApprenticeship(app)}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="success" className="space-y-8">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-semibold mb-4">Success Stories</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hear from our apprentices who have successfully launched their careers in the media industry.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {successStories.map((story) => (
                <Card key={story.id} className="glass-card group hover:scale-105 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-gold-accent/20 rounded-full flex items-center justify-center text-3xl">
                      {story.image}
                    </div>
                    <h4 className="font-semibold text-lg mb-1">{story.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{story.apprenticeship} Apprentice</p>
                    <p className="text-sm text-primary mb-3">{story.company} • {story.year}</p>
                    <p className="text-sm text-muted-foreground mb-4">{story.story}</p>
                    <div className="text-sm font-medium text-green-600">
                      {story.outcome}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Employment Progress */}
            <Card className="glass-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Career Progression</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Apprenticeship Completion</span>
                      <span>95%</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Industry Employment</span>
                      <span>92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Career Progression</span>
                      <span>78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="apply" className="space-y-8">
            <div className="max-w-4xl mx-auto">
              <Card className="glass-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 text-center">Apply for an Apprenticeship</h3>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-4">Eligibility Criteria</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Age 16-24 at the start of the program</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Right to work in the UK</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Meet specific program requirements</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">Passion for media and broadcasting</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-4">Application Process</h4>
                      <ol className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">1</span>
                          <span>Choose your program and submit application</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">2</span>
                          <span>Initial screening and assessment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">3</span>
                          <span>Interview with program coordinators</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs flex-shrink-0">4</span>
                          <span>Final selection and onboarding</span>
                        </li>
                      </ol>
                    </div>
                  </div>
                  
                  <div className="mt-8 text-center">
                    <Button size="lg" className="glass-button bg-primary text-primary-foreground">
                      Start Your Application
                    </Button>
                    <p className="text-sm text-muted-foreground mt-2">
                      Applications typically take 2-4 weeks to process
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Apprenticeship Detail Modal */}
        {selectedApprenticeship && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <Card className="glass-card max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-gold-accent/20 rounded-lg flex items-center justify-center text-2xl">
                      {selectedApprenticeship.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{selectedApprenticeship.title}</h3>
                      <p className="text-muted-foreground">{selectedApprenticeship.category} • {selectedApprenticeship.level}</p>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => setSelectedApprenticeship(null)}
                  >
                    ×
                  </Button>
                </div>

                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="requirements">Requirements</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="apply">Apply</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-4">
                    <p>{selectedApprenticeship.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">Duration</label>
                        <p>{selectedApprenticeship.duration}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Salary</label>
                        <p>{selectedApprenticeship.salary}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Start Date</label>
                        <p>{selectedApprenticeship.startDate}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Application Deadline</label>
                        <p>{selectedApprenticeship.applicationDeadline}</p>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium">Locations</label>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {selectedApprenticeship.locations.map((location, index) => (
                          <Badge key={index} variant="outline">{location}</Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium">Benefits</label>
                      <ul className="space-y-1 mt-1">
                        {selectedApprenticeship.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TabsContent>

                  <TabsContent value="requirements" className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Requirements</label>
                      <ul className="space-y-2 mt-2">
                        {selectedApprenticeship.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TabsContent>

                  <TabsContent value="skills" className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Skills You'll Learn</label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {selectedApprenticeship.skills.map((skill, index) => (
                          <Badge key={index} variant="outline">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="apply" className="space-y-4">
                    <div className="text-center">
                      <Button size="lg" className="glass-button bg-primary text-primary-foreground">
                        Apply Now
                      </Button>
                      <p className="text-sm text-muted-foreground mt-2">
                        Application deadline: {selectedApprenticeship.applicationDeadline}
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="glass-card bg-gradient-to-r from-primary/10 to-gold-accent/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold gradient-text mb-4">Ready to Start Your Career?</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Take the first step towards an exciting career in media and broadcasting.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="glass-button bg-primary text-primary-foreground">
                  Apply Now
                </Button>
                <Button variant="outline" size="lg" className="glass-button">
                  Download Brochure
                </Button>
                <Button variant="outline" size="lg" className="glass-button">
                  Contact Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}