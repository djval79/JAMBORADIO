import { NextResponse } from 'next/server'

// Mock listener data
const generateListenerStats = () => {
  const baseListeners = 1200
  const variation = Math.floor(Math.random() * 100) - 50 // ±50 variation
  const currentListeners = Math.max(1000, baseListeners + variation)
  
  return {
    current: currentListeners,
    peak: Math.max(currentListeners, Math.floor(currentListeners * 1.2)),
    average: Math.floor(currentListeners * 0.9),
    trend: Math.random() > 0.5 ? 'up' : 'down',
    change: Math.floor(Math.random() * 20) - 10, // ±10 change
    history: Array.from({ length: 24 }, (_, i) => ({
      hour: i,
      listeners: Math.floor(currentListeners * (0.7 + Math.random() * 0.6))
    })),
    demographics: {
      locations: [
        { country: 'United Kingdom', listeners: Math.floor(currentListeners * 0.6) },
        { country: 'United States', listeners: Math.floor(currentListeners * 0.15) },
        { country: 'Canada', listeners: Math.floor(currentListeners * 0.08) },
        { country: 'Australia', listeners: Math.floor(currentListeners * 0.05) },
        { country: 'Germany', listeners: Math.floor(currentListeners * 0.04) },
        { country: 'Other', listeners: Math.floor(currentListeners * 0.08) }
      ],
      platforms: [
        { platform: 'Website', listeners: Math.floor(currentListeners * 0.45) },
        { platform: 'Mobile App', listeners: Math.floor(currentListeners * 0.30) },
        { platform: 'Smart Speaker', listeners: Math.floor(currentListeners * 0.15) },
        { platform: 'Other', listeners: Math.floor(currentListeners * 0.10) }
      ]
    }
  }
}

export async function GET() {
  try {
    const listenerStats = generateListenerStats()

    return NextResponse.json(listenerStats)
  } catch (error) {
    console.error('Listeners API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch listener stats' },
      { status: 500 }
    )
  }
}