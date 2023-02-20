import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';

import styles from './NavBar.module.css';
import logo from '../../../public/digital.png';

const NavBar = () => {

  const [toggleMenu , setToggleMenu] = useState(false);

  return (
    <div className={styles.NavBar_container}>
      <div className={styles.NavBar_container_image_container}>
        <Image 
          src={logo}
          alt="Picture not loaded"
          width={50}
          height={50}
          className={styles.NavBar_container_image_container_image}
        />
        <h2>
          Nutri AI
        </h2>
      </div>
      <div className={styles.NavBar_container_value_container}>
        <ul className={styles.NavBar_container_value_container_value}>
          <li className={styles.NavBar_container_value_container_value_li}>
            <Link href="/" className={styles.NavBar_link}>Home</Link>
          </li>
          <li className={styles.NavBar_container_value_container_value_li}>
            <Link href="/about" className={styles.NavBar_link}>About</Link>
          </li>
          <li className={styles.NavBar_container_value_container_value_li}>
            <Link href="/features" className={styles.NavBar_link}>Features</Link>
          </li>
          <li className={styles.NavBar_container_value_container_value_li}>
            <Link href="/contact" className={styles.NavBar_link}>Contact</Link>
          </li>
        </ul>
      </div> 
      <div className={styles.NavBar_container_login_container}>
        <Link href="/login" className={styles.NavBar_link}>Login</Link>        
      </div> 

      <div className={styles.facerecognition__navbar_menu}> 
        {toggleMenu 
          ? <RiCloseLine color="red" size={27} onClick={() => setToggleMenu(false)} className={styles.NavBar_icon}/>
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} className={styles.NavBar_icon}/>
        }
        { toggleMenu && (
          <div className={`${styles.facerecognition__navbar_menu_container} ${styles.scale_up_center}`}>
            <div className={styles.facerecognition__navbar_menu_container_links}>
              <>
                <p><Link href="/" className={styles.Link_menu_style}>Home</Link></p>
                <p><Link href="/about" className={styles.Link_menu_style}>About</Link></p>
                <p><Link href="/features" className={styles.Link_menu_style}>Features</Link></p>
                <p><Link href="/contact" className={styles.Link_menu_style}>Contact</Link></p>
                <p><Link href="/login" className={styles.Link_menu_style}>Login</Link></p>
              </>
            </div>  
          </div>  

        )} 
        </div>  
    </div>
  )
}

export default NavBar
