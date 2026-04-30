import { AlertTriangle, Brain, Users, TrendingDown } from "lucide-react"

const problems = [
  {
    icon: Brain,
    title: "Emotional & Psychological Impact",
    description: "Substance misuse disrupts emotional balance, mental wellbeing, and cognitive development, especially in young people navigating complex pressures.",
  },
  {
    icon: Users,
    title: "Peer Pressure & Social Dynamics",
    description: "Many face layered pressures from peer influence, identity exploration, and social environments without adequate tools to resist.",
  },
  {
    icon: TrendingDown,
    title: "Knowledge-Action Gap",
    description: "While awareness has increased, knowledge alone does not translate into prevention or behavioral change. Understanding risk is not enough.",
  },
  {
    icon: AlertTriangle,
    title: "Limited Intervention Tools",
    description: "Accessible, engaging psycho-educational tools that support reflection on triggers, relapse risks, and coping strategies remain scarce.",
  },
]

export function ProblemSection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
      {/* Dot grid texture */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#8a23ac 0.5px, transparent 0.5px)', backgroundSize: '24px 24px', opacity: 0.03 }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: '#f3eef8', color: '#8a23ac' }}>
            The Challenge
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance" style={{ color: '#1a0a2e' }}>
            The Realities of Substance Misuse
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#4a4a6a' }}>
            Substance misuse and addiction continue to pose serious public health and social challenges. The impact extends far beyond physical consequences, affecting families, education, relationships, and entire communities.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="group relative p-8 rounded-2xl border hover:-translate-y-1 transition-all duration-300"
              style={{ backgroundColor: '#f3eef8', borderColor: '#8a23ac33' }}
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: 'rgba(138,35,172,0.1)' }}>
                <problem.icon className="w-7 h-7" style={{ color: '#8a23ac' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#1a0a2e' }}>{problem.title}</h3>
              <p className="leading-relaxed" style={{ color: '#4a4a6a' }}>{problem.description}</p>
              <div className="absolute top-6 right-6 text-6xl font-bold select-none" style={{ color: '#8a23ac', opacity: 0.08 }}>
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <div className="p-8 rounded-2xl border" style={{ backgroundColor: '#f3eef8', borderColor: '#8a23ac33' }}>
            <p className="text-xl md:text-2xl font-medium leading-relaxed" style={{ color: '#1a0a2e' }}>
              The challenge is not a lack of information — it is a lack of{" "}
              <span style={{ color: '#8a23ac' }}>immersive</span>,{" "}
              <span style={{ color: '#8a23ac' }}>emotionally engaging</span>, and{" "}
              <span style={{ color: '#8a23ac' }}>psychologically informed</span>{" "}
              learning tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
