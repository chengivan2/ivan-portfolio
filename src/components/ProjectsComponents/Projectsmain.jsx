import React from 'react'
import Projects from './Projectscards'
import ProjectsHero from './Projectshero'

export default function Projectsmain() {
  return (
    <div className='projects-main'>
      <ProjectsHero />
      <Projects />
    </div>
  )
}