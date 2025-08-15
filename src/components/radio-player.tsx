'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Slider } from '@/components/ui/slider'
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward } from 'lucide-react'

interface RadioPlayerProps {
  streamUrl?: string
  className?: string
}

export function RadioPlayer({ streamUrl = 'https://example.com/stream.mp3', className }: RadioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.7)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTrack, setCurrentTrack] = useState({
    title: 'Jamboradio Live',
    artist: 'Now Playing',
    album: 'Live Stream'
  })
  const [listeners, setListeners] = useState(1247)
  
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume
    }
  }, [volume, isMuted])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(error => {
          console.error('Playback failed:', error)
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0])
    setIsMuted(value[0] === 0)
  }

  const skipTrack = () => {
    // Simulate track change
    const tracks = [
      { title: 'Summer Vibes', artist: 'DJ Sunshine', album: 'Summer Mix 2024' },
      { title: 'Urban Beats', artist: 'City Sounds', album: 'Urban Collection' },
      { title: 'Chill Lounge', artist: 'Relax Radio', album: 'Lounge Sessions' }
    ]
    const randomTrack = tracks[Math.floor(Math.random() * tracks.length)]
    setCurrentTrack(randomTrack)
  }

  return (
    <Card className={`glass-card ${className}`}>
      <CardContent className="p-6">
        <audio ref={audioRef} src={streamUrl} />
        
        {/* Track Info */}
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold gradient-text mb-1">{currentTrack.title}</h3>
          <p className="text-sm text-muted-foreground">{currentTrack.artist}</p>
          <p className="text-xs text-muted-foreground mt-1">{listeners} listeners</p>
        </div>

        {/* Album Art */}
        <div className="w-32 h-32 mx-auto mb-6 rounded-lg overflow-hidden float-animation">
          <div className="w-full h-full bg-gradient-to-br from-primary to-gold-accent flex items-center justify-center">
            <div className="text-white text-4xl">🎵</div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={skipTrack}
            className="hover:scale-110 transition-transform"
          >
            <SkipBack className="h-4 w-4" />
          </Button>
          
          <Button 
            size="lg" 
            onClick={togglePlay}
            className="w-16 h-16 rounded-full glass-button hover:scale-110"
          >
            {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={skipTrack}
            className="hover:scale-110 transition-transform"
          >
            <SkipForward className="h-4 w-4" />
          </Button>
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMute}
            className="hover:scale-110 transition-transform"
          >
            {isMuted || volume === 0 ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </Button>
          
          <Slider
            value={[isMuted ? 0 : volume]}
            onValueChange={handleVolumeChange}
            max={1}
            min={0}
            step={0.1}
            className="flex-1"
          />
        </div>
      </CardContent>
    </Card>
  )
}