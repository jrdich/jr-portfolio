import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react"
import GoogleMap from "@/components/google-map"
import MatrixRain from "@/components/matrix-rain"

export default function ContactPage() {
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
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Contact Me</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Feel free to reach out for collaboration opportunities or to discuss your project needs.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-8 rounded-lg border p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Location</h3>
                <p className="text-muted-foreground">Bangate, Barcelona, Sorsogon</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Email</h3>
                <p className="text-muted-foreground">humsschavaria13ict@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Phone</h3>
                <p className="text-muted-foreground">09930522381</p>
              </div>
            </div>
          </div>

          <div className="h-[400px] overflow-hidden rounded-lg border shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1742912030919!6m8!1m7!1srLKS0z6riszV9f0u3iV9ZA!2m2!1d12.81192708860995!2d124.1440917616608!3f9.177723760396255!4f-20.36479377377701!5f0.7820865974627469"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

