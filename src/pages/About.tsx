type About = {
  title: string;
  image: string;
  sub_section: {
    id: number;
    sub_title: string;
    description: string;
  }[];
};
	
const about: About[] = [
	{
		title: "About Us",
    image: "/images/fresh-veg-fruits.jpeg",
    sub_section: [
      {
        id: 1,
        sub_title: "Our Story",
        description: "We are dedicated to delivering a diverse selection of high-quality organic fruits and vegetables to your doorstep. With a focus on seasonal varieties, we ensure that each delivery is fresh and delicious."
      },
      {
        id: 2,
        sub_title: "Quality First",
        description: "We are passionate about delivering top-quality organic fruits to our customers. Our focus on taste and freshness ensures that every bite is a delightful experience for our clients."
      },
      {
        id: 3,
        sub_title: "Unique Selection",
        description: "What sets us apart is our carefully curated selection of unique fruits that you won't find elsewhere. We take pride in offering a variety that surprises and delights our customers."
      }
    ]
	}
]

const About: React.FC = () =>{
  return (
    <div className="relative border-b border-text">
      {about.map((section, index) => (
        <div
          key={index}
          className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2 lg:gap-10 min-h-screen"
        >
          {/* ✅ MOBILE TITLE (top of image) */}
          <div className="px-5.5 py-10 sm:hidden">
            <h2 className="text-2xl font-semibold">
              {section.title}
            </h2>
          </div>

          <div 
            className="
              relative h-[70vh] sm:h-screen lg:h-[98vh] 
              sm:sticky sm:top-0 
              overflow-hidden w-full
              bg-fixed bg-center bg-cover bg-no-repeat
              border-t border-b sm:border-t-0 sm:border-b-0 sm:border-r border-text
            "
            style={{ backgroundImage: `url(${section.image})` }}
          >
            <div className="absolute inset-0 bg-white/10" />
          </div>

          <div className="text-left relative z-10">
            <div 
              className="
                max-w-[660px] 
                px-5.5 sm:px-10 py-12
                -mt-20 sm:mt-0
                bg-background
                border-t sm:border-t-0 border-text
              "
            >
              {/* Desktop title only */}
              <h2 className="hidden sm:block mb-8 sm:mb-10 md:mb-20 md:mt-6">
                {section.title}
              </h2>

              {section.sub_section.map((item) => (
                <div 
                  key={item.id}
                  className="mb-10 last:mb-2 md:mb-20 md:last:mb-16"
                >
                  <h3 className="subtitle mb-5 sm:mb-6">
                    {item.sub_title}
                  </h3>
                  <p className="text-base sm:text-[17px]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default About