import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CityPropertiesPage from './pages/CityPropertiesPage'
import HomePage from './pages/HomePage'
import { getRoute } from './routes'
import './App.css'

function App() {
  const route = getRoute(window.location.pathname)

  return (
    <>
      <Navbar />
      {route.name === 'city-properties' ? (
        <CityPropertiesPage citySlug={route.citySlug} />
      ) : (
        <HomePage />
      )}
      <Footer />
    </>
  )
}

export default App
