'use client'

import { createContext, useContext, useState, useEffect } from 'react'

const NavigationContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  isMobile: false,
  setIsMobile: () => {},
})

export function NavigationProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const isMobileView = window.innerWidth < 768
      setIsMobile(isMobileView)
      setIsOpen(!isMobileView)
    }

    // Check initial state
    checkMobile()

    // Add event listener
    window.addEventListener('resize', checkMobile)

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <NavigationContext.Provider value={{ isOpen, setIsOpen, isMobile, setIsMobile }}>
      {children}
    </NavigationContext.Provider>
  )
}

export function useNavigation() {
  return useContext(NavigationContext)
} 