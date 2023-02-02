import React, {createElement} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './media.css';

import Header from './Header/Header';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';


function Main(){
  return(
    <div>
      <Header />
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);