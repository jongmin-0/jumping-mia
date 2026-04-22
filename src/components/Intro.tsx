"use client";

import { Activity, Heart, Flame } from "lucide-react";
import FadeIn from "./ui/FadeIn";

const features = [
  {
    icon: <Activity className="w-10 h-10 text-brand" />,
    title: "관절 무리 없는 유산소",
    description: "트램펄린 위에서 뛰기 때문에 무릎이나 발목 관절에 무리 없이 강력한 유산소 운동이 가능합니다."
  },
  {
    icon: <Flame className="w-10 h-10 text-brand" />,
    title: "시간당 1,000kcal 소모",
    description: "단 50분 수업만으로도 땀샘이 폭발하는 엄청난 칼로리 소모를 경험할 수 있습니다."
  },
  {
    icon: <Heart className="w-10 h-10 text-brand" />,
    title: "스트레스 해소",
    description: "퍼스널 트레이너의 코칭과 신나는 음악, 그리고 화려한 조명이 어우러져 클럽에 온 듯한 기분으로 운동합니다."
  }
];

export default function Intro() {
  return (
    <section id="intro" className="py-24 bg-darker">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              WHY <span className="text-brand">JUMPING</span> FITNESS?
            </h2>
            <p className="text-gray-400 text-lg">점핑 다이어트가 처음이신가요?</p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <FadeIn key={idx} delay={idx * 0.2} direction="up">
              <div className="bg-surface hover:bg-surface-hover transition-colors p-10 rounded-3xl border border-white/5 h-full group">
                <div className="w-20 h-20 bg-darker rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
