import styles from './Cta.module.css';
import React from 'react'
import Image from 'next/image';
import ML from '../../../public/pytorch-logo.png';
import Cloud from '../../../public/social-icon-google-cloud-1200-630.png';
import CyberSecurity from '../../../public/cyber-security.png';

const Cta = () => {
  return (
    <div className={styles.Features_container_main}>
      <div className={styles.Features_container}> 
        <Image 
          src={Cloud}
          alt = "Not found"
          width={125}
          height={100}
          className={styles.Features_container_image}
        />
        <p>The API accepts JSON format data inputs and returns daily nutrional values in JSON format. This makes it easy to integrate into various programming languages and frameworks. Additionally, being hosted on GCP Cloud Functions provides the benefits of high availability, low latency, and automatic scaling, making it an ideal solution for medical applications.</p>
      </div>
      <div className={styles.Features_container}> 
        <Image 
          src={ML}
          alt = "Not found"
          width={75}
          height={75}
          className={styles.Features_container_image}
        />
        <p>NutriNet is a deep learning model made with PyTorch that predicts daily values of calories, cholesterol, fat, protein, fluids, and sodium based on blood-serum levels. It is the mind behind the API</p>
      </div>
      <div className={styles.Features_container}> 
        <Image 
          src={CyberSecurity}
          alt = "Not found"
          width={50}
          height={50}
          className={styles.Features_container_image}
        />
        <p>Nutri AI prioritizes the security and privacy of user data. The app includes secure login features that ensure only authorized users can access personal information. Additionally, all post and get requests are encrypted, meaning that sensitive information is protected from unauthorized access.</p>
      </div>
           
    </div>
  )
}

export default Cta
