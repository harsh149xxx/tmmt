import AffiliatePage from "@/pages/AffiliatePage"
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Affiliate",
  description: " Boost your revenue and maximize your reach with Velocity Click - a transparent and flexible affiliate network. Get dedicated support and real-time campaign insights to drive your business forward. Sign up now and elevate your affiliate game."
}


const Affiliate = () => {
  return (
    <main>
        <AffiliatePage/>
    </main>
  )
}

export default Affiliate