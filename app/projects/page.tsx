import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import ProjectCard from "@/components/project-card"
import MatrixRain from "@/components/matrix-rain"

const projects = [
  {
    id: "ecommerce",
    title: "Ecommerce Platform",
    description:
      "A fully functional online store with organic product catalog, shopping cart, user authentication, and payment processing.",
    image: "/omph-img.jpg",
    tags: ["Next.js", "Tailwind CSS", "Firestore", "Firebase", "Node.js"],
    link: "#",
  },
  {
    id: "marketplace",
    title: "Marketplace Platform",
    description:
      "A dynamic marketplace connecting buyers and sellers with real-time messaging, listings management, and secure transactions.",
    image: "/marketplace-img.jpg",
    tags: ["Next.js", "Tailwind CSS", "Node.js", "AWS Services" ],
    link: "#",
  },
  {
    id: "cms",
    title: "Content Management System",
    description:
      "A robust CMS with full customization options, content scheduling, user roles, and analytics dashboard.",
    image: "/cms-img.jpg",
    tags: ["Next.js", "Node.js", "AWS Services", "Tailwind CSS"],
    link: "#",
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-background to-background/50">
      {/* Matrix Rain Background */}
        <div className="absolute inset-0 z-[-1]">
          <MatrixRain />
        </div>
      <div className="mx-auto max-w-6xl px-4 py-20">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Latest Projects</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Explore my latest work showcasing expertise in frontend development, responsive design, and modern web
            technologies.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  )
}

