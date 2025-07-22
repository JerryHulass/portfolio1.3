import './App.css'
import { BackgroundCellAnimation } from './components/Bg-Ripple' 
import Preloader from './components/Preloader'
import Scrollbar from './components/Scrollbar'
import About from './components/About'

function App() {

  return (
    <>
      <Preloader />
      <BackgroundCellAnimation />
      <About />
      <Scrollbar />
    </>
  )
}

export default App

    
