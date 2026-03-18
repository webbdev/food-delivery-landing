import { useNavigate, useLocation } from "react-router-dom"
import NewsletterForm from "../ NewsletterForm"
import Container from "../Container"

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <footer className="relative">
      <div className="border-b border-text pt-10 pb-8 md:py-12">
        <Container>
          <h3
            className="text-[27px] md:text-[37px]"
          >
            <a
              href="/"
              onClick={handleHomeClick}
              className="hover:text-text/60"
            >
              FreshFood
            </a>
          </h3>
        </Container>
      </div>

      <div>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-[50%_auto_auto] gap-0 text-[15px] sm:text-base">
            
            <div className="border-b md:border-b-0 md:border-r border-text pt-8 md:pt-16 pb-10 md:pb-30">
              <p className="text-xl sm:text-2xl mb-7 sm:mb-8">
                Join our newsletter
              </p>

              <NewsletterForm />
            </div>

            <div className="border-b md:border-b-0 md:border-r border-text py-8 md:pt-16 md:pb-30 md:px-6 lg:px-12 xl:px-14">
              <div className="mb-6 md:mb-8">
                <div>
                  <a href="tel:02012357890">020-1235-7890</a>
                </div>
                <div>
                  <a href="mailto:info@freshfood.co.uk">info@freshfood.co.uk</a>
                </div>
              </div>
              <div>
                <p>11 St. John Street</p>
                <p>London EC1M 2AA</p>
              </div>
            </div>

            <div className="py-8 md:pt-16 md:pb-30 md:px-6 lg:pl-12 xl:pl-14">
              <div className="flex flex-col items-stretch justify-between h-full">
                <div>
                  <div className="mb-2 md:mb-0">
                    <a href="/privacy" className="hover:underline">Privacy Policy</a>
                  </div>
                  <div>
                    <a href="/accessibility" className="hover:underline">Accessibility Statement</a>
                  </div>
                </div>
              </div>
            </div>

          </div>    
        </Container>
      </div>

      <div className="border-t border-text py-6">
        <Container>
          <p className="text-left sm:text-center text-sm sm:text-[15px]">
            &copy; {new Date().getFullYear()} FreshFood. 
            Built by <a href="#" className="underline hover:text-text/60">Tanya</a>.
          </p>
        </Container>
      </div>

    </footer>
  )
}

export default Footer