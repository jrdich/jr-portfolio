"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface GoogleMapProps {
  location: string
}

export default function GoogleMap({ location }: GoogleMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  useEffect(() => {
    // For demonstration purposes, we'll show a placeholder map
    // In a real implementation, you would use the Google Maps API
    if (mapRef.current) {
      // Clear any existing content
      while (mapRef.current.firstChild) {
        mapRef.current.removeChild(mapRef.current.firstChild)
      }

      const canvas = document.createElement("canvas")
      canvas.width = mapRef.current.clientWidth
      canvas.height = mapRef.current.clientHeight
      mapRef.current.appendChild(canvas)

      const ctx = canvas.getContext("2d")
      if (ctx) {
        // Draw a simple map placeholder
        ctx.fillStyle = isDark ? "#1e293b" : "#f1f5f9"
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Draw grid lines
        ctx.strokeStyle = isDark ? "#334155" : "#cbd5e1"
        ctx.lineWidth = 1

        // Horizontal lines
        for (let i = 0; i < canvas.height; i += 20) {
          ctx.beginPath()
          ctx.moveTo(0, i)
          ctx.lineTo(canvas.width, i)
          ctx.stroke()
        }

        // Vertical lines
        for (let i = 0; i < canvas.width; i += 20) {
          ctx.beginPath()
          ctx.moveTo(i, 0)
          ctx.lineTo(i, canvas.height)
          ctx.stroke()
        }

        // Draw roads
        ctx.strokeStyle = isDark ? "#94a3b8" : "#64748b"
        ctx.lineWidth = 3

        // Main road
        ctx.beginPath()
        ctx.moveTo(canvas.width * 0.2, canvas.height * 0.5)
        ctx.lineTo(canvas.width * 0.8, canvas.height * 0.5)
        ctx.stroke()

        // Secondary roads
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(canvas.width * 0.5, canvas.height * 0.2)
        ctx.lineTo(canvas.width * 0.5, canvas.height * 0.8)
        ctx.stroke()

        // Draw location marker
        const centerX = canvas.width / 2
        const centerY = canvas.height / 2

        // Pin shadow
        ctx.beginPath()
        ctx.arc(centerX, centerY + 2, 8, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(0, 0, 0, 0.3)"
        ctx.fill()

        // Pin body
        ctx.beginPath()
        ctx.arc(centerX, centerY, 10, 0, Math.PI * 2)
        ctx.fillStyle = "#ef4444"
        ctx.fill()
        ctx.strokeStyle = "#ffffff"
        ctx.lineWidth = 2
        ctx.stroke()

        // Location text
        ctx.font = "14px Arial"
        ctx.fillStyle = isDark ? "#e2e8f0" : "#334155"
        ctx.textAlign = "center"
        ctx.fillText(location, centerX, centerY + 30)

        // Add some buildings
        const buildingColor = isDark ? "#475569" : "#94a3b8"

        for (let i = 0; i < 10; i++) {
          const x = Math.random() * canvas.width
          const y = Math.random() * canvas.height
          const width = 15 + Math.random() * 30
          const height = 15 + Math.random() * 30

          ctx.fillStyle = buildingColor
          ctx.fillRect(x, y, width, height)
        }

        // Map attribution
        ctx.font = "10px Arial"
        ctx.fillStyle = isDark ? "#94a3b8" : "#64748b"
        ctx.textAlign = "right"
        ctx.fillText("Map of " + location, canvas.width - 10, canvas.height - 10)
      }
    }
  }, [location, isDark])

  return (
    <div ref={mapRef} className="h-full w-full">
      <div className="flex h-full w-full items-center justify-center">
        <p className="text-muted-foreground">Loading map of {location}...</p>
      </div>
    </div>
  )
}

