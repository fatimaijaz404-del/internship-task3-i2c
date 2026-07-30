import { useState, useRef } from 'react'
import video1 from '../assets/6565541-hd_1080_1920_25fps.mp4'
import video2 from '../assets/7581173-hd_1080_1920_30fps.mp4'

function PowerDifferential() {
  const [playingIndex, setPlayingIndex] = useState(null)
  const videoRefs = useRef([])

  const handlePlay = (index) => {
    setPlayingIndex(index)
    videoRefs.current[index]?.play()
  }

  return (
    <section className="power-section">
      <h2 className="power-heading">Shift the power differential<span className="heading-dot">.</span></h2>
      <p className="power-desc">
        Watch how i2c helps these visionaries outperform outdated banking and
        payments platforms to scale fast and modernize to last.
      </p>

      <div className="power-cards">
        <div className="power-card power-card-light">
          <p>Bridging the gap between global payments and everyday banking.</p>
        </div>

        <div className="power-card power-card-video" onClick={() => handlePlay(0)}>
          <video
            ref={(el) => (videoRefs.current[0] = el)}
            src={video1}
            className="power-card-video-el"
            controls={playingIndex === 0}
            playsInline
          />
          {playingIndex !== 0 && (
            <div className="power-play-overlay">
              <div className="power-play-btn">▶</div>
              <p className="power-card-name">Fillipo Alario</p>
              <p className="power-card-role">CEO | Belize Bank</p>
            </div>
          )}
        </div>

        <div className="power-card power-card-light">
          <p>Powering people who fuel the economy.</p>
          <span className="power-card-brand">payactiv</span>
        </div>
      </div>
    </section>
  )
}

export default PowerDifferential