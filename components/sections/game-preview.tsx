import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles, Target, RotateCcw, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const zones = [
  {
    number: "01",
    title: "The Threshold",
    subtitle: "Temptation & Risk",
    description: "Navigate early exposure, peer pressure, and social challenges. The moment of vulnerability and initial decision-making.",
    color: "accent",
    icon: Target,
  },
  {
    number: "02",
    title: "The Loop",
    subtitle: "Struggle & Consequences",
    description: "Experience the repetitive cycles of risky behavior, the impact of poor decisions, and the difficulty of breaking destructive patterns.",
    color: "primary",
    icon: RotateCcw,
  },
  {
    number: "03",
    title: "The Ascent",
    subtitle: "Recovery & Resilience",
    description: "Focus on skill-building, support systems, and recovery milestones, culminating in an empowered, resilient state.",
    color: "secondary",
    icon: TrendingUp,
  },
]

export function GamePreviewSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/50" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Flagship Innovation
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Pivot: The Resilience Game™
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            An immersive, therapeutic, and highly interactive board game designed to model the emotional, psychological, behavioral, and social dynamics of substance misuse, addiction, intervention, and recovery.
          </p>
        </div>

        {/* Two-column: description left, box cover right */}
        <div className="max-w-5xl mx-auto mb-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              An immersive, therapeutic, and highly interactive board game designed to model the emotional, psychological, behavioral, and social dynamics of substance misuse, addiction, intervention, and recovery.
            </p>
            {/* Three Zones */}
            <div className="space-y-4">
              {zones.map((zone) => (
                <div
                  key={zone.title}
                  className={`relative p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                    zone.color === 'accent' ? 'bg-accent/5 border-accent/30 hover:border-accent/50' :
                    zone.color === 'primary' ? 'bg-primary/5 border-primary/30 hover:border-primary/50' :
                    'bg-secondary/5 border-secondary/30 hover:border-secondary/50'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      zone.color === 'accent' ? 'bg-accent/20' :
                      zone.color === 'primary' ? 'bg-primary/20' :
                      'bg-secondary/20'
                    }`}>
                      <zone.icon className={`w-4 h-4 ${
                        zone.color === 'accent' ? 'text-accent' :
                        zone.color === 'primary' ? 'text-primary' :
                        'text-secondary'
                      }`} />
                    </div>
                    <span className={`text-sm font-bold ${
                      zone.color === 'accent' ? 'text-accent' :
                      zone.color === 'primary' ? 'text-primary' :
                      'text-secondary'
                    }`}>{zone.title} — {zone.subtitle}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-11">{zone.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Box cover — tilted card with glow */}
          <div className="flex items-center justify-center">
            <div
              className="relative w-full max-w-sm rounded-2xl overflow-hidden group"
              style={{ transform: 'rotate(-2deg)', boxShadow: '0 0 60px rgba(138,35,172,0.4)' }}
            >
              <div className="relative aspect-square">
                <Image
                  src="/Pivot package font page 1.png"
                  alt="Pivot: The Resilience Game — Box Cover"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Full board reveal */}
        <div className="max-w-6xl mx-auto mb-12 rounded-2xl overflow-hidden group relative">
          <Image
            src="/Second (Print).png"
            alt="The complete Pivot: The Resilience Game™ board"
            width={1400}
            height={800}
            className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e]/70 to-transparent flex items-end">
            <p className="text-white/80 text-sm text-center w-full pb-4 tracking-widest uppercase">The complete Pivot: The Resilience Game™ board</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 group">
            <Link href="/game">
              Explore The Game
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
