import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [activeTab, setActiveTab] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'properties', label: 'Properties', href: '/#our-properties' },
    { id: 'college', label: 'Properties By College', href: '/#college' },
    { id: 'community', label: 'Community', href: '/#community' },
    { id: 'serviced', label: 'Serviced Apartments', href: '/#serviced' }
  ]

  return (
    <>
      <div className="navbar-wrapper">
        <div className="announcement-bar">
          <div className="announcement-content">
            <span>📢 New Launch in Ahmedabad</span>
            <span>📢 New Launch in Ahmedabad</span>
            <span>📢 New Launch in Ahmedabad</span>
            <span>📢 New Launch in Ahmedabad</span>
            <span>📢 New Launch in Ahmedabad</span>
            <span>📢 New Launch in Ahmedabad</span>
            <span>📢 New Launch in Ahmedabad</span>
            <span>📢 New Launch in Ahmedabad</span>
            <span>📢 New Launch in Ahmedabad</span>
          </div>
        </div>

        <nav className="navbar">
          <div className="navbar-container">
            <a className="navbar-logo" href="/">
              <img 
                src="https://www.unionliving.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogoblack.c49881fd.png&w=1920&q=75&dpl=dpl_FgGnpdVbYZDhmnZKSLQBzRcUtNTd"
                alt="Union Living Logo"
                className="logo-img"
              />
            </a>
            
            <button
              className={`hamburger-btn ${menuOpen ? 'open' : ''}`}
              type="button"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="primary-navigation"
              onClick={() => setMenuOpen((current) => !current)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <ul className={`nav-menu ${menuOpen ? 'open' : ''}`} id="primary-navigation">
              {navItems.map((item) => (
                <li 
                  key={item.id}
                  className="nav-item"
                >
                  <a 
                    href={item.href} 
                    className={`nav-link ${activeTab === item.id ? 'active' : ''}`}
                    onClick={() => {
                      setActiveTab(item.id)
                      setMenuOpen(false)
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}

              <li className="mobile-book-item">
                <button className="book-btn mobile-book-btn">BOOK NOW</button>
              </li>
            </ul>

            <button className="book-btn desktop-book-btn">BOOK NOW</button>
          </div>
        </nav>
      </div>


    </>
  )
}

export default Navbar
