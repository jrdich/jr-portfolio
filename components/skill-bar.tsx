"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

interface SkillBarProps {
  skill: {
    name: string
    level: number
    category: string
  }
}

export default function SkillBar({ skill }: SkillBarProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Determine skill level text
  const getLevelText = (level: number) => {
    if (level >= 90) return "Expert"
    if (level >= 75) return "Experienced"
    if (level >= 60) return "Intermediate"
    return "Beginner"
  }

  return (
    <Card
      className="overflow-hidden p-4 transition-all duration-300 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-2 flex items-center justify-between">
        <h3 className="font-medium">{skill.name}</h3>
        <span className="text-sm text-muted-foreground">{getLevelText(skill.level)}</span>
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
        <motion.div
          className="h-full rounded-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{
            duration: isHovered ? 0.8 : 1.5,
            ease: "easeOut",
            delay: 0.1,
          }}
        />
      </div>
    </Card>
  )
}

