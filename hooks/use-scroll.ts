import { useEffect } from 'react'

export const useScroll = (distance: number, callback: () => void) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const distanceFromBottom = documentHeight - (scrollTop + windowHeight)
      if (distanceFromBottom <= distance) callback()
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [callback, distance])
}
