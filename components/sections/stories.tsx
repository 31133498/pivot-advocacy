import Link from "next/link"
import { ArrowRight, Clock, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"

const articles = [
  {
    title: "Understanding the Psychology of Adolescent Decision-Making",
    excerpt: "Exploring how young minds navigate peer pressure and why immersive learning creates lasting behavioral change.",
    category: "Research",
    readTime: "5 min read",
    date: "Mar 15, 2024",
    slug: "psychology-adolescent-decision-making",
  },
  {
    title: "Building Resilience: A Framework for Prevention Education",
    excerpt: "How structured psycho-educational interventions can strengthen emotional intelligence and coping mechanisms.",
    category: "Prevention",
    readTime: "7 min read",
    date: "Mar 8, 2024",
    slug: "building-resilience-framework",
  },
  {
    title: "From Awareness to Action: The Pivot Campus Experience",
    excerpt: "Stories from our recent campus activations and the transformative impact on student communities.",
    category: "Impact Stories",
    readTime: "4 min read",
    date: "Feb 28, 2024",
    slug: "pivot-campus-experience-stories",
  },
]

export function StoriesSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-muted text-muted-foreground text-sm font-medium mb-4">
              Stories & Insights
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Latest from Pivot
            </h2>
          </div>
          <Button asChild variant="outline" className="border-border/50 bg-transparent hover:bg-muted/50 text-foreground w-fit group">
            <Link href="/blog">
              View All Articles
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="group rounded-2xl bg-card/50 border border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image placeholder */}
              <div className="aspect-[16/10] bg-gradient-to-br from-muted to-card relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Tag className="w-8 h-8 text-primary" />
                  </div>
                </div>
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span>{article.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  <Link href={`/blog/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                  {article.excerpt}
                </p>
                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Read More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
