import styles from './page.module.css';
import ContactForm from '@/components/contactForm/ContactForm';

const Contact = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Contact</h1>
      <ContactForm />
    </div>
  );
};

export default Contact;
