import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex flex-1 flex-col px-6 py-16 md:py-24 lg:py-32 max-w-7xl mx-auto w-full">
        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl leading-tight">
            Chirag Dodiya
          </h1>
          <p className="mt-3 text-xl font-semibold text-muted-foreground">
            Senior Software Engineer
          </p>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering scalable, high-performance web applications with modern technologies. Passionate about building solutions that drive business impact.
          </p>
          <div className="mt-10 flex justify-center space-x-6">
            <Button variant="default" size="lg" asChild>
              <a href="#portfolio">View Portfolio</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </section>

        {/* Credibility and Summary */}
        <section className="mt-20 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Proven Expertise & Impact</h2>
          <div className="flex justify-center space-x-10 text-muted-foreground text-sm font-medium">
            <div>
              <p className="text-4xl font-extrabold text-foreground">10+</p>
              <p>Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-foreground">50+</p>
              <p>Projects Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-foreground">5</p>
              <p>Companies Worked</p>
            </div>
          </div>
        </section>

        {/* Featured Work / Services Cards */}
        <section
          id="portfolio"
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto"
        >
          <div className="rounded-lg bg-muted p-6 shadow-md hover:shadow-lg transition">
            <h3 className="mb-3 text-xl font-semibold">Web Application Development</h3>
            <p className="text-sm text-muted-foreground">
              Building scalable, maintainable web applications tailored to business needs using React, Next.js, and Node.js.
            </p>
          </div>
          <div className="rounded-lg bg-muted p-6 shadow-md hover:shadow-lg transition">
            <h3 className="mb-3 text-xl font-semibold">System Architecture & Microservices</h3>
            <p className="text-sm text-muted-foreground">
              Designing distributed systems and microservices architecture for high availability and performance.
            </p>
          </div>
          <div className="rounded-lg bg-muted p-6 shadow-md hover:shadow-lg transition">
            <h3 className="mb-3 text-xl font-semibold">Mentorship & Leadership</h3>
            <p className="text-sm text-muted-foreground">
              Leading development teams, code reviews, and mentoring junior engineers to build high-performing teams.
            </p>
          </div>
        </section>

        {/* Skills / Tech Stack */}
        <section className="mt-20 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
          <div className="flex flex-wrap justify-center gap-5 text-muted-foreground text-sm font-semibold">
            {[
              "TypeScript",
              "JavaScript",
              "React",
              "Next.js",
              "Node.js",
              "GraphQL",
              "Docker",
              "AWS",
              "Jest",
              "Tailwind CSS",
              "Microservices",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-muted px-4 py-2 rounded-full shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience / Impact Highlights */}
        <section className="mt-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="rounded-lg bg-muted p-6 text-center">
            <h3 className="mb-2 text-xl font-semibold">Led a team of 8 developers</h3>
            <p className="text-sm text-muted-foreground">
              Successfully delivered a complex SaaS platform with 99.9% uptime SLA.
            </p>
          </div>
          <div className="rounded-lg bg-muted p-6 text-center">
            <h3 className="mb-2 text-xl font-semibold">Scaled infrastructure</h3>
            <p className="text-sm text-muted-foreground">
              Improved app load time by 40% and cut hosting costs by 25%.
            </p>
          </div>
          <div className="rounded-lg bg-muted p-6 text-center">
            <h3 className="mb-2 text-xl font-semibold">Mentored junior engineers</h3>
            <p className="text-sm text-muted-foreground">
              Empowered team growth with regular workshops and 1:1 coaching.
            </p>
          </div>
        </section>

        {/* Contact / Call To Action */}
        <section
          id="contact"
          className="mt-24 bg-muted rounded-lg p-10 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="mb-8 text-lg text-muted-foreground max-w-xl mx-auto">
            Interested in collaborating or want to know more? Reach out for a chat.
          </p>
          <Button
            variant="default"
            size="lg"
            asChild
          >
            <a href="mailto:chirag@example.com" className="inline-block">
              Contact Me
            </a>
          </Button>
        </section>
      </main>
    </div>
  );
}
