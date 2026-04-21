import { ThemeToggle } from "@/components/theme/theme-toggle";

const brandName = "Panda";

export const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-10 pt-8"><nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex"><a href={"#overview"} className="transition-colors hover:text-foreground">Overview</a><a href={"#accounts"} className="transition-colors hover:text-foreground">Accounts</a><a href={"#deals"} className="transition-colors hover:text-foreground">Deals</a><a href={"#tasks"} className="transition-colors hover:text-foreground">Tasks</a><a href="#reports" className="transition-colors hover:text-foreground">Reports</a><a href="#settings" className="transition-colors hover:text-foreground">Settings</a></nav>
      <span className="text-[22px] font-bold tracking-tight">CRM Control</span>
      <ThemeToggle />
    </header>);

};