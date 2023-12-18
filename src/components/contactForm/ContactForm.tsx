'use client';
import React from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <div>
      <h2>Ta kontakt med mig</h2>
      <form className={styles.formWrapper}>
        <input type="text" placeholder="Titel" className={styles.input} />
        <input type="text" placeholder="Ämne" className={styles.input} />
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          placeholder="innehåll"
          className={styles.textarea}
        ></textarea>
      </form>
    </div>
  );
};

export default ContactForm;
