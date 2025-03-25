"use client"

import { useRef, useEffect, useState } from "react"
import { useTheme } from "next-themes"

interface Skill {
  name: string
  level: number
  category: string
}

interface SkillWheelProps {
  skills: Skill[]
}

export default function SkillWheel({ skills }: SkillWheelProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  // Animation properties
  const rotationSpeed = 0.0005
  const hoverScale = 1.1

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const size = Math.min(500, window.innerWidth - 40)
    canvas.width = size
    canvas.height = size

    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = Math.min(centerX, centerY) * 0.8

    // Group skills by category
    const categories = Array.from(new Set(skills.map((skill) => skill.category)))

    // Calculate positions for each skill
    const skillPositions: Record<string, { x: number; y: number; radius: number }> = {}
    let rotation = 0

    // Draw function
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw center circle
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius * 0.2, 0, Math.PI * 2)
      ctx.fillStyle = isDark ? "rgba(64, 64, 255, 0.2)" : "rgba(0, 0, 200, 0.1)"
      ctx.fill()

      // Draw text in center
      ctx.fillStyle = isDark ? "#ffffff" : "#000000"
      ctx.font = "bold 16px Arial"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText("SKILLS", centerX, centerY)

      // Update rotation
      rotation += rotationSpeed

      // Draw skills
      const angleStep = (Math.PI * 2) / skills.length

      skills.forEach((skill, index) => {
        const angle = index * angleStep + rotation
        const skillRadius = radius * (0.3 + (skill.level / 100) * 0.5)

        const x = centerX + Math.cos(angle) * skillRadius
        const y = centerY + Math.sin(angle) * skillRadius

        // Store position for hover detection
        skillPositions[skill.name] = { x, y, radius: 20 }

        // Draw skill circle
        ctx.beginPath()

        // Scale up if hovered
        const circleRadius = skill.name === hoveredSkill ? 25 : 20

        ctx.arc(x, y, circleRadius, 0, Math.PI * 2)

        // Color based on category
        const categoryIndex = categories.indexOf(skill.category)
        const hue = ((categoryIndex * 360) / categories.length) % 360

        ctx.fillStyle =
          skill.name === hoveredSkill
            ? `hsla(${hue}, 80%, ${isDark ? 60 : 50}%, 0.9)`
            : `hsla(${hue}, 70%, ${isDark ? 50 : 40}%, 0.7)`

        ctx.fill()
        ctx.strokeStyle = isDark ? "#ffffff" : "#000000"
        ctx.lineWidth = 1
        ctx.stroke()

        // Draw skill name
        ctx.fillStyle = isDark ? "#ffffff" : "#000000"
        ctx.font = skill.name === hoveredSkill ? "bold 12px Arial" : "11px Arial"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"

        // Wrap text if needed
        const words = skill.name.split(" ")
        if (words.length > 1 && skill.name.length > 8) {
          const line1 = words.slice(0, Math.ceil(words.length / 2)).join(" ")
          const line2 = words.slice(Math.ceil(words.length / 2)).join(" ")
          ctx.fillText(line1, x, y - 5)
          ctx.fillText(line2, x, y + 5)
        } else {
          ctx.fillText(skill.name, x, y)
        }
      })

      requestAnimationFrame(draw)
    }

    // Handle mouse movement for hover effect
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top

      let hovered = null

      // Check if mouse is over any skill
      for (const [name, position] of Object.entries(skillPositions)) {
        const distance = Math.sqrt(Math.pow(mouseX - position.x, 2) + Math.pow(mouseY - position.y, 2))

        if (distance < position.radius) {
          hovered = name
          break
        }
      }

      setHoveredSkill(hovered)
    }

    canvas.addEventListener("mousemove", handleMouseMove)

    // Start animation
    draw()

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove)
    }
  }, [skills, hoveredSkill, isDark])

  return (
    <div className="relative flex items-center justify-center">
      <canvas ref={canvasRef} className="max-w-full cursor-pointer" />
      {hoveredSkill && (
        <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-md bg-background/90 px-4 py-2 shadow-md">
          <p className="font-medium">{hoveredSkill}</p>
          <p className="text-sm text-muted-foreground">
            {skills.find((s) => s.name === hoveredSkill)?.level}% -
            {skills.find((s) => s.name === hoveredSkill)?.category}
          </p>
        </div>
      )}
    </div>
  )
}

