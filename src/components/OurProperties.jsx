import './OurProperties.css'

function OurProperties() {
  const cities = [
    {
      id: 1,
      name: 'Pune',
      description: 'The cultural capital with vibrant student life.',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&h=400&fit=crop',
      properties: '7',
      localities: '20+'
    },
    {
      id: 2,
      name: 'Mumbai',
      description: 'The city of dreams with endless opportunities.',
      image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&h=400&fit=crop',
      properties: '5',
      localities: '25+'
    },
    {
      id: 3,
      name: 'Gurgaon',
      description: 'The corporate hub with modern lifestyle.',
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&h=400&fit=crop',
      properties: '2',
      localities: '15+'
    }
  ]

  return (
    <section className="our-properties" id="our-properties">
      <div className="properties-container">
        <div className="properties-header">
          <span className="properties-label">EXPLORE OUR TOP CITIES</span>
          <h2 className="properties-title">Find Your Perfect Home in Top Cities</h2>
          <p className="properties-subtitle">Handpicked properties in the cities that students love the most.</p>
        </div>

        <div className="cities-grid">
          {cities.map((city) => (
            <div key={city.id} className="city-card">
              <div className="city-image-wrapper">
                <img
                  src={city.image}
                  alt={`${city.name} cityscape`}
                  className="city-image"
                  loading="lazy"
                />
              </div>

              <div className="city-info">
                <div className="city-header">
                  <div className="city-icon-name">
                    <div className="city-icon-circle">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 21h18" />
                        <path d="M5 21V7l8-4v18" />
                        <path d="M19 21V11l-6-4" />
                        <path d="M9 9v.01" />
                        <path d="M9 12v.01" />
                        <path d="M9 15v.01" />
                        <path d="M9 18v.01" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="city-name">{city.name}</h3>
                    </div>
                  </div>
                  <button className="arrow-btn" aria-label={`Explore ${city.name}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>

                <p className="city-description">{city.description}</p>

                <div className="city-stats">
                  <div className="stat">
                    <svg className="stat-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                      <path d="M9 22v-4h6v4" />
                      <path d="M8 6h.01" />
                      <path d="M16 6h.01" />
                      <path d="M12 6h.01" />
                      <path d="M12 10h.01" />
                      <path d="M12 14h.01" />
                      <path d="M16 10h.01" />
                      <path d="M16 14h.01" />
                      <path d="M8 10h.01" />
                      <path d="M8 14h.01" />
                    </svg>
                    <span className="stat-text">{city.properties} Properties</span>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat">
                    <svg className="stat-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ff6b35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="stat-text">{city.localities} Localities</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurProperties
