import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Handshake, Gift, School, Heart, Star, UserPlus, Check } from "lucide-react"

const opportunities = [
  {
    icon: Handshake,
    title: "Partner With Us",
    description: "Collaborate with Pivot Advocacy as a corporate partner, NGO, or institution to amplify prevention education impact.",
    cta: "Explore Partnerships",
    href: "/partners",
    color: "primary",
  },
  {
    icon: Gift,
    title: "Sponsor a Campus Activation",
    description: "Fund a complete campus experience at a school or community center, reaching hundreds of young people with prevention education.",
    cta: "Sponsor Now",
    href: "/contact",
    color: "secondary",
  },
  {
    icon: School,
    title: "Invite Us to Your School",
    description: "Request a Pivot Campus Experience for your educational institution. We bring the full program to your students.",
    cta: "Request a Visit",
    href: "/contact",
    color: "primary",
  },
  {
    icon: Heart,
    title: "Volunteer",
    description: "Join our team of volunteers supporting campus activations, community events, and program facilitation.",
    cta: "Become a Volunteer",
    href: "#volunteer",
    color: "secondary",
  },
  {
    icon: Star,
    title: "Become a Youth Ambassador",
    description: "Young leaders passionate about prevention can join our ambassador program to advocate within their communities.",
    cta: "Apply as Ambassador",
    href: "#ambassador",
    color: "primary",
  },
  {
    icon: UserPlus,
    title: "Collaborate as a Facilitator",
    description: "Counselors, educators, and social workers can be trained to facilitate Pivot game sessions and advocacy programs.",
    cta: "Join as Facilitator",
    href: "#facilitator",
    color: "secondary",
  },
]

const volunteerRoles = [
  "Campus activation support",
  "Event coordination",
  "Community outreach",
  "Social media advocacy",
  "Administrative support",
  "Research assistance",
]

const ambassadorBenefits = [
  "Leadership training",
  "Certification as Pivot Ambassador",
  "Networking opportunities",
  "Recognition and awards",
  "Professional development",
  "Making real impact",
]

export default function GetInvolvedPage() {
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
                Get Involved
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Be Part of the Change
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                There are many ways to contribute to substance abuse prevention and build resilient communities. Find the opportunity that fits your passion and capacity.
              </p>
            </div>
          </div>
        </section>

        {/* Opportunities Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {opportunities.map((opportunity) => (
                <div key={opportunity.title} className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  opportunity.color === 'primary' ? 'bg-primary/5 border-primary/30 hover:border-primary/50' : 'bg-secondary/5 border-secondary/30 hover:border-secondary/50'
                }`}>
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                    opportunity.color === 'primary' ? 'bg-primary/20' : 'bg-secondary/20'
                  }`}>
                    <opportunity.icon className={`w-7 h-7 ${
                      opportunity.color === 'primary' ? 'text-primary' : 'text-secondary'
                    }`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{opportunity.title}</h3>
                  <p className="text-muted-foreground mb-6">{opportunity.description}</p>
                  <Button asChild variant="outline" className={`w-full ${
                    opportunity.color === 'primary' ? 'border-primary/30 hover:bg-primary/10' : 'border-secondary/30 hover:bg-secondary/10'
                  }`}>
                    <Link href={opportunity.href}>
                      {opportunity.cta}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteer Section */}
        <section id="volunteer" className="py-24 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
                  Volunteer
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Give Your Time, Make a Difference
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our volunteers are essential to delivering prevention education across communities. Whether you can commit a few hours a month or more, there&apos;s a role for you.
                </p>
                <div className="space-y-3 mb-8">
                  {volunteerRoles.map((role) => (
                    <div key={role} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-secondary" />
                      </div>
                      <span className="text-foreground">{role}</span>
                    </div>
                  ))}
                </div>
                <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  <Link href="/contact">
                    Apply to Volunteer
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-secondary/20 via-card to-primary/20 border border-border/50 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Heart className="w-20 h-20 text-secondary mx-auto mb-6" />
                    <p className="text-2xl font-bold text-foreground mb-2">100+</p>
                    <p className="text-muted-foreground">Active Volunteers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ambassador Program */}
        <section id="ambassador" className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="order-2 lg:order-1">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-card to-secondary/20 border border-border/50 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Star className="w-20 h-20 text-primary mx-auto mb-6" />
                    <p className="text-2xl font-bold text-foreground mb-2">Youth Ambassadors</p>
                    <p className="text-muted-foreground">Leading Prevention in Their Communities</p>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
                  Youth Ambassador Program
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Lead the Change in Your Community
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Young people aged 15-30 who are passionate about prevention can become certified Pivot Youth Ambassadors, leading advocacy initiatives in their schools and communities.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {ambassadorBenefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/contact">
                    Apply as Ambassador
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Facilitator Training */}
        <section id="facilitator" className="py-24 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-4">
                Professional Development
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Become a Certified Facilitator
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Counselors, educators, social workers, and youth workers can be trained to facilitate Pivot game sessions and deliver psycho-educational programs within their institutions and communities.
              </p>
              <div className="p-8 rounded-2xl bg-background border border-border/50 mb-8">
                <h3 className="font-semibold text-foreground mb-4">Training Includes:</h3>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  {[
                    "Game facilitation methodology",
                    "Psycho-educational principles",
                    "Group dynamics management",
                    "Trauma-informed approaches",
                    "Reflection and debrief techniques",
                    "Certification and ongoing support",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/contact">
                  Inquire About Training
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
