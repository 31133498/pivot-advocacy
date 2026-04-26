import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building, GraduationCap, Heart, Handshake, Target, Globe, Award, Users } from "lucide-react"

const partnerTypes = [
  {
    icon: Building,
    title: "Corporate Partners",
    description: "Align your CSR initiatives with meaningful social impact through prevention education. Support campus activations, sponsor game distributions, or fund research and advocacy programs.",
    benefits: ["Brand visibility", "CSR alignment", "Impact reporting", "Tax benefits"],
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    description: "Bring immersive prevention programs to your students and campus community. Partner for ongoing program delivery and capacity building for your staff.",
    benefits: ["Student engagement", "Prevention curriculum", "Staff training", "Annual reporting"],
  },
  {
    icon: Heart,
    title: "NGOs & Foundations",
    description: "Collaborate on scaling prevention interventions across communities. Joint programming, resource sharing, and collaborative advocacy initiatives.",
    benefits: ["Shared resources", "Joint programming", "Expanded reach", "Knowledge exchange"],
  },
  {
    icon: Handshake,
    title: "Government Agencies",
    description: "Partner on policy-aligned prevention and youth empowerment initiatives. Support evidence-based approaches to national substance abuse prevention.",
    benefits: ["Policy alignment", "National reach", "Evidence-based programs", "Impact data"],
  },
]

const sponsorshipTiers = [
  {
    name: "Champion",
    description: "Major sponsorship with naming rights and strategic partnership",
    features: [
      "Named partnership for flagship programs",
      "Logo on all program materials",
      "VIP access to all events",
      "Quarterly impact reports",
      "Executive briefings",
      "Media recognition",
    ],
  },
  {
    name: "Advocate",
    description: "Significant contribution supporting multiple programs",
    features: [
      "Program sponsorship recognition",
      "Logo on sponsored materials",
      "Access to major events",
      "Bi-annual impact reports",
      "Annual briefing",
    ],
  },
  {
    name: "Supporter",
    description: "Meaningful contribution to specific initiatives",
    features: [
      "Recognition in program materials",
      "Access to select events",
      "Annual impact summary",
      "Certificate of partnership",
    ],
  },
]

const whyPartner = [
  { icon: Target, title: "Clear Impact", description: "Measurable outcomes with transparent reporting on program reach and effectiveness." },
  { icon: Globe, title: "Scalable Model", description: "Evidence-informed approach with national replication potential across Africa." },
  { icon: Award, title: "Innovation Leader", description: "Pioneering immersive psycho-educational methods in substance abuse prevention." },
  { icon: Users, title: "Community Focus", description: "Deep engagement with youth, families, schools, and rehabilitation programs." },
]

export default function PartnersPage() {
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
                Partnership & Sponsorship
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Join the Movement
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Partner with Pivot Advocacy to transform substance abuse prevention. Together, we can create lasting change through immersive education and community engagement.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#inquiry">
                  Become a Partner
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Partner */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Partner With Pivot?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join a growing network of partners committed to transforming prevention education
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {whyPartner.map((item) => (
                <div key={item.title} className="p-6 rounded-2xl bg-card/50 border border-border/50 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Types */}
        <section className="py-24 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Partnership Opportunities</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Multiple ways to engage with Pivot Advocacy based on your organization&apos;s goals
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {partnerTypes.map((partner) => (
                <div key={partner.title} className="p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <partner.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{partner.title}</h3>
                      <p className="text-muted-foreground">{partner.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {partner.benefits.map((benefit) => (
                      <span key={benefit} className="px-3 py-1 rounded-full bg-muted text-sm text-foreground">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsorship Tiers */}
        <section id="sponsor" className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Sponsorship Tiers</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose a sponsorship level that aligns with your commitment to social impact
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {sponsorshipTiers.map((tier, index) => (
                <div key={tier.name} className={`p-6 rounded-2xl border ${
                  index === 0 ? 'bg-gradient-to-br from-primary/10 to-transparent border-primary/30' : 'bg-card/50 border-border/50'
                }`}>
                  {index === 0 && (
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium mb-4">
                      Premier
                    </span>
                  )}
                  <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{tier.description}</p>
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inquiry Form CTA */}
        <section id="inquiry" className="py-24 bg-gradient-to-br from-primary/20 via-background to-secondary/20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Partner?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get in touch with our partnerships team to discuss how we can work together to transform prevention education and build resilient communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/contact">
                    Contact Partnerships Team
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-border/50">
                  <a href="mailto:partnerships@pivotadvocacy.org">
                    partnerships@pivotadvocacy.org
                  </a>
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
