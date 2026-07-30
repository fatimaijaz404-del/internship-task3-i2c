import { useState, useEffect, useRef } from 'react'
import { Search, Menu, Volume2 } from 'lucide-react'
import logo from '../assets/i2c_logo.svg'
import serveImg from '../assets/configurable-building-blocks.webp'
import doImg from '../assets/image-8.png'
import differentImg from '../assets/supercharge-banking-and-payments.png'
import areImg from '../assets/image-8.png'
import knowImg from '../assets/Virtual-Event_PYMNTS_Emerging-Middle-Market.JPG'

const NAV_ITEMS = [
  {
    label: 'Who We Serve',
    key: 'serve',
    columns: [
      { heading: 'Banks', links: [] },
      { heading: 'Credit Unions', links: [] },
      { heading: 'Fintechs', links: [] },
      { heading: 'Governments', links: [] },
      { heading: 'Partners', links: [] },
      { heading: 'Our Clients', links: ['Client Map', 'Client Testimonials', 'Case Studies', 'Client Login', 'Developers'] },
    ],
    featured: {
      text: 'We help financial leaders move fast and stay ahead.',
      linkText: 'Fuel your future',
      image: serveImg,
    },
  },
  {
    label: 'What We Do',
    key: 'do',
    columns: [
      { heading: 'Issuer Processing', links: ['Credit', 'Debit', 'Prepaid'] },
      { heading: 'Core Banking', links: [] },
      { heading: 'Money Movement', links: [] },
      {
        heading: 'Value-Added Services',
        links: ['Implementation Management', 'Customer Care', 'Fraud Risk Management', 'Dispute & Chargeback Resolution', 'Program Management Support'],
      },
      { heading: '', links: ['Lifecycle Consultation', 'Rewards & Loyalty Engagement', 'Reporting & Analytics', 'C-Applications'] },
    ],
    featured: {
      text: 'Learn about the gap fast-growing companies are navigating and the opportunity it creates for those willing to rethink financial infrastructure for growth.',
      linkText: 'Download Now',
      image: doImg,
    },
  },
  {
    label: 'How We’re Different',
    key: 'different',
    columns: [
      { heading: '', links: ['All-in-One Platform', 'Composable Solutions', 'Trusted Experience'] },
    ],
    featured: {
      text: 'With our composable platform, choose what you need and launch at full speed.',
      linkText: "Reimagine what's possible",
      image: differentImg,
    },
  },
  {
    label: 'Who We Are',
    key: 'are',
    columns: [
      { heading: '', links: ['Our Story', 'Meet Our Leaders', 'Our Global Footprint', 'Supercharge Your Career'] },
    ],
    featured: {
      text: 'Our leadership positioning itself at the forefront of the conversation as Agentic AI rapidly moves from concept to tangible implementation.',
      linkText: 'Read Now',
      image: areImg,
    },
  },
  {
    label: 'In The Know',
    key: 'know',
    columns: [
      { heading: 'Newsroom', links: ['News', 'Awards'] },
      { heading: 'Insights', links: ['Blogs & Podcasts', 'Research Reports', 'Playbooks', 'Newsletters'] },
      { heading: 'Events', links: ['In-Person', 'Virtual'] },
    ],
    featured: {
      text: 'Named "Overall FinTech Company of the Year" in 2026 FinTech Breakthrough Awards.',
      linkText: 'Outperform industry standards',
      image: knowImg,
    },
  },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState(null)
  const wrapperRef = useRef(null)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpenMenu(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function toggleMenu(key) {
    setOpenMenu((prev) => (prev === key ? null : key))
  }

  return (
    <div className="navbar-wrapper" ref={wrapperRef}>
      <header className={scrolled ? 'navbar navbar-scrolled' : 'navbar'}>
        <div className="navbar-left">
          <div className="navbar-logo">
            <img src={logo} alt="Company Logo" />
          </div>

          <nav className="navbar-links">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.key}
                className="nav-item"
                onClick={() => toggleMenu(item.key)}
              >
                <a href="#" onClick={(e) => e.preventDefault()}>{item.label}</a>
              </div>
            ))}
          </nav>
        </div>

        <div className="navbar-right">
          <button className="icon-btn" aria-label="Mute"><Volume2 size={20} /></button>
          <button className="icon-btn" aria-label="Menu"><Menu size={20} /></button>
          <button className="icon-btn" aria-label="Search"><Search size={20} /></button>
          <a href="#" className="btn-outline">Client Login</a>
          <a href="#" className="btn-filled">Contact Us <span className="arrow">→</span></a>
        </div>
      </header>

      {NAV_ITEMS.map((item) =>
        openMenu === item.key ? (
          <div key={item.key} className="mega-menu">
            <h3 className="mega-menu-title">{item.label}</h3>

            <div className="mega-menu-body">
              <div className="mega-menu-columns">
                {item.columns.map((col, i) => (
                  <div key={i} className="mega-menu-column">
                    {col.heading && <div className="mega-menu-heading">{col.heading}</div>}
                    {col.links.map((link) => (
                      <a key={link} href="#">{link}</a>
                    ))}
                  </div>
                ))}
              </div>

              {item.featured && (
                <div className="mega-menu-featured">
                  <p>{item.featured.text}</p>
                  <a href="#" className="featured-link">{item.featured.linkText} →</a>
                  <img src={item.featured.image} alt="" />
                </div>
              )}
            </div>
          </div>
        ) : null
      )}
    </div>
  )
}

export default Navbar