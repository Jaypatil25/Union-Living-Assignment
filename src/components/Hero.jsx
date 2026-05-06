import './Hero.css'

function Hero() {
  const videoUrl = 'https://cdn.shopify.com/videos/c/o/v/802613efe8ce4dba8feb51ce84d086b4.webm'

  return (
    <section className="hero">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoUrl} type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          Find Your Perfect Home in <span className="highlight">Top Cities</span>
        </h1>
      </div>
    </section>
  )
}

export default Hero
