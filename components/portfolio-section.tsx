"use client"

import { AlertTriangle, Lightbulb, TrendingUp, CheckCircle, MessageCircle, Zap, Globe, Clock } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useLanguage } from "@/lib/language-context"

export function PortfolioSection() {
  const { t } = useLanguage()

  // Images pour WhatsApp-AI-V1
  const v1Screenshots = [
    "/images/v1Screenshots/IMG-20251207-WA0001.jpg",
    "/images/v1Screenshots/IMG-20251207-WA0002.jpg",
    "/images/v1Screenshots/IMG-20251207-WA0003.jpg",
    "/images/v1Screenshots/IMG-20251207-WA0004.jpg",
    "/images/v1Screenshots/IMG-20251207-WA0015.jpg",
    "/images/v1Screenshots/IMG-20251207-WA0016.jpg",
  ]

  // Images pour WhatsApp-AI-V2
  const v2Screenshots = [
    "/images/v2Screenshots/IMG-20251207-WA0006.jpg",
    "/images/v2Screenshots/IMG-20251207-WA0007.jpg",
    "/images/v2Screenshots/IMG-20251207-WA0008.jpg",
    "/images/v2Screenshots/IMG-20251207-WA0009.jpg",
    "/images/v2Screenshots/IMG-20251207-WA0010.jpg",
    "/images/v2Screenshots/IMG-20251207-WA0011.jpg",
    "/images/v2Screenshots/IMG-20251207-WA0012.jpg",
    "/images/v2Screenshots/IMG-20251207-WA0013.jpg",
    "/images/v2Screenshots/IMG-20251207-WA0014.jpg",
    "/images/v2Screenshots/WhatsApp Image 2025-12-07 at 17.53.57_7679d352.jpg",
  ]

  const projects = [
    {
      id: "v5",
      title: t("portfolio.v1.title"),
      subtitle: t("portfolio.v1.subtitle"),
      screenshots: v1Screenshots,
      problem: {
        title: t("portfolio.problem"),
        content: t("portfolio.v1.problem")
      },
      solution: {
        title: t("portfolio.solution"),
        intro: t("portfolio.v1.solutionIntro"),
        features: [
          t("portfolio.v1.feature1"),
          t("portfolio.v1.feature2"),
          t("portfolio.v1.feature3"),
          t("portfolio.v1.feature4"),
          t("portfolio.v1.feature5"),
          t("portfolio.v1.feature6"),
          t("portfolio.v1.feature7"),
          t("portfolio.v1.feature8"),
        ]
      },
      impact: {
        title: t("portfolio.impact"),
        stats: [
          { value: t("portfolio.v1.stat1Value"), label: t("portfolio.v1.stat1Label") },
          { value: t("portfolio.v1.stat2Value"), label: t("portfolio.v1.stat2Label") },
          { value: t("portfolio.v1.stat3Value"), label: t("portfolio.v1.stat3Label") },
        ],
        benefits: [
          t("portfolio.v1.benefit1"),
          t("portfolio.v1.benefit2"),
          t("portfolio.v1.benefit3"),
          t("portfolio.v1.benefit4"),
        ]
      }
    },
    {
      id: "v6",
      title: t("portfolio.v2.title"),
      subtitle: t("portfolio.v2.subtitle"),
      screenshots: v2Screenshots,
      problem: {
        title: t("portfolio.problem"),
        content: t("portfolio.v2.problem")
      },
      solution: {
        title: t("portfolio.solution"),
        intro: t("portfolio.v2.solutionIntro"),
        features: [
          t("portfolio.v2.feature1"),
          t("portfolio.v2.feature2"),
          t("portfolio.v2.feature3"),
          t("portfolio.v2.feature4"),
          t("portfolio.v2.feature5"),
          t("portfolio.v2.feature6"),
          t("portfolio.v2.feature7"),
          t("portfolio.v2.feature8"),
          t("portfolio.v2.feature9"),
        ]
      },
      impact: {
        title: t("portfolio.impact"),
        stats: [
          { value: t("portfolio.v2.stat1Value"), label: t("portfolio.v2.stat1Label") },
          { value: t("portfolio.v2.stat2Value"), label: t("portfolio.v2.stat2Label") },
          { value: t("portfolio.v2.stat3Value"), label: t("portfolio.v2.stat3Label") },
        ],
        benefits: [
          t("portfolio.v2.benefit1"),
          t("portfolio.v2.benefit2"),
          t("portfolio.v2.benefit3"),
          t("portfolio.v2.benefit4"),
          t("portfolio.v2.benefit5"),
          t("portfolio.v2.benefit6"),
          t("portfolio.v2.benefit7"),
        ]
      }
    }
  ]

  return (
    <section id="projects" className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t("portfolio.title")} <span className="bg-[#FF6B35] text-white px-3 py-1 inline-block">{t("portfolio.titleHighlight")}</span>
          </h2>
          <p className="text-[#393939] text-base md:text-lg font-medium max-w-2xl mx-auto">
            {t("portfolio.subtitle")}
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white border-4 border-black rounded-[32px] overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              {/* Project Header */}
              <div className="bg-[#FF6B35] p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <MessageCircle className="w-8 h-8 text-white" />
                      <span className="text-white/80 font-medium">{project.subtitle}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black text-white">{project.title}</h3>
                  </div>
                  <div className="flex gap-3">
                    <span className="bg-white/20 backdrop-blur text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Globe className="w-4 h-4" /> {t("portfolio.multiLanguage")}
                    </span>
                    <span className="bg-white/20 backdrop-blur text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Clock className="w-4 h-4" /> {t("portfolio.24h")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Problem Section */}
              <div className="p-6 md:p-10 border-b-4 border-black bg-gray-50">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold mb-3 text-[#0B0B0B]">{project.problem.title}</h4>
                    <p className="text-[#393939] text-base md:text-lg leading-relaxed">{project.problem.content}</p>
                  </div>
                </div>
              </div>

              {/* Solution Section */}
              <div className="p-6 md:p-10 border-b-4 border-black bg-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#FF6B35] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-bold mb-3 text-[#FF6B35]">{project.solution.title}</h4>
                    <p className="text-[#393939] text-base md:text-lg mb-4">{project.solution.intro}</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {project.solution.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                          <span className="text-[#393939] text-sm md:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Impact Section */}
              <div className="p-6 md:p-10 bg-[#FFF5F0]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-bold mb-6 text-[#0B0B0B]">{project.impact.title}</h4>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {project.impact.stats.map((stat, i) => (
                        <div key={i} className="bg-white border-3 border-black rounded-xl p-4 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                          <div className="text-2xl md:text-3xl font-black text-[#FF6B35]">{stat.value}</div>
                          <div className="text-xs md:text-sm font-medium text-[#393939]">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Benefits */}
                    <div className="grid md:grid-cols-2 gap-2">
                      {project.impact.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Zap className="w-4 h-4 text-[#FF6B35] flex-shrink-0 mt-1" />
                          <span className="text-[#393939] text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Screenshots Carousel */}
              <div className="p-6 md:p-10 border-t-4 border-black bg-white">
                <h4 className="text-xl md:text-2xl font-bold mb-6 text-[#0B0B0B] text-center">
                  {t("portfolio.screenshots")} <span className="text-[#FF6B35]">{project.title}</span>
                </h4>
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {project.screenshots.map((image, i) => (
                      <CarouselItem key={i} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                        <div className="relative aspect-[9/16] border-4 border-black rounded-2xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(255,107,53,1)] transition-all duration-300 bg-white">
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${i + 1}`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-0 md:-left-12 bg-white border-4 border-black hover:bg-[#FF6B35] hover:text-white" />
                  <CarouselNext className="right-0 md:-right-12 bg-white border-4 border-black hover:bg-[#FF6B35] hover:text-white" />
                </Carousel>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
