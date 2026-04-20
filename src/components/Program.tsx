"use client";

import { CheckCircle2 } from "lucide-react";
import FadeIn from "./ui/FadeIn";

export default function Program() {
  return (
    <section id="program" className="py-24 bg-dark relative overflow-hidden">
      {/* Decorator blob */}
      <div className="absolute top-0 right-0 -mr-48 -mt-48 w-96 h-96 rounded-full bg-brand/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-48 -mb-48 w-96 h-96 rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <span className="text-brand font-bold tracking-wider uppercase text-sm mb-2 block">New System</span>
            <h2 className="text-3xl md:text-5xl font-black mb-4">자유로운 <span className="text-white">횟수제</span> 수업 시스템</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              기존의 불편했던 월 단위 결제는 끝!<br />
              내 스케줄에 맞춰 원할 때만 차감하는 합리적인 횟수권 멤버십을 도입했습니다.
            </p>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="right">
            <div className="bg-surface rounded-3xl p-8 md:p-12 border border-brand/20 shadow-[0_0_50px_rgba(217,249,93,0.05)] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 bg-brand text-dark font-black tracking-tighter uppercase text-sm rounded-bl-2xl">
                Best Value
              </div>
              <h3 className="text-3xl font-black mb-2 text-white">횟수권 멤버십</h3>
              <p className="text-brand font-bold text-xl mb-8">내 맘대로 원하는 시간에 자유롭게</p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "10회권, 20회권, 30회권 등 맞춤형 선택 가능",
                  "바쁜 스케줄 속 유연한 수업 예약 및 취소",
                  "가족이나 친구 등 타인 양도/공유 불가 (본인 전용)",
                  "주말 제외, 평일 원하는 오전/오후 타임 수강"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-brand w-6 h-6 shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-8 border-t border-white/10">
                <p className="text-sm text-gray-400 text-center">
                  * 상세 가격 및 회원 가입 안내는 상담을 통해 친절히 안내해 드립니다.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <div className="bg-darker rounded-3xl p-8 border border-white/5 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6 text-center text-white">클래스 시간표</h3>
              
              <div className="space-y-6">
                <div className="bg-surface p-6 rounded-2xl">
                  <h4 className="text-brand font-bold mb-4 uppercase text-sm tracking-wider">월, 화, 수, 목</h4>
                  <ul className="text-lg text-white font-medium space-y-3">
                    <li className="flex justify-between border-b border-white/5 pb-2">
                      <span className="text-gray-400">오전 수업</span> 
                      <span>AM 10:00 ~ 10:45</span>
                    </li>
                    <li className="flex justify-between pt-1">
                      <span className="text-gray-400">오후 수업</span> 
                      <span>PM 08:00 ~ 08:45</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-surface p-6 rounded-2xl">
                  <h4 className="text-brand font-bold mb-4 uppercase text-sm tracking-wider">화, 목 (추가 수업)</h4>
                  <ul className="text-lg text-white font-medium space-y-3">
                    <li className="flex justify-between">
                      <span className="text-gray-400">오후 수업</span> 
                      <span>PM 07:00 ~ 07:45</span>
                    </li>
                  </ul>
                </div>

                <p className="text-gray-500 text-center text-sm mt-4">
                  (주말 및 공휴일 휴무)
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
