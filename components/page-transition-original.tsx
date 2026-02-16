"use client"

import { useEffect, useState } from 'react'

export default function PageTransition() {
  const [isLoading, setIsLoading] = useState(true)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // Hide loader after content is loaded
    const timer = setTimeout(() => {
      setIsExiting(true)
      setTimeout(() => setIsLoading(false), 500)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 ${
      isExiting ? 'opacity-0' : 'opacity-100'
    }`}>
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary via-accent to-primary opacity-10 animate-pulse"></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main loader content */}
      <div className="relative z-10 text-center">
        {/* Logo animation */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            {/* Outer ring */}
            <div className="w-20 h-20 border-4 border-primary/20 rounded-full animate-spin"></div>
            
            {/* Middle ring */}
            <div className="absolute inset-2 w-16 h-16 border-4 border-primary/40 rounded-full animate-spin animation-delay-150"></div>
            
            {/* Inner core */}
            <div className="absolute inset-4 w-12 h-12 bg-primary rounded-lg flex items-center justify-center animate-pulse">
              <span className="text-primary-foreground font-bold text-xl">D</span>
            </div>
          </div>
        </div>

        {/* Loading text */}
        <div className="space-y-2">
          <h2 className="font-montserrat font-bold text-2xl text-foreground">
            DLAY
          </h2>
          <div className="flex items-center justify-center space-x-2">
            <span className="w-2 h-2 bg-primary rounded-full animate-bounce"></span>
            <span className="w-2 h-2 bg-primary rounded-full animate-bounce animation-delay-200"></span>
            <span className="w-2 h-2 bg-primary rounded-full animate-bounce animation-delay-400"></span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-8 w-48 h-1 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"
            style={{
              animation: 'loading-progress 1.5s ease-out forwards'
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes loading-progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        .animation-delay-150 {
          animation-delay: 150ms;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
    </div>
  )
}
