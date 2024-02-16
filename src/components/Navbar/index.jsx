"use client";
import React from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import MenuOverlay from "../MenuOverlay";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

function Navbar() {
  // open or closed
  const [status, setStatus] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-6 py-2">
        <Link
          href={"/"}
          className=" text-2xl md:text-5xl text-white font-semibold p-5"
        >
          Jπ
        </Link>
        <div className="mobile-menu block md:hidden">
          {status ? (
            <button
              onClick={() => setStatus(false)}
              className="flex items-center px-3 py-2 text-slate-200 border rounded border-slate-200 hover:text-white hover:border-white"
            >
              <IoClose className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setStatus(true)}
              className="flex items-center px-3 py-2 text-slate-200 border rounded border-slate-200 hover:text-white hover:border-white"
            >
              <IoMenu className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-10">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {status ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
}

export default Navbar;
