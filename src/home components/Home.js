import React from 'react';
import style from "./style.module.css";
import Paragraph from './Paragraph';
import Grid from './Grid';
import Footer from '../shared components/Footer';
import mainLogo from "../img/logo-new4.png";


function Home() {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <div className={style.headerTextBox}>
          {/* <h1 className={style.title}>OurGovernment</h1> */}
          <img src={mainLogo} className="logo" alt="fireSpot" />
          <Paragraph />
        </div>
      </header>
      <Grid />
      <Footer />
    </div>
  );
}

export default Home;