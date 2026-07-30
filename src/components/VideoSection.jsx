import { useState } from 'react'
import bgVideo from '../assets/13866390-uhd_3840_2160_30fps.mp4'

function VideoSection() {
  const [showModal, setShowModal] = useState(false)

  return (
    <section className="video-section">
      <video
        className="video-bg"
        src={bgVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="video-overlay"></div>

      <div className="video-thumb-card" onClick={() => setShowModal(true)}>
        <video className="video-thumb-preview" src={bgVideo} muted />
        <p className="video-thumb-text">See Us<br />in Action</p>
        <div className="video-play-btn">▶</div>
      </div>

     <h2 className="video-heading">
  Deliver your program faster, more profitably and<br />
  ensure a superior customer experience.
</h2>

      {showModal && (
        <div className="video-modal" onClick={() => setShowModal(false)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={() => setShowModal(false)}>✕</button>
            <video
              width="100%"
              height="500"
              src={bgVideo}
              controls
              autoPlay
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default VideoSection