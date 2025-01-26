"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";

const MenuToggle = ({ toggle, isOpen }) => (
  <button
    className="md:hidden relative outline-none border-none cursor-pointer w-10 h-10 bg-transparent"
    onClick={toggle}
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        d="M 2 2.5 L 20 2.5"
        animate={{ d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" }}
        transition={{ duration: 0.2 }}
      />
      <motion.path
        d="M 2 9.423 L 20 9.423"
        stroke="hsl(0, 0%, 18%)"
        strokeWidth="3"
        strokeLinecap="round"
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.1 }}
      />
      <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        d="M 2 16.346 L 20 16.346"
        animate={{ d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" }}
        transition={{ duration: 0.2 }}
      />
    </svg>
  </button>
);

const NavigationBar = ({ openContact, setOpenContact }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "home", href: "/" },
    { label: "about", href: "/about" },
    { label: "project", href: "/project" },
    { label: "contact", onClick: () => setOpenContact(true) },
    { label: "my resume", href: "/resume.pdf", target: "_blank" }
  ];

  return (
    <motion.nav
      className="w-screen fixed top-0 px-4 py-3 flex items-center justify-between z-50 backdrop-blur-md rgba(255, 255, 255, 0) md:bg-opacity-30"
      initial={false}
      animate={{
        backgroundColor: isMenuOpen ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.3)"
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.a
        href="/"
        whileHover={{ scale: 1.05 }}
        className="text-lg font-bold cursor-pointer"
      >
        Faiz Azmi.
      </motion.a>

      {/* Mobile View */}
      <div className="flex items-center gap-4 md:hidden">
        <motion.div
          className="absolute top-0 left-0 right-0 bottom-0"
          variants={sidebarVariants}
          initial="closed"
          animate={isMenuOpen ? "open" : "closed"}
        >
          <div
            className={`${isMenuOpen ? "flex" : "hidden"} flex-col items-center gap-8 absolute top-[60px] left-0 right-0 bg-white shadow-md p-4`}
          >
            {menuItems.map((item, index) => (
              item.onClick ? (
                <button
                  key={index}
                  onClick={() => {
                    item.onClick();
                    setIsMenuOpen(false);
                  }}
                  className="text-sm font-medium hover:text-zinc-300 rounded-md hover:bg-zinc-900 px-2 transition-colors"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={index}
                  href={item.href}
                  target={item.target}
                  onClick={() => { setIsMenuOpen(false) }}
                  className="text-sm font-medium rounded-md hover:bg-zinc-900 px-2 hover:text-zinc-300 transition-colors"
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </motion.div>
        <MenuToggle toggle={() => setIsMenuOpen(!isMenuOpen)} isOpen={isMenuOpen} />
      </div>

      {/* Web View */}
      <div className="hidden md:flex items-center gap-4 pr-2 ">
        {menuItems.map((item, index) => (
          item.onClick ? (
            <button
              key={index}
              onClick={() => item.onClick()}
              className="text-sm font-medium hover:text-zinc-900 px-2 hover:underline transition-colors"
            >
              {item.label}
            </button>
          ) : (
            <Link
              key={index}
              href={item.href}
              target={item.target}
              className={`text-sm font-medium hover:text-zinc-900 px-2 hover:underline transition-colors`}
            >
              {item.label}
            </Link>
          )
        ))}
      </div>
    </motion.nav>
  );
};

// Variants for sidebar transition
const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 89% 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 89% 40px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default NavigationBar;
