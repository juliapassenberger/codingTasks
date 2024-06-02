import './App.css';
import Navigation from './components/navigation/navigation'
import Home from './components/home/home';
import Products from './components/products/products';
import About from './components/about/about';
import Footer from './components/footer/footer';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function App() {

  // Use location hook to identify whether user is on home page
  const location = useLocation();
  const onHomePage = location.pathname === '/';

  return (
    <div className="App">

      {/* Render different background image if on home page */}
      <header className={onHomePage ? 'App-header-home' : 'App-header-default'}>

        {/* Navigation displayed on all pages */}
        <Navigation></Navigation>

        {/* Routes to other pages */}
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about' element={<About />} />
        </Routes>

      </header >

      {/* Footer only rendered if user is not on home page */}
      {onHomePage ? null : <Footer></Footer>}

    </div >
  );
}

export default App;
