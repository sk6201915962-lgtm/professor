"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function UnderConstructionPage() {
  const [mounted, setMounted] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-10 w-2 h-2 bg-primary/30 rounded-full float-animation"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-40 right-20 w-1 h-1 bg-accent/40 rounded-full float-animation"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary/20 rounded-full float-animation"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent/30 rounded-full float-animation"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Header */}
        <header className="text-center mb-16 fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm font-medium">
              {"🚧 Under Construction"}
            </Badge>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            <span className="block text-foreground">Professor</span>
            <span className="block text-primary shimmer bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
              Dr. Soumya Ranjan Nayak
            </span>
          </h1>

          <div className="flex justify-center mb-8 fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <svg
                width="120"
                height="80"
                viewBox="0 0 120 80"
                className="bulldozer-animation"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Bulldozer body */}
                <rect x="20" y="35" width="60" height="25" rx="3" fill="hsl(var(--primary))" className="opacity-90" />

                {/* Cabin */}
                <rect x="50" y="20" width="25" height="15" rx="2" fill="hsl(var(--primary))" className="opacity-80" />

                {/* Blade */}
                <rect
                  x="5"
                  y="25"
                  width="20"
                  height="30"
                  rx="2"
                  fill="hsl(var(--accent))"
                  className="blade-animation"
                />

                {/* Tracks */}
                <ellipse
                  cx="30"
                  cy="65"
                  rx="12"
                  ry="8"
                  fill="hsl(var(--muted-foreground))"
                  className="track-rotation"
                />
                <ellipse
                  cx="60"
                  cy="65"
                  rx="12"
                  ry="8"
                  fill="hsl(var(--muted-foreground))"
                  className="track-rotation"
                  style={{ animationDelay: "0.5s" }}
                />

                {/* Track details */}
                <circle cx="30" cy="65" r="3" fill="hsl(var(--background))" className="track-detail" />
                <circle cx="60" cy="65" r="3" fill="hsl(var(--background))" className="track-detail" />

                {/* Exhaust smoke */}
                <circle cx="75" cy="15" r="2" fill="hsl(var(--muted-foreground))" className="smoke-puff opacity-60" />
                <circle
                  cx="78"
                  cy="12"
                  r="1.5"
                  fill="hsl(var(--muted-foreground))"
                  className="smoke-puff opacity-40"
                  style={{ animationDelay: "0.5s" }}
                />
                <circle
                  cx="81"
                  cy="10"
                  r="1"
                  fill="hsl(var(--muted-foreground))"
                  className="smoke-puff opacity-20"
                  style={{ animationDelay: "1s" }}
                />
              </svg>

              {/* Dust clouds */}
              <div className="absolute -bottom-2 left-0 w-full flex justify-center space-x-2">
                <div className="w-3 h-1 bg-muted-foreground/20 rounded-full dust-cloud" />
                <div
                  className="w-4 h-1 bg-muted-foreground/15 rounded-full dust-cloud"
                  style={{ animationDelay: "0.3s" }}
                />
                <div
                  className="w-2 h-1 bg-muted-foreground/10 rounded-full dust-cloud"
                  style={{ animationDelay: "0.6s" }}
                />
              </div>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
            {"Professional Portfolio & Academic Excellence"}
          </p>
        </header>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Content */}
          <div className="space-y-8 fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div>
              <h2 className="text-3xl font-semibold mb-4 text-foreground">{"Something Amazing is Coming"}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {
                  "We are crafting a comprehensive digital portfolio that showcases academic achievements, research contributions, and professional excellence. This space will soon feature detailed insights into groundbreaking work and scholarly pursuits."
                }
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full pulse-glow" />
                <span className="text-muted-foreground">{"Research Publications & Papers"}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full pulse-glow" style={{ animationDelay: "1s" }} />
                <span className="text-muted-foreground">{"Academic Achievements & Awards"}</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full pulse-glow" style={{ animationDelay: "2s" }} />
                <span className="text-muted-foreground">{"Professional Experience & Expertise"}</span>
              </div>
            </div>
          </div>

          {/* Right side - Interactive card */}
          <div className="fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 float-animation">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center pulse-glow">
                  <span className="text-2xl font-bold text-primary-foreground">{"SRN"}</span>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">{"Stay Updated"}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {
                      "Be the first to know when the portfolio goes live. Get notified about new publications and academic milestones."
                    }
                  </p>
                </div>

                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring text-foreground placeholder:text-muted-foreground"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 transition-all duration-300 hover:scale-105"
                    disabled={isSubscribed}
                  >
                    {isSubscribed ? "✓ Subscribed!" : "Notify Me"}
                  </Button>
                </form>

                {isSubscribed && (
                  <p className="text-accent text-sm fade-in-up">{"Thank you! You'll be notified when we launch."}</p>
                )}
              </div>
            </Card>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="text-center fade-in-up" style={{ animationDelay: "0.8s" }}>
          <div className="max-w-md mx-auto">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>{"Progress"}</span>
              <span>{"75%"}</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full shimmer transition-all duration-1000 ease-out"
                style={{ width: "75%" }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2">{"Expected launch: Q2 2025"}</p>
          </div>
        </div>

        {/* Footer */}
        <footer
          className="text-center mt-16 pt-8 border-t border-border/30 fade-in-up"
          style={{ animationDelay: "1s" }}
        >
          <p className="text-muted-foreground text-sm">
            {"© 2025 Professor Dr. Soumya Ranjan Nayak. Academic Portfolio in Development."}
          </p>
        </footer>
      </div>
    </div>
  )
}
