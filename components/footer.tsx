"use client"

import { MapPin } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-[#0B0B0B] text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-black text-xl">MM</span>
                </div>
                <span className="text-xl font-bold">Mohamed Meksi</span>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-lg">{t("footer.navigation")}</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>
                  <a href="#home" className="hover:text-[#FF6B35] transition-colors flex items-center gap-2">
                    {t("nav.home")}
                  </a>
                </li>
                <li>
                  <a href="#impact" className="hover:text-[#FF6B35] transition-colors flex items-center gap-2">
                    {t("nav.impact")}
                  </a>
                </li>
                <li>
                  <a href="#roles" className="hover:text-[#FF6B35] transition-colors flex items-center gap-2">
                    {t("nav.roles")}
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-[#FF6B35] transition-colors flex items-center gap-2">
                    {t("nav.projects")}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-lg">{t("footer.skills")}</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#FF6B35] rounded-full"></span>
                  {t("footer.fullStackDev")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#FF6B35] rounded-full"></span>
                  {t("footer.genaiLlms")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#FF6B35] rounded-full"></span>
                  {t("footer.whatsappBots")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#FF6B35] rounded-full"></span>
                  {t("footer.technicalSupport")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#FF6B35] rounded-full"></span>
                  {t("footer.apiIntegration")}
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-lg">{t("footer.contact")}</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[#FF6B35]" />
                  </div>
                  <span>Casablanca, Maroc</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>{t("footer.rights")}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
