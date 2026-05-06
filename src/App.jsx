import Navbar from './components/Navbar'
import Hero from './components/Hero'
import OurProperties from './components/OurProperties'
import CityProperties from './components/CityProperties'
import Footer from './components/Footer'
import './App.css'

function App() {
  const cityMatch = window.location.pathname.match(/^\/properties\/([^/]+)$/)

  return (
    <>
      <Navbar />
      {cityMatch ? (
        <CityProperties citySlug={cityMatch[1]} />
      ) : (
        <>
          <Hero />
          <div className="navbar-spacer"></div>
          <OurProperties />
        </>
      )}
      <Footer />
    </>
  )
}

export default App
