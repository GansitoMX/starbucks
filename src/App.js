import { Component } from 'react'
import Navbar from './components/Navbar'
import HeroImage from './components/HeroImage'
import StickyHeader from './components/StickyHeader'
import Steps from './components/Steps'
import Getfavorites from './components/GetFavorites'
import LearnMoreSection from './components/LearnMoreSection'
import CashOrCard from './components/CashOrCard'
import Keep from './components/Keep'

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
              <Keep />
            </div>
        )
    }
}

export default App
