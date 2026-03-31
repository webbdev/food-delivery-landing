import { useNavigate, useLocation } from "react-router-dom"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const Hero = () => {
	const ref = useRef<HTMLElement>(null)

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	})

	const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3])

	const navigate = useNavigate()
	const location = useLocation()

	const scrollToAbout = () => {
		const target = document.getElementById("about")
		if (target) {
			window.scrollTo({
				top: target.offsetTop - 60,
				behavior: "smooth",
			})
		}
	}

	const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		if (location.pathname !== "/") {
			navigate("/")
			setTimeout(scrollToAbout, 150)
		} else {
			scrollToAbout()
		}
	}

	return (
		<section
			ref={ref}
			aria-label="Hero"
			className="w-full grid grid-cols-1 md:grid-cols-2 border-b border-text md:min-h-[90vh]"
		>
			{/* LEFT COLUMN */}
			<div className="grid grid-rows-[1fr_auto] h-full overflow-hidden text-center">

				{/* TEXT — staggered children */}
				<motion.div
					className="
						px-6 md:px-10 py-10 md:py-12
						max-w-xl mx-auto
						flex flex-col
						justify-center items-center text-center
						gap-5 md:gap-6
					"
					initial="hidden"
					animate="visible"
					variants={{
						hidden: {},
						visible: { transition: { staggerChildren: 0.15 } },
					}}
				>
					<motion.h1
						className="text-[44px] xs:text-[50px] sm:text-[60px] lg:text-[70px] xl:text-[74px] tracking-tight"
						variants={{
							hidden: { opacity: 0, y: 24 },
							visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
						}}
					>
						Freshness and<br />
						Quality<br />
						You Can Trust
					</motion.h1>

					<motion.p
						className="max-w-[340px] md:max-w-[380px] text-[17px] mb-2 sm:mb-3"
						variants={{
						hidden: { opacity: 0, y: 24 },
						visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
						}}
					>
						Organic fruits and vegetables, carefully selected and delivered to your door.
					</motion.p>

					<motion.div
						variants={{
							hidden: { opacity: 0, y: 24 },
							visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
						}}
					>
						<a
							href="/#about"
							onClick={handleExploreClick}
							aria-label="Explore more — scroll to About section"
							className="btn mb-2 sm:mb-3 max-w-44 md:max-w-48 w-full text-center"
						>
							Explore more
						</a>
					</motion.div>
				</motion.div>

				{/* IMAGE 1 */}
				<div className="w-full h-full overflow-hidden border-t md:border-t-0 border-text">
					<motion.img
						src="/images/pears.jpg"
						alt="A fresh organic pears"
						style={{ scale }}
						initial={{ opacity: 0 }}
						animate={{ opacity: 0.95 }}
						transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
						className="w-full h-full object-cover block"
					/>
				</div>
			</div>

			{/* RIGHT COLUMN */}
			<div className="md:border-l border-text overflow-hidden h-full">
				<div className="h-[340px] xs:h-[380px] sm:h-[420px] md:h-full overflow-hidden">
					<motion.img
						src="/images/pineapple.jpg"
						alt="A fresh organic pineapple"
						style={{ scale }}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
						className="w-full h-full object-cover block"
					/>
				</div>
			</div>
		</section>
	)
}

export default Hero