import React from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/About.module.css'

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className={styles.content}>
          <motion.div
            className={styles.image}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className={styles.imageWrapper}>
              <img src="/images/profile.jpg" alt="Profile" />
            </div>
          </motion.div>

          <motion.div
            className={styles.text}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Passionate Web Developer & Problem Solver</h3>
            <p>
              I'm a dedicated web developer with a passion for building elegant, efficient, and user-friendly web applications. With expertise in React, JavaScript, and modern web technologies, I craft digital solutions that make a difference.
            </p>
            <p>
              My journey in web development started with curiosity about how websites work. Since then, I've grown into a full-stack developer, continuously learning and improving my craft to deliver quality projects that exceed expectations.
            </p>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <h4>5+</h4>
                <p>Years Experience</p>
              </div>
              <div className={styles.stat}>
                <h4>20+</h4>
                <p>Projects Completed</p>
              </div>
              <div className={styles.stat}>
                <h4>15+</h4>
                <p>Happy Clients</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
