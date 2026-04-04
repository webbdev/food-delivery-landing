import { motion, type Variants } from "framer-motion"

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 24 },
	visible: (delay: number = 0) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut", delay },
	}),
}

const Accessibility = () => {
	return (
		<main className="relative border-b border-text text-center mx-auto">
			<div className="max-w-[850px] mx-auto text-center py-12 sm:py-14 md:py-16 px-5.5 md:px-7.5">
				<article className="text-left">

					{/* HEADER */}
					<div className="border-b border-text">
						<motion.h2
							className="mb-8 sm:mb-10"
							variants={fadeUp}
							initial="hidden"
							whileInView="visible"
							custom={0}
							viewport={{ once: true, amount: 0.5 }}
						>
							Accessibility Statement
						</motion.h2>

						<motion.p
							className="text-base mb-5 sm:mb-8"
							variants={fadeUp}
							initial="hidden"
							whileInView="visible"
							custom={0.1}
							viewport={{ once: true, amount: 0.5 }}
						>
							This statement was last updated on 31st January 2026.
						</motion.p>

						<motion.p
							className="text-base mb-9 sm:mb-12"
							variants={fadeUp}
							initial="hidden"
							whileInView="visible"
							custom={0.2}
							viewport={{ once: true, amount: 0.5 }}
						>
							We at FreshFood are working to make our site{" "}
							<a href="https://freshfood.co.uk" className="underline hover:text-text/60 transition-colors duration-300">
								freshfood.co.uk
							</a>{" "}
							accessible to people with disabilities.
						</motion.p>
					</div>

					{/* SECTION: What web accessibility is */}
					<section aria-labelledby="what-accessibility" className="pt-9 sm:pt-11">
						<motion.h3
							id="what-accessibility"
							className="text-[30px] md:text-[46px] mb-5 sm:mb-8"
							variants={fadeUp}
							initial="hidden"
							whileInView="visible"
							custom={0}
							viewport={{ once: true, amount: 0.5 }}
						>
							What web accessibility is
						</motion.h3>

						<motion.p
							className="text-base mb-8 sm:mb-12"
							variants={fadeUp}
							initial="hidden"
							whileInView="visible"
							custom={0.1}
							viewport={{ once: true, amount: 0.5 }}
						>
							Web accessibility means making websites usable for people with disabilities. This includes people with visual, auditory, motor, or cognitive impairments.
						</motion.p>
					</section>

					{/* SECTION: How we are doing */}
					<section aria-labelledby="how-we-doing">
						<motion.h3
							id="how-we-doing"
							className="text-[30px] md:text-[46px] mb-5 sm:mb-8"
							variants={fadeUp}
							initial="hidden"
							whileInView="visible"
							custom={0}
							viewport={{ once: true, amount: 0.5 }}
						>
							How we are doing
						</motion.h3>

						<motion.p
							className="text-base mb-9 sm:mb-12"
							variants={fadeUp}
							initial="hidden"
							whileInView="visible"
							custom={0.1}
							viewport={{ once: true, amount: 0.5 }}
						>
							We are actively working to improve the accessibility of our website. We have implemented features such as keyboard navigation, alt text for images, and high contrast mode. We are also regularly testing our site with accessibility tools and user feedback.
						</motion.p>
					</section>

					{/* SECTION: Feedback */}
					<section aria-labelledby="feedback-contact">
						<motion.h3
							id="feedback-contact"
							className="text-[30px] md:text-[46px] mb-5 sm:mb-8"
							variants={fadeUp}
							initial="hidden"
							whileInView="visible"
							custom={0}
							viewport={{ once: true, amount: 0.5 }}
						>
							Feedback and contact information
						</motion.h3>

						<motion.p
							className="text-base mb-3 sm:mb-8"
							variants={fadeUp}
							initial="hidden"
							whileInView="visible"
							custom={0.1}
							viewport={{ once: true, amount: 0.5 }}
						>
							If you have any feedback on the accessibility of our website, please contact us at{" "}
							<a
								href="mailto:accessibility@freshfood.co.uk"
								className="underline hover:text-text/60 transition-colors duration-300"
							>
								accessibility@freshfood.co.uk
							</a>
						</motion.p>
					</section>

				</article>
			</div>
		</main>
	)
}

export default Accessibility