"use client"

import { useState, useEffect } from 'react'

export default function GlitchText({ 
  children, 
  className = '',
  onHover = false 
}: { 
  children: React.ReactNode
  className?: string
  onHover?: boolean 
}) {
  const [isGlitching, setIsGlitching] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!onHover) {
      // Random glitch effect
      const interval = setInterval(() => {
        setIsGlitching(true)
        setTimeout(() => setIsGlitching(false), 200)
      }, Math.random() * 5000 + 3000) // Random interval between 3-8 seconds

      return () => clearInterval(interval)
    }
  }, [onHover])

  const handleMouseEnter = () => {
    if (onHover) {
      setIsHovered(true)
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 300)
    }
  }

  const handleMouseLeave = () => {
    if (onHover) {
      setIsHovered(false)
    }
  }

  return (
    <span
      className={`relative inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Main text */}
      <span className={`relative z-10 ${isGlitching ? 'animate-pulse' : ''}`}>
        {children}
      </span>
      
      {/* Glitch layers */}
      {isGlitching && (
        <>
          {/* Red offset */}
          <span 
            className="absolute inset-0 z-0 text-red-500 opacity-80"
            style={{
              transform: 'translate(-2px, 2px)',
              animation: 'glitch-1 0.3s infinite',
            }}
          >
            {children}
          </span>
          
          {/* Blue offset */}
          <span 
            className="absolute inset-0 z-0 text-blue-500 opacity-80"
            style={{
              transform: 'translate(2px, -2px)',
              animation: 'glitch-2 0.3s infinite',
            }}
          >
            {children}
          </span>
        </>
      )}
      
      {/* Hover glow effect */}
      {isHovered && onHover && (
        <span 
          className="absolute inset-0 z-0 bg-primary opacity-20 blur-md"
          style={{
            animation: 'glow 0.5s ease-out',
          }}
        />
      )}
    </span>
  )
}
