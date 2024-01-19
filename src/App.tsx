import { Header } from './components/Header'
import './components/css/Components.css';
import { BackgroudSlider } from './components/BackgroundSlider';

import { About } from './components/About';
import { Cover } from './components/Cover';
import { Team } from './components/Team';
import { Footer } from './components/Footer';
function App() {

  return (
    <>
      <Header /> 

      <section className='intro'>
        <div className='img-container'>
          <BackgroudSlider />
        </div>
        <Cover />

      </section>
      <div className='mil-deco'></div>
      <About />
      <Team />
      <Footer />
    

    </>

  )
}

export default App
