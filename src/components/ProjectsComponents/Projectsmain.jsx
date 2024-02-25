import React from 'react'
import Projects from './Projects'
import Projectsheader from './Projectsheader'
import ProjectsHero from './Projectshero'

export default function Projectsmain() {
  return (
    <div className='projects-main'>
      <Projectsheader />
      <ProjectsHero />
      <Projects />
    </div>
  )
}