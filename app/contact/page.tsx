import ContactPage from "@/pages/ContactPage"
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Contact",
  description: 'Contact Us for Result-Driven Performance Marketing Solutions | Velocity Click',
}

const Contact = () => {
  return (
    <main>
        <ContactPage/>
    </main>
  )
}

export default Contact