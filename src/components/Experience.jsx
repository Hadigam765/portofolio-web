import React from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/Experience.module.css'

function Experience() {
  const experiences = [
    {
      id: 1,
      company: 'Tech Company Inc',
      position: 'Senior Frontend Developer',
      period: '2022 - Present',
      description: 'Leading frontend development team, architecting scalable React applications and mentoring junior developers.',
      skills: ['React', 'TypeScript', 'Leadership']
    },
    {
      id: 2,
      company: 'Digital Agency',
      position: 'Full Stack Developer',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using React and Node.js, ensuring responsive design and performance.',
      skills: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 3,
      company: 'Startup Hub',
      position: 'Junior Frontend Developer',
      period: '2019 - 2020',
      description: 'Built user interfaces for web applications, collaborated with designers and backend developers.',
      skills: ['React', 'CSS', 'JavaScript']
    },
  ]

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={styles.card}>
                <div className={styles.header}>
                  <h3>{exp.position}</h3>
                  <span className={styles.company}>{exp.company}</span>
                  <span className={styles.period}>{exp.period}</span>
                </div>
                <p>{exp.description}</p>
                <div className={styles.skills}>
                  {exp.skills.map((skill) => (
                    <span key={skill} className={styles.skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
