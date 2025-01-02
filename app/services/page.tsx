import ServicesPage from '@/pages/ServicesPage'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Services",
  description: "Let The Mad Mystery Team (TMMT)' expert team of media buyers and marketers help your business reach new heights by leveraging innovative strategies and the power of the digital world. Increase your online visibility, drive traffic to your website, and generate leads with our specialized affiliate marketing services."
}


const Services = () => {
  return (
    <main>
        <ServicesPage/>
    </main>
  )
}

export default Services
