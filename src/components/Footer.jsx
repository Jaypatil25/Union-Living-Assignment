import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
        <div className="footer-shell">
          <div className="footer-brand">
            <img
              src="https://www.unionliving.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogoblack.c49881fd.png&w=1920&q=75&dpl=dpl_FgGnpdVbYZDhmnZKSLQBzRcUtNTd"
              alt="Union Living"
              className="footer-logo"
            />
            <p>Live Easy, Live United</p>
            <button className="footer-book-btn" type="button">BOOK NOW</button>
          </div>

          <nav className="footer-column" aria-label="Sitemap">
            <h2>Sitemap</h2>
            <a href="/">Home</a>
            <a href="/#our-properties">Properties</a>
            <a href="/#community">Community</a>
            <a href="/#story">Our Story</a>
            <a href="/#blogs">Our Blogs</a>
          </nav>

          <nav className="footer-column" aria-label="Important Links">
            <h2>Important Links</h2>
            <a href="/#rules">Rules and Regulations</a>
            <a href="/#terms">Terms and Condition</a>
            <a href="/#privacy">Privacy Policy</a>
          </nav>

          <div className="footer-contact">
            <div>
              <h3>General Enquiry</h3>
              <a href="mailto:info@unionliving.in">info@unionliving.in</a>
            </div>
            <div>
              <h3>Support</h3>
              <a href="mailto:Support@unionliving.in">Support@unionliving.in</a>
            </div>
            <a href="tel:+919137915406">+919137915406</a>
          </div>

          <p className="footer-copy">2026 Union Living. All right reserved</p>

          <div className="footer-socials" aria-label="Social links">
            <a href="https://www.instagram.com/unionliving.in/" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <path d="M17.5 6.5h.01" />
              </svg>
            </a>
            <a href="https://www.youtube.com/" aria-label="YouTube">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12s0-3.2-.4-4.7c-.2-.8-.8-1.4-1.6-1.6C18.5 5.3 12 5.3 12 5.3s-6.5 0-8 .4c-.8.2-1.4.8-1.6 1.6C2 8.8 2 12 2 12s0 3.2.4 4.7c.2.8.8 1.4 1.6 1.6 1.5.4 8 .4 8 .4s6.5 0 8-.4c.8-.2 1.4-.8 1.6-1.6.4-1.5.4-4.7.4-4.7z" />
                <path d="m10 9 5 3-5 3z" />
              </svg>
            </a>
          </div>
        </div>
    </footer>
  )
}

export default Footer
