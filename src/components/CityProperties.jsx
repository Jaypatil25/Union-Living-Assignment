import './CityProperties.css'

const cityProperties = {
  pune: {
    name: 'Pune',
    properties: [
      {
        id: 1,
        badge: 'Best Seller',
        badgeIcon: 'star',
        badgeTone: 'orange',
        image: 'https://www.unionliving.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.872fbefa.webp&w=3840&q=75&dpl=dpl_FgGnpdVbYZDhmnZKSLQBzRcUtNTd',
        location: 'Koregaon Park, Pune',
        reviews: '320+ reviews',
        rating: '4.6',
        name: 'House of KP',
        amenities: ['Wifi', 'Housekeeping', 'AC', 'Security'],
        price: '24,000'
      },
      {
        id: 2,
        badge: 'Popular',
        badgeIcon: 'flame',
        badgeTone: 'orange',
        image: 'https://www.unionliving.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FhamletCover.bced09fb.webp&w=750&q=75&dpl=dpl_FgGnpdVbYZDhmnZKSLQBzRcUtNTd',
        location: 'Baner, Pune',
        reviews: '210+ reviews',
        rating: '4.5',
        name: 'Hamlet',
        amenities: ['Wifi', 'Gym', 'Kitchen', 'Parking'],
        price: '24,000'
      },
      {
        id: 3,
        badge: 'New Launch',
        badgeIcon: 'dot',
        badgeTone: 'green',
        image: 'https://www.unionliving.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthumbnail.309e4047.png&w=3840&q=75&dpl=dpl_FgGnpdVbYZDhmnZKSLQBzRcUtNTd',
        location: 'Balewadi, Pune',
        reviews: '180+ reviews',
        rating: '4.4',
        name: 'House of Balewadi',
        amenities: ['Wifi', 'AC', 'Housekeeping', 'Security'],
        price: '20,000'
      },
      {
        id: 4,
        badge: 'New Launch',
        badgeIcon: 'dot',
        badgeTone: 'green',
        image: 'https://www.unionliving.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FabodeCoverImage.40cbb714.webp&w=1920&q=75&dpl=dpl_FgGnpdVbYZDhmnZKSLQBzRcUtNTd',
        location: 'Dhankawadi, Pune',
        reviews: '180+ reviews',
        rating: '4.4',
        name: 'Abode',
        amenities: ['Wifi', 'AC', 'Housekeeping', 'Security'],
        price: '7,500'
      },
      {
        id: 5,
        badge: 'Coming Soon',
        badgeIcon: 'dot',
        badgeTone: 'green',
        image: 'https://images.nobroker.in/img/d177f5i8v8w1l3k909l4u4w8/d177f5i8v8w1l3k909l4u4w8_47179_606235_original.jpg',
        location: 'Hinjewadi, Pune',
        name: 'X90',
        comingSoon: true
      },
      {
        id: 6,
        badge: 'Coming Soon',
        badgeIcon: 'dot',
        badgeTone: 'green',
        image: 'https://www.unionliving.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthumbnail.309e4047.png&w=3840&q=75&dpl=dpl_FgGnpdVbYZDhmnZKSLQBzRcUtNTd',
        location: 'Mundwa, Pune',
        name: 'House of Mundwa',
        comingSoon: true
      },
      {
        id: 7,
        badge: 'Coming Soon',
        badgeIcon: 'dot',
        badgeTone: 'green',
        image: 'https://assets.oyoroomscdn.com/cmsMedia/medium/466b84f9-6afe-43e5-a936-6a8ebf2b8d84.jpeg',
        location: 'Viman Nagar, Pune',
        name: 'Elv-8',
        comingSoon: true
      }

    ]
  },
  mumbai: {
    name: 'Mumbai',
    properties: [
      {
        id: 1,
        badge: 'Best Seller',
        badgeIcon: 'star',
        badgeTone: 'orange',
        image: 'https://www.unionliving.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FsouthsideCover.3e8e00d0.webp&w=1920&q=75&dpl=dpl_FgGnpdVbYZDhmnZKSLQBzRcUtNTd',
        location: 'Mahalaxmi, Mumbai',
        reviews: '280+ reviews',
        rating: '4.5',
        name: 'Southside',
        amenities: ['Wifi', 'AC', 'Housekeeping', 'Security'],
        price: '46,000'
      },
      {
        id: 2,
        badge: 'Popular',
        badgeIcon: 'flame',
        badgeTone: 'orange',
        image: 'https://www.unionliving.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FterraCover.0deefea6.webp&w=1920&q=75&dpl=dpl_FgGnpdVbYZDhmnZKSLQBzRcUtNTd',
        location: 'Juhu, Mumbai',
        reviews: '390+ reviews',
        rating: '4.7',
        name: 'Terra',
        amenities: ['Wifi', 'Gym', 'Kitchen', 'Parking'],
        price: '40,000'
      },
      {
        id: 3,
        badge: 'New Launch',
        badgeIcon: 'dot',
        badgeTone: 'green',
        image: 'https://www.unionliving.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvarsitycover.8843315a.png&w=1920&q=75&dpl=dpl_FgGnpdVbYZDhmnZKSLQBzRcUtNTd',
        location: 'Juhu / Santacruz',
        reviews: '160+ reviews',
        rating: '4.4',
        name: 'Varsity',
        amenities: ['Wifi', 'AC', 'Housekeeping', 'Security'],
        price: '48,000'
      },
      {
        id: 4,
        badge: 'New Launch',
        badgeIcon: 'dot',
        badgeTone: 'green',
        image: 'https://www.unionliving.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FZest.2a395048.webp&w=3840&q=75&dpl=dpl_FgGnpdVbYZDhmnZKSLQBzRcUtNTd',
        location: 'Chembur, Mumbai',
        reviews: '160+ reviews',
        rating: '4.4',
        name: 'Zest',
        amenities: ['Wifi', 'AC', 'Housekeeping', 'Security'],
        price: '23,000'
      },
      {
        id: 5,
        badge: 'New Launch',
        badgeIcon: 'dot',
        badgeTone: 'green',
        image: 'https://www.unionliving.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkharghar.7e14f94c.webp&w=3840&q=75&dpl=dpl_FgGnpdVbYZDhmnZKSLQBzRcUtNTd',
        location: 'Kharghar, Navi Mumbai',
        reviews: '160+ reviews',
        rating: '4.4',
        name: 'Kharghar 21 - PG',
        amenities: ['Wifi', 'AC', 'Housekeeping', 'Security'],
        price: '32,000'
      }
    ]
  },
  gurgaon: {
    name: 'Gurgaon',
    properties: [
      {
        id: 1,
        badge: 'Popular',
        badgeIcon: 'flame',
        badgeTone: 'orange',
        image: 'https://www.unionliving.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnovanew.527b178a.webp&w=3840&q=75&dpl=dpl_FgGnpdVbYZDhmnZKSLQBzRcUtNTd',
        location: 'Cyber City, Gurugram',
        reviews: '450+ reviews',
        rating: '4.7',
        name: 'Nova',
        amenities: ['Wifi', 'Gym', 'Kitchen', 'Parking'],
        price: '30,000'
      }
    ]
  },
  ahmedabad: {
    name: 'Ahmedabad',
    properties: [
      {
        id: 1,
        badge: 'New Launch',
        badgeIcon: 'dot',
        badgeTone: 'green',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&h=580&fit=crop',
        location: 'Navrangpura, Ahmedabad',
        reviews: '140+ reviews',
        rating: '4.5',
        name: 'Union Navrang',
        amenities: ['Wifi', 'AC', 'Housekeeping', 'Security'],
        price: '19,000'
      },
      {
        id: 2,
        badge: 'Popular',
        badgeIcon: 'flame',
        badgeTone: 'orange',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&h=580&fit=crop',
        location: 'Satellite, Ahmedabad',
        reviews: '220+ reviews',
        rating: '4.6',
        name: 'Satellite House',
        amenities: ['Wifi', 'Gym', 'Kitchen', 'Parking'],
        price: '21,000'
      },
      {
        id: 3,
        badge: 'Best Seller',
        badgeIcon: 'star',
        badgeTone: 'orange',
        image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&h=580&fit=crop',
        location: 'Prahlad Nagar, Ahmedabad',
        reviews: '190+ reviews',
        rating: '4.4',
        name: 'Prahlad Living',
        amenities: ['Wifi', 'AC', 'Housekeeping', 'Security'],
        price: '20,500'
      }
    ]
  }
}

