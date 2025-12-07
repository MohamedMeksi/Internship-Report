"use client"

import { Code, Brain, Database, Globe, Zap, GitBranch, Terminal, Layers } from "lucide-react"

export function LogoMarquee() {
  const skills = [
    { icon: Code, label: "Full Stack" },
    { icon: Brain, label: "GenAI" },
    { icon: Database, label: "MongoDB" },
    { icon: Globe, label: "APIs" },
    { icon: Zap, label: "WhatsApp Bot" },
    { icon: GitBranch, label: "Git/GitHub" },
    { icon: Terminal, label: "Node.js" },
    { icon: Layers, label: "React" },
  ]

  return (
    <div className="overflow-hidden">
      <div className="relative overflow-hidden bg-[#0B0B0B] py-6 -rotate-[2deg] mt-16 mb-8 min-w-[120vw] -mx-[10vw]">
        <div className="flex items-center gap-12 animate-marquee whitespace-nowrap">
          {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
            <div key={index} className="flex items-center gap-3 text-white">
              <skill.icon className="w-6 h-6 text-[#FF6B35]" />
              <span className="font-bold text-lg">{skill.label}</span>
              <span className="text-[#FF6B35]">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
