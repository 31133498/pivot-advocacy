import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Megaphone, Users, HandHeart, BarChart3, Gamepad2 } from "lucide-react"

const programAreas = [
  {
    icon: Gamepad2,
    title: "Experiential Learning & Psycho-Education",
    description: "Core intervention through Pivot Board Game sessions for individuals and groups, with facilitated reflection and scenario debriefs.",
    items: [
      "Pivot Board Game sessions",
      "Facilitated reflection",
      "Simulation of risk & recovery",
      "Guided discussions",
    ],
  },
  {
    icon: Megaphone,
    title: "Advocacy & Awareness Campaigns",
    description: "Multi-channel engagement to raise awareness and foster community dialogue around substance abuse prevention.",
    items: [
      "Social media engagement",
      "Dialogue sessions & seminars",
      "Conferences & roundtables",
      "Public awareness campaigns",
    ],
  },
  {
    icon: BookOpen,
    title: "Capacity Building & Training",
    description: "Equipping stakeholders with the skills and materials needed to deliver effective prevention education.",
    items: [
      "Facilitator training",
      "Educator workshops",
      "Counselor certification",
      "Materials & lesson plans",
    ],
  },
  {
    icon: HandHeart,
    title: "Community Engagement & Partnerships",
    description: "Building collaborative networks across institutions and communities for sustained impact.",
    items: [
      "School partnerships",
      "NGO collaborations",
      "Rehabilitation center programs",
      "Family & peer engagement",
    ],
  },
  {
    icon: BarChart3,
    title: "Monitoring, Evaluation & Impact Learning",
    description: "Continuous improvement through feedback, assessment, and evidence-based iteration.",
    items: [
      "Participant feedback",
      "Learning outcome assessment",
      "Behavioral change tracking",
      "Iterative improvement",
    ],
  },
]

const outcomes = {
  shortTerm: [
    "Increased awareness and understanding of substance misuse",
    "Improved emotional intelligence and resilience",
    "Reduced stigma toward individuals struggling with substance use",
    "Increased willingness to seek help",
    "Strengthened knowledge among parents and educators",
  ],
  mediumTerm: [
    "Reduction in early-stage substance experimentation",
    "Improved coping strategies and decision-making skills",
    "Increased referrals to professional support",
    "Strengthened institutional partnerships",
    "Establishment of community prevention ambassadors",
  ],
  longTerm: [
    "Reduction in substance misuse prevalence",
    "Increased resilience culture within schools",
    "Institutional adoption of psycho-educational models",
    "Policy influence through advocacy",
    "Sustainable national prevention model",
  ],
}

export default function ProgramsPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 gradient-hero" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
                Our Work
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Programs & Initiatives
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Pivot Advocacy leverages the game as the core intervention while combining multiple complementary strategies to maximize social impact across communities.
              </p>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Advocacy Approach</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We combine experiential learning, community engagement, facilitated reflection, and integrated advocacy channels to deliver comprehensive prevention education.
              </p>
            </div>

            {/* Program Areas */}
            <div className="space-y-6 max-w-5xl mx-auto">
              {programAreas.map((program, index) => (
                <div key={program.title} className="p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="grid md:grid-cols-[auto,1fr] gap-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <program.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="md:hidden">
                        <h3 className="text-xl font-semibold text-foreground">{program.title}</h3>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3 hidden md:block">{program.title}</h3>
                      <p className="text-muted-foreground mb-4">{program.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {program.items.map((item) => (
                          <span key={item} className="px-3 py-1 rounded-full bg-muted text-sm text-foreground">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Target Beneficiaries */}
        <section className="py-24 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Who We Serve</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our programs are designed to reach those who need them most
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/30">
                <h3 className="text-xl font-semibold text-foreground mb-4">Primary Beneficiaries</h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-background/50">
                    <h4 className="font-medium text-foreground mb-2">Adolescents & Young Adults (12-30 years)</h4>
                    <p className="text-sm text-muted-foreground">Students, youth in community programs, and vulnerable young populations</p>
                  </div>
                  <div className="p-4 rounded-xl bg-background/50">
                    <h4 className="font-medium text-foreground mb-2">Individuals in Recovery</h4>
                    <p className="text-sm text-muted-foreground">People undergoing rehabilitation or early recovery</p>
                  </div>
                </div>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/30">
                <h3 className="text-xl font-semibold text-foreground mb-4">Secondary Beneficiaries</h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-background/50">
                    <h4 className="font-medium text-foreground mb-2">Families & Caregivers</h4>
                    <p className="text-sm text-muted-foreground">Supporting loved ones with tools and understanding</p>
                  </div>
                  <div className="p-4 rounded-xl bg-background/50">
                    <h4 className="font-medium text-foreground mb-2">Educators & Counselors</h4>
                    <p className="text-sm text-muted-foreground">Teachers, social workers, and community leaders</p>
                  </div>
                  <div className="p-4 rounded-xl bg-background/50">
                    <h4 className="font-medium text-foreground mb-2">Institutions & Organizations</h4>
                    <p className="text-sm text-muted-foreground">NGOs, rehabilitation centers, and government initiatives</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expected Outcomes */}
        <section id="training" className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Expected Outcomes</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Measurable impact across short, medium, and long-term horizons
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="p-6 rounded-2xl bg-accent/5 border border-accent/30">
                <h3 className="text-lg font-semibold text-accent mb-4">Short-Term (0-12 Months)</h3>
                <ul className="space-y-3">
                  {outcomes.shortTerm.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-primary/5 border border-primary/30">
                <h3 className="text-lg font-semibold text-primary mb-4">Medium-Term (1-3 Years)</h3>
                <ul className="space-y-3">
                  {outcomes.mediumTerm.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-secondary/5 border border-secondary/30">
                <h3 className="text-lg font-semibold text-secondary mb-4">Long-Term (3-5+ Years)</h3>
                <ul className="space-y-3">
                  {outcomes.longTerm.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-br from-primary/20 via-background to-secondary/20">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Want to Bring Our Programs to Your Community?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Partner with us to deliver impactful prevention education in your school, organization, or community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border/50">
                <Link href="/partners">Partner Options</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
