import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex flex-1 flex-col px-6 py-16 md:py-24 lg:py-32">
        <section className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
            Crafting Digital Experiences That Inspire
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a developer passionate about building fast, scalable, and beautiful web applications.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <Button variant="default" size="lg">
              View Portfolio
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </section>

        <section className="mt-20 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="rounded-lg bg-muted p-6 text-center">
            <h3 className="mb-2 text-xl font-semibold">Web Development</h3>
            <p className="text-sm text-muted-foreground">
              Building modern, responsive sites with the latest technologies and best practices.
            </p>
          </div>
          <div className="rounded-lg bg-muted p-6 text-center">
            <h3 className="mb-2 text-xl font-semibold">UI/UX Design</h3>
            <p className="text-sm text-muted-foreground">
              Designing intuitive interfaces and seamless user experiences tailored to your audience.
            </p>
          </div>
          <div className="rounded-lg bg-muted p-6 text-center">
            <h3 className="mb-2 text-xl font-semibold">Performance Optimization</h3>
            <p className="text-sm text-muted-foreground">
              Ensuring fast load times and smooth interactions across all devices.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
