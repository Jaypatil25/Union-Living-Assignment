import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [activeTab, setActiveTab] = useState('home')

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'properties', label: 'Properties', href: '#properties' },
    { id: 'college', label: 'Properties By College', href: '#college' },
    { id: 'community', label: 'Community', href: '#community' },
    { id: 'serviced', label: 'Serviced Apartments', href: '#serviced' }
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
            <div className="navbar-logo">
              <img 
                src="https://www.unionliving.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogoblack.c49881fd.png&w=1920&q=75&dpl=dpl_FgGnpdVbYZDhmnZKSLQBzRcUtNTd"
                alt="Union Living Logo"
                className="logo-img"
              />
            </div>
            
            <ul className="nav-menu">
              {navItems.map((item) => (
                <li 
                  key={item.id}
                  className="nav-item"
                >
                  <a 
                    href={item.href} 
                    className={`nav-link ${activeTab === item.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(item.id)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <button className="book-btn">BOOK NOW</button>
          </div>
        </nav>
      </div>

      {/* Spacer to push content below the fixed navbar */}
      <div className="navbar-spacer"></div>
    </>
  )
}

export default Navbar
