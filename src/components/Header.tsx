"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

const navItems = [
  { name: "소개", href: "#intro" },
  { name: "프로그램", href: "#program" },
  { name: "시설/갤러리", href: "#gallery" },
  { name: "오시는 길", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const isLocalLink = href.startsWith("#");
    if (!isLocalLink) {
      window.location.href = href;
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-dark/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <Link 
          href="#home" 
          onClick={(e) => scrollToSection(e, "#home")}
          className="text-2xl font-black uppercase text-brand tracking-tighter"
        >
          JUMPINGMACHINE <span className="text-white">MIA</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-sm font-medium text-gray-300 hover:text-brand transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center gap-3">
            <a
              href="https://map.naver.com/p/entry/place/1867307982?placePath=/home?entry=plt&from=map&fromPanelNum=1&additionalHeight=76&timestamp=202604221122&locale=ko&svcName=map_pcv5&searchType=place&lng=127.0261272&lat=37.6258196&c=15.00,0,0,0,dh"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#03C75A] text-white font-bold text-sm hover:bg-[#02b351] transition-colors transform hover:scale-105 duration-200"
            >
              체험 예약
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="px-5 py-2.5 rounded-full bg-brand text-dark font-bold text-sm hover:bg-brand-light transition-colors transform hover:scale-105 duration-200"
            >
              상담하기
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-brand"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={clsx(
          "md:hidden absolute top-full left-0 right-0 bg-darker/95 backdrop-blur-xl border-t border-white/10 transition-all duration-300 ease-in-out overflow-hidden",
          isMobileMenuOpen ? "max-h-[400px] py-4" : "max-h-0"
        )}
      >
        <div className="flex flex-col items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-lg font-medium text-gray-200 hover:text-brand transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <a
            href="https://map.naver.com/p/entry/place/1867307982?placePath=/home?entry=plt&from=map&fromPanelNum=1&additionalHeight=76&timestamp=202604221122&locale=ko&svcName=map_pcv5&searchType=place&lng=127.0261272&lat=37.6258196&c=15.00,0,0,0,dh"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[80%] text-center py-3 rounded-full bg-[#03C75A] text-white font-bold text-lg mt-4"
          >
            체험 수업 예약/신청
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="w-[80%] text-center py-3 rounded-full bg-brand text-dark font-bold text-lg"
          >
            카카오톡 상담하기
          </a>
        </div>
      </div>
    </header>
  );
}
