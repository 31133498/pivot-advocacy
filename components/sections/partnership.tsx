import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Handshake, Building, Heart, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

const partnerTypes = [
  {
    icon: Building,
    title: "Corporate Partners",
    description: "Align your CSR initiatives with meaningful social impact through prevention education.",
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    description: "Bring immersive prevention programs to your students and campus community.",
  },
  {
    icon: Heart,
    title: "NGOs & Foundations",
    description: "Collaborate on scaling prevention interventions across communities.",
  },
  {
    icon: Handshake,
    title: "Government Agencies",
    description: "Partner on policy-aligned prevention and youth empowerment initiatives.",
  },
]

export function PartnershipSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
              Join The Movement
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Build Healthier, More Resilient Communities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Partner with Pivot Advocacy to transform substance abuse prevention. Together, we can create lasting change through immersive education and community engagement.
            </p>
          </div>

          {/* Photo Strip */}
          <div className="grid grid-cols-3 gap-3 mb-12 rounded-2xl overflow-hidden">
            {["0%", "33%", "66%"].map((offset, i) => (
              <div key={i} className="relative aspect-video overflow-hidden rounded-xl group">
                <Image
                  src="/Pivot package back page 1.png"
                  alt="Pivot game in action"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{ objectPosition: `${offset} center` }}
                />
                <div className="absolute inset-0 bg-[#1a0a2e]/40" />
              </div>
            ))}
          </div>

          {/* Deployment text */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["Schools", "Youth Programs", "Families", "Counselors", "Community Organizations", "NGOs"].map((item) => (
              <span key={item} className="px-4 py-2 rounded-full border text-sm font-medium text-foreground" style={{ borderColor: "#8a23ac", backgroundColor: "rgba(138,35,172,0.1)" }}>
                {item}
              </span>
            ))}
          </div>

          {/* Partner Types */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {partnerTypes.map((partner) => (
              <div
                key={partner.title}
                className="group p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <partner.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{partner.title}</h3>
                    <p className="text-muted-foreground">{partner.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Card */}
          <div className="relative rounded-3xl bg-gradient-to-br from-primary via-[#a035c8] to-primary p-8 md:p-12 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  Ready to Make an Impact?
                </h3>
                <p className="text-white/80 max-w-lg">
                  Join our growing network of partners committed to transforming prevention education and building resilient communities across Africa.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white hover:bg-white/90 text-primary font-semibold group">
                  <Link href="/partners">
                    Partner With Us
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/30 bg-transparent hover:bg-white/10 text-white">
                  <Link href="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
