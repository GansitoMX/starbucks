import { Component } from 'react'
import Navbar from './components/Navbar'
import HeroImage from './components/HeroImage'
import StickyHeader from './components/StickyHeader'
import Steps from './components/Steps'
import Getfavorites from './components/GetFavorites'
import LearnMoreSection from './components/LearnMoreSection'
import CashOrCard from './components/CashOrCard'

class App extends Component {
    render() {
        return (
            <div>
              <Navbar />
              <StickyHeader />            
              <HeroImage />
              <Steps />
              <Getfavorites />
              <LearnMoreSection />
              <CashOrCard />
            </div>
        )
    }
}

export default App
