import Image from "next/image"
import Link from "next/link"
import { Facebook, MessageCircle, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const footerLinks = {
  about: [
    { label: "Our Story", href: "/about" },
    { label: "Mission & Vision", href: "/about#mission" },
    { label: "Our Team", href: "/about#team" },
    { label: "Research Foundation", href: "/research" },
  ],
  programs: [
    { label: "The Resilience Game", href: "/game" },
    { label: "Campus Experience", href: "/campus" },
    { label: "Our Work", href: "/programs" },
    { label: "Training & Capacity", href: "/programs#training" },
  ],
  getInvolved: [
    { label: "Partner With Us", href: "/partners" },
    { label: "Sponsor a Program", href: "/partners#sponsor" },
    { label: "Volunteer", href: "/get-involved#volunteer" },
    { label: "Youth Ambassador", href: "/get-involved#ambassador" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/share/14Xt5WAAxKf/?mibextid=wwXIfr", label: "Facebook" },
  { icon: MessageCircle, href: "https://chat.whatsapp.com/DckGgSSVLW9JAtbrgjKIFJ?mode=gi_t", label: "WhatsApp" },
  { icon: Instagram, href: "https://www.instagram.com/pivotadvocacy?igsh=bGU5YjYxbXQxeWs5&utm_source=qr", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/pivot-advocacy/", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="relative bg-[#0d0518] border-t border-border/30 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image src="/Pivot Package Side 1.png" alt="" fill className="object-cover object-center" />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(13,5,24,0.92)' }} />
      </div>
      <div className="relative z-10">
      {/* Newsletter Section */}
      <div className="border-b border-border/30">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-3">Stay Connected</h3>
            <p className="text-muted-foreground mb-6">
              Join our newsletter for updates on programs, research insights, and community impact stories.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 48 48" fill="none" className="w-full h-full">
                  <path
                    d="M24 4C24 4 38 12 38 24C38 28 36 32 32 35"
                    stroke="#f80407"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M24 44C24 44 10 36 10 24C10 20 12 16 16 13"
                    stroke="#177543"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <polygon points="16,8 20,15 12,15" fill="#177543" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground tracking-tight">pivot</span>
                <span className="text-[9px] font-medium tracking-[0.2em] text-muted-foreground uppercase">Advocacy</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 max-w-sm">
              Transforming substance abuse prevention through immersive, psycho-educational innovation that builds resilience and empowers communities.
            </p>
            {/* Product visual */}
            <div className="mb-6">
              <div className="relative w-20 h-20 rounded-xl overflow-hidden group" style={{ boxShadow: '0 0 20px rgba(138,35,172,0.3)' }}>
                <Image
                  src="/Pivot package font page 1.png"
                  alt="Pivot: The Resilience Game"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Get Involved</h4>
            <ul className="space-y-3">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <a href="mailto:hello@pivotadvocacy.org" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" />
                hello@pivotadvocacy.org
              </a>
              <a href="tel:+2341234567890" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Phone className="w-4 h-4" />
                +234 123 456 7890
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Lagos, Nigeria
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Powered by <a href="#" className="text-primary hover:underline">SMATCOM Africa</a>
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border/30">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Pivot Advocacy. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </footer>
  )
}
