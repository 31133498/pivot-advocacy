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
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#f3eef8' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#8a23ac 0.5px, transparent 0.5px)', backgroundSize: '24px 24px', opacity: 0.03 }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: 'rgba(138,35,172,0.15)', color: '#8a23ac' }}>
              Join The Movement
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance" style={{ color: '#1a0a2e' }}>
              Build Healthier, More Resilient Communities
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: '#4a4a6a' }}>
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
                <div className="absolute inset-0" style={{ backgroundColor: 'rgba(26,10,46,0.3)' }} />
              </div>
            ))}
          </div>

          {/* Deployment text */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["Schools", "Youth Programs", "Families", "Counselors", "Community Organizations", "NGOs"].map((item) => (
              <span key={item} className="px-4 py-2 rounded-full border text-sm font-medium" style={{ borderColor: '#8a23ac', backgroundColor: 'rgba(138,35,172,0.08)', color: '#1a0a2e' }}>
                {item}
              </span>
            ))}
          </div>

          {/* Partner Types */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {partnerTypes.map((partner) => (
              <div
                key={partner.title}
                className="group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: '#ffffff', borderColor: 'rgba(138,35,172,0.2)' }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(138,35,172,0.1)' }}>
                    <partner.icon className="w-6 h-6" style={{ color: '#8a23ac' }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#1a0a2e' }}>{partner.title}</h3>
                    <p style={{ color: '#4a4a6a' }}>{partner.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Card */}
          <div className="relative rounded-3xl p-8 md:p-12 overflow-hidden" style={{ backgroundColor: '#1a0a2e' }}>
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(138,35,172,0.2)' }} />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(23,117,67,0.15)' }} />
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready to Make an Impact?</h3>
                <p className="max-w-lg" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  Join our growing network of partners committed to transforming prevention education and building resilient communities across Africa.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="font-semibold group text-white" style={{ backgroundColor: '#8a23ac' }}>
                  <Link href="/partners">
                    Partner With Us
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-transparent" style={{ borderColor: '#8a23ac', color: '#8a23ac' }}>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
