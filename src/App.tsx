import { Header } from './components/Header'
import './components/css/Components.css';
import { BackgroudSlider } from './components/BackgroundSlider';

import { About } from './components/About';
function App() {

  return (
    <>
      <Header /> 

      <section className='intro'>
        <div className='img-container'>
          <BackgroudSlider />
        </div>
        <div className='cover'></div>
      </section>
      <div className='mil-deco'></div>
      <About />

    

    </>

  )
}

export default App
