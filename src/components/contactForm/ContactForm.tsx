'use client';
import { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className={styles.wrapper}>
      <h2>Ta kontakt med mig</h2>
      <form className={styles.formWrapper} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Namn"
          className={styles.input}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="example@gmail.com"
          className={styles.input}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Titel"
          className={styles.input}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Ämne"
          className={styles.input}
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
        />

        <textarea
          name="content"
          id="content"
          cols={30}
          rows={10}
          placeholder="innehåll"
          className={styles.textarea}
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></textarea>
        <button type="submit" className={styles.button}>
          Skicka
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
