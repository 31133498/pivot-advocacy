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

export function ImpactSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.08] pointer-events-none">
        <div className="relative w-full h-full">
          <Image src="/Second (Print).png" alt="" fill className="object-cover" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
            Measuring Change
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Creating Lasting Impact
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our theory of change: If individuals experience immersive, emotionally engaging psycho-educational interventions, and communities are mobilized through advocacy — then awareness increases, stigma reduces, resilience strengthens, leading to behavioral change and long-term reduction in substance misuse.
          </p>
        </div>

        {/* Impact Framework */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {impactLevels.map((level) => (
            <div
              key={level.title}
              className="p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                level.color === 'primary' ? 'bg-primary/10' :
                level.color === 'secondary' ? 'bg-secondary/10' :
                'bg-accent/10'
              }`}>
                <level.icon className={`w-6 h-6 ${
                  level.color === 'primary' ? 'text-primary' :
                  level.color === 'secondary' ? 'text-secondary' :
                  'text-accent'
                }`} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{level.title}</h3>
              <ul className="space-y-2">
                {level.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-muted-foreground">
                    <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Outcomes Stats */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-card to-secondary/10 border border-border/50">
            <h3 className="text-xl font-semibold text-foreground text-center mb-8">
              Participant Outcomes
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {outcomes.map((outcome) => (
                <div key={outcome.label} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{outcome.value}</div>
                  <div className="text-sm text-muted-foreground">{outcome.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Return */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <h3 className="text-lg font-semibold text-foreground mb-6">Social Return on Impact</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Reduced healthcare burden", "Improved educational retention", "Safer communities", "Strengthened family systems", "Increased youth productivity"].map((item) => (
              <span key={item} className="px-4 py-2 rounded-full bg-muted text-sm text-foreground">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
