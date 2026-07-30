import './App.css'
import './index.css' 
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VideoSection from './components/VideoSection'
import EngineeredSection from './components/EngineeredSection'
import StickyFooterNav from './components/StickyFooterNav'
import GrowthSection from './components/GrowthSection'
import DifferentiationSection from "./components/DifferentiationSection";

// ... baaki jo sections hain unko bhi import karein

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <VideoSection />

      <div className="sticky-footer-zone">
        <EngineeredSection />
        <GrowthSection />

        <DifferentiationSection />
        {/* Agle sections yahan andar aayenge, jaise: */}
        {/* <NextSection /> */}
        {/* <AnotherSection /> */}

        <StickyFooterNav />
      </div>
    </>
  )
}

export default App