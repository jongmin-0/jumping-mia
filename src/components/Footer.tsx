"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-darker py-12 border-t border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <Link href="#home" className="text-2xl font-black uppercase text-brand tracking-tighter mb-2 inline-block">
              Jumping<span className="text-white">Mia</span>
            </Link>
            <p className="text-gray-500 text-sm">
              상호: 점핑머신 미아점 | 대표: 최수현 <br/>
              주소: 서울특별시 강북구 도봉로 191 지층 <br/>
              대표전화: 010-9122-2112
            </p>
          </div>

          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-surface rounded-full flex items-center justify-center text-gray-400 hover:text-brand transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 bg-surface rounded-full flex items-center justify-center text-gray-400 hover:text-brand transition-colors">
              <MapPin size={20} />
            </a>
          </div>

        </div>
        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Jumping Machine Mia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
