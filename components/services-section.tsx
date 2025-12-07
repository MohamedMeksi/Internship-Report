"use client"

import { Brain, Code, CheckCircle, Star, Zap } from 'lucide-react'
import { useLanguage } from "@/lib/language-context"

export function ServicesSection() {
  const { t } = useLanguage()

  const roles = [
    {
      icon: Brain,
      title: t("services.genaiTitle"),
      mainTasks: [
        t("services.genai.main1"),
        t("services.genai.main2"),
        t("services.genai.main3"),
      ],
      otherTasks: [
        t("services.genai.other1"),
        t("services.genai.other2"),
        t("services.genai.other3"),
        t("services.genai.other4"),
        t("services.genai.other5"),
        t("services.genai.other6"),
      ],
    },
    {
      icon: Code,
      title: t("services.fullstackTitle"),
      mainTasks: [
        t("services.fullstack.main1"),
        t("services.fullstack.main2"),
        t("services.fullstack.main3"),
      ],
      otherTasks: [
        t("services.fullstack.other1"),
        t("services.fullstack.other2"),
        t("services.fullstack.other3"),
        t("services.fullstack.other4"),
        t("services.fullstack.other5"),
      ],
    },
  ]

  return (
    <section id="roles" className="bg-[#FAFAFA] py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-[52px] md:leading-[60px] font-bold mb-4">
              {t("services.title")} <span className="bg-[#FF6B35] text-white px-3 py-1 inline-block">{t("services.titleHighlight")}</span>
            </h2>
            <p className="text-[#393939] text-base md:text-lg font-medium leading-relaxed md:leading-[30px] max-w-2xl mx-auto">
              {t("services.subtitle")}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {roles.map((role, index) => (
              <div
                key={index}
                className="bg-white border-4 border-black rounded-3xl overflow-hidden hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
              >
                {/* Header */}
                <div className="bg-[#FF6B35] p-6 md:p-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                      <role.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{role.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  {/* Main Tasks */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="w-5 h-5 text-[#FF6B35]" />
                      <span className="font-bold text-lg">{t("services.mainTasks")}</span>
                    </div>
                    <div className="space-y-3">
                      {role.mainTasks.map((task, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 bg-[#FFF5F0] rounded-xl border-2 border-[#FF6B35]">
                          <CheckCircle className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                          <span className="text-[#393939] font-medium text-sm md:text-base">{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Other Tasks */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Zap className="w-5 h-5 text-[#0B0B0B]" />
                      <span className="font-bold text-lg">{t("services.otherMissions")}</span>
                    </div>
                    <div className="grid gap-2">
                      {role.otherTasks.map((task, i) => (
                        <div key={i} className="flex items-start gap-3 p-2">
                          <CheckCircle className="w-4 h-4 text-[#0B0B0B] flex-shrink-0 mt-1" />
                          <span className="text-[#393939] text-sm md:text-base">{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
