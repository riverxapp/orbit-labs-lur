import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <section className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-3xl">
            <p className="inline-flex items-center rounded-full border border-border/60 bg-muted px-4 py-1 text-sm font-medium text-muted-foreground">
              Available for freelance and full-time opportunities
            </p>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Chirag Dodiya
            </h1>
            <p className="mt-4 text-xl font-semibold text-muted-foreground sm:text-2xl">
              Senior Software Engineer
            </p>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              I design and ship scalable, polished web experiences that help teams move faster. With a strong focus on product thinking, architecture, and clean execution, I turn complex ideas into reliable software.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button variant="default" size="lg" asChild>
                <a href="#projects">View Featured Projects</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Let's Connect</a>
              </Button>
            </div>
            <dl className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-border/60 bg-muted/50 p-4">
                <dt className="text-sm text-muted-foreground">Experience</dt>
                <dd className="mt-1 text-2xl font-bold">10+ yrs</dd>
              </div>
              <div className="rounded-2xl border border-border/60 bg-muted/50 p-4">
                <dt className="text-sm text-muted-foreground">Projects</dt>
                <dd className="mt-1 text-2xl font-bold">50+</dd>
              </div>
              <div className="rounded-2xl border border-border/60 bg-muted/50 p-4">
                <dt className="text-sm text-muted-foreground">Focus</dt>
                <dd className="mt-1 text-2xl font-bold">Web & Platform</dd>
              </div>
            </dl>
          </div>
          <aside className="rounded-3xl border border-border/60 bg-muted/40 p-6 shadow-sm">
            <div className="rounded-2xl bg-background p-6">
              <p className="text-sm font-medium text-muted-foreground">Currently building</p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight">High-performance product experiences</h2>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                Demo profile for a Senior Software Engineer with strengths in React, Next.js, TypeScript, system design, and cross-functional collaboration.
              </p>
              <div className="mt-6 grid gap-3 text-sm">
                {["Frontend architecture and design systems", "Scalable APIs and distributed services", "Performance, accessibility, and SEO"].map((item) => <div key={item} className="flex items-start gap-3 rounded-xl border border-border/60 px-4 py-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-foreground" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>)}
              </div>
            </div>
          </aside>
        </section>

        <section id="about" className="mt-24 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">About</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Building thoughtful software with product and engineering depth</h2>
          </div>
          <p className="text-base leading-7 text-muted-foreground sm:text-lg">
            I partner with teams to create resilient products, mentor engineers, and streamline delivery. My background spans frontend engineering, scalable platform work, and technical leadership across fast-moving environments.
          </p>
        </section>

        <section id="projects" className="mt-24">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Featured projects</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Selected work examples</h2>
            </div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[{
              title: "SaaS Analytics Dashboard",
              description: "Built a responsive analytics platform with role-based access, real-time charts, and streamlined reporting workflows.",
              tags: ["Next.js", "TypeScript", "Charts"]
            },
            {
              title: "Internal Operations Portal",
              description: "Delivered a scalable internal tool that improved team efficiency through automated approvals and searchable workflows.",
              tags: ["React", "Node.js", "Design Systems"]
            },
            {
              title: "E-commerce Experience Revamp",
              description: "Improved conversion-focused product pages, checkout usability, and performance across key user journeys.",
              tags: ["Performance", "Accessibility", "SEO"]
            }].
            map((project) =>
            <article key={project.title} className="rounded-3xl border border-border/60 bg-muted/40 p-6 transition-transform duration-200 hover:-translate-y-1">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                  {project.tags.map((tag) =>
                <li key={tag} className="rounded-full bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                      {tag}
                    </li>
                )}
                </ul>
              </article>
            )}
          </div>
        </section>

        <section className="mt-24 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Skills</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">A modern senior engineering toolkit</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
            "TypeScript",
            "JavaScript",
            "React",
            "Next.js",
            "Node.js",
            "Tailwind CSS",
            "GraphQL",
            "REST APIs",
            "AWS",
            "Docker",
            "System Design",
            "Accessibility"].
            map((skill) =>
            <span key={skill} className="rounded-full border border-border/60 bg-muted/40 px-4 py-2 text-sm font-medium text-muted-foreground">
                {skill}
              </span>
            )}
          </div>
        </section>

        <section className="mt-24">
          <div className="grid gap-6 md:grid-cols-3">
            {[
            {
              title: "Team Leadership",
              description: "Led cross-functional efforts and guided engineers through delivery, reviews, and technical planning."
            },
            {
              title: "Performance Impact",
              description: "Optimized web experiences to improve load times, usability, and conversion opportunities."
            },
            {
              title: "Product Collaboration",
              description: "Worked closely with design, product, and backend teams to ship polished solutions end-to-end."
            }].
            map((item) =>
            <div key={item.title} className="rounded-3xl border border-border/60 bg-muted/40 p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
              </div>
            )}
          </div>
        </section>

        <section id="contact" className="mt-24 rounded-3xl border border-border/60 bg-foreground px-6 py-10 text-background sm:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-background/70">Contact</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Let's build something exceptional together</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-background/75 sm:text-lg">
              If you are looking for a Senior Software Engineer to help deliver elegant user experiences, strengthen engineering foundations, or accelerate a product roadmap, I would love to connect.
            </p>
            <div className="mt-8">
              <Button variant="secondary" size="lg" asChild>
                <a href="mailto:chirag@example.com">chirag@example.com</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>);}