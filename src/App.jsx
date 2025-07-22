import './App.css'
import { BackgroundCellAnimation } from './components/Bg-Ripple' 
import Preloader from './components/Preloader'
import Scrollbar from './components/Scrollbar'
import About from './components/About'
import NavButton from './components/NavButton'

function App() {

  return (
    <>
      <Preloader />
      <BackgroundCellAnimation />
      <About />
      <Scrollbar />
      <NavButton />
    </>
  )
}

export default App

    
