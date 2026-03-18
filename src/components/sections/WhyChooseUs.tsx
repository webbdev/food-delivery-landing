import Container from "../Container"

type Feature = {
  id: number;
  title: string;
  description: string;
  image: string;
};
	
const features: Feature[] = [
	{
		id: 1,
		title: "Quality",
		description:
		"We source the finest organic fruits and vegetables to ensure premium quality and taste for our customers.",
		image: "/images/quality.jpg",
	},
	{
		id: 2,
		title: "Variety",
		description:
		"Experience a diverse range of seasonal fruits and vegetables, handpicked for freshness and nutritional value.",
		image: "/images/variety.jpg",
	},
	{
		id: 3,
		title: "Service",
		description:
		"Our dedicated team is committed to providing exceptional customer care and a seamless delivery experience.",
		image: "/images/service.jpg",
	},
];

const WhyChooseUs: React.FC = () => {
	return (
		<section id="why-us" className="pt-14 sm:pt-18 pb-16 sm:pb-26 bg-bg text-text border-b border-text">
			<Container>
				<h2 className="text-center mb-10 sm:mb-20">
					Why Choose Us
				</h2>

				<div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8 md:gap-10 lg:gap-20 xl:gap-30">
					{features.map((item) => (
						<div
							key={item.id}
							className="flex flex-col text-left"
						>
							<div className="border border-text overflow-hidden">
								<img
									src={item.image}
									alt={item.title}
									className="w-full h-auto object-cover transition-transform duration-500 ease-out hover:scale-110"
								/>
							</div>

							<h3 className="subtitle text-left mt-10 sm:mt-14 mb-6 sm:mb-8">
								{item.title}
							</h3>

							<p className="text-base sm:text-lg text-left">
								{item.description}
							</p>
						</div>
					))}
				</div>
			</Container>
		</section>
	);
};

export default WhyChooseUs;