const amenityIcons = {
  Wifi: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 13a10 10 0 0 1 14 0" />
      <path d="M8.5 16.5a5 5 0 0 1 7 0" />
      <path d="M12 20h.01" />
    </svg>
  ),
  Housekeeping: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 21h18" />
      <path d="M7 21V11" />
      <path d="M17 21V11" />
      <path d="M5 11h14l-2-6H7z" />
    </svg>
  ),
  AC: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2v20" />
      <path d="m17 5-5 5-5-5" />
      <path d="m17 19-5-5-5 5" />
      <path d="M2 12h20" />
      <path d="m5 7 5 5-5 5" />
      <path d="m19 7-5 5 5 5" />
    </svg>
  ),
  Security: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  Gym: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 7v10" />
      <path d="M18 7v10" />
      <path d="M3 9v6" />
      <path d="M21 9v6" />
      <path d="M6 12h12" />
    </svg>
  ),
  Kitchen: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 3h16v18H4z" />
      <path d="M4 9h16" />
      <path d="M9 3v18" />
      <path d="M13 13h3" />
    </svg>
  ),
  Parking: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 21V3h7a5 5 0 0 1 0 10H7" />
    </svg>
  )
}

function BadgeIcon({ type }) {
  if (type === 'dot') {
    return <span className="property-badge-dot" aria-hidden="true"></span>
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {type === 'flame' ? (
        <path d="M12 22c4 0 7-2.9 7-7 0-3.4-2.1-5.8-4.1-7.8-.4 2-1.6 3.2-3.1 4.1.1-2.7-1-5-3.5-7.3C8.2 8.5 5 10.5 5 15c0 4.1 3 7 7 7z" />
      ) : (
        <path d="m12 3 2.4 5.1 5.6.8-4 4 1 5.6-5-2.7-5 2.7 1-5.6-4-4 5.6-.8z" />
      )}
    </svg>
  )
}

