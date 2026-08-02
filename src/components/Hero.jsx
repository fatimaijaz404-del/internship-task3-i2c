import { useState, useEffect } from 'react'
import allInOne from '../assets/All-in-One-Platform-small.webp'
import composable from '../assets/Composable-Solutions-small.webp'
import trusted from '../assets/Trusted-Experience-small.webp'

const TAGS = ['Issuer Processing', 'Core Banking', 'Money Movement']

const SLIDES = [
  { img: allInOne, label: 'All-in-One Platform' },
  { img: composable, label: 'Composable Solutions' },
  { img: trusted, label: 'Trusted Experience' },
]

function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="hero-heading">
  <span className="hero-heading-line">Powered by innovation<span className="heading-dot">.</span></span>
  <span className="hero-heading-line">Driven by trust<span className="heading-dot">.</span></span>
</h1>
        <div className="hero-tags">
          {TAGS.map((tag, index) => (
            <span key={tag}>
              {tag}
              {index < TAGS.length - 1 && <span className="tag-dot">•</span>}
            </span>
          ))}
        </div>

        <p className="hero-desc">
  i2c delivers bold innovation with rock-solid reliability to
  supercharge your banking and payments platform. Our unified
  global platform, composable building-block solutions and
  trusted ingenuity help you ditch the legacy dinosaurs and
  modern daredevils, scale steady and accelerate profits with ease.
</p>

        <button className="hero-btn">Contact Us →</button>
      </div>

      <div className="hero-right">
        <div className="hero-triangle">
          {SLIDES.map((slide, index) => (
            <img
              key={index}
              src={slide.img}
              alt={slide.label}
              className={`hero-slide ${index === current ? 'active' : ''}`}
            />
          ))}
          <p className="hero-slide-label">{SLIDES[current].label}</p>
        </div>

        <div className="hero-dots">
          {SLIDES.map((_, index) => (
            <span
              key={index}
              className={`hero-dot ${index === current ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero