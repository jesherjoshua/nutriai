import styles from '../styles/Home.module.css';
import {NavBar,Hero,Cta,Footer} from '../Components';
import {useState} from 'react';

export default function Home(){


  return(
    <div className={styles.main_wrapper}>
      <NavBar />
      <Hero />
      <Cta />
      <Footer />
    </div>
  )
}