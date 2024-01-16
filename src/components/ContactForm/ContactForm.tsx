'use client';
import { useState } from 'react';
import styles from './ContactForm.module.css';
import toast from 'react-hot-toast';
import { z } from 'zod';

const formDataSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email(),
  title: z.string().min(1, { message: 'Title is required' }),
  subject: z.string().min(1, { message: 'Subject is required' }),
  content: z.string().min(1, { message: 'There needs to be some content' }),
});

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    subject: '',
    content: '',
    cloudflareStatus: '',
  });

  const [formError, setFormError] = useState({
    name: '',
    email: '',
    title: '',
    subject: '',
    content: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validatedData = formDataSchema.safeParse(formData);
    if (validatedData.success) {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.status == 200) {
        toast.success(`Thank you for contacting me!!`);
        setFormData({
          name: '',
          email: '',
          title: '',
          subject: '',
          content: '',
          cloudflareStatus: '',
        });
        setFormError({
          name: '',
          email: '',
          title: '',
          subject: '',
          content: '',
        });
      } else {
        toast.error(`Something went wrong, please try again.`);
      }
    } else {
      let temError = {
        name: '',
        email: '',
        title: '',
        subject: '',
        content: '',
      };

      validatedData.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as keyof typeof formError;
        if (fieldName) {
          temError = { ...temError, [fieldName]: issue.message };
        }
      });

      setFormError({
        name: temError.name,
        email: temError.email,
        title: temError.title,
        subject: temError.subject,
        content: temError.content,
      });
      console.log(formError);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h2>Ta kontakt med mig</h2>
      <form className={styles.formWrapper} onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          className={styles.input}
          value={formData.name}
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
        />
        <label htmlFor="name">{formError.name}</label>
        <input
          name="email"
          type="email"
          placeholder="john@gmail.com"
          className={styles.input}
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
        />
        <label htmlFor="email">{formError.email}</label>
        <input
          name="title"
          type="text"
          placeholder="Titel"
          className={styles.input}
          value={formData.title}
          onChange={(e) => {
            setFormData({ ...formData, title: e.target.value });
          }}
        />
        <label htmlFor="title">{formError.title}</label>
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          className={styles.input}
          value={formData.subject}
          onChange={(e) => {
            setFormData({ ...formData, subject: e.target.value });
          }}
        />
        <label htmlFor="subject">{formError.subject}</label>

        <textarea
          name="content"
          id="content"
          cols={30}
          rows={10}
          placeholder="Content"
          className={styles.textarea}
          value={formData.content}
          onChange={(e) => {
            setFormData({ ...formData, content: e.target.value });
          }}
        ></textarea>
        <label htmlFor="content">{formError.content}</label>
        {/* <Widget
            onChange={(value: any) =>
              setFormData({ ...formData, cloudflareStatus: value })
            }
          /> */}
        <button type="submit" className={styles.button}>
          Skicka
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
