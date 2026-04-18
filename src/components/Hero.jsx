import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowDown } from 'react-icons/fa'
import styles from '../styles/Hero.module.css'

function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className={styles.hero}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hi, I'm a <span className={styles.highlight}>Web Developer</span>
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Creating beautiful and functional web experiences with React, JavaScript, and modern technologies.
        </motion.p>

        <motion.div
          className={styles.buttons}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <button className={styles.btnPrimary} onClick={scrollToAbout}>
            View My Work
          </button>
          <button className={styles.btnSecondary} onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Get In Touch
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.scrollIndicator}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <FaArrowDown onClick={scrollToAbout} />
      </motion.div>
    </section>
  )
}

export default Hero
