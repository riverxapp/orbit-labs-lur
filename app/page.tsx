import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <section className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="flex flex-col justify-center rounded-3xl border border-border/60 bg-muted/30 p-6 shadow-sm sm:p-8 lg:min-h-[720px] lg:p-10">
            <p className="inline-flex w-fit items-center rounded-full border border-border/60 bg-background px-4 py-1 text-sm font-medium text-muted-foreground">
              Secure access for the Panda workspace
            </p>
            <h1 className="mt-6 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              A minimal, professional entry point for your team
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Preview a polished authentication landing page with clear sign in and sign up sections, accessible form controls, and realistic copy — all frontend-only and self-contained in this file.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[{ label: "Built for clarity", value: "Simple, focused layout" }, { label: "Ready for preview", value: "Display-only forms" }, { label: "Support", value: "help@panda.dev" }].map((item) => <div key={item.label} className="rounded-2xl border border-border/60 bg-background p-4">
                  <dt className="text-sm text-muted-foreground">{item.label}</dt>
                  <dd className="mt-1 text-sm font-semibold tracking-tight">{item.value}</dd>
                </div>)}
            </div>
            <div className="mt-8 rounded-2xl border border-border/60 bg-background p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Why this page works</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Use this surface to demonstrate auth UX, validate hierarchy, and keep the experience calm, approachable, and easy to scan on every screen size.
              </p>
            </div>
          </div>

          <aside className="grid gap-6 rounded-3xl border border-border/60 bg-background p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="grid gap-6 md:grid-cols-2">
              <section aria-labelledby="signin-heading" className="rounded-2xl border border-border/60 bg-muted/30 p-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Sign in</p>
                  <h2 id="signin-heading" className="mt-2 text-2xl font-bold tracking-tight">
                    Welcome back
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Sign in to continue to dashboards, tasks, and reports.
                  </p>
                </div>
                <form className="mt-5 space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="signin-email" className="text-sm font-medium">
                      Email
                    </label>
                    <input id="signin-email"
                    type="email"
                    autoComplete="email"
                    className="h-11 w-full rounded-xl border border-border/60 bg-background px-3 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="you@company.com" />
                    
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="signin-password" className="text-sm font-medium">
                      Password
                    </label>
                    <input
                      id="signin-password"
                      type="password"
                      autoComplete="current-password"
                      className="h-11 w-full rounded-xl border border-border/60 bg-background px-3 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Enter your password" />
                    
                  </div>
                  <div className="flex items-center justify-between gap-3 text-sm">
                    <label className="flex items-center gap-2 text-muted-foreground">
                      <input type="checkbox" className="h-4 w-4 rounded border-border/60" />
                      Remember me
                    </label>
                    <a href="#" className="font-medium text-foreground underline-offset-4 hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  <Button className="w-full" size="lg" type="button">
                    Sign in
                  </Button>
                </form>
              </section>

              <section aria-labelledby="signup-heading" className="rounded-2xl border border-border/60 bg-muted/30 p-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Sign up</p>
                  <h2 id="signup-heading" className="mt-2 text-2xl font-bold tracking-tight">
                    Create your account
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Start with a clean workspace in just a few steps.
                  </p>
                </div>
                <form className="mt-5 space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="signup-name" className="text-sm font-medium">
                      Full name
                    </label>
                    <input
                      id="signup-name"
                      type="text"
                      autoComplete="name"
                      className="h-11 w-full rounded-xl border border-border/60 bg-background px-3 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Alex Morgan" />
                    
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="signup-email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="signup-email"
                      type="email"
                      autoComplete="email"
                      className="h-11 w-full rounded-xl border border-border/60 bg-background px-3 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="you@company.com" />
                    
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="signup-password" className="text-sm font-medium">
                      Password
                    </label>
                    <input
                      id="signup-password"
                      type="password"
                      autoComplete="new-password"
                      className="h-11 w-full rounded-xl border border-border/60 bg-background px-3 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Create a password" />
                    
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="signup-confirm-password" className="text-sm font-medium">
                      Confirm password
                    </label>
                    <input
                      id="signup-confirm-password"
                      type="password"
                      autoComplete="new-password"
                      className="h-11 w-full rounded-xl border border-border/60 bg-background px-3 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Confirm your password" />
                    
                  </div>
                  <Button className="w-full" size="lg" type="button" variant="outline">
                    Create account
                  </Button>
                </form>
              </section>
            </div>

            <div className="rounded-2xl border border-border/60 bg-muted/30 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">What users can expect</p>
              <ul className="mt-3 grid gap-2 text-sm leading-6 text-muted-foreground sm:grid-cols-2">
                <li>Accessible labels and keyboard-friendly inputs</li>
                <li>Clear separation between sign in and sign up</li>
                <li>Display-only forms with realistic product copy</li>
                <li>Reusable button styling from the existing system</li>
              </ul>
            </div>
          </aside>
        </section>
      </main>





































      


















      
    </div>);}