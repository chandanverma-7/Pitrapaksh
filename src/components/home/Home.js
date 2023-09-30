import React from 'react'
import InfoSection from '../infoSection/InfoSection'
import Hero from '../hero/Hero'
import maintemple from '../../assets/mainTemple.jpeg'
import PandaCard from '../pandacard/PandaCard'
import dummyUser from '../../assets/dummyUser.png'

// 003366 cccccc ffcc00
function Home() {
  return (
    <div className='home'>

      <Hero
        imageUrl={maintemple}
        title="Welcome to Pitrapaksh"
        subtitle="WAY OF SALVATION OF ANCESTORS"
        ctaText="Contact Us"
      />
      <PandaCard 
       name='xyz' photo={dummyUser} role='xyz' experience='xyz' description='xyz' contactInfo='xyz' specializations={['xyz','jaf','jjf']}
      />


      <InfoSection heading='Importance of Pitrapaksha:' 
       info="Hindus believe that during Pitrapaksha, the ancestors' souls visit the earth plane and bless their descendants. Therefore, performing rituals and offering food to the ancestors is considered an essential duty to seek their blessings and receive their protection and guidance."
      />
      <InfoSection heading='Rituals during Pitrapaksha:' 
       info="During Pitrapaksha, Hindus perform various rituals, such as Pinda daan, Tarpan, and Shraddha. Pinda daan is the offering of food and water to the ancestors, while Tarpan involves offering water to the ancestors by chanting mantras. Shraddha is a ceremony to pay homage to the ancestors and seek their blessings."
      />
      <InfoSection heading='Significance of the last day of Pitrapaksha:' 
       info="The last day of Pitrapaksha, known as Sarvapitri Amavasya, is considered the most significant day for performing ancestral rites. On this day, Hindus offer food, water, and other items to the ancestors and seek their blessings. It is believed that performing these rites on this day helps to attain Moksha (liberation from the cycle of birth and death)."
      />
      <InfoSection heading='Beliefs and customs during Pitrapaksha:' 
       info="During Pitrapaksha, Hindus avoid auspicious events like marriages and starting new businesses. They also avoid cutting their hair or nails, as it is considered inauspicious. Additionally, it is believed that offering food and water to the ancestors on this day helps to alleviate their suffering and bring peace to their souls."
      />
      <InfoSection heading='History of Pitrapaksha:' 
       info="The origin of Pitrapaksha can be traced back to ancient Hindu scriptures, including the Garuda Purana and the Mahabharata. According to these texts, the practice of honoring the ancestors dates back to the Vedic period, and it is believed that performing these rituals helps to ensure the well-being of both the living and the deceased."
      />
      <InfoSection heading='Regional variations in Pitrapaksha:' 
       info="Pitrapaksha is observed throughout India, but there are some regional variations in the way it is celebrated. In some regions, people perform the rituals at home, while in others, they visit holy places or perform the rites near the riverbanks. Some regions also have specific customs, such as offering food to crows or cows as a symbolic gesture of feeding the ancestors."
      />
      <InfoSection heading='Significance of food offerings:' 
       info="Offering food to the ancestors during Pitrapaksha is considered an act of piety, and it is believed that the food helps to sustain the souls of the departed. Hindus offer various types of food, including rice, dal, vegetables, fruits, and sweets. The food is usually placed on a banana leaf or a plate and offered with reverence."
      />
      <InfoSection heading='Pitrapaksha and karma:' 
       info="In Hinduism, it is believed that one's actions in this life determine their fate in the next. By performing the ancestral rites during Pitrapaksha, Hindus seek to repay their debt to their ancestors and earn their blessings. It is also believed that by doing so, one can reduce their negative karma and improve their prospects in the afterlife."
      />
      <InfoSection heading='Pitrapaksha and astrology:' 
       info="In Vedic astrology, Pitrapaksha is considered an auspicious time for performing ancestral rites. It is believed that during this period, the ancestors' souls are closer to the earth, and their blessings are more potent. Therefore, many people consult astrologers to determine the best date and time for performing the ancestral rites during Pitrapaksha."
      />
      <InfoSection heading='Pitrapaksha and charity:' 
       info="In addition to performing the ancestral rites, many Hindus also engage in acts of charity during Pitrapaksha. Donating food, clothes, or money to the needy is considered an act of merit and is believed to earn the blessings of both the living and the deceased."
      />
      <InfoSection heading='Pitrapaksha and the cycle of birth and death:' 
       info="According to Hinduism, the soul undergoes a cycle of birth and death, and the ultimate goal is to attain Moksha, or liberation from this cycle. By performing the ancestral rites during Pitrapaksha, Hindus seek to alleviate the suffering of their ancestors and pave the way for their own liberation from the cycle of birth and death."
      />
      <InfoSection heading='Pitrapaksha and the role of the priest:' 
       info="In many Hindu households, the ancestral rites during Pitrapaksha are performed by a priest. The priest is considered an intermediary between the living and the deceased and is believed to have the knowledge and expertise to perform the rituals correctly. The priest also guides the family members through the various stages of the ritual and ensures that the offerings are made with the right intent and devotion."
      />
    </div>
  )
}

export default Home
