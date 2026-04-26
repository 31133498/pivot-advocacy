import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, RotateCcw, TrendingUp, Users, Brain, Heart, Lightbulb, Check } from "lucide-react"

const zones = [
  {
    number: "01",
    title: "The Threshold",
    subtitle: "Temptation & Risk",
    description: "Players navigate early exposure, peer pressure, and social challenges. This zone represents the beginning of the journey — the moment of vulnerability and initial decision-making.",
    icon: Target,
    color: "accent",
  },
  {
    number: "02",
    title: "The Loop",
    subtitle: "Struggle & Consequences",
    description: "Represents the repetitive cycles of risky behavior and the impact of poor decisions, highlighting the role of relapse, consequences, and the difficulty of breaking destructive patterns.",
    icon: RotateCcw,
    color: "primary",
  },
  {
    number: "03",
    title: "The Ascent",
    subtitle: "Recovery & Resilience",
    description: "Players focus on skill-building, support systems, and recovery milestones, culminating in the achievement of a resilient, empowered state.",
    icon: TrendingUp,
    color: "secondary",
  },
]

const outcomes = [
  { icon: Brain, title: "Enhanced Empathy", description: "Deep understanding of addiction dynamics and the journey of recovery" },
  { icon: Lightbulb, title: "Decision-Making Skills", description: "Strengthened ability to make informed choices under pressure" },
  { icon: Heart, title: "Personal Resilience", description: "Practical coping strategies and emotional intelligence" },
  { icon: Users, title: "Support Integration", description: "Understanding the importance of community and mentoring networks" },
]

const audiences = [
  "Schools and educational institutions",
  "Rehabilitation and recovery centers",
  "Youth-focused community programs",
  "NGOs and social impact organizations",
  "Families and support groups",
  "Counselors and social workers",
]

export default function GamePage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 gradient-hero" />
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
                Flagship Innovation
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Pivot: The Resilience Game™
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                An immersive, therapeutic, and highly interactive board game designed to model the emotional, psychological, behavioral, and social dynamics of substance misuse, addiction progression, intervention, and recovery.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/contact">
                  Request a Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* What It Is */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">More Than a Game</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Pivot is a transformative psycho-educational tool that bridges the gap between knowledge and real-life behavioral change. Unlike traditional awareness campaigns that rely on lectures or pamphlets, Pivot leverages immersive, interactive learning.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Through structured gameplay, participants experience first-hand the challenges, decisions, consequences, and support systems that shape real-life outcomes. It creates space for reflection, discussion, and experiential learning in a safe, controlled environment.
                </p>
                <div className="space-y-3">
                  {["Therapeutic experiential learning", "Safe environment for reflection", "Evidence-informed design", "Facilitator-guided sessions"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-secondary" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-card to-secondary/20 border border-border/50 p-8 flex items-center justify-center">
                  {/* Game board visualization */}
                  <svg viewBox="0 0 300 300" className="w-full h-full max-w-sm">
                    <circle cx="150" cy="150" r="120" fill="none" stroke="currentColor" strokeWidth="2" className="text-border" />
                    <circle cx="150" cy="150" r="80" fill="none" stroke="currentColor" strokeWidth="2" className="text-border" />
                    <circle cx="150" cy="150" r="40" fill="none" stroke="currentColor" strokeWidth="2" className="text-border" />
                    <path d="M150 30 Q220 80 220 150" stroke="#f80407" strokeWidth="4" fill="none" strokeLinecap="round" />
                    <path d="M220 150 Q220 220 150 220 Q80 220 100 150" stroke="#8a23ac" strokeWidth="4" fill="none" strokeLinecap="round" />
                    <path d="M100 150 Q100 100 150 70" stroke="#177543" strokeWidth="4" fill="none" strokeLinecap="round" />
                    <circle cx="150" cy="30" r="8" fill="#f80407" />
                    <circle cx="220" cy="150" r="8" fill="#8a23ac" />
                    <circle cx="150" cy="220" r="8" fill="#8a23ac" />
                    <circle cx="100" cy="150" r="8" fill="#177543" />
                    <circle cx="150" cy="150" r="20" fill="#177543" />
                    <text x="150" y="155" fill="white" fontSize="12" textAnchor="middle" fontWeight="bold">WIN</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Three Zones */}
        <section className="py-24 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">The Three Zones</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Players journey through three distinct zones, each representing a critical phase of the substance misuse and recovery experience.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {zones.map((zone) => (
                <div key={zone.title} className={`p-8 rounded-2xl border transition-all duration-300 ${
                  zone.color === 'accent' ? 'bg-accent/5 border-accent/30' :
                  zone.color === 'primary' ? 'bg-primary/5 border-primary/30' :
                  'bg-secondary/5 border-secondary/30'
                }`}>
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    zone.color === 'accent' ? 'bg-accent/20' :
                    zone.color === 'primary' ? 'bg-primary/20' :
                    'bg-secondary/20'
                  }`}>
                    <zone.icon className={`w-8 h-8 ${
                      zone.color === 'accent' ? 'text-accent' :
                      zone.color === 'primary' ? 'text-primary' :
                      'text-secondary'
                    }`} />
                  </div>
                  <span className={`text-sm font-bold mb-2 block ${
                    zone.color === 'accent' ? 'text-accent' :
                    zone.color === 'primary' ? 'text-primary' :
                    'text-secondary'
                  }`}>Zone {zone.number}</span>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{zone.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{zone.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed">{zone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Player Roles */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/30">
                <h3 className="text-xl font-semibold text-foreground mb-4">The Addict Player</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Experiences the journey of substance misuse, navigating risks and challenges while building resilience. Makes decisions that determine their path through temptation, consequence, and recovery.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/30">
                <h3 className="text-xl font-semibold text-foreground mb-4">The Support Player</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Represents family, peers, mentors, or community support. Guides the Addict player through interventions and encouragement, highlighting the crucial role of support systems in recovery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Outcomes */}
        <section className="py-24 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Psychological & Educational Outcomes</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                What participants gain from the Pivot experience
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {outcomes.map((outcome) => (
                <div key={outcome.title} className="p-6 rounded-2xl bg-background border border-border/50 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                    <outcome.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{outcome.title}</h3>
                  <p className="text-sm text-muted-foreground">{outcome.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Can Use It */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Who Can Use Pivot?</h2>
                <p className="text-lg text-muted-foreground">
                  Designed for diverse contexts and audiences
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {audiences.map((audience) => (
                  <div key={audience} className="flex items-center gap-3 p-4 rounded-xl bg-card/50 border border-border/50">
                    <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-secondary" />
                    </div>
                    <span className="text-foreground">{audience}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-br from-primary/20 via-background to-secondary/20">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Experience Pivot?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us to schedule a demonstration, request game sessions for your organization, or learn about facilitator training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/contact">
                  Request a Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border/50">
                <Link href="/partners">Partner With Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
