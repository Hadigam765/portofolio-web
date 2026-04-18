import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import styles from '../styles/Projects.module.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with React frontend and Node.js backend',
      image: '/images/project-1.jpg',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Real-time task management application with user authentication and collaboration features',
      image: '/images/project-2.jpg',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Dynamic weather application with real-time data and interactive UI',
      image: '/images/project-3.jpg',
      tech: ['React', 'API', 'Chart.js'],
      github: '#',
      demo: '#'
    },
    {
      id: 4,
      title: 'Social Media Platform',
      description: 'Social platform with user profiles, posts, and real-time notifications',
      image: '/images/project-4.jpg',
      tech: ['React', 'Express', 'PostgreSQL'],
      github: '#',
      demo: '#'
    },
    {
      id: 5,
      title: 'Blog CMS',
      description: 'Content management system for creating and managing blog posts',
      image: '/images/project-5.jpg',
      tech: ['Next.js', 'Markdown', 'Vercel'],
      github: '#',
      demo: '#'
    },
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={styles.card}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} />
                <div className={styles.overlay}>
                  <a href={project.demo} className={styles.btn}>
                    <FaExternalLinkAlt /> Demo
                  </a>
                  <a href={project.github} className={styles.btn}>
                    <FaGithub /> Code
                  </a>
                </div>
              </div>

              <div className={styles.content}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.tech}>
                  {project.tech.map((t) => (
                    <span key={t} className={styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
