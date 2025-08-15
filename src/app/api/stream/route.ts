import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // In a real implementation, this would fetch from your streaming server
    // For now, we'll return a mock stream URL
    const streamData = {
      streamUrl: 'https://example.com/stream.mp3',
      format: 'mp3',
      bitrate: 320,
      isLive: true,
      fallbackUrl: 'https://example.com/fallback.mp3',
      serverStatus: 'online',
      uptime: '24h 15m'
    }

    return NextResponse.json(streamData)
  } catch (error) {
    console.error('Stream API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch stream data' },
      { status: 500 }
    )
  }
}