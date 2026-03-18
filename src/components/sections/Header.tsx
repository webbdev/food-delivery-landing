import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Container from "../Container";

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
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  /* ---------------- Mobile menu scroll lock ---------------- */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  /* ---------------- Route-based active section ---------------- */
  useEffect(() => {
    if (location.pathname === "/about") {
      setActiveSection("about");
      return;
    }

    if (location.pathname === "/") {
      setActiveSection("home");
    }
  }, [location.pathname]);

  /* ---------------- Scroll-based active section (HOME ONLY) ---------------- */
  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(currentScrollPos < prevScrollPos || currentScrollPos < 70);
      setPrevScrollPos(currentScrollPos);

      let currentActive = "home";

      for (let section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 0) {
            currentActive = section.id;
            break;
          }
        }
      }

      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, location.pathname]);

  /* ---------------- Helpers ---------------- */
  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth",
      });
    }
  };

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(sectionId), 150);
    } else {
      scrollToSection(sectionId);
    }
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveSection("home");

    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-background border-b border-text transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Container>
        <div className="flex justify-between items-center py-3 sm:py-5">
          <a
            href="/"
            onClick={handleHomeClick}
            className="text-lg sm:text-xl hover:text-text/60"
          >
            FreshFood
          </a>

          <nav aria-label="Main Navigation">
            <ul
              className={`fixed inset-0 h-screen bg-mob-green text-bg
                flex flex-col items-center justify-center sm:static sm:h-auto sm:flex sm:flex-row sm:space-x-8
                sm:bg-bg sm:text-text
                transform transition-transform duration-400 ease-in
                ${isOpen ? "translate-y-0" : "-translate-y-full sm:translate-y-0"}`}
            >
              {sections.map(({ id, label }) => (
                <li
                  key={id}
                  className="py-5 sm:p-0 border-b border-mob-green-light sm:border-0 w-[60%] sm:w-auto text-center"
                >
                  <a
                      href="/"
                      onClick={
                        id === "home"
                          ? handleHomeClick
                          : (e) => handleLinkClick(e, id)
                      }
                      className={`text-3xl sm:text-base transition-colors ${
                        activeSection === id
                          ? "text-mob-green-light sm:text-text"
                          : "text-bg sm:text-text/60 hover:text-mob-green-light sm:hover:text-text"
                      }`}
                    >
                      {label}
                    </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label="Toggle Menu"
            className="sm:hidden py-2 z-50"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke={isOpen ? "var(--color-mob-green-light)" : "var(--color-text)"}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12" // close
                    : "M4 6h16M4 12h16m-7 6h7" // burger
                }
              />
            </svg>
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;