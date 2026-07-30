import './AwardCTASection.css'
import awardTrophy from '../assets/award-leading-vendor-768.webp'
import ctaBg from '../assets/awards-bg-md1.webp'

function AwardCTASection() {
  return (
    <>
      <section className="award-banner">
        <img src={awardTrophy} alt="Leading Vendor Award" className="award-trophy" />
        <p className="award-text">
          i2c named "Leading Vendor" in Celent Card Issuing and Processing
          Solutions Report<span className="award-dot">.</span>
        </p>
        <button className="award-btn">
          Read More <span>↗</span>
        </button>
      </section>

      <section className="cta-section">
        <img src={ctaBg} alt="" className="cta-bg" />
        <div className="cta-overlay">
          <h2 className="cta-heading">
            Let's power innovation together<span className="cta-dot">.</span>
          </h2>
          <p className="cta-subtext">
            Say goodbye to outdated systems and risky leaps and move to a
            powerful platform and best-in-class solutions today.
          </p>
          <button className="cta-btn">
            Get Started <span>↗</span>
          </button>
        </div>
      </section>
    </>
  )
}

export default AwardCTASection