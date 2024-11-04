"use client";

import React from "react";
import { Quicksand } from "next/font/google";
import NavItem from "./NavItem";
import { NavButton, NavMenu } from "./NavButton";
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
  return (
    <nav className="flex justify-center items-center p-4 bg-background-brand">
      <div className="mainHeader flex justify-center items-center gap-7 flex-1">
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
        {pageTitleOn && (
          <div className="pageTitle">
            <h1
              className={`${quicksand.className} text-xl text-content-invert`}
            >
              {pageTitleText}
            </h1>
          </div>
        )}

        <div className="NavItems hidden lg:flex items-center gap-7">
          <NavItem children="Category" />
          <NavItem children="Deals" />
          <NavItem children="Help/Support" />
        </div>
        <Searchbar />
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
            scale: 0.9,
            transition: { duration: 0.2 },
          }}
          // onClick={openMenu}
          className="flex lg:hidden p-2 items-center bg-background-primary rounded-lg"
        >
          <img className="w-6 h-6" src="/icons/menu.svg" alt="menu" />
        </motion.div>
      </div>
    </nav>
  );
};

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div className={`overlay ${isOpen ? "show" : ""}`} onClick={onClose} />

      {/* Menu */}
      <div
        className={`menu-modal ${isOpen ? "open" : ""} ${
          quicksand.className
        } bg-background-brand rounded-2xl m-2 p-4`}
      >
        <div className="menu-content text-content-invert">
          <h2>Menu</h2>
          <ul>
            <motion.li
              className="p-3 rounded-lg"
              whileHover={{
                backgroundColor: "green",
              }}
              whileTap={{ backgroundColor: "white", opacity: 0.7 }}
            >
              Home
            </motion.li>
            <motion.li
              className="p-3 rounded-lg"
              whileHover={{
                backgroundColor: "green",
              }}
              whileTap={{ backgroundColor: "white", opacity: 0.7 }}
            >
              About
            </motion.li>
            <motion.li
              className="p-3 rounded-lg"
              whileHover={{
                backgroundColor: "green",
              }}
              whileTap={{ backgroundColor: "white", opacity: 0.7 }}
            >
              Services
            </motion.li>
            <motion.li
              className="p-3 rounded-lg"
              whileHover={{
                backgroundColor: "green",
              }}
              whileTap={{ backgroundColor: "white", opacity: 0.7 }}
            >
              Contact
            </motion.li>
          </ul>
        </div>
      </div>
    </>
  );
};
