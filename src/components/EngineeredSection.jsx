import { useState, useEffect, useRef } from 'react'
import bgImage from '../assets/i2c-Digital-Banking-and-Payments-Platform-mbl.webp'

function EngineeredSection() {
  const sectionRef = useRef(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const distanceFromCenter = rect.top - windowHeight / 2
      setOffset(distanceFromCenter * 0.05)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="engineered-section" ref={sectionRef}>
      <img src={bgImage} alt="Engineered for efficiency" className="engineered-bg" />

      <h2
        className="engineered-heading"
        style={{ transform: `translate(-50%, calc(-50% + ${offset}px))` }}
      >
        Engineered for efficiency<span className="heading-dot">.</span><br />
        Streamlined for scalability<span className="heading-dot">.</span>
      </h2>
    </section>
  )
}

export default EngineeredSection