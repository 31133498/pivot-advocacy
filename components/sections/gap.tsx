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
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#1a0a2e' }}>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: 'rgba(138,35,172,0.2)', color: '#c97de0' }}>
            The Gap
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
            Awareness Alone Is Not Enough
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Traditional prevention approaches inform, but they do not always engage. They warn, but they do not always equip. There is a fundamental difference between knowing the risk and having the resilience to resist it.
          </p>
        </div>

        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traditional */}
          <div className="p-8 rounded-2xl" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                <X className="w-6 h-6" style={{ color: 'rgba(255,255,255,0.5)' }} />
              </div>
              <h3 className="text-xl font-semibold text-white">Traditional Methods</h3>
            </div>
            <ul className="space-y-4">
              {traditionalApproaches.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                    <X className="w-3 h-3" style={{ color: 'rgba(255,255,255,0.5)' }} />
                  </div>
                  <span style={{ color: 'rgba(255,255,255,0.6)' }}>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
              <p className="text-sm italic" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {"\"They may understand the risks intellectually, yet still lack the emotional insight and psychological preparedness necessary to make informed choices.\""}
              </p>
            </div>
          </div>

          {/* Pivot Approach */}
          <div className="p-8 rounded-2xl" style={{ backgroundColor: 'rgba(138,35,172,0.15)', border: '1px solid rgba(138,35,172,0.4)' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(138,35,172,0.3)' }}>
                <Check className="w-6 h-6" style={{ color: '#c97de0' }} />
              </div>
              <h3 className="text-xl font-semibold text-white">The Pivot Approach</h3>
            </div>
            <ul className="space-y-4">
              {pivotApproach.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: 'rgba(23,117,67,0.3)' }}>
                    <Check className="w-3 h-3" style={{ color: '#4ade80' }} />
                  </div>
                  <span className="text-white">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 rounded-xl" style={{ backgroundColor: 'rgba(138,35,172,0.1)', border: '1px solid rgba(138,35,172,0.2)' }}>
              <p className="text-sm text-white">
                {"\"The goal is not simply to inform, but to create space for insight. Not merely to warn, but to prepare.\""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
