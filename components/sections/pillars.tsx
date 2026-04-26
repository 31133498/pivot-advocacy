import { Shield, Heart, Lightbulb } from "lucide-react"

const pillars = [
  {
    icon: Shield,
    title: "Prevention Education",
    description: "Providing engaging, experiential methods for individuals and communities to understand the psychological, social, and behavioral dimensions of substance misuse before exposure occurs.",
    color: "primary",
  },
  {
    icon: Heart,
    title: "Resilience Building",
    description: "Equipping participants with practical coping strategies, decision-making skills, and emotional intelligence to resist risky behaviors and navigate life&apos;s challenges.",
    color: "secondary",
  },
  {
    icon: Lightbulb,
    title: "Psycho-Educational Engagement",
    description: "Using creative, immersive, and evidence-informed methods to deliver impactful learning experiences that go beyond awareness to behavioral understanding and change.",
    color: "accent",
  },
]

export function PillarsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
            Our Response
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            A New Approach to Prevention
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Pivot Advocacy was established to bridge the gap between awareness and action through three foundational pillars.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  pillar.color === 'primary' ? 'bg-gradient-to-br from-primary/5 to-transparent' :
                  pillar.color === 'secondary' ? 'bg-gradient-to-br from-secondary/5 to-transparent' :
                  'bg-gradient-to-br from-accent/5 to-transparent'
                }`} />
                
                {/* Icon */}
                <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  pillar.color === 'primary' ? 'bg-primary/10 group-hover:bg-primary/20' :
                  pillar.color === 'secondary' ? 'bg-secondary/10 group-hover:bg-secondary/20' :
                  'bg-accent/10 group-hover:bg-accent/20'
                }`}>
                  <pillar.icon className={`w-8 h-8 ${
                    pillar.color === 'primary' ? 'text-primary' :
                    pillar.color === 'secondary' ? 'text-secondary' :
                    'text-accent'
                  }`} />
                </div>
                
                {/* Content */}
                <h3 className="relative text-xl font-semibold text-foreground mb-4">{pillar.title}</h3>
                <p className="relative text-muted-foreground leading-relaxed">{pillar.description}</p>
                
                {/* Decorative line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${
                  pillar.color === 'primary' ? 'bg-gradient-to-r from-primary to-primary/50' :
                  pillar.color === 'secondary' ? 'bg-gradient-to-r from-secondary to-secondary/50' :
                  'bg-gradient-to-r from-accent to-accent/50'
                }`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
