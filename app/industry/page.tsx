import ServicesPage from '@/pages/IndustryPage'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Services",
  description: "Let Velocity Click' expert team of affiliate marketers help your business reach new heights by leveraging innovative strategies and the power of the digital world. Increase your online visibility, drive traffic to your website, and generate leads with our specialized affiliate marketing services. Contact us today for tailored solutions that will take your business to the next level."
}


const Services = () => {
  return (
    <main>
        <ServicesPage/>
    </main>
  )
}

export default Services
