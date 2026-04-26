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
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            The Challenge
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            The Realities of Substance Misuse
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Substance misuse and addiction continue to pose serious public health and social challenges. The impact extends far beyond physical consequences, affecting families, education, relationships, and entire communities.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="group relative p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <problem.icon className="w-7 h-7 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              
              {/* Number indicator */}
              <div className="absolute top-6 right-6 text-6xl font-bold text-muted/20 select-none">
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-card to-secondary/10 border border-border/50">
            <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed">
              The challenge is not a lack of information — it is a lack of{" "}
              <span className="text-primary">immersive</span>,{" "}
              <span className="text-primary">emotionally engaging</span>, and{" "}
              <span className="text-primary">psychologically informed</span>{" "}
              learning tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
