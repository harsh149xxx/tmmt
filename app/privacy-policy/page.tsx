import PrivacyPolicy from '@/pages/PrivacyPolicy'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Services",
  description: "Read the Privacy Policy and Cookies Policy of The Mad Mystery Team (TMMT) thoroughly"
}


const Privacy = () => {
  return (
    <main>
        <PrivacyPolicy/>
    </main>
  )
}

export default Privacy
