import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "점핑머신 미아 - 신나게 뛰면서 살 빼자!",
  description: "미아동 점핑 다이어트, 강북구 최고 시설. 횟수제 수업 시스템 도입! 신나는 음악과 함께 칼로리를 불태워보세요.",
  keywords: "미아동 점핑, 강북구 다이어트, 점핑다이어트, 점핑머신 미아",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${inter.variable} antialiased bg-darker text-foreground font-sans`}>
        {children}
      </body>
    </html>
  );
}
