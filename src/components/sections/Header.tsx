import { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { createPortal } from "react-dom"
import Container from "../Container"

type Section = {
  id: string;
  label: string;
};

const sections: Section[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Us" },
  { id: "contact", label: "Contact Us" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const navigate = useNavigate()
  const location = useLocation()

  /* ── Close menu when resizing to desktop (sm = 640px) ── */
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)")
    const handleResize = (e: MediaQueryListEvent) => {
      if (e.matches) setIsOpen(false)
    }
    mediaQuery.addEventListener("change", handleResize)
    return () => mediaQuery.removeEventListener("change", handleResize)
  }, [])

  /* ── Mobile menu scroll lock ── */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
    return () => { document.body.style.overflow = "auto" }
  }, [isOpen])

  /* ── Close menu on route change ── */
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  const toggleMenu = () => setIsOpen((prev) => !prev)

  /* ── Route-based active section ── */
  useEffect(() => {
    if (location.pathname === "/about") {
      setActiveSection("about")
      return
    }
    if (location.pathname === "/") {
      setActiveSection("home")
    }
  }, [location.pathname])

  /* ── Scroll-based active section (home only) ── */
  useEffect(() => {
    if (location.pathname !== "/") return

    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      setVisible(currentScrollPos < prevScrollPos || currentScrollPos < 70)
      setPrevScrollPos(currentScrollPos)

      let currentActive = "home"
      for (const section of sections) {
        const element = document.getElementById(section.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 0) {
            currentActive = section.id
            break
          }
        }
      }
      setActiveSection(currentActive)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos, location.pathname])

  /* ── Helpers ── */
  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId)
    if (target) {
      window.scrollTo({ top: target.offsetTop - 60, behavior: "smooth" })
    }
  }

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault()
    setIsOpen(false)
    if (location.pathname !== "/") {
      navigate("/")
      setTimeout(() => scrollToSection(sectionId), 150)
    } else {
      scrollToSection(sectionId)
    }
  }

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setIsOpen(false)
    setActiveSection("home")
    if (location.pathname !== "/") {
      navigate("/")
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-background border-b border-text transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Container>
          <div className="flex justify-between items-center py-3 sm:py-5">

            {/* LOGO */}
            <a
              href="/"
              onClick={handleHomeClick}
              aria-label="FreshFood — go to homepage"
              className="text-lg sm:text-xl hover:text-text/60 transition-colors duration-300"
            >
              FreshFood
            </a>

            {/* DESKTOP NAV */}
            <nav aria-label="Main navigation" className="hidden sm:block">
              <ul className="flex flex-row space-x-8">
                {sections.map(({ id, label }) => (
                  <li key={id}>
                    <a
                      href={id === "home" ? "/" : `/#${id}`}
                      onClick={
                        id === "home"
                          ? handleHomeClick
                          : (e) => handleLinkClick(e, id)
                      }
                      aria-current={activeSection === id ? "page" : undefined}
                      className={`text-base transition-colors duration-300 ${
                        activeSection === id
                          ? "text-text"
                          : "text-text/60 hover:text-text"
                      }`}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* MOBILE BURGER BUTTON */}
            <button
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Open menu"
              className="sm:hidden py-2 cursor-pointer"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="var(--color-text)"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>

          </div>
        </Container>
      </header>

      {/* MOBILE MENU — portalled to document.body to cover full screen */}
      {createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              id="mobile-menu"
              aria-label="Mobile navigation"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="
                fixed inset-0 z-50
                bg-mob-green text-bg
                flex flex-col
                pt-24 px-10
              "
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={toggleMenu}
                aria-label="Close menu"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                className="absolute top-4 right-4 py-2 px-1 cursor-pointer"
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="var(--color-mob-green-light)"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* NAV ITEMS */}
              <ul>
                {sections.map(({ id, label }, index) => (
                  <motion.li
                    key={id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.07, ease: "easeOut" }}
                    className="py-5 border-b border-mob-green-light w-full text-left"
                  >
                    <a
                      href={id === "home" ? "/" : `/#${id}`}
                      onClick={
                        id === "home"
                          ? handleHomeClick
                          : (e) => handleLinkClick(e, id)
                      }
                      aria-current={activeSection === id ? "page" : undefined}
                      className={`text-3xl transition-colors duration-300 ${
                        activeSection === id
                          ? "text-mob-green-light"
                          : "text-bg hover:text-mob-green-light"
                      }`}
                    >
                      {label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  )
}

export default Header