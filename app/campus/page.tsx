import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Gamepad2, Lightbulb, Users, Palette, Calendar, Check } from "lucide-react"

const programComponents = [
  {
    icon: MessageCircle,
    title: "Awareness Sessions",
    description: "Interactive discussions on substance misuse, triggers, and prevention strategies that engage students in meaningful dialogue.",
    duration: "45-60 min",
  },
  {
    icon: Gamepad2,
    title: "Live Gameplay",
    description: "Facilitated Pivot: The Resilience Game™ sessions where students experience decision-making scenarios first-hand.",
    duration: "90-120 min",
  },
  {
    icon: Lightbulb,
    title: "Mental Wellbeing Discussions",
    description: "Open conversations about stress management, coping mechanisms, and maintaining emotional health.",
    duration: "45-60 min",
  },
  {
    icon: Users,
    title: "Reflection Circles",
    description: "Guided group reflections connecting gameplay insights to real-life applications and personal experiences.",
    duration: "30-45 min",
  },
  {
    icon: Palette,
    title: "Creative Engagement",
    description: "Art, writing, and expressive activities that reinforce learning outcomes and encourage self-expression.",
    duration: "45-60 min",
  },
]

const benefits = [
  "Evidence-informed prevention education",
  "Trained facilitators lead all sessions",
  "Age-appropriate content and activities",
  "Post-session materials for continued learning",
  "Impact assessment and reporting",
  "Follow-up support resources",
]

const hosts = [
  "Secondary schools and high schools",
  "Universities and polytechnics",
  "Vocational training centers",
  "Youth organizations and clubs",
  "Faith-based youth programs",
  "Community centers",
]

export default function CampusPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 gradient-hero" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
                Campus Program
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                The Pivot Campus Experience
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Bringing immersive psycho-educational advocacy directly to schools and youth-focused environments. A holistic experience combining gameplay, dialogue, reflection, and creative engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  <Link href="/contact">
                    Host a Campus Experience
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-border/50">
                  <Link href="#components">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Campuses Matter */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Why Campuses Matter</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Young people face particular risk from substance misuse. Schools and campuses are where they spend most of their formative years, navigating peer pressure, academic stress, and identity exploration.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The Pivot Campus Experience meets students where they are, creating a safe environment for learning, reflection, and building resilience skills that will serve them throughout their lives.
                </p>
                <div className="p-6 rounded-xl bg-secondary/10 border border-secondary/30">
                  <p className="text-foreground font-medium">
                    {"\"Prevention education is most effective when it reaches young people before high-risk exposure, in environments where they feel safe to learn and reflect.\""}
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-secondary/20 via-card to-primary/20 border border-border/50 flex items-center justify-center">
                  <div className="relative w-64 h-64">
                    {[0, 72, 144, 216, 288].map((angle, i) => (
                      <div
                        key={angle}
                        className="absolute w-14 h-14 rounded-full bg-gradient-to-br from-muted to-card border-2 border-secondary/30 flex items-center justify-center shadow-lg"
                        style={{
                          left: `calc(50% + ${Math.cos((angle * Math.PI) / 180) * 90}px - 28px)`,
                          top: `calc(50% + ${Math.sin((angle * Math.PI) / 180) * 90}px - 28px)`,
                        }}
                      >
                        <Users className="w-6 h-6 text-muted-foreground" />
                      </div>
                    ))}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center shadow-xl">
                      <Gamepad2 className="w-10 h-10 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Components */}
        <section id="components" className="py-24 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Program Components</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A comprehensive experience designed for maximum engagement and impact
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {programComponents.map((component, index) => (
                <div key={component.title} className="p-6 rounded-2xl bg-background border border-border/50 hover:border-secondary/30 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <component.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {component.duration}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{component.title}</h3>
                  <p className="text-muted-foreground text-sm">{component.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">What Your Institution Gets</h2>
                <div className="space-y-4">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-secondary/10 via-card to-primary/10 border border-border/50">
                <h3 className="text-xl font-semibold text-foreground mb-4">Who Can Host</h3>
                <div className="space-y-3">
                  {hosts.map((host) => (
                    <div key={host} className="flex items-center gap-3 p-3 rounded-lg bg-background/50">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                      <span className="text-muted-foreground">{host}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">50+</div>
                <div className="text-muted-foreground">Schools Reached</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">200+</div>
                <div className="text-muted-foreground">Sessions Held</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">10K+</div>
                <div className="text-muted-foreground">Students Engaged</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">95%</div>
                <div className="text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center rounded-3xl bg-gradient-to-br from-secondary via-secondary/90 to-secondary p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Bring Pivot to Your Campus
              </h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                Schedule a campus experience for your school or youth organization. Our team will work with you to customize the program for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white hover:bg-white/90 text-secondary font-semibold">
                  <Link href="/contact">
                    Request a Campus Visit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/30 bg-transparent hover:bg-white/10 text-white">
                  <Link href="/partners">Partner Options</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
