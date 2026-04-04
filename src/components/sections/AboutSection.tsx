import { useRef } from "react"
import { motion, useScroll, useTransform, type Variants } from "framer-motion"

type AboutSectn = {
	title: string;
	sub_title: string;
	description: string;
	btn: string;
	btn_url: string;
	image: string;
	image_alt: string;
};

const aboutsection: AboutSectn[] = [
	{
		title: "About",
		sub_title: "Our Story",
		description: "FreshFood is dedicated to providing a wide selection of top-quality organic fruits and vegetables, carefully curated to ensure freshness and flavor. We prioritize customer satisfaction by offering premium products and exceptional service. Our commitment to organic farming practices reflects in every bite, promoting a healthier lifestyle for\u00a0our\u00a0customers.",
		btn: "Learn More",
		btn_url: "/about",
		image: "/images/blueberry.jpg",
		image_alt: "Fresh organic blueberries",
	}
]

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 24 },
	visible: (delay: number = 0) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut", delay },
	}),
}

const AboutSection = () => {
	const imgRef = useRef<HTMLDivElement>(null)

	const { scrollYProgress } = useScroll({
		target: imgRef,
		offset: ["start end", "end start"],
	})

	const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25])

	return (
		<section id="about" aria-labelledby="about-title" className="border-b border-text">
			<div className="md:max-w-[840px] lg:max-w-[980px] mx-auto text-center py-11 sm:py-12 md:py-14 lg:py-20 px-5.5 md:px-7.5">

				{/* TITLE */}
				<motion.h2
					id="about-title"
					className="mb-4 sm:mb-6 md:mb-10"
					variants={fadeUp}
					initial="hidden"
					whileInView="visible"
					custom={0}
					viewport={{ once: true, amount: 0.5 }}
				>
					{aboutsection[0].title}
				</motion.h2>

				{/* SUBTITLE */}
				<motion.h3
					className="subtitle mb-4 sm:mb-5 md:mb-7"
					variants={fadeUp}
					initial="hidden"
					whileInView="visible"
					custom={0.1}
					viewport={{ once: true, amount: 0.5 }}
				>
					{aboutsection[0].sub_title}
				</motion.h3>

				{/* DESCRIPTION */}
				<motion.p
					className="text-base mb-6 sm:mb-7 md:mb-9"
					variants={fadeUp}
					initial="hidden"
					whileInView="visible"
					custom={0.2}
					viewport={{ once: true, amount: 0.5 }}
				>
					{aboutsection[0].description}
				</motion.p>

				{/* BUTTON */}
				<a
					href={aboutsection[0].btn_url}
					aria-label="Learn more about FreshFood"
					className="btn inline-block mb-0 sm:mb-2"
				>
					{aboutsection[0].btn}
				</a>
			</div>

			{/* IMAGE */}
			<div ref={imgRef} className="w-full overflow-hidden border-t border-text">
				<motion.img
					src={aboutsection[0].image}
					alt={aboutsection[0].image_alt}
					style={{ scale }}
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1, ease: "easeOut" }}
					viewport={{ once: true, amount: 0.2 }}
					className="w-full h-auto min-h-[200px] sm:min-h-[340px] max-h-[400px] md:max-h-[400px] lg:max-h-[580px] object-cover block"
				/>
			</div>
		</section>
	)
}

export default AboutSection