export function GameVideoSection() {
  return (
    <section id="game-video" className="py-16 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
              See It In Action
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Watch the Game Come Alive
            </h2>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/3A-iF7zFW1E"
              title="Pivot: The Resilience Game - In Action"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">Watch the game in action</p>
        </div>
      </div>
    </section>
  )
}
