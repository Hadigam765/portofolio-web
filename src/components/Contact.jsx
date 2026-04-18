import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import styles from '../styles/Contact.module.css'

function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (data) => {
    console.log('Form data:', data)
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+62 812 3456 7890',
      link: 'tel:+628123456789'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Indonesia',
      link: '#'
    }
  ]

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <div className={styles.content}>
          <motion.div
            className={styles.info}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Let's talk about everything!</h3>
            <p>Feel free to reach out for collaborations or just a friendly hello. I'll try my best to respond quickly!</p>

            <div className={styles.contactList}>
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  className={styles.contactItem}
                  whileHover={{ x: 10 }}
                >
                  <div className={styles.icon}>
                    <info.icon />
                  </div>
                  <div>
                    <p className={styles.label}>{info.label}</p>
                    <p className={styles.value}>{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            className={styles.form}
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={styles.formGroup}>
              <label>Full Name *</label>
              <input
                type="text"
                {...register('name', { required: 'Name is required' })}
                className={errors.name ? styles.error : ''}
              />
              {errors.name && <span className={styles.errorMsg}>{errors.name.message}</span>}
            </div>

            <div className={styles.formGroup}>
              <label>Email *</label>
              <input
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
                })}
                className={errors.email ? styles.error : ''}
              />
              {errors.email && <span className={styles.errorMsg}>{errors.email.message}</span>}
            </div>

            <div className={styles.formGroup}>
              <label>Subject *</label>
              <input
                type="text"
                {...register('subject', { required: 'Subject is required' })}
                className={errors.subject ? styles.error : ''}
              />
              {errors.subject && <span className={styles.errorMsg}>{errors.subject.message}</span>}
            </div>

            <div className={styles.formGroup}>
              <label>Message *</label>
              <textarea
                rows="5"
                {...register('message', { required: 'Message is required' })}
                className={errors.message ? styles.error : ''}
              ></textarea>
              {errors.message && <span className={styles.errorMsg}>{errors.message.message}</span>}
            </div>

            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>

            {submitted && (
              <motion.p
                className={styles.success}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                ✓ Message sent successfully!
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
