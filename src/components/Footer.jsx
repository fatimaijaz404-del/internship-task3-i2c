import logo from '../assets/Group-1171278021.png'
import footerPerson1 from '../assets/Innovative-Financial-Platform.webp'
import footerPerson2 from '../assets/Trusted-Experience-small.webp';
import insideTrackLogo from '../assets/inside-track-logo-1.png'
function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-columns">
          <div className="footer-col">
            <h4>Who We Serve</h4>
            <ul>
              <li><a href="#">Banks</a></li>
              <li><a href="#">Credit Unions</a></li>
              <li><a href="#">Fintechs</a></li>
              <li><a href="#">Governments</a></li>
              <li><a href="#">Partners</a></li>
            </ul>
            <h4 className="footer-subheading">Our Clients</h4>
            <ul>
              <li><a href="#">Client Map</a></li>
              <li><a href="#">Client Testimonials</a></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Client Login</a></li>
              <li><a href="#">Developers</a></li>
              <li><a href="#" className="footer-arrow-link">→ API Library</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>What We Do</h4>
            <ul>
              <li><a href="#">Issuer Processing</a></li>
              <li><a href="#" className="footer-sub-item">Credit</a></li>
              <li><a href="#" className="footer-sub-item">Debit</a></li>
              <li><a href="#" className="footer-sub-item">Prepaid</a></li>
              <li><a href="#">Core Banking</a></li>
              <li><a href="#">Money Movement</a></li>
              <li><a href="#">Value-Added Services</a></li>
              <li><a href="#" className="footer-sub-item">Implementation Management</a></li>
              <li><a href="#" className="footer-sub-item">Program Management Support</a></li>
              <li><a href="#" className="footer-sub-item">Fraud Risk Management</a></li>
              <li><a href="#" className="footer-sub-item">Dispute & Chargeback Resolution</a></li>
              <li><a href="#" className="footer-sub-item">Lifecycle Consultation</a></li>
              <li><a href="#" className="footer-sub-item">Customer Care</a></li>
              <li><a href="#" className="footer-sub-item">Rewards & Loyalty Engagement</a></li>
              <li><a href="#" className="footer-sub-item">Reporting & Analytics</a></li>
              <li><a href="#" className="footer-sub-item">D Applications</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>How We're Different</h4>
            <ul>
              <li><a href="#">All-in-One Platform</a></li>
              <li><a href="#">Composable Solutions</a></li>
              <li><a href="#">Trusted Experience</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Who We Are</h4>
            <ul>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Meet Our Leaders</a></li>
              <li><a href="#">Our Global Footprint</a></li>
              <li><a href="#">Supercharge Your Career</a></li>
              <li><a href="#">Power with Purpose</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>In The Know</h4>
            <h5 className="footer-subheading-small">Newsroom</h5>
            <ul>
              <li><a href="#">News</a></li>
              <li><a href="#">Awards</a></li>
            </ul>
            <h5 className="footer-subheading-small">Insights</h5>
            <ul>
              <li><a href="#">Blogs & Podcasts</a></li>
              <li><a href="#">Research Reports</a></li>
              <li><a href="#">Playbooks</a></li>
              <li><a href="#">Newsletters</a></li>
            </ul>
            <h5 className="footer-subheading-small">Events</h5>
            <ul>
              <li><a href="#">In Person</a></li>
              <li><a href="#">Virtual</a></li>
            </ul>
          </div>
        </div>

        <img src={footerPerson1} alt="" className="footer-person footer-person-1" />
        <img src={footerPerson2} alt="" className="footer-person footer-person-2" />
      </div>

      <div className="footer-newsletter">
        <div className="footer-newsletter-left">
  <img src={insideTrackLogo} alt="The Inside Track" className="footer-newsletter-logo" />
  <p className="footer-newsletter-text">
    Your fast lane to banking and payments intelligence.
  </p>
</div>
        <button className="footer-subscribe-btn">
          Subscribe to Our Newsletter <span>↗</span>
        </button>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <img src={logo} alt="i2c" className="footer-logo" />
          <p className="footer-tagline">
            Powered by innovation.<br />Driven by trust.
          </p>
        </div>

        <div className="footer-bottom-right">
          <div className="footer-social">
  <span>Follow Us</span>
  <a href="#" aria-label="LinkedIn">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z"/>
    </svg>
  </a>
  <a href="#" aria-label="Instagram">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
    </svg>
  </a>
</div>
          <div className="footer-legal">
            <p>Copyright © 2026 i2c Inc. All Rights Reserved.</p>
            <div className="footer-legal-links">
              <a href="#">Privacy Policy</a>
              <span>|</span>
              <a href="#">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
