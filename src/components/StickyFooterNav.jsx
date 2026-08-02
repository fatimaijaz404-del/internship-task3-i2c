import { useState, useEffect, useRef } from 'react'

const SHOW_IDS = ['engineered-section', 'growth-section', 'comprehensive-section']
const HIDE_IDS = ['differentiation-section', 'established-section']

function StickyFooterNav() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const targetIds = [...SHOW_IDS, ...HIDE_IDS]
    const elements = targetIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          if (SHOW_IDS.includes(entry.target.id)) {
            setIsVisible(true)
          } else if (HIDE_IDS.includes(entry.target.id)) {
            setIsVisible(false)
          }
        })
      },
      { threshold: 0.3 }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className={`engineered-nav-wrapper ${isVisible ? 'nav-visible' : 'nav-hidden'}`}>
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