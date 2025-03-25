import type { ReactNode } from "react"

interface ResumeSectionProps {
  title: string
  children: ReactNode
}

export default function ResumeSection({ title, children }: ResumeSectionProps) {
  return (
    <section>
      <h2 className="mb-6 inline-block border-b-2 border-primary pb-2 text-2xl font-semibold">{title}</h2>
      <div>{children}</div>
    </section>
  )
}

