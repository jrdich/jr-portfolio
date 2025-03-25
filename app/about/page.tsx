import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import MatrixRain from "@/components/matrix-rain"

export default function AboutPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 z-[-1]">
        <MatrixRain />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-20">
        <Button asChild variant="ghost" className="mb-8 self-start">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl bg-background/70 backdrop-blur-sm p-2 rounded-lg inline-block text-center">
              About Me
            </h1>
            <div className="space-y-4 text-lg bg-background/70 backdrop-blur-sm p-4 rounded-lg">
              <p>
                I'm a passionate Frontend Developer with a deep love for creating beautiful, functional, and
                user-friendly web experiences. My journey in web development began during my college years and has
                evolved into a professional career focused on building modern web applications.
              </p>
              <p>
                With expertise in React, Next.js, and various AWS services, I specialize in developing responsive,
                performant websites that deliver exceptional user experiences. I'm constantly exploring new technologies
                and techniques to stay at the cutting edge of frontend development.
              </p>
              <p>
                When I'm not coding, I enjoy contributing to open-source projects, mentoring new developers, and
                exploring creative ways to push the boundaries of what's possible on the web.
              </p>
            </div>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/skills">View My Skills</Link>
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-primary/50 shadow-lg shadow-primary/20 md:h-96 md:w-96">
              <Image
                src="/about-us-img1.jpeg?height=384&width=384"
                alt="Developer Portrait"
                width={384}
                height={384}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

