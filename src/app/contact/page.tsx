import PostCard from '@/components/PostCard/PostCard';
import styles from './page.module.css';
import ContactForm from '@/components/contactForm/ContactForm';

const Contact = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Contact</h1>
      <ContactForm />
      <PostCard
        title="hej"
        description="lorem ipsum "
        image="/image/yes.jpg"
        link={'/consult'}
      />
    </div>
  );
};

export default Contact;
