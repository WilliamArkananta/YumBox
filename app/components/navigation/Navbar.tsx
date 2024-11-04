"use client";

import React, { useState } from "react";
import { Quicksand } from "next/font/google";
import NavItem from "./NavItem";
import Searchbar from "../Searchbar";
import Link from "next/link";
import { motion } from "framer-motion";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

interface NavbarProps {
  pageTitleOn?: boolean;
  pageTitleText: string;
  backButtonOn?: boolean;
  searchbarOn?: boolean;
}

export const Navbar = ({
  pageTitleOn,
  pageTitleText,
  backButtonOn,
}: NavbarProps) => {
  // State visibility menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle sidebar open
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="flex justify-center items-center p-4 bg-background-brand">
      <div className="mainHeader flex justify-center items-center gap-7 flex-1">
        {/* SHOW BACK BUTTON */}
        {!backButtonOn && (
          <Link href="/" className="hidden lg:flex">
            <motion.div
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              className="flex p-2 items-center bg-background-primary rounded-lg"
            >
              <img className="w-6 h-6" src="/icons/back.svg" alt="Go back" />
            </motion.div>
          </Link>
        )}

        {/* SHOW lOGO */}
        {backButtonOn && (
          <div className="logo flex items-center gap-4">
            <a href="/home" className="flex justify-center items-center gap-4">
              <img src="/logo/logogram.svg" alt="" />
              <h1
                className={`${quicksand.className} flex sm:hidden lg:flex justify-center items-center text-2xl font-bold text-content-invert`}
              >
                YumBox
              </h1>
            </a>
          </div>
        )}

        {/* SHOW PAGE TITLE BUTTON */}
        {pageTitleOn && (
          <div className="pageTitle">
            <h1
              className={`${quicksand.className} text-xl text-content-invert`}
            >
              {pageTitleText}
            </h1>
          </div>
        )}

        {/* NAVIGATION ITEMS */}
        <div className="NavItems hidden lg:flex items-center gap-7">
          <NavItem children="Category" />
          <NavItem children="Deals" />
          <NavItem children="Help/Support" />
        </div>
        <Searchbar />
        {/* NAVIGATION BUTTON */}
        <Link href="/cart" className="hidden lg:flex">
          <motion.div
            whileHover={{
              opacity: 0.8,
              transition: { duration: 0.2 },
            }}
            whileTap={{
              opacity: 1,
              scale: 0.9,
              transition: { duration: 0.2 },
            }}
            className="flex p-2 items-center bg-background-primary rounded-lg"
          >
            <img className="w-6 h-6" src="/icons/cart.svg" alt="cart" />
          </motion.div>
        </Link>
        <Link href="/profile" className="hidden lg:flex">
          <motion.div
            whileHover={{
              opacity: 0.8,
              transition: { duration: 0.2 },
            }}
            whileTap={{
              opacity: 1,
              scale: 0.9,
              transition: { duration: 0.2 },
            }}
            className="flex p-2 items-center bg-background-primary rounded-lg"
          >
            <img className="w-6 h-6" src="/icons/profile.svg" alt="profile" />
          </motion.div>
        </Link>
        <motion.div
          whileHover={{
            opacity: 0.8,
            transition: { duration: 0.2 },
          }}
          whileTap={{
            opacity: 1,
            transition: { duration: 0.2 },
          }}
          onClick={toggleMenu}
          className="flex lg:hidden p-2 items-center bg-background-primary rounded-lg"
        >
          {isMenuOpen && <MenuModal />}
          <img className="w-6 h-6" src="/icons/menu.svg" alt="menu" />
        </motion.div>
      </div>
    </nav>
  );
};

// NAVIGATION BAR RESPONSIVE MOBILE MENU
export const MenuModal = () => {
  return (
    <>
      {/* Menu */}
      <motion.div
        className={`${quicksand.className} bg-background-brand p-8 absolute left-0 top-[76px] w-full`}
      >
        <div className="text-content-invert">
          <div className="logo flex items-center gap-4">
            <a
              href="/home"
              className="flex justify-center items-center gap-4 mb-2"
            >
              <img src="/logo/logogram.svg" alt="" className="w-8" />
              <h1
                className={`${quicksand.className} flex justify-center items-center font-bold text-content-invert`}
              >
                YumBox
              </h1>
            </a>
          </div>
          <ul>
            <Link href="/categories">
              <motion.li
                className="p-3 rounded-lg"
                whileHover={{
                  backgroundColor: "green",
                }}
                whileTap={{
                  backgroundColor: "white",
                  opacity: 0.7,
                  color: "green",
                  transition: { duration: 0.2 },
                }}
              >
                Categories
              </motion.li>
            </Link>
            <Link href="/deals">
              <motion.li
                className="p-3 rounded-lg"
                whileHover={{
                  backgroundColor: "green",
                }}
                whileTap={{
                  backgroundColor: "white",
                  opacity: 0.7,
                  color: "green",
                  transition: { duration: 0.2 },
                }}
              >
                Deals
              </motion.li>
            </Link>
            <Link href="/support">
              <motion.li
                className="p-3 rounded-lg"
                whileHover={{
                  backgroundColor: "green",
                }}
                whileTap={{
                  backgroundColor: "white",
                  opacity: 0.7,
                  color: "green",
                  transition: { duration: 0.2 },
                }}
              >
                Help/Support
              </motion.li>
            </Link>
          </ul>
        </div>
      </motion.div>
    </>
  );
};
