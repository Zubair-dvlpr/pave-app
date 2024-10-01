import React from 'react'
import Contact from './Contact'
import WhyChoose from './WhyChoose'
import OurServices from './OurServices'
import TestimonialSlider from './TestimonialSlider'
import HowItWorks from './HowItWorks'
import CurtainBanner from './CurtainBanner'

const Home = () => {
  return (
    <React.Fragment>
     <CurtainBanner />
     <HowItWorks  />
     <TestimonialSlider />
     <OurServices  />
     <WhyChoose />
     <Contact />
    </React.Fragment>
  )
}

export default Home