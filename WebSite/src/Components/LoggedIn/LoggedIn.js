import React from 'react'
import { useState } from 'react';
import styles from './LoggedIn.module.css'
import { signOut } from 'next-auth/react';
import axios from 'axios';
import {NavBar,Footer} from '../../Components';
const CryptoJs = require('crypto-js');

// const apiUrl = "https://us-central1-global-snow-372118.cloudfunctions.net/nutriai";
const apiUrl = "https://us-central1-global-snow-372118.cloudfunctions.net/nutrinet";

const LoggedIn = ({ session }) => {

  const [formData, setFormData] = useState({});
  const [response, setResponse] = useState(null);
  const [showPopUp,setShowPopUp] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name.toString();
    const value = e.target.value;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();
    try {
      const encryptedFormData = JSON.stringify(formData);
      const secretKey = process.env.SECRET_ENCRYPTION_KEY;

      const encryptedJson = CryptoJS.AES.encrypt(encryptedFormData, secretKey).toString();
      const response = await axios.post(apiUrl, encryptedJson, {
        headers: { "Content-Type": "application/json" },
        mode: "no-cors",
      });

      // Handle the response here
      //console.log(response.data);
      setResponse(response.data);
      setShowPopUp(true);
    } catch (error) {
      // Handle errors here
      console.error(error);
    }
  }

  const Popup = () => {
    return (
      <div className={styles.popup}>
        <button className={styles.popup__close} onClick={() => setShowPopUp(false)}>X</button>
        <div className={styles.popUpDiv}>
            {Object.entries(response).map(([key, value]) => (
              <p key={key} className={styles.popUpElement}>{key}: {value}</p>
            ))}
          </div>
      </div>
    )
  }

  return (
    <>
      <NavBar />
      <div className={styles.main_wrapper}>
        <h1 className={styles.h1}>
          You are signed in as {session.user.name}
        </h1>
        

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.form_div}>

            <label htmlFor="patient_age" className={styles.label}>Patient Age</label>
            <input type="text" id="patient_age" name="patient_age" onChange={handleChange} className={styles.input}/>
          </div>
          <div className={styles.form_div}>

            <label htmlFor="patient_gender" className={styles.label}>Patient Gender</label>
            <input type="text" id="patient_gender" name="patient_gender" onChange={handleChange} className={styles.input}/>
          </div>
          <div className={styles.form_div}>

            <label htmlFor="height" className={styles.label}>Height (in cms)</label>
            <input type="text" id="height" name="height" onChange={handleChange} className={styles.input}/>
          </div>
          <div className={styles.form_div}>

            <label htmlFor="weight" className={styles.label}>Weight (in Kgs)</label>
            <input type="text" id="weight" name="weight" onChange={handleChange} className={styles.input}/>
          </div>
          <div className={styles.form_div}>


            <label htmlFor="hb" className={styles.label}>hb</label>
            <input type="text" id="hb" name="hb" onChange={handleChange} className={styles.input}/>
          </div>
          <div className={styles.form_div}>


            <label htmlFor="urea" className={styles.label}>urea</label>
            <input type="text" id="urea" name="urea" onChange={handleChange} className={styles.input}/>
          </div>

          <div className={styles.form_div}>


            <label htmlFor="cr" className={styles.label}>Creatine</label>
            <input type="text" id="cr" name="cr" onChange={handleChange} className={styles.input}/>
          </div>
          <div className={styles.form_div}>

            <label htmlFor="na" className={styles.label}>Sodium</label>
            <input type="text" id="na" name="na" onChange={handleChange} className={styles.input}/>
          </div>

          <div className={styles.form_div}>


            <label htmlFor='potassium' className={styles.label}>Potassium</label>
            <input type="text" id='potassium' name='potassium' onChange={handleChange} className={styles.input}/>
          </div>

          <div className={styles.form_div}>


            <label htmlFor="fbs" className={styles.label}>fbs</label>
            <input type='text' id="fbs" name="fbs" onChange={handleChange} className={styles.input}/>
          </div>

          <div className={styles.form_div}>


            <label htmlFor="hba1c" className={styles.label}>hba1c</label>
            <input type="text" id="hba1c" name="hba1c" onChange={handleChange} className={styles.input}/>
          </div>

          <div className={styles.form_div}>


            <label htmlFor="sgot" className={styles.label}>sgot</label>
            <input type="text" id="sgot" name="sgot" onChange={handleChange} className={styles.input}/>
          </div>

          <div className={styles.form_div}>


            <label htmlFor="sgpt" className={styles.label}>sgpt</label>
            <input type="text" id="sgpt" name="sgpt" onChange={handleChange} className={styles.input}/>
          </div>

          <button type="submit" className={styles.button }>Submit</button>

        </form>
        <button onClick={() => { signOut() }} className={styles.button}>
          Sign out
        </button>
        {/* <Footer /> */}

        {showPopUp && <Popup />}

        {/* {(response !== null && Object.keys(response).length > 0) && (
          <div>
            {Object.entries(response).map(([key, value]) => (
              <p key={key}>{key}: {value}</p>
            ))}
          </div>
        )} */}
      </div>
    </>
  )
}

export default LoggedIn
