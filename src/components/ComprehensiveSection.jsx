import { useState, useEffect, useRef } from 'react'
import configurableImg from '../assets/Comprehensive-Composable-Platform.webp'
import innovativeImg from '../assets/Innovative-Financial-Platform.webp'
import configPaymentsImg from '../assets/Configurable-Payments-Platform.webp'

const STATS = [
  {
    image: configurableImg,
    label: 'Configurable',
    stat: '300+',
    statLabel: 'Integrated Banking and Payments APIs',
  },
  {
    image: innovativeImg,
    label: 'Innovative',
    stat: '100K',
    statLabel: 'Pre-Coded Composable Building Block Solutions',
  },
  {
    image: configPaymentsImg,
    label: 'Adaptable',
    stat: '1',
    statLabel: 'Unified Global Platform and Technology Stack',
  },
]

function ComprehensiveSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % STATS.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="comprehensive-section">
      <div className="comprehensive-left">
        <h2 className="comprehensive-heading">
          Comprehensive, composable solutions that quickly respond
          to the unexpected<span className="heading-dot">.</span>
        </h2>

        <div className="comprehensive-cards">
          <div className="comprehensive-card">
            <div className="comprehensive-card-icon">⚙️</div>
            <p>Bypass coding with self-serve product personalization.</p>
          </div>
          <div className="comprehensive-card">
            <div className="comprehensive-card-icon">🌐</div>
            <p>Shift go-to-market strategies on the fly.</p>
          </div>
          <div className="comprehensive-card">
            <div className="comprehensive-card-icon">💡</div>
            <p>Speed continuous innovation from R&D to rollout.</p>
          </div>
        </div>

        <div className="comprehensive-footer-text">
          <h3>All speed. No limits.</h3>
          <p>Fuel faster outcomes with the platform built for nonstop innovation and guaranteed reliability.</p>
          <button className="comprehensive-explore-btn">
            See How It Works <span>↗</span>
          </button>
        </div>
      </div>

      <div className="comprehensive-right">
        <div className="comprehensive-image-wrapper">
          {STATS.map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt={item.label}
              className={`comprehensive-triangle-img ${index === activeIndex ? 'active' : ''}`}
            />
          ))}
          <p className="comprehensive-image-label">{STATS[activeIndex].label}</p>
        </div>

        <div className="comprehensive-stats-under">
          {STATS.map((item, index) => (
            <div
              key={index}
              className={`comprehensive-stat-line-item ${index === activeIndex ? 'active' : ''}`}
            >
              <p className="comprehensive-stat-number-small">{item.stat}</p>
              <p className="comprehensive-stat-label-small">{item.statLabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ComprehensiveSection