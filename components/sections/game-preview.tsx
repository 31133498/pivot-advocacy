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

        {/* Game Visual */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative rounded-3xl bg-gradient-to-br from-card via-muted/50 to-card border border-border/50 overflow-hidden p-8 md:p-12">
            {/* Game board illustration */}
            <div className="relative aspect-[16/9] rounded-2xl bg-gradient-to-br from-[#1a0a2e] to-[#2a1548] border border-primary/30 overflow-hidden">
              {/* Stylized game path */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 450" fill="none" preserveAspectRatio="xMidYMid slice">
                {/* Zone 1 - Red path */}
                <path
                  d="M100 350 Q200 350 250 280 Q300 200 350 200"
                  stroke="#f80407"
                  strokeWidth="8"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.6"
                />
                {/* Zone 2 - Purple loop */}
                <path
                  d="M350 200 Q400 150 450 200 Q500 250 450 300 Q400 350 450 200"
                  stroke="#8a23ac"
                  strokeWidth="8"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.6"
                />
                {/* Zone 3 - Green ascent */}
                <path
                  d="M450 200 Q500 150 550 120 Q600 90 700 50"
                  stroke="#177543"
                  strokeWidth="8"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.6"
                />
                
                {/* Nodes/stops */}
                <circle cx="100" cy="350" r="15" fill="#f80407" />
                <circle cx="250" cy="280" r="12" fill="#f80407" opacity="0.7" />
                <circle cx="350" cy="200" r="15" fill="#8a23ac" />
                <circle cx="450" cy="200" r="15" fill="#8a23ac" />
                <circle cx="550" cy="120" r="12" fill="#177543" opacity="0.7" />
                <circle cx="700" cy="50" r="18" fill="#177543" />
                
                {/* Labels */}
                <text x="100" y="390" fill="white" fontSize="14" textAnchor="middle" fontWeight="500">START</text>
                <text x="700" y="90" fill="white" fontSize="14" textAnchor="middle" fontWeight="500">RESILIENCE</text>
              </svg>
              
              {/* Flow diagram overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 text-xs md:text-sm text-white/80">
                <span className="px-2 py-1 rounded bg-accent/30">Temptation</span>
                <ArrowRight className="w-4 h-4" />
                <span className="px-2 py-1 rounded bg-primary/30">Decision</span>
                <ArrowRight className="w-4 h-4" />
                <span className="px-2 py-1 rounded bg-primary/30">Consequence</span>
                <ArrowRight className="w-4 h-4" />
                <span className="px-2 py-1 rounded bg-secondary/30">Support</span>
                <ArrowRight className="w-4 h-4" />
                <span className="px-2 py-1 rounded bg-secondary/30">Recovery</span>
                <ArrowRight className="w-4 h-4" />
                <span className="px-2 py-1 rounded bg-secondary/50 font-semibold">Resilience</span>
              </div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-4 -right-4 w-24 h-32 rounded-lg bg-gradient-to-br from-accent to-accent/70 shadow-xl transform rotate-12 flex items-center justify-center">
              <span className="text-white text-xs font-bold text-center px-2">Temptation Card</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-32 rounded-lg bg-gradient-to-br from-secondary to-secondary/70 shadow-xl transform -rotate-12 flex items-center justify-center">
              <span className="text-white text-xs font-bold text-center px-2">Resilience Boost</span>
            </div>
          </div>
        </div>

        {/* Three Zones */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {zones.map((zone) => (
            <div
              key={zone.title}
              className={`relative p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                zone.color === 'accent' ? 'bg-accent/5 border-accent/30 hover:border-accent/50' :
                zone.color === 'primary' ? 'bg-primary/5 border-primary/30 hover:border-primary/50' :
                'bg-secondary/5 border-secondary/30 hover:border-secondary/50'
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  zone.color === 'accent' ? 'bg-accent/20' :
                  zone.color === 'primary' ? 'bg-primary/20' :
                  'bg-secondary/20'
                }`}>
                  <zone.icon className={`w-5 h-5 ${
                    zone.color === 'accent' ? 'text-accent' :
                    zone.color === 'primary' ? 'text-primary' :
                    'text-secondary'
                  }`} />
                </div>
                <span className={`text-sm font-bold ${
                  zone.color === 'accent' ? 'text-accent' :
                  zone.color === 'primary' ? 'text-primary' :
                  'text-secondary'
                }`}>Zone {zone.number}</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">{zone.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{zone.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{zone.description}</p>
            </div>
          ))}
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
