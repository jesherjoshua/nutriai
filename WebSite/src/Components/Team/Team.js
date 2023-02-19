import styles from './Team.module.css';
import ML from '../../../public/coding.png';
import Cloud from '../../../public/cloud-service.png';
import CyberSecurity from '../../../public/cyber-security.png';
import Image from 'next/image';

const Team = () => {

  return (
    <div className={styles.team}>
      <div className={styles.member}>
        <Image
          alt= "Not Found"
          src={CyberSecurity}
          width={200}
          height={200}
          className={styles.img}
        />
        <h3 className={styles.h3}>Sree Dananjay S</h3>
      </div>
      <div className={styles.member}>
      <Image
          src={ML}
          alt="Not found"
          width={200}
          height={200}
          className={styles.img}
        />
        <h3 className={styles.h3}>Jesher Joshua</h3>
      </div>
      <div className={styles.member}>
      <Image
          src={Cloud}
          alt="Not found"
          width={200}
          height={200}
          layout="fixed"
          className={styles.img}
        />
        <h3 className={styles.h3}>Abishek Sebastian</h3>
      </div>
    </div>
  );
};

export default Team;

