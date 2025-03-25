import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import SkillWheel from "@/components/skill-wheel"
import SkillBar from "@/components/skill-bar"
import MatrixRain from "@/components/matrix-rain"

const frontendSkills = [
  { name: "HTML", level: 95, category: "Frontend" },
  { name: "CSS/Tailwind CSS", level: 95, category: "Frontend" },
  { name: "React JS", level: 85, category: "Frontend" },
  { name: "Next JS", level: 85, category: "Frontend" },
]

const backendSkills = [
  { name: "Node JS", level: 70, category: "Backend" },
  { name: "PHP", level: 65, category: "Backend" },
]

const awsSkills = [
  { name: "AWS CDK", level: 80, category: "AWS" },
  { name: "AWS Lambda", level: 85, category: "AWS" },
  { name: "AWS DynamoDB", level: 80, category: "AWS" },
  { name: "AWS API Gateway", level: 85, category: "AWS" },
  { name: "AWS Cognito", level: 80, category: "AWS" },
  { name: "AWS Amplify", level: 85, category: "AWS" },
]

const otherSkills = [
  { name: "GCP", level: 75, category: "Cloud" },
  { name: "Firestore DB", level: 70, category: "Database" },
  { name: "MongoDB", level: 65, category: "Database" },
  { name: "MySQL", level: 65, category: "Database" },
  { name: "Git/GitHub", level: 85, category: "Tools" },
  { name: "UI/UX", level: 80, category: "Design" },
]

export default function SkillsPage() {
  return (
    <main className="relative min-h-screen w-full bg-gradient-to-b from-background to-background/50">
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

        <h1 className="mb-12 text-center text-4xl font-bold md:text-5xl">Technical Skills</h1>

        <div className="mb-16 grid gap-8 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <SkillWheel skills={[...frontendSkills, ...backendSkills, ...awsSkills, ...otherSkills]} />
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-8 text-lg text-muted-foreground">
              With expertise across frontend technologies, cloud services, and databases, I bring a comprehensive skill
              set to every project. My focus on modern frameworks like React and Next.js, combined with extensive AWS
              experience, enables me to build scalable, performant web applications.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <Link href="/resume">View Resume</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/projects">See Projects</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="mb-6 text-2xl font-semibold">Frontend Development</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {frontendSkills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-semibold">Backend Development</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {backendSkills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-semibold">AWS Cloud Services</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {awsSkills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-semibold">Other Technologies</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {otherSkills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

