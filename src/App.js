import React from 'react';
import './App.css';
import { Navbar, Header, Partners, Global, Carrer, Display, Services, Reviews, Blog, Footer } from './container';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Partners />
      <Global />
      <Carrer />
      <Display />
      <Services />
      <Reviews />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
