"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface NavButtonProps {
  children: string;
}

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div className={`overlay ${isOpen ? "show" : ""}`} onClick={onClose} />

      {/* Menu */}
      <div className={`menu-modal ${isOpen ? "open" : ""}`}>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <div className="menu-content">
          <h2>Menu</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export function NavMenu({ children }: NavButtonProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.div
      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      className="flex p-2 items-center bg-background-primary rounded-lg lg:hidden md:flex"
      onClick={openMenu}
    >
      {/* <MenuModal isOpen={isMenuOpen} onClose={closeMenu} /> */}
      <img className="w-6 h-6" src={`/icons/${children}.svg`} alt={children} />
    </motion.div>
  );
}

export function NavButton({ children }: NavButtonProps) {
  return (
    <Link href={`/${children}`} className="hidden lg:flex">
      <motion.div
        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        className="flex p-2 items-center bg-background-primary rounded-lg"
      >
        <img
          className="w-6 h-6"
          src={`/icons/${children}.svg`}
          alt={children}
        />
      </motion.div>
    </Link>
  );
}
