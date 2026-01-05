"use client";

import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { AllImages } from "../../../public/assets/AllImages";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "antd";
import * as motion from "motion/react-client";
import { useScroll, useMotionValueEvent } from "motion/react";
import { TbLogout2 } from "react-icons/tb";
import { HiOutlineLogin } from "react-icons/hi";
import { ISignInUser } from "@/types";
import { useGetUserData } from "@/context/useGetUserData";
import { logout } from "@/services/AuthService";

const Navbar: React.FC = () => {
  const path = usePathname();
  const router = useRouter();

  const userData: ISignInUser | null = useGetUserData();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [height, setHeight] = useState(0);
  const navbarRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (
      !path.includes("dashboard") &&
      previous !== undefined &&
      latest > previous &&
      latest > 150 &&
      !mobileMenuOpen
    ) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    if (latest > 10) {
      setScrolled(true);
    } else setScrolled(false);
  });

  useEffect(() => {
    // Calculate the height of the content when it opens or closes
    if (mobileMenuOpen) {
      setHeight(navbarRef.current!.scrollHeight); // Set to the content's height when open
    } else {
      setHeight(0); // Set to 0 when closed
    }
  }, [mobileMenuOpen]);

  const handleLogOut = () => {
    logout();
    router.push("/");
    setTimeout(() => {
      router.refresh();
    }, 1000);
  };

  const NavItems = useMemo(() => {
    const baseItems = [
      {
        id: "1",
        name: "Our Solutions",
        route: "/our-solutions",
        key: "our-solutions",
      },
      {
        id: "2",
        name: "Who We Help",
        route: "/who-we-help",
        key: "who-we-help",
      },
      { id: "3", name: "Packages", route: "/packages", key: "packages" },
      { id: "4", name: "About Us", route: "/about", key: "about" },
      { id: "5", name: "Contact Us", route: "/contact", key: "contact" },
    ];

    if (userData?.role === "candidate") {
      baseItems.push({
        id: "6",
        name: "Dashboard",
        route: "/dashboard/candidate/current-vacancies",
        key: "dashboard",
      });
    }

    if (userData?.role === "employer") {
      baseItems.push({
        id: "6",
        name: "Dashboard",
        route: "/dashboard/employer/overview",
        key: "dashboard",
      });
    }

    return baseItems;
  }, [userData?.role]);

  // const items: MenuProps["items"] = [
  //   {
  //     key: "1",
  //     label:
  //       userData?.role === "candidate" ? (
  //         <Link href="/dashboard/candidate/current-vacancies">Candidate Dashboard</Link>
  //       ) : userData?.role === "employer" ? (
  //         <Link href="/dashboard/employer/overview">Employer Dashboard</Link>
  //       ) : (
  //         <></>
  //       ),
  //     icon: <MdOutlineDashboard className="text-secondary-color !text-base" />,
  //   },
  //   {
  //     key: "2",
  //     label: <div onClick={handleLogOut}>Log Out</div>,
  //     icon: <TbLogout2 className="text-secondary-color !text-base" />,
  //   },
  // ];
  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`z-[99999999]  ${path === "/" && !scrolled ? "!text-primary-color" : " !text-base-color"
        } ${scrolled && path === "/"
          ? " !shadow-md duration-300  py-2"
          : " duration-300 py-2"
        } ${mobileMenuOpen || scrolled || path === "/dashboard"
          ? "bg-primary-color"
          : "bg-transparent"
        }`}
    >
      <Container>
        <header className="text-base mx-auto  flex justify-between items-center z-[99999] ">
          {/* //*Company name */}
          <div>
            <Link
              href="/"
              className=" cursor-pointer flex justify-center items-end gap-1"
            >
              {path === "/" && !scrolled && !mobileMenuOpen ? (
                <Image
                  src={AllImages.logo2}
                  alt="logo"
                  width={1000}
                  height={1000}
                  sizes="100vw"
                  className="h-9 w-auto"
                />
              ) : (
                <Image
                  src={AllImages.logo}
                  alt="logo"
                  width={1000}
                  height={1000}
                  sizes="100vw"
                  className="h-8 w-auto"
                />
              )}
            </Link>
          </div>
          {/* //*Nav links */}
          <nav>
            {/* //* For Laptop or Desktop */}
            <div className="hidden lg:block">
              <ul className="flex justify-center items-center gap-8 lg:flex-row flex-col lg:py-0 py-10">
                {NavItems.map((navItem, i) => (
                  <li
                    key={i}
                    className={`lg:mb-0 mb-5 cursor-pointer group relative hover:text-secondary-color transition-all font-bold duration-300 
                      ${path?.includes(navItem.key)
                        ? "!text-secondary-color border-b-2 border-secondary-color"
                        : "border-b-2 border-transparent"
                      }
                      `}
                  >
                    <Link
                      href={navItem.route}
                      className="after-underline-after"
                    >
                      {navItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* //*For Tab or Mobile */}
            <div
              style={{
                height: `${height}px`, // Dynamic height
                overflow: "hidden",
                transition: "height 0.3s ease", // Smooth transition effect for height
              }}
              ref={navbarRef}
              className="block lg:hidden bg-primary-color w-full lg:static absolute top-[48px] left-0 lg:bg-none transition-all duration-500 lg:z-0 -z-[9999] lg:border-none shadow-md"
            >
              <ul className="flex justify-end items-center gap-5 lg:flex-row flex-col lg:py-0 py-5">
                {NavItems.map((navItem, i) => (
                  <li
                    key={i}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className={`lg:mb-0 mb-0 cursor-pointer  group relative  transition-all duration-300 ${path?.includes(navItem.key)
                      ? "!text-secondary-color border-b-2 border-secondary-color"
                      : "text-[#707070] border-b-2 border-transparent"
                      }`}
                  >
                    <Link
                      href={navItem.route}
                      className="after-underline-after"
                    >
                      {navItem.name}
                    </Link>
                  </li>
                ))}
                {userData ? (
                  <Button
                    onClick={handleLogOut}
                    className="group flex items-center !py-4 !px-1 gap-1 border-2 !border-secondary-color !bg-secondary-color !text-primary-color rounded-full"
                  >
                    <p className="font-semibold">Logout</p>
                    <div className="bg-primary-color p-1 rounded-full">
                      <TbLogout2 className=" text-lg text-secondary-color" />
                    </div>
                  </Button>
                ) : (
                  <div className="flex flex-col items-center space-y-3">
                    <Link
                      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                      href="/sign-in"
                      className=" px-2 py-1 font-bold text-secondary-color rounded-full border-2 border-secondary-color"
                    >
                      Sign In
                    </Link>
                    <Link
                      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                      href="/join"
                      className=" px-2 py-1 rounded-full border-2 border-secondary-color bg-secondary-color text-primary-color"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </ul>
            </div>
          </nav>
          <div className="lg:flex items-center gap-2 hidden">
            {userData ? (
              <div className="flex items-center gap-5">
                <Button
                  onClick={handleLogOut}
                  className="group flex items-center !py-4 !px-2 gap-1 border-2 !border-secondary-color !bg-secondary-color !text-primary-color rounded-full"
                >
                  <p className="font-semibold">Sign Out</p>
                  <div className="bg-primary-color p-0.5 rounded-full">
                    <TbLogout2 className=" text-xl text-secondary-color" />
                  </div>
                </Button>
              </div>
            ) : (
              <div className="w-full flex items-center gap-1">
                <Link
                  href="/sign-in"
                  className={`px-2 py-1 font-bold rounded-full border-2 ${path === "/" && !scrolled
                    ? "text-primary-color border-primary-color"
                    : "text-secondary-color border-secondary-color"
                    }`}
                >
                  Sign In
                </Link>
                <Link href="/join">
                  <Button className="group flex items-center !py-4 !px-2 gap-1 border-2 !border-secondary-color !bg-secondary-color !text-primary-color rounded-full">
                    <p className="font-semibold">Sign Up</p>
                    <div className="bg-primary-color p-0.5 rounded-full">
                      <HiOutlineLogin className=" text-xl text-secondary-color" />
                    </div>
                  </Button>
                </Link>
              </div>
            )}
          </div>
          {/* //*Icons */}
          <div className="lg:hidden select-none flex items-center gap-5">
            {userData && (
              <Link href="/profile">
                <Image
                  src={AllImages.dummyProfile}
                  alt="profile_img"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="xl:h-[35px] h-[30px] w-[30px] xl:w-[35px] rounded-full cursor-pointer border-2 border-[#2B4257]"
                />
              </Link>
            )}
            {mobileMenuOpen ? (
              <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#2B4257"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
            ) : (
              <div onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#2B4257"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
            )}
          </div>
        </header>
      </Container>
    </motion.div>
  );
};

export default Navbar;
