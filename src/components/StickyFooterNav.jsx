import { useState, useEffect, useRef } from 'react'

function StickyFooterNav() {
  const wrapperRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={wrapperRef}
      className={`engineered-nav-wrapper ${isVisible ? 'nav-visible' : 'nav-hidden'}`}
    >
      <div className="engineered-nav">
        <button className="engineered-nav-item">News</button>
        <button className="engineered-nav-item">Events</button>
        <button className="engineered-nav-item">Awards</button>
        <button className="engineered-nav-item">Insights</button>
      </div>
    </div>
  )
}

export default StickyFooterNav