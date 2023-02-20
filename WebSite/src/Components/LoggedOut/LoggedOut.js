import React from 'react'
import styles from './LoggedOut.module.css';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import NavBar from '../NavBar/NavBar';

const LoggedOut = () => {
  return (
    <>
    <NavBar />
    <div className={styles.main_wrapper}>
      <h2 className={styles.title}>
        You are not signed in
      </h2>
      <h3 className={styles.subtitle}>
        Click the button below to sign in
      </h3>
      <button className={styles.button} onClick={() => signIn()}>
        Sign in with Google
      </button>
      <Link href="/" passHref>
        <button className={styles.home_button}>Home</button>
      </Link>
    </div>
    </>
  )
}

export default LoggedOut;
