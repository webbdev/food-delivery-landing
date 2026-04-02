import { useNavigate, useLocation } from "react-router-dom"
import { motion, type Variants } from "framer-motion"
import NewsletterForm from "../ NewsletterForm"
import Container from "../Container"

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
}

const Footer = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (location.pathname !== "/") {
      navigate("/")
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <footer aria-label="Site footer" className="relative">

      {/* LOGO */}
      <div className="border-b border-text pt-10 pb-7 md:py-12">
        <Container>
          <motion.h3
            className="text-[27px] md:text-[37px]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true, amount: 0.5 }}
          >
            <a
              href="/"
              onClick={handleHomeClick}
              aria-label="FreshFood — back to top"
              className="hover:text-text/60 transition-colors duration-300"
            >
              FreshFood
            </a>
          </motion.h3>
        </Container>
      </div>

      {/* MAIN FOOTER GRID */}
      <div>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-[50%_auto_auto] gap-0 text-[15px] sm:text-base">

            {/* NEWSLETTER */}
            <motion.div
              className="border-b md:border-b-0 md:border-r border-text pt-7 md:pt-16 pb-9 md:pb-30"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.1}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="text-xl sm:text-2xl mb-7 sm:mb-8">
                Join our newsletter
              </p>
              <NewsletterForm />
            </motion.div>

            {/* CONTACT */}
            <motion.div
              className="border-b md:border-b-0 md:border-r border-text py-7 md:pt-16 md:pb-30 md:px-6 lg:px-12 xl:px-14"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.2}
              viewport={{ once: true, amount: 0.3 }}
            >
              <address className="not-italic mb-6 md:mb-8">
                <div>
                  <a
                    href="tel:02012357890"
                    aria-label="Call us at 020 1235 7890"
                    className="hover:text-text/60 transition-colors duration-300"
                  >
                    020-1235-7890
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:info@freshfood.co.uk"
                    aria-label="Email us at info@freshfood.co.uk"
                    className="hover:text-text/60 transition-colors duration-300"
                  >
                    info@freshfood.co.uk
                  </a>
                </div>
              </address>
              <address className="not-italic">
                <p>11 St. John Street</p>
                <p>London EC1M 2AA</p>
              </address>
            </motion.div>

            {/* LINKS */}
            <motion.div
              className="py-8 md:pt-16 md:pb-30 md:px-6 lg:pl-12 xl:pl-14"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={0.3}
              viewport={{ once: true, amount: 0.3 }}
            >
              <nav aria-label="Footer navigation">
                <ul className="flex flex-col">
                  <li className="mb-3 md:mb-0">
                    <a
                      href="/privacy"
                      className="hover:underline hover:text-text/60 transition-colors duration-300"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a   
                      href="/accessibility"
                      className="hover:underline hover:text-text/60 transition-colors duration-300"
                    >
                      Accessibility Statement
                    </a>
                  </li>
                </ul>
              </nav>
            </motion.div>

          </div>
        </Container>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-text py-6">
        <Container>
          <p className="text-left sm:text-center text-sm sm:text-[15px]">
            &copy; {new Date().getFullYear()} FreshFood.{" "}
            Built by{" "}
            <a
              href="#"
              aria-label="Built by Tanya"
              className="underline hover:text-text/60 transition-colors duration-300"
            >
              Tanya
            </a>.
          </p>
        </Container>
      </div>

    </footer>
  )
}

export default Footer