import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, FileText, Brain, Heart, Users, Download, Calendar } from "lucide-react"

const researchAreas = [
  {
    icon: Brain,
    title: "Addiction Psychology",
    description: "Understanding the psychological mechanisms of addiction, including triggers, decision-making patterns, and behavioral cycles.",
  },
  {
    icon: Heart,
    title: "Resilience Science",
    description: "Research on building psychological resilience, coping mechanisms, and emotional intelligence in vulnerable populations.",
  },
  {
    icon: Users,
    title: "Community Prevention",
    description: "Evidence-based approaches to community-level prevention, including family systems and peer influence dynamics.",
  },
  {
    icon: BookOpen,
    title: "Psycho-Educational Methods",
    description: "Evaluating the effectiveness of experiential learning and gamification in behavioral change interventions.",
  },
]

const publications = [
  {
    title: "Immersive Learning for Substance Abuse Prevention: A Framework",
    type: "Research Paper",
    date: "2024",
    description: "Foundational framework for using experiential learning methods in substance abuse prevention education.",
  },
  {
    title: "The Pivot Approach: Gamification in Psycho-Educational Intervention",
    type: "Case Study",
    date: "2023",
    description: "Analysis of the Pivot game methodology and its impact on participant outcomes.",
  },
  {
    title: "Adolescent Decision-Making Under Peer Pressure: Insights from Prevention Programs",
    type: "Research Paper",
    date: "2023",
    description: "Examining how structured interventions can strengthen decision-making skills in young people.",
  },
  {
    title: "Building Resilience Culture in Nigerian Schools",
    type: "Report",
    date: "2023",
    description: "Report on campus-based prevention programs and their effectiveness in building resilience.",
  },
]

const articles = [
  {
    title: "Understanding the Psychology of Adolescent Decision-Making",
    category: "Prevention",
    readTime: "5 min",
    slug: "psychology-adolescent-decision-making",
  },
  {
    title: "Why Traditional Prevention Methods Fall Short",
    category: "Research",
    readTime: "7 min",
    slug: "traditional-prevention-methods",
  },
  {
    title: "The Role of Family Support in Recovery",
    category: "Recovery",
    readTime: "6 min",
    slug: "family-support-recovery",
  },
  {
    title: "Building Emotional Intelligence in Young People",
    category: "Youth Development",
    readTime: "4 min",
    slug: "emotional-intelligence-youth",
  },
  {
    title: "Stress Management Techniques for Students",
    category: "Mental Health",
    readTime: "5 min",
    slug: "stress-management-students",
  },
  {
    title: "Recognizing Early Warning Signs of Substance Misuse",
    category: "Prevention",
    readTime: "6 min",
    slug: "early-warning-signs",
  },
]

export default function ResearchPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 gradient-hero" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
                Research & Insights
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Evidence-Informed Advocacy
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Our work is grounded in research and continuous learning. We share insights to advance the field of substance abuse prevention and support evidence-based practice.
              </p>
            </div>
          </div>
        </section>

        {/* Research Foundation */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Research Foundation</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Pivot Advocacy&apos;s approach is built on a foundation of academic research in addiction psychology, resilience science, and psycho-educational methodology.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our founder&apos;s PhD research in behavioral psychology and addiction intervention informs every aspect of our programs, from game design to facilitation methods.
                </p>
                <div className="p-6 rounded-xl bg-primary/10 border border-primary/30">
                  <p className="text-foreground font-medium italic">
                    {"\"Evidence-informed prevention is not about rigid protocols, but about understanding why certain approaches work and adapting them to local contexts.\""}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">— Founder, Pivot Advocacy</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {researchAreas.map((area) => (
                  <div key={area.title} className="p-6 rounded-xl bg-card/50 border border-border/50">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <area.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 text-sm">{area.title}</h3>
                    <p className="text-xs text-muted-foreground">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Publications */}
        <section className="py-24 bg-card/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Publications & Reports</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Research papers, case studies, and reports from our work
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {publications.map((pub) => (
                <div key={pub.title} className="p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                      {pub.type}
                    </span>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {pub.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{pub.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{pub.description}</p>
                  <button className="flex items-center gap-2 text-sm text-primary hover:underline">
                    <Download className="w-4 h-4" />
                    Download PDF
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Articles & Insights */}
        <section className="py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 max-w-5xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Articles & Insights</h2>
                <p className="text-muted-foreground">Thought leadership on prevention, resilience, and youth wellbeing</p>
              </div>
              <Button asChild variant="outline" className="border-border/50 w-fit">
                <Link href="/blog">
                  View All Articles
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="px-2 py-0.5 rounded bg-muted text-xs">{article.category}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-gradient-to-br from-primary/20 via-background to-secondary/20">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Collaborate on Research
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We welcome collaboration with researchers, institutions, and organizations interested in advancing evidence-based prevention education.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
