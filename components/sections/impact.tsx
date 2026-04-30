import Image from "next/image"
import { User, Users, Building2, ArrowRight } from "lucide-react"

const impactLevels = [
  {
    icon: User,
    title: "Individual Impact",
    items: ["Behavioral awareness", "Emotional resilience", "Informed decision-making", "Early help-seeking behavior"],
    color: "primary",
  },
  {
    icon: Users,
    title: "Community Impact",
    items: ["Reduced stigma", "Increased prevention literacy", "Stronger family engagement", "Community advocacy leadership"],
    color: "secondary",
  },
  {
    icon: Building2,
    title: "Systemic Impact",
    items: ["Evidence-informed approaches", "Policy dialogue engagement", "Institutional integration", "National replication potential"],
    color: "accent",
  },
]

const outcomes = [
  { label: "Increased awareness", value: "95%" },
  { label: "Improved resilience skills", value: "87%" },
  { label: "Reduced stigma attitudes", value: "82%" },
  { label: "Willingness to seek help", value: "91%" },
]

const impactCardStyles = [
  { bg: '#fff5f5', border: '#f80407', iconBg: 'rgba(248,4,7,0.1)', iconColor: '#f80407', arrowColor: '#f80407' },
  { bg: '#f3eef8', border: '#8a23ac', iconBg: 'rgba(138,35,172,0.1)', iconColor: '#8a23ac', arrowColor: '#8a23ac' },
  { bg: '#f0fff5', border: '#177543', iconBg: 'rgba(23,117,67,0.1)', iconColor: '#177543', arrowColor: '#177543' },
]

export function ImpactSection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
      {/* Dot grid texture */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#8a23ac 0.5px, transparent 0.5px)', backgroundSize: '24px 24px', opacity: 0.03 }} />
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ opacity: 0.04 }}>
        <div className="relative w-full h-full">
          <Image src="/Second (Print).png" alt="" fill className="object-cover" />
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: '#f3eef8', color: '#8a23ac' }}>
            Measuring Change
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance" style={{ color: '#1a0a2e' }}>
            Creating Lasting Impact
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#4a4a6a' }}>
            Our theory of change: If individuals experience immersive, emotionally engaging psycho-educational interventions, and communities are mobilized through advocacy — then awareness increases, stigma reduces, resilience strengthens, leading to behavioral change and long-term reduction in substance misuse.
          </p>
        </div>

        {/* Impact Framework */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {impactLevels.map((level, i) => (
            <div
              key={level.title}
              className="p-6 rounded-2xl border-l-4 transition-all duration-300"
              style={{ backgroundColor: impactCardStyles[i].bg, borderLeftColor: impactCardStyles[i].border, borderTop: '1px solid rgba(0,0,0,0.06)', borderRight: '1px solid rgba(0,0,0,0.06)', borderBottom: '1px solid rgba(0,0,0,0.06)' }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: impactCardStyles[i].iconBg }}>
                <level.icon className="w-6 h-6" style={{ color: impactCardStyles[i].iconColor }} />
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#1a0a2e' }}>{level.title}</h3>
              <ul className="space-y-2">
                {level.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 flex-shrink-0" style={{ color: impactCardStyles[i].arrowColor }} />
                    <span style={{ color: '#4a4a6a' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Outcomes Stats */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl border" style={{ backgroundColor: '#f3eef8', borderColor: 'rgba(138,35,172,0.2)' }}>
            <h3 className="text-xl font-semibold text-center mb-8" style={{ color: '#1a0a2e' }}>
              Participant Outcomes
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {outcomes.map((outcome) => (
                <div key={outcome.label} className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: '#8a23ac' }}>{outcome.value}</div>
                  <div className="text-sm" style={{ color: '#4a4a6a' }}>{outcome.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Return */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <h3 className="text-lg font-semibold mb-6" style={{ color: '#1a0a2e' }}>Social Return on Impact</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Reduced healthcare burden", "Improved educational retention", "Safer communities", "Strengthened family systems", "Increased youth productivity"].map((item) => (
              <span key={item} className="px-4 py-2 rounded-full text-sm" style={{ backgroundColor: '#f3eef8', color: '#1a0a2e', border: '1px solid rgba(138,35,172,0.2)' }}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
