"use client"

import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([])

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      
      // Add to trail
      setTrail(prev => [
        ...prev.slice(-8), // Keep only last 8 positions
        { x: e.clientX, y: e.clientY, id: Date.now() }
      ])
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.matches('button, a, [role="button"], input, textarea, select, .cursor-pointer')) {
        setIsHovering(true)
      }
    }

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.matches('button, a, [role="button"], input, textarea, select, .cursor-pointer')) {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', updatePosition)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('mouseover', handleMouseEnter)
    window.addEventListener('mouseout', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('mouseover', handleMouseEnter)
      window.removeEventListener('mouseout', handleMouseLeave)
    }
  }, [])

  // Hide cursor on touch devices
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  
  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  if (isTouchDevice) return null

  return (
    <>
      {/* Trail effect */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-50"
          style={{
            left: point.x,
            top: point.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div
            className="w-2 h-2 bg-primary rounded-full"
            style={{
              opacity: (index + 1) / trail.length * 0.3,
              transform: `scale(${(index + 1) / trail.length})`,
            }}
          />
        </div>
      ))}

      {/* Main cursor */}
      <div
        className={`fixed pointer-events-none z-50 transition-transform duration-100 ${
          isClicking ? 'scale-75' : 'scale-100'
        }`}
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Green dot only */}
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full transition-all duration-300 ${
            isHovering ? 'w-2 h-2' : 'w-1 h-1'
          }`}
        />
      </div>

      {/* Click effect */}
      {isClicking && (
        <div
          className="fixed pointer-events-none z-50"
          style={{
            left: position.x,
            top: position.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="w-12 h-12 border-2 border-primary rounded-full animate-ping" />
        </div>
      )}
    </>
  )
}
