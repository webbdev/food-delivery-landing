import { motion } from "framer-motion";

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
        description:
          "We are dedicated to delivering a diverse selection of high-quality organic fruits and vegetables to your doorstep. With a focus on seasonal varieties, we ensure that each delivery is fresh and delicious.",
      },
      {
        id: 2,
        sub_title: "Quality First",
        description:
          "We are passionate about delivering top-quality organic fruits to our customers. Our focus on taste and freshness ensures that every bite is a delightful experience for our clients.",
      },
      {
        id: 3,
        sub_title: "Unique Selection",
        description:
          "What sets us apart is our carefully curated selection of unique fruits that you won't find elsewhere. We take pride in offering a variety that surprises and delights our customers.",
      },
    ],
  },
];

const About: React.FC = () => {
  return (
    <div className="relative border-b border-text">
      {about.map((section, index) => (
        <div
          key={index}
          className="grid grid-cols-1 sm:grid-cols-2 sm:gap-2 lg:gap-10 min-h-screen"
        >
          {/* IMAGE PANEL */}
          <div
            className="
              relative h-[66vh] sm:h-screen lg:h-[98vh]
              sm:sticky sm:top-0
              overflow-hidden w-full
              border-b sm:border-b-0 sm:border-r border-text
            "
          >
            {/* ── Mobile only: plain <img>, no bg-fixed zoom issue ── */}
            <img
              src={section.image}
              alt={section.title}
              className="
                sm:hidden
                absolute inset-0 w-full h-full object-cover object-center
              "
            />

            {/* ── Desktop only: bg-fixed parallax/overlay effect ── */}
            <div
              className="
                hidden sm:block
                absolute inset-0
                bg-fixed bg-center bg-cover bg-no-repeat
              "
              style={{ backgroundImage: `url(${section.image})` }}
            />

            {/* overlay (shared) */}
            <div className="absolute inset-0 bg-white/10" />
          </div>

          {/* CONTENT */}
          <div className="text-left relative z-10">
            <div
              className="
                max-w-[660px]
                px-5.5 sm:px-10 py-12
                -mt-24 sm:mt-0
                bg-background
                border-t sm:border-t-0 border-text
              "
            >
              {/* TITLE */}
              <motion.h2
                className="mb-8 sm:mb-10 md:mb-16 lg:mb-20 md:mt-6"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {section.title}
              </motion.h2>

              {section.sub_section.map((item, i) => (
                <motion.div
                  key={item.id}
                  className="mb-10 last:mb-2 md:mb-16 lg:mb-20 md:last:mb-12 lg:last:mb-16"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  viewport={{ once: true }}
                >
                  <h3 className="subtitle mb-5 sm:mb-6">{item.sub_title}</h3>
                  <p className="text-base sm:text-[17px]">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;