import { motion } from "framer-motion"
import Container from "../Container"

type TestimonialsSection = {
	id: number;
	name: string;
	text: string;
}

const testimonialsSection: TestimonialsSection[] = [
	{
		id: 1,
		name: "John's Review",
		text: '"The organic fruits and vegetables from BrandName are so fresh and delicious!"',
	},
	{
		id: 2,	
		name: "Michael's Feedback",
		text: '"I love the variety of fruits available. Highly recommend!"',
	},
	{
		id: 3,
		name: "Emily's Experience",
		text: '"Fast delivery and excellent customer service. Will order again!"',
	},
]

const Testimonials: React.FC = () => {
	return (
		<section className="pt-6 sm:pt-10 pb-6 sm:pb-0 border-b border-text">
			<div className="border-b border-text pb-6 sm:pb-10">
				<Container>
					<motion.h2
						className=""
						initial={{ opacity: 0, y: 24 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true, amount: 0.5 }}
					>
						Customer Testimonials
					</motion.h2>
				</Container>
			</div>
			<Container>
				<div>
					{testimonialsSection.map(({ id, name, text }, index) => {
						const isLast = index === testimonialsSection.length - 1;

						return (
							<div
								key={id}
								className={`
									grid grid-cols-1 sm:grid-cols-[30%_70%] gap-8 sm:gap-2
									justify-items-start text-left
									pt-6 sm:pt-14 md:pt-18 lg:pt-19 xl:pt-21 pb-8 sm:pb-22 md:pb-34 lg:pb-42 xl:pb-46
									${!isLast ? "border-b border-text" : ""}
								`}
							>
								{/* NAME */}
								<motion.p
									className="text-base sm:text-lg"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.1 }}
									viewport={{ once: true, amount: 0.5 }}
								>
									{name}
								</motion.p>
								{/* REVIEW */}
								<motion.p
									className="text-base sm:text-xl max-w-[520px]"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.2 }}
									viewport={{ once: true, amount: 0.5 }}
								>
									{text}
								</motion.p>
							</div>
						);
					})}
				</div>
			</Container>
		</section>
	)
}

export default Testimonials