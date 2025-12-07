"use client"

import { FileDown } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function HeroSection() {
  const { t } = useLanguage()
  
  return (
    <section id="home" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">

          
          <h1 className="text-[42px] leading-[50px] md:text-[64px] font-bold md:leading-[75px]">
            Mohamed <span className="bg-[#FF6B35] text-white px-3 py-1 inline-block transform -rotate-1">Meksi</span>
          </h1>
          
          <h2 className="text-[24px] md:text-[32px] font-bold text-[#393939]">
            {t("hero.aiAgentBuilder")} @ <span className="text-[#FF6B35]">StartupSquare</span>
          </h2>
          
          <h2 className="text-[24px] md:text-[32px] font-bold text-[#393939]">
            {t("hero.assistantTechnique")} @ <span className="text-[#FF6B35]">Geeks Institute</span>
          </h2>

          <p className="text-[#393939] text-[16px] md:text-[18px] font-medium leading-[28px] md:leading-[30px] max-w-xl">
            {t("hero.description")}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold">{t("hero.fullStackDeveloper")}</span>
            <span className="bg-[#FF6B35] text-white px-4 py-2 rounded-full text-sm font-semibold">{t("hero.genaiSpecialist")}</span>
            <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-semibold">{t("hero.technicalSupport")}</span>
          </div>

          {/* Download Report Button */}
          <div className="pt-4">
            <a
              href="/Internship Report M.Meksi.pdf"
              download
              className="inline-flex items-center gap-3 bg-[#FF6B35] text-white px-6 py-4 rounded-xl font-bold text-lg border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200"
            >
              <FileDown className="w-6 h-6" />
              {t("hero.downloadReport")}
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <div className="w-full max-w-md aspect-square bg-[#FF6B35] border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <img
                src="/images/design-mode/mohamed.png"
                alt="Mohamed Meksi"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-white border-3 border-black rounded-xl px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-6">
              <span className="font-bold text-lg">{t("hero.hackathons")}</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#FF6B35] text-white border-3 border-black rounded-xl px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-3">
              <span className="font-bold text-lg">{t("hero.genaiExpert")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
