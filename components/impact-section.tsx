"use client"

import { Trophy, CheckCircle } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ImpactSection() {
  const { t } = useLanguage()

  const hackathonStats = [
    { value: "9", label: t("impact.hackathonsOrganized"), subtext: t("impact.each") },
    { value: "6", label: t("impact.fullStack"), subtext: t("impact.hackathons") },
    { value: "1", label: t("impact.gameDev"), subtext: t("impact.hackathon") },
    { value: "2", label: t("impact.genai"), subtext: t("impact.hackathons") },
  ]

  const roles = [
    t("impact.role1"),
    t("impact.role2"),
    t("impact.role3"),
    t("impact.role4"),
  ]

  return (
    <section id="impact" className="bg-[#0B0B0B] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4 text-white">
              {t("impact.title")} <span className="bg-[#FF6B35] text-white px-3 py-1 inline-block transform -rotate-1">{t("impact.titleHighlight")}</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg font-medium leading-relaxed md:leading-[30px] max-w-2xl mx-auto">
              {t("impact.subtitle")}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
            {hackathonStats.map((stat, index) => (
              <div
                key={index}
                className="bg-white border-4 border-black rounded-2xl p-6 md:p-8 text-center hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(255,107,53,1)] transition-all duration-300"
              >
                <div className="text-4xl md:text-6xl font-black text-[#FF6B35] mb-2">{stat.value}</div>
                <div className="text-lg md:text-xl font-bold text-[#0B0B0B] mb-1">{stat.label}</div>
                <div className="text-sm text-[#393939] font-medium">{stat.subtext}</div>
              </div>
            ))}
          </div>

          {/* Roles Section */}
          <div className="bg-white border-4 border-black rounded-3xl p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(255,107,53,1)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#FF6B35] rounded-xl flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">{t("impact.rolesTitle")}</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {roles.map((role, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border-2 border-black">
                  <CheckCircle className="w-6 h-6 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                  <span className="text-[#393939] font-medium">{role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
