import React from 'react'
import Hero from '../hero/Hero'
import vj from '../../assets/vishnuji.jpg'
import './AboutUs.scss'
import InfoSection from '../infoSection/InfoSection'

function AboutUs() {
  return (
    <div className='about'>
      <Hero
        imageUrl={vj}
        title="We are devotee of lord Vishnu"
        subtitle="Your Guide to Pitrapaksh in Gaya"
        ctaText="Contact us"
      />
      <InfoSection heading='Our Mission:' 
       info="Our mission is to ensure that your visit to Gaya during Pitrapaksh is a truly memorable and fulfilling experience. We understand the importance of this pilgrimage for individuals and families, and we strive to provide you with all the necessary information and assistance to make your journey seamless and spiritually enriching."
      />
      <InfoSection heading='Who We Are:' 
       info="We are a group of dedicated individuals with a deep connection to Gaya and its rich cultural heritage. We have grown up amidst the vibrant traditions of this sacred city and possess a wealth of knowledge about its historical significance, religious practices, and local customs. We are excited to share our insights and expertise with you, ensuring that you have an authentic and meaningful visit."
      />
      <InfoSection heading='What We Offer:' 
       info="On our website, you will find a comprehensive guide to Gaya's Pitrapaksh festival, including essential information about the rituals, ceremonies, and places of importance. We have carefully curated detailed descriptions of the significant sites you can visit, such as the Vishnupad Temple, Akshayabat, and the holy river Phalgu. Additionally, we provide practical tips on accommodation, transportation, local cuisine, and other aspects that will enhance your overall experience."
      />
      <InfoSection heading='Get in Touch:' 
       info="On our website, you will find a comprehensive guide to Gaya's Pitrapaksh festival, including essential information about the rituals, ceremonies, and places of importance. We have carefully curated detailed descriptions of the significant sites you can visit, such as the Vishnupad Temple, Akshayabat, and the holy river Phalgu. Additionally, we provide practical tips on accommodation, transportation, local cuisine, and other aspects that will enhance your overall experience."
      />
      <div className="about-us-footer">
        <p>Thank you for choosing our website as your trusted resource for your visit to Gaya. We look forward to being a part of your pilgrimage and wish you a blessed journey!</p>
      </div>
    </div>
  )
}

export default AboutUs
