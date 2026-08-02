import { useState, useEffect, useRef } from 'react'

import configurableImg from '../assets/Comprehensive-Composable-Platform.webp'
import innovativeImg from '../assets/Innovative-Financial-Platform.webp'
import configPaymentsImg from '../assets/Configurable-Payments-Platform.webp'
import gearsVideo1 from '../assets/6565541-hd_1080_1920_25fps.mp4'
import gearsVideo2 from '../assets/7581173-hd_1080_1920_30fps.mp4'
import gearsVideo3 from '../assets/7643854-uhd_2160_4096_25fps.mp4'

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

const GEARS = [
  {
    quote: 'Complete, tailored credit card programs aligned for businesses.',
    name: 'Jim Glatiotis',
    role: 'Chief Technical Officer',
    company: 'Jassby',
    video: gearsVideo1,
  },
  {
    quote: 'Real crypto utility at global scale.',
    name: 'Todd Crosland',
    role: 'CEO',
    company: 'CoinZoom',
    video: gearsVideo2,
  },
  {
    quote: 'Powering small businesses with industry-tailored credit cards.',
    name: 'Aaron Bai',
    role: 'CEO',
    company: 'Affiniti Finance',
    video: gearsVideo3,
  },
]

function ComprehensiveSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [playingIndex, setPlayingIndex] = useState(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % STATS.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="comprehensive-section" id="comprehensive-section">
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

        <div className="gears-block">
          <h3 className="gears-heading">Shift gears, not momentum.</h3>
          <p className="gears-paragraph">
            Watch how i2c helps these visionaries outpace the ever-evolving banking
            and payments market, regulatory and customer demand drivers, backed by
            active/active resiliency that keeps innovation—and business—moving.
          </p>

          <div className="gears-cards">
            {GEARS.map((item, index) => (
              <div className="gears-card" key={index}>
                <video
                  src={item.video}
                  className="gears-video"
                  controls={playingIndex === index}
                  playsInline
                />

                {playingIndex !== index && (
                  <div className="gears-overlay">
                    <button
                      className="gears-play-btn"
                      onClick={() => setPlayingIndex(index)}
                      aria-label="Play video"
                    >
                      ▶
                    </button>
                    <p className="gears-quote">{item.quote}</p>
                    <div className="gears-footer">
                      <p className="gears-name">
                        {item.name}
                        <span className="gears-role"> {item.role}</span>
                      </p>
                      <span className="gears-company">{item.company}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
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