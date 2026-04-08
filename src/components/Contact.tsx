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
                    <p className="text-gray-400">서울특별시 강북구 미아동 xxx-xx (점핑머신 미아점)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center shrink-0">
                    <Phone className="text-brand w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">전화번호</h4>
                    <p className="text-gray-400">02-XXX-XXXX</p>
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
                    href="#"
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
            <div className="bg-surface rounded-3xl p-4 border border-white/5 shadow-2xl h-[500px] w-full flex items-center justify-center relative overflow-hidden">
              {/* This is a placeholder for actual map like Kakao or Google. */}
              <div className="absolute inset-0 bg-darker/50 z-10 flex flex-col items-center justify-center">
                <MapPin className="w-12 h-12 text-brand mb-4 opacity-50" />
                <p className="text-gray-500 font-medium">지도 API 연동 영역 (예: Kakao Maps)</p>
              </div>
              {/* Optional: Static map image could be placed here if API is not yet ready */}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
