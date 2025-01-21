'use client'
import FAQ from '@/components/AboutPage/FAQ'
import Hobby from '@/components/AboutPage/Hobby'
import Story from '@/components/AboutPage/Story'
import Values from '@/components/AboutPage/Values'
import Welcome from '@/components/AboutPage/Welcome'
import SpalashScreen from '@/components/SpalashScreen'
import React, { useEffect, useState } from 'react'

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