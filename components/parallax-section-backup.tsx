"use client"

import { useEffect, useRef, useState } from 'react'

interface ParallaxProps {
  children: React.ReactNode
  speed?: number
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
}

export default function ParallaxSection({ 
  children, 
  speed = 0.5, 
  className = "",
  direction = 'up' 
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      
      const rect = ref.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Calculate how much the element is visible in the viewport
      const elementCenter = rect.top + rect.height / 2
      const viewportCenter = windowHeight / 2
      const distanceFromCenter = elementCenter - viewportCenter
      
      // Enhanced parallax calculation based on scroll position
      let yOffset = 0
      let xOffset = 0
      
      switch (direction) {
        case 'up':
          // Move up when scrolling down (creates depth effect)
          yOffset = distanceFromCenter * speed * 0.5
          break
        case 'down':
          // Move down when scrolling down
          yOffset = -distanceFromCenter * speed * 0.5
          break
        case 'left':
          // Move left when scrolling down
          xOffset = distanceFromCenter * speed * 0.3
          break
        case 'right':
          // Move right when scrolling down
          xOffset = -distanceFromCenter * speed * 0.3
          break
      }
      
      // Set the main parallax offset
      setOffset({ x: xOffset, y: yOffset })
    }

    const throttledHandleScroll = throttle(handleScroll, 16) // ~60fps
    
    window.addEventListener('scroll', throttledHandleScroll, { passive: true })
    window.addEventListener('resize', throttledHandleScroll, { passive: true })
    
    // Initial calculation
    handleScroll()

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll)
      window.removeEventListener('resize', throttledHandleScroll)
    }
  }, [speed, direction])

  // Separate effect for mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return
      
      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      
      const moveX = (e.clientX - centerX) * 0.01 * speed // Reduced intensity
      const moveY = (e.clientY - centerY) * 0.01 * speed // Reduced intensity
      
      setOffset(prev => ({ 
        x: prev.x + moveX, 
        y: prev.y + moveY 
      }))
    }

    const throttledHandleMouseMove = throttle(handleMouseMove, 32) // ~30fps for mouse
    
    window.addEventListener('mousemove', throttledHandleMouseMove, { passive: true })

    return () => {
      window.removeEventListener('mousemove', throttledHandleMouseMove)
    }
  }, [speed])

  // Throttle function for performance
  function throttle<T extends (...args: any[]) => any>(
    func: T,
    delay: number
  ): (...args: Parameters<T>) => void {
    let timeoutId: NodeJS.Timeout | null = null
    let lastExecTime = 0
    
    return (...args: Parameters<T>) => {
      const currentTime = Date.now()
      
      if (currentTime - lastExecTime > delay) {
        func(...args)
        lastExecTime = currentTime
      } else {
        if (timeoutId) {
          clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(() => {
          func(...args)
          lastExecTime = Date.now()
        }, delay - (currentTime - lastExecTime))
      }
    }
  }

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <div 
        className="transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`
        }}
      >
        {children}
      </div>
    </div>
  )
}
