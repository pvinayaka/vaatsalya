// import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HeroBanner from './components/HeroBanner/HeroBanner';
import Features from './components/Features/Features';

function App() {

  return (
    <>
    <Header />
    <main id="main">
      <HeroBanner />
      <Features />
    </main>
    <Footer />
    </>
  )
}

export default App
