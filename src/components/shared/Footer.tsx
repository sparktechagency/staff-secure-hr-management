import Image from "next/image";
import { AllImages } from "../../../public/assets/AllImages";
import Container from "../ui/Container";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa6";

const quickLinks = [
  { id: "4", name: "Home", route: "/" },
  { id: "1", name: "Our Solutions", route: "/our-solutions" },
  { id: "2", name: "Who We Help", route: "/who-we-help" },
  { id: "3", name: "Packages", route: "/packages" },
];

const company = [
  { id: "4", name: "About Us", route: "/about" },
  { id: "5", name: "Contact Us", route: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className="relative  lg:h-[390px] "
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="lg:fixed lg:bottom-0 h-auto w-full">
        <footer className="bg-secondary-color text-white px-6 md:px-16 py-16 text-sm">
          <Container>
            <div className="flex flex-col  gap-10 pb-8">
              {/* Logo + Subscription */}
              <div className="flex flex-col md:flex-row justify-between gap-5 items-center">
                <div className="flex flex-col gap-2 w-fit">
                  <Image
                    src={AllImages?.logo2}
                    alt="Staff Secure Logo"
                    className="h-auto w-60"
                  />
                  <p className="text-sm sm:text-base lg:text-lg mt-5">
                    Simplifying workforce management for modern businesses.
                  </p>
                </div>{" "}
                <div className="flex flex-row justify-around !w-full gap-6 md:gap-8 text-white">
                  {/* Quick Links */}
                  <div>
                    <h4 className="font-bold mb-2 text-base sm:text-lg lg:text-xl">
                      Quick Links
                    </h4>
                    <ul className="space-y-2 text-xs lg:text-sm">
                      {quickLinks?.map((item) => (
                        <li key={item.id}>
                          <Link href={item.route}>{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Company */}
                  <div>
                    <h4 className="font-bold mb-2 text-base sm:text-lg lg:text-xl">
                      Company
                    </h4>
                    <ul className="space-y-2 text-xs lg:text-sm">
                      {company?.map((item) => (
                        <li key={item.id}>
                          <Link href={item.route}>{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Legal */}
                  <div>
                    <h4 className="font-bold mb-2 text-base sm:text-lg lg:text-xl">
                      Legal
                    </h4>
                    <ul className="space-y-2 text-xs lg:text-sm">
                      <li>
                        <Link href="/terms-of-service">Terms & Condition</Link>
                      </li>
                      <li>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                      </li>
                      {/* <li>
                        <Link href="/data-protection">Cookie Policy</Link>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
              {/* Links */}
            </div>
            <div className="my-2  border-b border-primary-color"></div>
            {/* Bottom Footer */}
            <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-xs gap-4">
              <p className="text-xs sm:text-sm lg:text-base  text-primary-color ">
                © {currentYear} Staff Secure Ltd. All rights reserved.
              </p>
              <div className="flex gap-4 text-lg">
                <Link
                  href="https://www.facebook.com/groups/564104926466319"
                  target="_blank"
                >
                  <FaFacebookF />
                </Link>{" "}
                <Link href="#" target="_blank">
                  <FaInstagram />{" "}
                </Link>{" "}
                <Link href="#" target="_blank">
                  <FaTiktok />
                </Link>
                <Link href="#" target="_blank">
                  <FaYoutube />
                </Link>
              </div>
            </div>
          </Container>
        </footer>
      </div>
    </div>
  );
}
