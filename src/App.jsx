import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import ReachUs from './pages/ReachUs'
import Careers from './pages/Careers'
import PageTransition from './components/PageTransition'

function App() {
  const location = useLocation()

  return (
    <div className="noise relative min-h-screen">
      {/* Ambient background glows */}
      <div className="ambient-glow bg-accent-500 top-[-200px] left-[-200px]" />
      <div className="ambient-glow bg-purple-600 bottom-[-200px] right-[-200px]" />

      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/reach-us" element={<PageTransition><ReachUs /></PageTransition>} />
          <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  )
}

export default App
