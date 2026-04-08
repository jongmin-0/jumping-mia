"use client";

import FadeIn from "./ui/FadeIn";

export default function Hero() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contact = document.querySelector("#contact");
    if (contact) {
      window.scrollTo({ top: contact.getBoundingClientRect().top + window.scrollY - 80, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/60 to-darker/80" />
      </div>

      <div className="container mx-auto px-6 z-10 text-center max-w-4xl pt-20">
        <FadeIn direction="up">
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tight text-white drop-shadow-lg">
            신나게 뛰면서 <span className="text-brand block md:inline md:ml-4">살 빼자!</span>
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.2} direction="up">
          <p className="text-lg md:text-2xl text-gray-300 mb-10 font-medium max-w-2xl mx-auto drop-shadow-md">
            강북구 최고 시설, 미아동 최고의 다이어트 공간.<br className="hidden md:block" /> 
            스트레스는 날리고 체지방은 불태우는 45분의 기적
          </p>
        </FadeIn>

        <FadeIn delay={0.4} direction="up">
          <a
            href="#contact"
            onClick={scrollToContact}
            className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold rounded-full bg-brand text-dark hover:bg-brand-light transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(217,249,93,0.3)] hover:shadow-[0_0_40px_rgba(217,249,93,0.5)]"
          >
            카카오톡 상담하기
          </a>
        </FadeIn>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-70">
        <span className="text-xs uppercase tracking-widest text-brand mb-2 font-bold">Scroll Down</span>
        <div className="w-[2px] h-10 bg-gradient-to-b from-brand to-transparent" />
      </div>
    </section>
  );
}
