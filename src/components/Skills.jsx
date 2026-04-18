import React from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaJsSquare, FaNode, FaDatabase, FaGit, FaDocker } from 'react-icons/fa'
import styles from '../styles/Skills.module.css'

function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'JavaScript', icon: FaJsSquare, color: '#F7DF1E' },
        { name: 'CSS/HTML', icon: null, color: '#264de4' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: FaNode, color: '#339933' },
        { name: 'Database', icon: FaDatabase, color: '#336791' },
        { name: 'REST API', icon: null, color: '#009999' },
      ]
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git', icon: FaGit, color: '#F05032' },
        { name: 'Docker', icon: FaDocker, color: '#2496ED' },
        { name: 'Linux', icon: null, color: '#FCC624' },
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </motion.h2>

        <motion.div
          className={styles.categories}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className={styles.category}
              variants={itemVariants}
            >
              <h3>{category.title}</h3>
              <div className={styles.skillList}>
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className={styles.skillItem}
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {skill.icon && <skill.icon style={{ color: skill.color, fontSize: '2.5rem' }} />}
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
