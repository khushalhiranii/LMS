"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { imageUrlConstant } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";

const SearchIcon = ({ toggleSearch }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="size-5 w-6 h-6 cursor-pointer text-white"
    onClick={toggleSearch}
  >
    <path
      fillRule="evenodd"
      d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
      clipRule="evenodd"
    />
  </svg>
);

const HamburgerIcon = ({ toggleMenu }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6 cursor-pointer text-white"
    onClick={toggleMenu}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5"
    />
  </svg>
);

const Header = ({ isSticky = true }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const navigation = (data) => {
    router.push(data || "/");
    setIsMenuOpen(false); // Close the menu after navigation
    setIsSearchOpen(false); // Close search when navigating
  };

  return (
    <nav className={isSticky ? "bg-[#248de4] sticky top-0 z-20" : "bg-[#248de4] z-20"}>
      <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-[#248de4] from-[#248de4] to-[#0c5397] shadow-lg max-w-[1920px] mx-auto">
        <Link href={"/"} className="mr-6 flex items-center" prefetch={false}>
          <img
            loading="lazy"
            src={imageUrlConstant?.logoUrl}
            alt="logo"
            className="min-w-[100px]"
          />
        </Link>

        {/* Search Bar for larger screens */}
        <div className="flex justify-start items-center w-full">
          <div className="items-center flex-1 bg-white-10 mx-10 rounded-full px-3 hidden sm:flex">
            <SearchIcon className="animate-spin" />
            <input
              className="pl-2 w-full h-10 min-w-[100px] rounded-lg bg-white-10 outline-none transition-colors duration-300 ease-in-out"
              placeholder="Search courses, resources, and more..."
              type="text"
            />
          </div>

          {/* Hamburger and Search Icon for small/medium screens */}
          <div className="flex-1 flex items-center justify-end gap-4">
            {/* Search Icon only for small screens */}
            <div className="sm:hidden">
              <SearchIcon toggleSearch={toggleSearch} />
            </div>
            
            {/* Hamburger Icon for screens smaller than large */}
            <div className="lg:hidden">
              <HamburgerIcon toggleMenu={toggleMenu} />
            </div>
          </div>


          {/* Menu for larger screens */}
          <div className="flex-1 items-center justify-end hidden lg:flex">
            <div className="items-center gap-10 text-white-10 cursor-pointer hidden lg:flex">
              <motion.button whileTap={{ scale: 0.85 }} onClick={() => navigation("/courses")}>
                <span className="whitespace-nowrap text-ellipsis">Courses</span>
              </motion.button>

              <motion.button whileTap={{ scale: 0.85 }} onClick={() => navigation("/about")}>
                <span className="whitespace-nowrap text-ellipsis">About</span>
              </motion.button>

              <motion.button onClick={() => navigation("/contact-us")} whileTap={{ scale: 0.85 }}>
                <span className="whitespace-nowrap text-ellipsis">Contact Us</span>
              </motion.button>
            </div>
            <div className="ml-5 flex items-center gap-2">
              <button
                onClick={() => navigation("/login")}
                className="text-white-10 hover:bg-linear-grad-yellow-10 whitespace-nowrap text-ellipsis cursor-pointer bg-black-10 h-10 px-3 rounded-sm"
              >
                Login
              </button>
              <button
                onClick={() => navigation("/sign-up")}
                className="hover:bg-linear-grad-yellow-10 text-black whitespace-nowrap text-ellipsis cursor-pointer bg-white-10 px-3 h-10 text-center grid place-items-center rounded-sm"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* Hamburger Menu for small/medium screens with animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="hamburger-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-20 right-0 w-full bg-[#248de4] text-white p-4 z-30 flex flex-col lg:hidden"
            >
              <motion.button
                whileTap={{ scale: 0.85 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => navigation("/courses")}
                className="mb-4"
              >
                Courses
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.85 }}
                whileHover={{ scale: 1.1 }}
                onClick={() => navigation("/about")}
                className="mb-4"
              >
                About
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.85 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }} // Smooth transition effect
                onClick={() => navigation("/contact-us")}
                className="mb-4"
              >
                Contact Us
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.85 }}
                onClick={() => navigation("/login")}
                className="text-white-10 hover:bg-linear-grad-yellow-10 bg-black-10 h-10 px-3 rounded-sm mb-4"
              >
                Login
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.85 }}
                onClick={() => navigation("/sign-up")}
                className="hover:bg-linear-grad-yellow-10 text-black bg-white-10 px-3 h-10 text-center rounded-sm"
              >
                Sign Up
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Search Input for small/medium screens with animation */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              key="search-bar"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-20 right-0 w-full bg-[#248de4] text-white p-4 z-30 lg:hidden"
            >
              <div className="flex items-center bg-white-10 rounded-full px-3">
                <SearchIcon />
                <input
                  className="pl-2 w-full h-10 min-w-[100px] rounded-lg bg-white-10 outline-none transition-colors duration-300 ease-in-out"
                  placeholder="Search courses, resources, and more..."
                  type="text"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </nav>
  );
};

export default Header;
