import AboutSection from "@/components/sections/AboutSection"
import Contact from "@/components/sections/Contact"
import Hero from "@/components/sections/Hero"
import Testimonials from "@/components/sections/Testimonials"
import WhyChooseUs from "@/components/sections/WhyChooseUs"

const Home = () => {
  return (
	<div>
		<Hero />
		<AboutSection />
		<WhyChooseUs />
		<Testimonials />
		<Contact />
	</div>
  )
}

export default Home