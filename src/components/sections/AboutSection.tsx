import { useEffect, useRef, useState } from "react"

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
		image_alt: "Fresh oranges",
	}
]

const AboutSection = () => {
	const imgRef = useRef<HTMLDivElement | null>(null)
	const [scale, setScale] = useState(1)

	useEffect(() => {
		const handleScroll = () => {
			if (!imgRef.current) return

			const rect = imgRef.current.getBoundingClientRect()
			const windowHeight = window.innerHeight
			const imageHeight = rect.height

			// Check if visible
			const isVisible = rect.bottom > 0 && rect.top < windowHeight
			if (!isVisible) return

			// Calculate scroll progress (0 → 1)
			const totalScrollDistance = windowHeight + imageHeight
			const scrolledThrough = windowHeight - rect.top

			const progress = Math.min(
				Math.max(scrolledThrough / totalScrollDistance, 0),
				1
			)

			// Hero-style scale effect
			const newScale = 1 + progress * 0.25
			setScale(newScale)
		}

		window.addEventListener("scroll", handleScroll, { passive: true })
		handleScroll()

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return (
		<section id="about">
			<div className="md:max-w-[840px] lg:max-w-[1010px] mx-auto text-center py-11 sm:py-12 lg:py-20 px-5.5 md:px-7.5">
				<h2 className="mb-6 sm:mb-10">
					{aboutsection[0].title}
				</h2>
				<h3 className="subtitle mb-6 sm:mb-7">
					{aboutsection[0].sub_title}
				</h3>
				<p className="text-base sm:text-lg mb-7 sm:mb-9">
					{aboutsection[0].description}
				</p>
				<a href={aboutsection[0].btn_url} className="btn inline-block mb-1 sm:mb-2">
					{aboutsection[0].btn}
				</a>
			</div>

			<div className="w-full overflow-hidden border-t border-b border-text">
				<div
					ref={imgRef}
					className="w-full will-change-transform transform-gpu"
					style={{
						transform: `scale(${scale})`,
					}}
				>
					<img
						src={aboutsection[0].image}
						alt={aboutsection[0].image_alt}
						className="w-full h-auto min-h-[340px] max-h-[540px] lg:max-h-[580px] object-cover block"
					/>
				</div>
			</div>
		</section>
	)
}

export default AboutSection