function CityProperties({ citySlug }) {
  const city = cityProperties[citySlug] || cityProperties.pune

  return (
    <main className="city-properties-page">
      <section className="city-properties-hero">
        <div>
          <h1>Explore Our Premium Coliving Properties.</h1>
          <p>Handpicked coliving spaces in {city.name} designed for comfort, convenience &amp; community.</p>
        </div>

      </section>

      <section className="property-cards" aria-label={`${city.name} properties`}>
        {city.properties.map((property) => (
          <article className={`property-card ${property.comingSoon ? 'coming-soon-card' : ''}`} key={property.id}>
            <div className="property-image-wrap">
              <img src={property.image} alt={property.name} className="property-image" />
              <span className={`property-badge ${property.badgeTone}`}>
                <BadgeIcon type={property.badgeIcon} />
                {property.badge}
              </span>
            </div>

            <div className="property-content">
              <div className="property-meta">
                <span className="property-location">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {property.location}
                </span>
                {!property.comingSoon && (
                  <span>{property.reviews} &bull; {property.rating} <span className="rating-star">★</span></span>
                )}
              </div>

              <h2>{property.name}</h2>

              {property.comingSoon ? (
                <div className="coming-soon-panel">
                  <span>Launching Soon</span>
                  <p>Details, amenities, and pricing will be announced shortly.</p>
                </div>
              ) : (
                <>
                  <div className="amenities-row">
                    {property.amenities.map((amenity) => (
                      <span className="amenity-pill" key={amenity}>
                        {amenityIcons[amenity]}
                        {amenity}
                      </span>
                    ))}
                  </div>

                  <div className="property-bottom">
                    <div>
                      <span className="starting-text">Starting From</span>
                      <div className="property-price">₹{property.price}<span>/mo</span></div>
                    </div>
                    <button className="property-book-btn" type="button">
                      BOOK NOW
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </>
              )}
            </div>
          </article>
        ))}
      </section>

    </main>
  )
}

export default CityProperties
