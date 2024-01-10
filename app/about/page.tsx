import AboutPage from "@/pages/AboutPage"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Meet the Team at Velocity Click Media Solutions: Your Go-To Platform for Performance Marketing",
  description: "Get to know the dedicated and creative minds behind Velocity Click Media Solutions, the trusted platform for performance marketing. Learn how our process, valuable information, and focused solutions can help your brand achieve its marketing goals."
}

const About = () => {
  return (
    <main>
        <AboutPage/>
    </main>
  )
}

export default About