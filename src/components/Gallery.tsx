"use client";

import FadeIn from "./ui/FadeIn";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-darker">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl font-black mb-4 uppercase">
              Facility & <span className="text-brand">Vibe</span>
            </h2>
            <p className="text-gray-400 text-lg">
              신나는 음악과 화려한 조명 속에서 땀을 흘리며 즐기는 공간
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item, idx) => {
            const images = ['/gallery-1.jpg', '/gallery-2.jpg', '/hero-main.jpg']
            return (
            <FadeIn key={idx} delay={idx * 0.2} direction="up" className={idx === 0 ? "md:col-span-2 lg:col-span-2 row-span-2" : ""}>
              <div className="relative group overflow-hidden rounded-3xl bg-surface border border-white/5 aspect-square md:aspect-auto md:h-full min-h-[300px]">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${images[idx]})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darker/90 via-darker/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h4 className="text-xl font-bold text-white mb-1">점핑 다이어트 현장</h4>
                  <p className="text-brand text-sm">Jumping Machine Mia</p>
                </div>
              </div>
            </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  );
}
