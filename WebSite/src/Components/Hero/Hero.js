import React from 'react'
import Image from 'next/image';
import Logo1 from '../../../public/digital.png'
import Logo2 from '../../../public/family-insurance.png'
import Logo3 from '../../../public/medical-professional.png'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <div className={styles.Hero_main_wrapper}>
      <div className={styles.Hero_content}>
        <p className={styles.Hero_p}>
        Nutri AI is a medical web app powered by deep learning with custom model Nutri-Net. It helps doctors, dieticians, and patients calculate daily nutritional requirements, provides personalized nutrition recommendations. All user medical data is encrypted for privacy and security.
        </p>

        <Image
          src={Logo1}
          alt = "Not Found"
          width={100}
          height={100}
          className={styles.img}
        />
      </div>
      <div className={styles.Hero_content}>
        <Image
          src={Logo2}
          alt = "Not Found"
          width={100}
          height={100}
          className={styles.img}
        />
        <p className={styles.Hero_p}>
        Calculating daily nutritional requirements for patients can be a tedious and time-consuming process for doctors and dieticians. They have to collect and analyze a significant amount of data, including the patient's medical history, body measurements, and food intake history. This process can take several hours or even days, and is further complicated by the need to tailor nutritional recommendations to each individual patient's specific needs.
        </p>

      </div>
      <div className={styles.Hero_content}>
        <p className={styles.Hero_p}>
        Nutri AI is web-based and has low latency, ensuring fast and responsive performance for users on any device with an internet connection. The app is optimized for speed and designed with a user-friendly interface, providing a seamless and reliable user experience.
        </p>

        <Image
          src={Logo3}
          alt = "Not Found"
          width={100}
          height={100}
          className={styles.img}
        />
      </div>

    </div>
  )
}

export default Hero
