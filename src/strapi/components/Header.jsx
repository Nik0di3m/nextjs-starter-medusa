"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import LogoMobile from "../components/Icons/LogoMobile";
const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;

    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={twMerge(
        "flex justify-between p-5 lg:justify-center items-center w-full fixed top-0 left-0 z-50 bg-gradient-to-b from-black to-transparent duration-150",
        scrollPosition > 60 && "-translate-y-full"
      )}
    >
      <div
        className={twMerge(
          "fixed lg:relative  flex h-[100vh] lg:h-auto top-0 left-0 flex-col bg-white lg:bg-transparent lg:grid grid-cols-12 w-full max-w-[1675px] lg:pt-10 duration-150 transition-all ease-in-out z-40",
          isMenuOpen
            ? "-translate-x-8 lg:translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="bg-black w-full h-16 pl-14 flex items-center justify-between pr-4 lg:hidden">
          <span className="text-white font-bold text-xl">MENU</span>
          <button
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="col-span-5 pl-14 lg:pl-0 py-5 flex flex-col lg:flex-row gap-5">
          <Link
            className="text-black lg:text-white uppercase lg:normal-case text-xl font-bold lg:text-lg lg:font-semibold leading-[27px]"
            href="https://piw.pl"
          >
            Sklep
          </Link>
          <Link
            className="text-black lg:text-white uppercase lg:normal-case text-xl font-bold lg:text-lg lg:font-semibold leading-[27px]"
            href="/archiwum"
          >
            Archiwum
          </Link>
        </div>
        <div className="col-span-2  place-items-center hidden lg:grid">
          <Link href={"https://piw.pl"}>
            <Image src="/logo.png" width={200} height={200} />
          </Link>
        </div>
        <div className="justify-end flex flex-col lg:flex-row gap-5 lg:gap-10 col-span-5 pl-14 lg:pl-0">
          <Link
            className="text-black lg:text-white uppercase lg:normal-case text-xl font-bold lg:text-lg lg:font-semibold leading-[27px]"
            href="/o-nas"
          >
            O nas
          </Link>
          <Link
            className="text-black lg:text-white uppercase lg:normal-case text-xl font-bold lg:text-lg lg:font-semibold leading-[27px]"
            href="/redaktorzy"
          >
            Redaktorzy
          </Link>
          <Link
            className="text-black lg:text-white uppercase lg:normal-case text-xl font-bold lg:text-lg lg:font-semibold leading-[27px]"
            href="/kontakt"
          >
            Kontakt
          </Link>
        </div>
      </div>
      <div className="lg:hidden">
        <LogoMobile />
      </div>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-white lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </header>
  );
};

export default Header;
