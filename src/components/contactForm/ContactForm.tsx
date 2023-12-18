'use client';
import { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [title, setTitle] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [content, setContent] = useState<string>('');
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
        <button type="submit" className={styles.button}>
          Skicka
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
