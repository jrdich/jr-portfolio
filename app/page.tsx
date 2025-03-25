// import Link from "next/link"
// import Image from "next/image"
// import { ArrowRight } from "lucide-react"
// import HeroScene from "@/components/hero-scene"
// import { Button } from "@/components/ui/button"

// export default function HomePage() {
//   return (
//     <main className="relative min-h-screen w-full overflow-hidden">
//       {/* 3D Hero Background */}
//       <div className="absolute inset-0 z-0">
//         <HeroScene />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
//         <div className="mb-8 h-64 w-64 overflow-hidden rounded-full border-4 border-primary/50 shadow-lg shadow-primary/20">
//           <Image
//             src="/my-profile-img11.jpeg?height=256&width=256"
//             alt="Developer Portrait"
//             width={256}
//             height={256}
//             className="h-full w-full object-cover"
//             priority
//           />
//         </div>

//         {/* Title */}
//         <h1 className="mb-4 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-5xl font-bold text-transparent sm:text-6xl md:text-7xl">
//           Frontend Developer
//         </h1>

//         <p className="mb-8 max-w-2xl text-lg text-muted-foreground bg-background/70 backdrop-blur-sm p-4 rounded-lg">
//           Building immersive digital experiences with cutting-edge web technologies and a passion for creating
//           beautiful, functional interfaces.
//         </p>

//         <div className="flex flex-wrap justify-center gap-4">
//           <Button asChild size="lg" className="group">
//             <Link href="/about">
//               Discover More
//               <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//             </Link>
//           </Button>
//           <Button asChild variant="outline" size="lg">
//             <Link href="/contact">Get In Touch</Link>
//           </Button>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
//         <div className="flex flex-col items-center">
//           <span className="mb-2 text-sm text-muted-foreground">Scroll Down</span>
//           <div className="h-10 w-6 rounded-full border-2 border-primary/50">
//             <div className="mt-2 h-2 w-2 animate-pulse rounded-full bg-primary mx-auto"></div>
//           </div>
//         </div>
//       </div>
//     </main>
//   )
// }

//(2)
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import HeroScene from "@/components/hero-scene";
import { Button } from "@/components/ui/button";
import { Typewriter } from "react-simple-typewriter";

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* 3D Hero Background */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <div className="mb-8 h-64 w-64 overflow-hidden rounded-full border-4 border-primary/50 shadow-lg shadow-primary/20">
          <Image
            src="/my-profile-img11.jpeg?height=256&width=256"
            alt="Developer Portrait"
            width={256}
            height={256}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        {/* Title with Typewriter Effect */}
        <h1 className="mb-4 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-5xl font-bold text-transparent sm:text-6xl md:text-7xl">
          <Typewriter
            words={["Frontend Developer", "Web Developer", "UI/UX Designer"]}
            loop={0} // Infinite loop
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>

        <p className="mb-8 max-w-2xl text-lg text-muted-foreground bg-background/70 backdrop-blur-sm p-4 rounded-lg">
          Building immersive digital experiences with cutting-edge web technologies and a passion for creating
          beautiful, functional interfaces.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="group">
            <Link href="/about">
              Discover More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="mb-2 text-sm text-muted-foreground">Scroll Down</span>
          <div className="h-10 w-6 rounded-full border-2 border-primary/50">
            <div className="mt-2 h-2 w-2 animate-pulse rounded-full bg-primary mx-auto"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
