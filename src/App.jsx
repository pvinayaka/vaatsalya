// import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HeroBanner from './components/HeroBanner/HeroBanner';
import Features from './components/Features/Features';
import About from './components/About/About';
import Counter from './components/Counter/Counter';
import Services from './components/Services/Services';
import Appointment from './components/Appointment/Appointment';

function App() {

  return (
    <>
    <Header />
    <main id="main">
      <HeroBanner />
      <Features />
      <About />
      <Counter />
      <Services />
      <Appointment />
    </main>
    <Footer />
    </>
  )
}

export default App
