import { X, Check } from "lucide-react"

const traditionalApproaches = [
  "Passive awareness methods",
  "Theoretical lectures and seminars",
  "Information-heavy materials",
  "Warning-focused messaging",
]

const pivotApproach = [
  "Immersive experiential learning",
  "Emotional engagement & reflection",
  "Practical resilience-building tools",
  "Guided decision-making practice",
]

export function GapSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-4">
            The Gap
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Awareness Alone Is Not Enough
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Traditional prevention approaches inform, but they do not always engage. They warn, but they do not always equip. There is a fundamental difference between knowing the risk and having the resilience to resist it.
          </p>
        </div>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traditional */}
          <div className="p-8 rounded-2xl bg-muted/30 border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                <X className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Traditional Methods</h3>
            </div>
            <ul className="space-y-4">
              {traditionalApproaches.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-muted-foreground" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-background/50">
              <p className="text-sm text-muted-foreground italic">
                {"\"They may understand the risks intellectually, yet still lack the emotional insight and psychological preparedness necessary to make informed choices.\""}
              </p>
            </div>
          </div>

          {/* Pivot Approach */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">The Pivot Approach</h3>
            </div>
            <ul className="space-y-4">
              {pivotApproach.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-secondary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-background/30 border border-primary/20">
              <p className="text-sm text-foreground">
                {"\"The goal is not simply to inform, but to create space for insight. Not merely to warn, but to prepare.\""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
