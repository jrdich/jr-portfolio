"use client"

import { useRef, useEffect } from "react"
import { useTheme } from "next-themes"

// Adjust matrix rain opacity for better text visibility
export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Matrix rain characters
    const chars = "01"
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)

    // Initialize drops at random positions
    const drops: number[] = []
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * canvas.height)
    }

    // Drawing the characters
    const draw = () => {
      // Set semi-transparent background to create fade effect
      ctx.fillStyle = resolvedTheme === "dark" ? "rgba(0, 0, 0, 0.15)" : "rgba(255, 255, 255, 0.15)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Set text color and font
      ctx.fillStyle =
        resolvedTheme === "dark"
          ? "rgba(0, 255, 0, 0.7)" // More transparent green for dark mode
          : "rgba(0, 128, 0, 0.7)" // More transparent darker green for light mode
      ctx.font = `${fontSize}px monospace`

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        // Get random character
        const text = chars.charAt(Math.floor(Math.random() * chars.length))

        // Draw the character
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        // Reset drop position if it's at the bottom or randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        // Move drop down
        drops[i]++
      }
    }

    // Animation loop
    const interval = setInterval(draw, 50)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [resolvedTheme])

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full"
      style={{ opacity: 0.6 }} // Reduced opacity for better text visibility
    />
  )
}

