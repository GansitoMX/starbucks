import { Component } from 'react'
import Navbar from './components/Navbar'
import HeroImage from './components/HeroImage'
import StickyHeader from './components/StickyHeader'
import Steps from './components/Steps'
import Getfavorites from './components/GetFavorites'
import LearnMoreSection from './components/LearnMoreSection'

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
            </div>
        )
    }
}

export default App
