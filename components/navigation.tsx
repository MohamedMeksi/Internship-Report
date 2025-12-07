"use client"

import { Menu, X, Globe } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/lib/language-context"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr")
  }

  return (
    <div className="container mx-auto px-4 pt-8 pb-4">
      <nav className="flex items-center justify-between bg-white border-4 border-black rounded-xl px-5 py-3 max-w-3xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <a href="#home" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-10 h-10 bg-[#FF6B35] rounded-full flex items-center justify-center">
            <span className="text-white font-black text-lg">MM</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
          <a href="#home" className="text-[16px] font-bold leading-[20px] hover:text-[#FF6B35] transition-colors">
            {t("nav.home")}
          </a>
          <a href="#impact" className="text-[16px] font-bold leading-[20px] hover:text-[#FF6B35] transition-colors">
            {t("nav.impact")}
          </a>
          <a href="#roles" className="text-[16px] font-bold leading-[20px] hover:text-[#FF6B35] transition-colors">
            {t("nav.roles")}
          </a>
          <a href="#projects" className="text-[16px] font-bold leading-[20px] hover:text-[#FF6B35] transition-colors">
            {t("nav.projects")}
          </a>
        </div>

        {/* Language Switcher */}
        <button
          onClick={toggleLanguage}
          className="hidden md:flex items-center gap-2 bg-black text-white px-3 py-2 rounded-lg font-bold text-sm hover:bg-[#FF6B35] transition-colors"
        >
          <Globe className="w-4 h-4" />
          {language.toUpperCase()}
        </button>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-white border-4 border-black rounded-xl p-4 max-w-3xl mx-auto shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-col gap-4">
            <a href="#home" className="text-lg font-bold hover:text-[#FF6B35] transition-colors" onClick={() => setIsOpen(false)}>
              {t("nav.home")}
            </a>
            <a href="#impact" className="text-lg font-bold hover:text-[#FF6B35] transition-colors" onClick={() => setIsOpen(false)}>
              {t("nav.impact")}
            </a>
            <a href="#roles" className="text-lg font-bold hover:text-[#FF6B35] transition-colors" onClick={() => setIsOpen(false)}>
              {t("nav.roles")}
            </a>
            <a href="#projects" className="text-lg font-bold hover:text-[#FF6B35] transition-colors" onClick={() => setIsOpen(false)}>
              {t("nav.projects")}
            </a>
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center gap-2 bg-black text-white px-4 py-3 rounded-lg font-bold hover:bg-[#FF6B35] transition-colors"
            >
              <Globe className="w-5 h-5" />
              {language === "fr" ? "Switch to English" : "Passer en Français"}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
