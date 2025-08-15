import { NextResponse } from 'next/server'

// Mock track database
const trackDatabase = [
  {
    id: 1,
    title: "Summer Vibes",
    artist: "DJ Sunshine",
    album: "Summer Mix 2024",
    duration: 215,
    genre: "House",
    artwork: "https://example.com/artwork1.jpg",
    startedAt: Date.now() - 45000 // Started 45 seconds ago
  },
  {
    id: 2,
    title: "Urban Beats",
    artist: "City Sounds",
    album: "Urban Collection",
    duration: 198,
    genre: "Hip-Hop",
    artwork: "https://example.com/artwork2.jpg",
    startedAt: Date.now() - 120000 // Started 2 minutes ago
  },
  {
    id: 3,
    title: "Chill Lounge",
    artist: "Relax Radio",
    album: "Lounge Sessions",
    duration: 245,
    genre: "Chillout",
    artwork: "https://example.com/artwork3.jpg",
    startedAt: Date.now() - 180000 // Started 3 minutes ago
  }
]

export async function GET() {
  try {
    // Simulate rotating tracks every 3-5 minutes
    const currentTrack = trackDatabase[Math.floor(Math.random() * trackDatabase.length)]
    const currentTime = Date.now()
    const elapsed = Math.floor((currentTime - currentTrack.startedAt) / 1000)
    const remaining = Math.max(0, currentTrack.duration - elapsed)
    
    // Calculate progress percentage
    const progress = Math.min(100, (elapsed / currentTrack.duration) * 100)

    const nowPlayingData = {
      track: {
        id: currentTrack.id,
        title: currentTrack.title,
        artist: currentTrack.artist,
        album: currentTrack.album,
        duration: currentTrack.duration,
        genre: currentTrack.genre,
        artwork: currentTrack.artwork
      },
      playback: {
        isPlaying: true,
        elapsed: elapsed,
        remaining: remaining,
        progress: progress,
        startedAt: currentTrack.startedAt
      },
      station: {
        name: "Jamboradio",
        slogan: "Broadcasting with purpose",
        genre: "Mixed",
        listeners: 1247
      },
      nextTrack: {
        title: "Coming up next",
        artist: "Stay tuned",
        estimatedTime: remaining
      }
    }

    return NextResponse.json(nowPlayingData)
  } catch (error) {
    console.error('Now Playing API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch now playing data' },
      { status: 500 }
    )
  }
}