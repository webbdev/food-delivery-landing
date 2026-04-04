import { motion, type Variants } from "framer-motion"

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 24 },
	visible: (delay: number = 0) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut", delay },
	}),
}

const PrivacyPolicy = () => {
	return (
		<main className="border-b border-text text-center mx-auto">
			<div className="max-w-[680px] mx-auto text-center py-12 sm:py-14 md:py-16 px-5.5 md:px-7.5">
				<article className="text-left">

					<motion.h2
						className="mb-8 sm:mb-10 md:mb-12"
						variants={fadeUp}
						initial="hidden"
						whileInView="visible"
						custom={0}
						viewport={{ once: true, amount: 0.5 }}
					>
						Privacy Policy
					</motion.h2>

					<motion.p
						className="text-base mb-5 sm:mb-8"
						variants={fadeUp}
						initial="hidden"
						whileInView="visible"
						custom={0.1}
						viewport={{ once: true, amount: 0.5 }}
					>
						At FreshFood, we are committed to protecting your privacy. We collect only the necessary information to provide you with the best service possible. We do not share your personal information with third parties without your consent.
					</motion.p>

					<motion.p
						className="text-base mb-3 sm:mb-5 md:mb-8"
						variants={fadeUp}
						initial="hidden"
						whileInView="visible"
						custom={0.2}
						viewport={{ once: true, amount: 0.5 }}
					>
						Our website uses cookies to enhance your browsing experience, but you can choose to disable them in your browser settings. For more details on how we handle your data, please read our full Privacy Policy.
					</motion.p>

				</article>
			</div>
		</main>
	)
}

export default PrivacyPolicy