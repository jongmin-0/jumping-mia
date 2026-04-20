"use client";

import FadeIn from "./ui/FadeIn";
import { MapPin, Phone, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-dark relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Location & Info */}
          <div>
            <FadeIn direction="right">
              <h2 className="text-3xl md:text-5xl font-black mb-6">오시는 길 및 상담안내</h2>
              <p className="text-gray-400 mb-10 text-lg">
                접근성 좋은 미아동 중심에 위치해 있습니다. <br/>
                예약 방문 상담을 환영합니다.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="text-brand w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">센터 주소</h4>
                    <p className="text-gray-400">서울특별시 강북구 도봉로 191 지층</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center shrink-0">
                    <Phone className="text-brand w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">전화번호</h4>
                    <p className="text-gray-400">010-9122-2112</p>
                  </div>
                </div>
              </div>

              {/* Kakao CTA */}
              <div className="bg-surface p-8 rounded-3xl border border-[#FAE100]/20 relative overflow-hidden">
                <div className="absolute -right-10 -top-10 text-[#FAE100]/10">
                  <MessageCircle className="w-48 h-48" />
                </div>
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold text-white mb-2">카카오톡 실시간 상담</h4>
                  <p className="text-gray-400 mb-6">궁금한 점이 있으신가요? 카카오톡으로 언제든 문의주세요!</p>
                  <a
                    href="https://pf.kakao.com/_xdyrwn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#FAE100] text-black font-bold py-4 px-8 rounded-full hover:bg-yellow-400 transition-colors shadow-lg shadow-[#FAE100]/20"
                  >
                    <MessageCircle className="w-5 h-5 fill-black" />
                    점핑머신 미아 채널 바로가기
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Map Area */}
          <FadeIn direction="left">
            <a 
              href="https://map.kakao.com/?rt=,,505749.034502935,1146158.3007205522&rt2=%EC%A0%90%ED%95%91%EB%A8%B8%EC%8B%A0%20%EB%AF%B8%EC%95%84%EC%A0%90"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface rounded-3xl p-4 border border-white/5 shadow-2xl h-[500px] w-full flex flex-col items-center justify-center relative overflow-hidden group hover:border-brand/40 transition-colors block"
            >
              <div className="absolute inset-0 bg-darker/60 z-0 transition-opacity group-hover:opacity-40" />
              <div className="relative z-10 flex flex-col items-center justify-center">
                <div className="w-24 h-24 bg-brand/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand/20 transition-all">
                  <MapPin className="w-12 h-12 text-[#FAE100]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">점핑머신 미아점 오시는 길</h3>
                <p className="text-gray-400 font-medium mb-10 text-center leading-relaxed">
                  초행길도 헤매지 마세요!<br/>
                  <strong>카카오맵</strong>으로 가장 정확하고 빠른<br/>
                  길 안내를 도와드립니다.
                </p>
                <div className="inline-flex items-center gap-2 bg-[#FAE100] text-black font-bold py-4 px-8 rounded-full hover:bg-yellow-400 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#FAE100]/20">
                  <MapPin className="w-5 h-5 fill-black" />
                  카카오맵 길찾기
                </div>
              </div>
            </a>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
