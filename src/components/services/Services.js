import React from 'react'
import Hero from '../hero/Hero'
import hero from '../../assets/hero.jpg'

function Services() {
  return (
    <div>
      <Hero
        imageUrl={hero}
        title="We are providing free services just contact us"
        subtitle="WAY OF SALVATION OF ANCESTORS"
        ctaText="Contact Us"
      />
    </div>
  )
}

export default Services
