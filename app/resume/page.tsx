import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download } from "lucide-react"
import ResumeSection from "@/components/resume-section"
import ResumeDetails from "@/components/resume-details"
import MatrixRain from "@/components/matrix-rain"

export default function ResumePage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-background to-background/50">
      {/* Matrix Rain Background */}
        <div className="absolute inset-0 z-[-1]">
          <MatrixRain />
        </div>
      <div className="mx-auto max-w-4xl px-4 py-20">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Button asChild variant="ghost">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <Button variant="outline" className="flex items-center gap-2" asChild>
            <a href="/my-resume4.pdf" download="John_Raphael_Chavaria_Resume.pdf">
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </div>

        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Professional Resume</h1>
          <p className="text-lg text-muted-foreground">Frontend Developer with expertise in modern web technologies</p>
        </div>

        <div className="space-y-12">
          <ResumeSection title="Working Experience">
            <div className="space-y-8">
              <div className="group relative rounded-lg border p-6 transition-all duration-300 hover:shadow-md">
                <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold">Associate Frontend Developer</h3>
                    <p className="text-muted-foreground">Strastan Solutions Corp</p>
                  </div>
                  <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    2024 - Present
                  </div>
                </div>

                <div className="space-y-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p>
                    • Develop and enhance frontend web applications, ensuring responsive and user-friendly interfaces.
                  </p>
                  <p>
                    • Collaborate with designers and backend developers to optimize performance and user experience.
                  </p>
                  <p>• Mentor new developers and uphold coding standards.</p>
                  <p>• Work with leadership to resolve design and functionality issues.</p>
                </div>
              </div>

              <div className="group relative rounded-lg border p-6 transition-all duration-300 hover:shadow-md">
                <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold">Frontend Developer Intern</h3>
                    <p className="text-muted-foreground">Strastan Solutions Corp</p>
                  </div>
                  <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    2023 - 2024
                  </div>
                </div>

                <div className="space-y-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p>
                    • Assisted in developing and optimizing web applications, ensuring responsive and user-friendly
                    designs.
                  </p>
                  <p>• Collaborated with senior developers to implement UI components and improve performance.</p>
                  <p>• Gained hands-on experience in modern frontend technologies and best practices.</p>
                </div>
              </div>
            </div>
          </ResumeSection>

          <ResumeSection title="Education">
            <div className="rounded-lg border p-6 transition-all duration-300 hover:shadow-md">
              <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold">Bachelor of Science in Information Technology</h3>
                  <p className="text-muted-foreground">The Lewis College</p>
                </div>
                <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">2019 - 2023</div>
              </div>

              <div className="space-y-2">
                <p>• Strong foundation in software development, networking, and system administration.</p>
                <p>• Expertise in programming, troubleshooting, debugging, and resolving technical errors.</p>
                <p>• Experience with modern web technologies, AWS cloud services, and security best practices.</p>
              </div>
            </div>
          </ResumeSection>

          <ResumeDetails />
        </div>
      </div>
    </main>
  )
}

