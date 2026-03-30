import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "../Container";

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
    image: "/images/img_6.jpg",
  },
  {
    id: 2,
    title: "Variety",
    description:
      "Experience a diverse range of seasonal fruits and vegetables, handpicked for freshness and nutritional value.",
    image: "/images/img-4.jpg",
  },
  {
    id: 3,
    title: "Service",
    description:
      "Our dedicated team is committed to providing exceptional customer care and a seamless delivery experience.",
    image: "/images/img-8.jpg",
  },
];

const FeatureCard: React.FC<{ item: Feature; index: number }> = ({ item, index }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Only 1st (index 0) and 3rd (index 2) get scroll scale on desktop
  const isScaled = index === 0 || index === 2;

  const scaleMobile = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.15, 1.3]);
  const scaleDesktop = useTransform(scrollYProgress, [0, 0.5, 1], isScaled ? [1, 1.15, 1.3] : [1, 1, 1]);

  return (
    <div ref={ref} className="flex flex-col text-left">
      {/* IMAGE */}
      <div className="border border-text overflow-hidden">
        {/* Mobile: all 3 images scale */}
        <motion.img
          src={item.image}
          alt={item.title}
          style={{ scale: scaleMobile }}
          className="w-full h-auto object-cover sm:hidden"
        />

        {/* Desktop: only 1st and 3rd scale */}
        <motion.img
          src={item.image}
          alt={item.title}
          style={{ scale: scaleDesktop }}
          className="hidden sm:block w-full h-auto object-cover"
        />
      </div>

      {/* HEADING */}
      <motion.h3
        className="subtitle text-left mt-10 sm:mt-14 mb-6 sm:mb-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {item.title}
      </motion.h3>

      {/* DESCRIPTION */}
      <motion.p
        className="text-base sm:text-lg text-left"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {item.description}
      </motion.p>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  return (
    <section
      id="why-us"
      className="pt-14 sm:pt-18 pb-16 sm:pb-26 bg-bg text-text border-b border-text"
    >
      <Container>
        {/* SECTION TITLE */}
        <motion.h2
          className="text-center mb-10 sm:mb-20"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Why Choose Us
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-6 md:gap-10 lg:gap-20 xl:gap-30">
          {features.map((item, index) => (
            <FeatureCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;