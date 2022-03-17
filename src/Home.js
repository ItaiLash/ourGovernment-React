import React from 'react';
import "./style.css";
import Paragraph from './home components/Paragraph';
import Grid from './home components/Grid';
import Footer from './shared components/Footer';


function Home() {
  return (
    <div className="container">
      <header>
        <div className="header-text-box">
          <h1>OurGovernment</h1>
          <Paragraph />
        </div>
      </header>
      <Grid />
      <Footer />
    </div>
  );
}

export default Home;