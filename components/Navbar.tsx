import { ThemeToggle } from "@/components/theme/theme-toggle";

const brandName = "Panda";

export const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-10 pt-8"><nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex"><a href="#about" className="transition-colors hover:text-foreground">About</a><a href="#experience" className="transition-colors hover:text-foreground">Experience</a><a href="#projects" className="transition-colors hover:text-foreground">Projects</a><a href="#contact" className="transition-colors hover:text-foreground">Contact</a></nav>
      <span className="text-[22px] font-bold tracking-tight">Chirag Dodiya</span>
      <ThemeToggle />
    </header>);

};