import { useState, useEffect, useRef } from 'react'
import reliableImg from '../assets/Reliable-Payment-Platform.webp'
import integratedImg from '../assets/Integrated-Financial-Platform.webp'
import customerImg from '../assets/Customer-Centric-Banking-Solutions.webp'
import video1 from '../assets/6565541-hd_1080_1920_25fps.mp4'
import video2 from '../assets/7581173-hd_1080_1920_30fps.mp4'
import video3 from '../assets/7643854-uhd_2160_4096_25fps.mp4'

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
  const [playingIndex, setPlayingIndex] = useState(null)
  const videoRefs = useRef([])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % STATS.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleInteractionStart = (index) => {
    setPlayingIndex(index)
    videoRefs.current[index]?.play()
  }

  const handleInteractionEnd = (index) => {
    setPlayingIndex(null)
    const video = videoRefs.current[index]
    if (video) {
      video.pause()
      video.currentTime = 0
    }
  }

  const handleCardClick = (index) => {
    if (playingIndex === index) {
      handleInteractionEnd(index)
    } else {
      handleInteractionStart(index)
    }
  }

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
          {STATS.map((item, index) => (
            <div
              key={index}
              className={`growth-stat-line-item ${index === activeIndex ? 'active' : ''}`}
            >
              <p className="growth-stat-number-small">{item.stat}</p>
              <p className="growth-stat-label-small">{item.statLabel}</p>
            </div>
          ))}
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

        <div className="power-inner">
          <h2 className="power-heading">
            Shift the power differential<span className="heading-dot">.</span>
          </h2>
          <p className="power-desc">
            Watch how i2c helps these visionaries outperform outdated banking and
            payments platforms to scale fast and modernize to last.
          </p>

          <div className="power-cards">
            <div
              className="power-card power-card-video"
              onMouseEnter={() => handleInteractionStart(0)}
              onMouseLeave={() => handleInteractionEnd(0)}
              onClick={() => handleCardClick(0)}
            >
              <video
                ref={(el) => (videoRefs.current[0] = el)}
                src={video1}
                className="power-card-video-el"
                muted
                loop
                playsInline
              />
              {playingIndex !== 0 && (
                <div className="power-play-overlay">
                  <div className="power-play-btn">▶</div>
                  <p className="power-card-name">Bridging the gap</p>
                  <p className="power-card-role">between global payments and everyday banking</p>
                </div>
              )}
            </div>

            <div
              className="power-card power-card-video"
              onMouseEnter={() => handleInteractionStart(1)}
              onMouseLeave={() => handleInteractionEnd(1)}
              onClick={() => handleCardClick(1)}
            >
              <video
                ref={(el) => (videoRefs.current[1] = el)}
                src={video2}
                className="power-card-video-el"
                muted
                loop
                playsInline
              />
              {playingIndex !== 1 && (
                <div className="power-play-overlay">
                  <div className="power-play-btn">▶</div>
                  <p className="power-card-name">Fillipo Alario</p>
                  <p className="power-card-role">CEO | Belize Bank</p>
                </div>
              )}
            </div>

            <div
              className="power-card power-card-video"
              onMouseEnter={() => handleInteractionStart(2)}
              onMouseLeave={() => handleInteractionEnd(2)}
              onClick={() => handleCardClick(2)}
            >
              <video
                ref={(el) => (videoRefs.current[2] = el)}
                src={video3}
                className="power-card-video-el"
                muted
                loop
                playsInline
              />
              {playingIndex !== 2 && (
                <div className="power-play-overlay">
                  <div className="power-play-btn">▶</div>
                  <p className="power-card-name">Powering people</p>
                  <p className="power-card-role">who fuel the economy | payactiv</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GrowthSection
