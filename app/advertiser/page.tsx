import AdvertiserPage from "@/pages/AdvertiserPage"
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Advertiser",
  description: "Experience unparalleled success in your advertising campaigns with Velocity Click. Our expert team uses proven market practices and strategies to reach the right audience at the right time, resulting in positive ROI. Trust us for multi-channel traffic, precise media planning, and dedicated account management. Let us help your business grow. Learn more today."
}

const Advertiser = () => {
  return (
    <main>
        <AdvertiserPage/>
    </main>
  )
}

export default Advertiser