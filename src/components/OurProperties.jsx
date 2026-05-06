import './OurProperties.css'

function OurProperties() {
  const cities = [
    {
      id: 1,
      slug: 'pune',
      name: 'Pune',
      description: 'The cultural capital with vibrant student life.',
      image: 'https://websiteupload.s3.ap-south-1.amazonaws.com/2024/05/sanivar-wada.jpg',
      properties: '7',
      localities: '20+',
      color: '#6366f1'
    },
    {
      id: 2,
      slug: 'mumbai',
      name: 'Mumbai',
      description: 'The city of dreams with endless opportunities.',
      image: 'https://images.pexels.com/photos/15528027/pexels-photo-15528027.jpeg',
      properties: '5',
      localities: '25+',
      color: '#ec4899'
    },
    {
      id: 3,
      slug: 'gurgaon',
      name: 'Gurgaon',
      description: 'The corporate hub with modern lifestyle.',
      image: 'https://cdn.pixabay.com/photo/2021/08/24/07/06/mrg-world-6569743_1280.jpg',
      properties: '2',
      localities: '15+',
      color: '#14b8a6'
    },
    {
      id: 4,
      slug: 'ahmedabad',
      name: 'Ahmedabad',
      description: 'The corporate hub with modern lifestyle.',
      image: 'https://mnmtravels.in/images/package/d77d3b558b019b4054845d69db7543f5.jpg',
      properties: 'Coming',
      localities: 'Soon',
      color: '#f59e0b',
      comingSoon: true
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
            <div key={city.id} className={`city-card ${city.comingSoon ? 'city-coming-soon' : ''}`}>
              <div className="city-image-wrapper">
                <img
                  src={city.image}
                  alt={`${city.name} cityscape`}
                  className="city-image"
                  loading="lazy"
                />
                {city.comingSoon && (
                  <div className="city-coming-overlay">
                    <span>COMING SOON</span>
                  </div>
                )}
              </div>

              <div className="city-info">
                <div className="city-header">
                  <div className="city-icon-name">
                    <div 
                      className="city-icon-circle"
                      style={{ backgroundColor: `${city.color}20` }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={city.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                  {!city.comingSoon && (
                    <a className="arrow-btn" href={`/properties/${city.slug}`} aria-label={`Explore ${city.name}`} style={{ borderColor: city.color, color: city.color }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  )}
                </div>

                <p className="city-description">
                  {city.comingSoon ? 'A fresh Union Living launch is warming up for Ahmedabad.' : city.description}
                </p>

                {!city.comingSoon && (
                  <div className="city-stats">
                    <div className="stat">
                      <svg className="stat-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={city.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                      <svg className="stat-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={city.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <span className="stat-text">{city.localities} Localities</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurProperties
