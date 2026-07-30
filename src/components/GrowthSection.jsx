import { useState, useEffect, useRef } from 'react'
import reliableImg from '../assets/Reliable-Payment-Platform.webp'
import integratedImg from '../assets/Integrated-Financial-Platform.webp'
import customerImg from '../assets/Customer-Centric-Banking-Solutions.webp'

const STATS = [
  {
    image: reliableImg,
    label: 'Reliable',
    stat: '99.999%',
    statLabel: 'Historical Availability',
  },
  {
    image: integratedImg,
    label: 'Integrated',
    stat: '360°',
    statLabel: 'Customer-Centric Data Service Architecture',
  },
  {
    image: customerImg,
    label: 'Customer-Centric',
    stat: '1',
    statLabel: 'Unified Global Platform and Technology Stack',
  },
]

function GrowthSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const statRefs = useRef([])

  useEffect(() => {
    const handleScroll = () => {}
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index)
            setActiveIndex(index)
          }
        })
      },
      { threshold: 0.5, rootMargin: '-20% 0px -20% 0px' }
    )

    statRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="growth-section">
      <div className="growth-left">
        <div className="growth-image-wrapper">
          {STATS.map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt={item.label}
              className={`growth-triangle-img ${index === activeIndex ? 'active' : ''}`}
            />
          ))}
          <p className="growth-image-label">{STATS[activeIndex].label}</p>
        </div>

        <div className="growth-stats-under">
          <p className="growth-stat-number-small">{STATS[activeIndex].stat}</p>
          <p className="growth-stat-label-small">{STATS[activeIndex].statLabel}</p>
        </div>
      </div>

      <div className="growth-right">
        <h2 className="growth-heading">
          Unified platform built upon a customer-centric frame
          to uncover growth and innovation<span className="heading-dot">.</span>
        </h2>

        <div className="growth-cards">
          <div className="growth-card">
            <div className="growth-card-icon">🏦</div>
            <p>Expand to new markets & products, faster.</p>
          </div>
          <div className="growth-card">
            <div className="growth-card-icon">👥</div>
            <p>Drive smarter customer experiences.</p>
          </div>
          <div className="growth-card">
            <div className="growth-card-icon">🛡️</div>
            <p>Enjoy less than 5 minutes downtime per year.</p>
          </div>
        </div>

        <div className="growth-footer-text">
          <h3>One engine. All power.</h3>
          <p>Infinite journeys without legacy limits or public cloud instability.</p>
          <button className="growth-explore-btn">
            Start Exploring <span>↗</span>
          </button>
        </div>

        {STATS.map((item, index) => (
          <div
            key={index}
            className="growth-stat-block"
            data-index={index}
            ref={(el) => (statRefs.current[index] = el)}
          />
        ))}
      </div>
    </section>
  )
}

export default GrowthSection