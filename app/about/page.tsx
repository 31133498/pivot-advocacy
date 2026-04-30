import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Heart, Lightbulb, Shield, Users, Target, BookOpen } from "lucide-react"

const values = [
  { icon: Heart, title: "Empathy", description: "We prioritize understanding the experiences, struggles, and perspectives of individuals affected by substance misuse." },
  { icon: Lightbulb, title: "Innovation", description: "We use creative, immersive, and evidence-informed methods to deliver impactful learning experiences." },
  { icon: Shield, title: "Resilience", description: "We champion personal growth, self-efficacy, and the ability to overcome challenges." },
  { icon: Target, title: "Integrity", description: "We ensure that all advocacy, content, and interactions are truthful, respectful, and psychologically safe." },
  { icon: Users, title: "Collaboration", description: "We value the power of collective action — engaging families, communities, and institutions to support prevention and recovery." },
  { icon: BookOpen, title: "Education", description: "We commit to meaningful, experiential learning that goes beyond awareness to behavioral understanding and change." },
]

const secondaryTeam = [
  { initial: "S", name: "Sanni Shazily", role: "Tech Lead", color: "#8a23ac" },
  { initial: "M", name: "Mr. Martin Ettu", role: "Strategist & Lead Administrator", color: "#177543" },
  { initial: "O", name: "Owoade Ismail", role: "Designer", color: "#f80407" },
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 gradient-hero" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Who We Are
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Pivot Advocacy is a dedicated substance abuse prevention and psycho-educational initiative committed to transforming how prevention, early intervention, and rehabilitation education are delivered.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet the Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Passionate professionals dedicated to transforming prevention education
              </p>
            </div>

            {/* Founder Hero Card */}
            <div className="max-w-5xl mx-auto mb-16">
              <div className="relative rounded-3xl overflow-hidden border border-primary/40 bg-[#1a0a2e] shadow-2xl shadow-primary/20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
                <div className="relative z-10 flex flex-col lg:flex-row">
                  {/* Photo — big */}
                  <div className="w-full lg:w-1/2 relative">
                    <div className="relative aspect-[3/4] lg:aspect-auto lg:h-[620px] w-full">
                      <Image
                        src="/flyer.jpg"
                        alt="Dr. Jamiu Ademosu"
                        fill
                        className="object-cover object-top"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1a0a2e] hidden lg:block" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e] via-transparent to-transparent lg:hidden" />
                    </div>
                  </div>
                  {/* Info */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 md:p-12 lg:p-16">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-6 text-white w-fit" style={{ backgroundColor: "#8a23ac" }}>
                      Founder & Lead
                    </span>
                    <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Dr. Jamiu Ademosu</h3>
                    <p className="text-lg font-medium text-primary mb-1">Ph.D, FIMC</p>
                    <p className="text-base text-muted-foreground mb-8">Founder & Lead Researcher, Pivot Advocacy</p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#177543" }} />
                        <p className="text-muted-foreground">Doctor of Philosophy in Applied Mathematics</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#177543" }} />
                        <p className="text-muted-foreground">Fellow, Institute of Management Consultants (FIMC)</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: "#177543" }} />
                        <p className="text-muted-foreground">Research-driven psycho-educational innovator and advocate for substance abuse prevention</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Team */}
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {secondaryTeam.map((member) => (
                <div key={member.name} className="p-6 rounded-2xl bg-background border border-border/50 text-center hover:border-primary/30 transition-colors">
                  <div
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                    style={{ backgroundColor: member.color }}
                  >
                    {member.initial}
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm" style={{ color: member.color }}>{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Why We Exist</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Substance misuse and addiction continue to pose serious public health and social challenges across communities. Beyond the immediate physical consequences, substance abuse disrupts emotional balance, mental wellbeing, family stability, relationships, educational outcomes, and social functioning.
                  </p>
                  <p>
                    Traditional prevention approaches such as lectures, seminars, and informational materials play an important role, but they frequently remain theoretical. They inform, but they do not always engage. They warn, but they do not always equip.
                  </p>
                  <p>
                    Pivot Advocacy was established in response to this gap — to create space for insight, not simply to inform. To prepare, not merely to warn.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-card to-secondary/20 border border-border/50 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg viewBox="0 0 48 48" fill="none" className="w-16 h-16">
                        <path d="M24 4C24 4 38 12 38 24C38 28 36 32 32 35" stroke="#f80407" strokeWidth="4" strokeLinecap="round" fill="none" />
                        <path d="M24 44C24 44 10 36 10 24C10 20 12 16 16 13" stroke="#177543" strokeWidth="4" strokeLinecap="round" fill="none" />
                        <polygon points="16,8 20,15 12,15" fill="#177543" />
                      </svg>
                    </div>
                    <p className="text-xl font-medium text-foreground">Empowering Change</p>
                    <p className="text-muted-foreground">Since 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section id="mission" className="py-24 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/30">
                <h3 className="text-sm font-medium text-primary mb-2">Our Vision</h3>
                <p className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed">
                  To transform substance abuse prevention, education, and recovery support through immersive psycho-educational tools that promote resilience, awareness, and behavioral change.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-secondary/10 to-transparent border border-secondary/30">
                <h3 className="text-sm font-medium text-secondary mb-2">Our Mission</h3>
                <p className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed">
                  To empower individuals, families, and communities with experiential tools and psycho-educational interventions that improve understanding of substance misuse, strengthen resilience, and support prevention and recovery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {values.map((value) => (
                <div key={value.title} className="p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>



        {/* Powered By */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <p className="text-muted-foreground mb-4">Powered by</p>
            <h3 className="text-2xl font-bold text-foreground">SMATCOM Africa</h3>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
