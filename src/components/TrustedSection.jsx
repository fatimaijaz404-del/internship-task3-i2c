import { useState, useEffect, useRef } from 'react'

import trustedImg from '../assets/Trusted-Banking-and-Payments-Platform.webp'
import agileImg from '../assets/Agile-Payment-Platform.webp'
import experiencedImg from '../assets/Proven-Payments-Platform-Experience.webp'

import trustedVideo1 from '../assets/8034705-uhd_2160_3840_25fps.mp4'
import trustedVideo2 from '../assets/8479278-hd_1080_1920_25fps.mp4'
import trustedVideo3 from '../assets/8135691-uhd_2160_4096_25fps.mp4'

import qikLogo from '../assets/Qik-Logo.svg'
import carIqLogo from '../assets/CarIQ-Logo.svg'
import jifitiLogo from '../assets/Jifiti-Logo.svg'

const STATS = [
  {
    image: trustedImg,
    label: 'Trusted',
    stat: '1,600+',
    statLabel: 'Global Experts Supporting Clients Worldwide',
  },
  {
    image: agileImg,
    label: 'Agile',
    stat: '2x',
    statLabel: 'Monthly Software Releases for Rapid Market Delivery',
  },
  {
    image: experiencedImg,
    label: 'Experienced',
    stat: '25+',
    statLabel: 'Years of Operation in Banking and Payments',
  },
]

const SHIFT_CARDS = [
  {
    quote: 'Building a bank that drives financial inclusion.',
    name: 'Luis Del Toro',
    role: 'CFO and COO',
    company: 'Qik',
    video: trustedVideo1,
    logo: qikLogo,
  },
  {
    quote: "Issuing the world's first payment credential to a machine.",
    name: 'Sterling Pratz',
    role: 'CEO & Founder',
    company: 'Car IQ',
    video: trustedVideo2,
    logo: carIqLogo,
  },
  {
    quote: 'A digital-first credit/rewards program for consumers and businesses.',
    name: 'Daniel Citron',
    role: 'Chief Solutions Officer',
    company: 'Jifiti',
    video: trustedVideo3,
    logo: jifitiLogo,
  },
]

function TrustedSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [playingIndex, setPlayingIndex] = useState(null)
  const videoRefs = useRef([])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % STATS.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="trusted-section">
      <div className="trusted-right">
        <div className="trusted-image-wrapper">
          {STATS.map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt={item.label}
              className={`trusted-triangle-img ${index === activeIndex ? 'active' : ''}`}
            />
          ))}
          <p className="trusted-image-label">{STATS[activeIndex].label}</p>
        </div>

        <div className="trusted-stats-under">
          {STATS.map((item, index) => (
            <div
              key={index}
              className={`trusted-stat-line-item ${index === activeIndex ? 'active' : ''}`}
            >
              <p className="trusted-stat-number-small">{item.stat}</p>
              <p className="trusted-stat-label-small">{item.statLabel}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="trusted-left">
        <h2 className="trusted-heading">
          Decades of experience drive innovation and speed to
          market<span className="trusted-dot">.</span>
        </h2>

        <div className="trusted-cards">
          <div className="trusted-card">
            <div className="trusted-card-icon">📈</div>
            <p>Speed past the competition with rapid product deployment.</p>
          </div>
          <div className="trusted-card">
            <div className="trusted-card-icon">🚀</div>
            <p>Implement fast with accelerated, expert GTM strategies.</p>
          </div>
          <div className="trusted-card">
            <div className="trusted-card-icon">🧭</div>
            <p>Navigate with a guided track record of banking and payments ingenuity.</p>
          </div>
        </div>

        <div className="trusted-footer-text">
          <h3>Responsive handling. Guided navigation.</h3>
          <p>Built on a foundation of stability and for what's next.</p>
          <button className="trusted-explore-btn">
            Learn More <span>↗</span>
          </button>
        </div>

        <div className="shift-block">
          <h3 className="shift-heading">Shift to the front of the pack.</h3>
          <p className="shift-paragraph">
            Watch how i2c helps these visionaries outmaneuver competitors in an
            increasingly crowded banking and payments race.
          </p>

          <div className="shift-cards">
            {SHIFT_CARDS.map((item, index) => (
              <div
                className={`shift-card shift-card-${index}`}
                key={index}
                onMouseEnter={() => {
                  setPlayingIndex(index)
                  videoRefs.current[index]?.play()
                }}
                onMouseLeave={() => {
                  setPlayingIndex(null)
                  const vid = videoRefs.current[index]
                  if (vid) {
                    vid.pause()
                    vid.currentTime = 0
                  }
                }}
                onClick={() => {
                  if (playingIndex === index) {
                    setPlayingIndex(null)
                    const vid = videoRefs.current[index]
                    if (vid) {
                      vid.pause()
                      vid.currentTime = 0
                    }
                  } else {
                    setPlayingIndex(index)
                    videoRefs.current[index]?.play()
                  }
                }}
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={item.video}
                  className="shift-video"
                  muted
                  loop
                  playsInline
                />

                {playingIndex !== index ? (
                  <div className={`shift-overlay shift-overlay-${index}`}>
                    <p className="shift-quote-top">{item.quote}</p>
                    <img
                      src={item.logo}
                      alt={item.company}
                      className="power-card-logo power-card-logo-bottom"
                    />
                  </div>
                ) : (
                  <>
                    <img
                      src={item.logo}
                      alt={item.company}
                      className="power-card-logo power-card-logo-top"
                    />
                    <div className="power-play-info">
                      <p className="power-card-name">{item.name}</p>
                      <p className="power-card-role">
                        {item.role} | {item.company}
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustedSection
