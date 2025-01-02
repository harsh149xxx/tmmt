import ServicesPage from '@/pages/IndustryPage'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Industries",
  description: "Check out the industries The Mad Mystery Team (TMMT) are improving the ROIs for."
}


const Services = () => {
  return (
    <main>
        <ServicesPage/>
    </main>
  )
}

export default Services
