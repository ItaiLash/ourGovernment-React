import React from 'react';
import style from "./style.module.css";
import Paragraph from './Paragraph';
import Grid from './Grid';
import Footer from '../shared components/Footer';


function Home() {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <div className={style.headerTextBox}>
          <h1 className={style.title}>OurGovernment</h1>
          <Paragraph />
        </div>
      </header>
      <Grid />
      <Footer />

    </div>
  );
}

export default Home;