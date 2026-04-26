import Link from "next/link"
import { ArrowRight, Users, Gamepad2, MessageCircle, Lightbulb, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"

const programComponents = [
  {
    icon: MessageCircle,
    title: "Awareness Sessions",
    description: "Interactive discussions on substance misuse, triggers, and prevention strategies.",
  },
  {
    icon: Gamepad2,
    title: "Live Gameplay",
    description: "Facilitated Pivot game sessions where students experience decision-making scenarios.",
  },
  {
    icon: Lightbulb,
    title: "Mental Wellbeing Discussions",
    description: "Open conversations about stress, coping mechanisms, and emotional health.",
  },
  {
    icon: Users,
    title: "Reflection Circles",
    description: "Guided group reflections connecting gameplay insights to real-life applications.",
  },
  {
    icon: Palette,
    title: "Creative Engagement",
    description: "Art, writing, and expressive activities that reinforce learning outcomes.",
  },
]

export function CampusSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-background" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-medium mb-4">
              Campus Program
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              The Pivot Campus Experience
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Bringing immersive psycho-educational advocacy directly to schools and youth-focused environments. A holistic experience combining gameplay, dialogue, reflection, and creative engagement.
            </p>
            
            {/* Program Components */}
            <div className="space-y-4 mb-8">
              {programComponents.map((component) => (
                <div key={component.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                    <component.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{component.title}</h4>
                    <p className="text-sm text-muted-foreground">{component.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground group">
              <Link href="/campus">
                Host a Campus Experience
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              {/* Main image placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 via-muted to-secondary/20 flex items-center justify-center">
                <div className="text-center p-8">
                  {/* Illustration of students in a discussion circle */}
                  <div className="relative w-64 h-64 mx-auto">
                    {/* Circle of students */}
                    {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                      <div
                        key={angle}
                        className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-muted to-card border-2 border-border flex items-center justify-center"
                        style={{
                          left: `calc(50% + ${Math.cos((angle * Math.PI) / 180) * 80}px - 24px)`,
                          top: `calc(50% + ${Math.sin((angle * Math.PI) / 180) * 80}px - 24px)`,
                        }}
                      >
                        <Users className="w-6 h-6 text-muted-foreground" />
                      </div>
                    ))}
                    {/* Center - game board */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 border border-primary/50 flex items-center justify-center shadow-lg">
                      <Gamepad2 className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                  <p className="mt-8 text-lg font-medium text-foreground">Interactive Learning Sessions</p>
                  <p className="text-muted-foreground">Bringing communities together</p>
                </div>
              </div>
            </div>
            
            {/* Stats overlay */}
            <div className="absolute -bottom-6 left-6 right-6 p-4 rounded-xl bg-card/90 backdrop-blur border border-border/50 flex justify-around">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-xs text-muted-foreground">Schools</div>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">200+</div>
                <div className="text-xs text-muted-foreground">Sessions</div>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">10K+</div>
                <div className="text-xs text-muted-foreground">Students</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
