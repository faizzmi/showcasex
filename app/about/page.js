'use client'
import FAQ from '../../components/AboutPage/FAQ'
import Hobby from '../../components/AboutPage/Hobby'
import Story from '../../components/AboutPage/Story'
import Values from '../../components/AboutPage/Values'
import Welcome from '../../components/AboutPage/Welcome'

const AboutPage = () => {
  return (
    <div>
      <Welcome />

      <Story />
      <Hobby />
      
      <Values />
      <FAQ />
    </div>
  )
}

export default AboutPage