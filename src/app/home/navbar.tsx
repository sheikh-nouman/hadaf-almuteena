"use client";
import Link from "next/link";
import { useState } from "react";
import NavItem from "../util/navItem";

const MENU_LIST = [
  { text: "Home", href: "/" },
  // { text: "Services", href: "/services" },
  { text: "Contact Us", href: "/contact" },
];

const NavBar = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"} className="a__class">
          <h1 className="logo text-2xl font-mono">Hadaf Al-Muteena</h1>
        </Link>
        <div onClick={() => setNavActive(!navActive)} className={`nav__menu-bar`}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, index) => (
            <div
              onClick={() => {
                setActiveIndex(index);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIndex === index} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
