import { useNavigate, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const Hero = () => {
	const [scale, setScale] = useState(1)

	// Scroll scale effect
	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY
			const newScale = Math.min(1 + scrollY * 0.0005, 1.2)
			setScale(newScale)
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const navigate = useNavigate();
	const location = useLocation();

	const scrollToAbout = () => {
		const target = document.getElementById("about");
		if (target) {
			window.scrollTo({
				top: target.offsetTop - 60,
				behavior: "smooth",
			});
		}
	};

	const handleExploreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();

		if (location.pathname !== "/") {
			navigate("/");
			setTimeout(scrollToAbout, 150);
		} else {
			scrollToAbout();
		}
	};

	return (
		<section className="w-full grid grid-cols-1 md:grid-cols-2 border-b border-text md:min-h-[90vh]">

			{/* LEFT COLUMN */}
			<div className="grid grid-rows-[1fr_auto] h-full overflow-hidden text-center">

				{/* TEXT (vertically centered) */}
				<motion.div
					className="px-6 md:px-10 py-10 md:py-12 max-w-xl mx-auto
								flex flex-col justify-center items-center text-center gap-5 md:gap-6"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<h1 className="text-[44px] xs:text-[50px] sm:text-[60px] lg:text-[70px] xl:text-[74px] tracking-tight">
						Freshness and<br />
						Quality<br />
						You Can Trust
					</h1>

					<p className="max-w-[340px] md:max-w-[380px] text-[17px] sm:text-lg mb-1.5">
						Organic fruits and vegetables, carefully selected and delivered to your door.
					</p>

					<a
						href="/"
						onClick={handleExploreClick}
						className="btn mb-1 sm:mb-3 max-w-44 md:max-w-48 w-full text-center"
					>
						Explore more
					</a>
				</motion.div>

				{/* IMAGE 1 */}
				<div className="w-full h-full overflow-hidden border-t md:border-t-0 border-text">
					<motion.div
						style={{ scale }}
						transition={{ type: 'spring', stiffness: 120, damping: 25 }}
						className="w-full h-full"
					>
						<img
							src="/images/pears.jpg"
							alt="Fresh fruits"
							className="w-full h-full object-cover block opacity-95"
						/>
					</motion.div>
				</div>
			</div>

			{/* RIGHT COLUMN */}
			<div className="md:border-l border-text overflow-hidden h-full">

				{/* MOBILE HEIGHT CONTROL */}
				<div className="h-[340px] xs:h-[380px] sm:h-[420px] md:h-full overflow-hidden">
					<motion.div
						style={{ scale }}
						transition={{ type: 'spring', stiffness: 120, damping: 25 }}
						className="w-full h-full"
					>
						<img
							src="/images/pineapple.jpg"
							alt="Fresh fruits"
							className="w-full h-full object-cover block"
						/>
					</motion.div>
				</div>

			</div>

		</section>
	)
}

export default Hero