
const About: React.FC = () =>{
  return (
    <div className="relative border-b border-text">
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2 lg:gap-10 min-h-screen">
        <div 
          className="
            relative h-[66vh] sm:h-screen lg:h-[98vh] sm:sticky sm:top-0 
            overflow-hidden w-full
            bg-fixed bg-center bg-cover bg-no-repeat
            border-b sm:border-b-0 sm:border-r border-text
          "
          style={{ backgroundImage: "url('/images/fresh-veg-fruits.jpeg')" }}
        >
          <div className="absolute inset-0 bg-white/10" />
        </div>

        <div className="text-left relative z-10">
          <div className="max-w-[660px] px-5.5 sm:px-10 py-10">
            <h2 className="mb-8 sm:mb-10 md:mb-20 md:mt-6">About Us</h2>

            <div className="mb-12 md:mb-20">
              <h3 className="subtitle mb-5 sm:mb-6">
                Our Story
              </h3>
              <p className="text-base sm:text-[17px]">
                We are dedicated to delivering a diverse selection of high-quality organic fruits and vegetables to your doorstep. With a focus on seasonal varieties, we ensure that each delivery is fresh and delicious.
              </p>
            </div>
            
            <div className="mb-12 md:mb-20">
              <h3 className="subtitle mb-5 sm:mb-6">
                Quality First
              </h3>
              <p className="text-base sm:text-[17px]">
                We are passionate about delivering top-quality organic fruits to our customers. Our focus on taste and freshness ensures that every bite is a delightful experience for our clients.
              </p>
            </div>

            <div className="mb-2 md:mb-10">
              <h3 className="subtitle mb-5 sm:mb-6">
                Unique Selection
              </h3>
              <p className="text-base sm:text-[17px]">
                What sets us apart is our carefully curated selection of unique fruits that you won't find elsewhere. We take pride in offering a variety that surprises and delights our customers.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default About