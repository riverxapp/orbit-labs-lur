import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-6 py-16 md:px-8 md:py-24 lg:py-32">
        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-border/60 bg-muted/30 p-6 shadow-sm sm:p-8">
            <p className="inline-flex items-center rounded-full border border-border/60 bg-background px-4 py-1 text-sm font-medium text-muted-foreground">
              Internal CRM dashboard
            </p>
            <h1 className="mt-6 max-w-2xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Revenue visibility for the teams moving deals forward
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Monitor pipeline health, priority accounts, open tasks, and recent sales activity in one polished command center built for fast internal decisions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="default" size="lg" asChild>
                <a href="#pipeline">Review pipeline</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#tasks">View reminders</a>
              </Button>
            </div>
            <dl className="mt-10 grid gap-4 sm:grid-cols-3">
              {[{ label: "Active deals", value: "128" }, { label: "Pipeline coverage", value: "$4.8M" }, { label: "Closing this week", value: "18" }].map((item) => <div key={item.label} className="rounded-2xl border border-border/60 bg-background p-4">
                  <dt className="text-sm text-muted-foreground">{item.label}</dt>
                  <dd className="mt-1 text-2xl font-bold tracking-tight">{item.value}</dd>
                </div>)}
            </dl>
          </div>
          <aside className="grid gap-6 rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Today at a glance</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[{ label: "New leads", value: "24", delta: "+12%" },
                { label: "Stage conversion", value: "32%", delta: "+4.1%" },
                { label: "Avg. deal size", value: "$42k", delta: "+8%" },
                { label: "CSAT", value: "4.8/5", delta: "+0.2" }].
                map((item) =>
                <div key={item.label} className="rounded-2xl border border-border/60 bg-muted/40 p-4">
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <div className="mt-2 flex items-end justify-between gap-3">
                      <span className="text-2xl font-bold tracking-tight">{item.value}</span>
                      <span className="text-xs font-medium text-emerald-600">{item.delta}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="rounded-2xl border border-border/60 bg-muted/30 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Recent alert</p>
              <h2 className="mt-3 text-lg font-semibold">At-risk enterprise account needs follow-up</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Northstar Logistics has stalled in proposal review for 5 days. A tailored pricing update and exec check-in are recommended today.
              </p>
            </div>
          </aside>
        </section>

        <section className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <div id="activity" className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Recent activity</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight">Sales touchpoints and updates</h2>
              </div>
              <span className="rounded-full border border-border/60 bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">Live feed</span>
            </div>
            <div className="mt-6 space-y-4">
              {[
              { time: "9:42 AM", title: "Demo completed with Acme Health", text: "Stage advanced to solution review after stakeholder approval." },
              { time: "10:15 AM", title: "Proposal sent to Meridian Finance", text: "Included revised implementation timeline and volume discounting." },
              { time: "11:03 AM", title: "Lead score increased for Brightline", text: "Engagement with pricing pages and security docs spiked this morning." }].
              map((item) =>
              <div key={item.title} className="flex gap-4 rounded-2xl border border-border/60 bg-muted/30 p-4">
                  <div className="min-w-20 text-sm font-medium text-muted-foreground">{item.time}</div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div id="pipeline" className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Pipeline snapshot</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight">Deals by stage</h2>
            <div className="mt-6 space-y-4">
              {[
              { stage: "Discovery", count: 34, value: "$620k", width: "w-[72%]" },
              { stage: "Proposal", count: 21, value: "$1.4M", width: "w-[56%]" },
              { stage: "Negotiation", count: 13, value: "$1.1M", width: "w-[48%]" },
              { stage: "Closed Won", count: 9, value: "$980k", width: "w-[84%]" }].
              map((item) =>
              <div key={item.stage}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{item.stage}</span>
                    <span className="text-muted-foreground">{item.count} deals · {item.value}</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-muted">
                    <div className={`h-2 rounded-full bg-foreground ${item.width}`} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Customer preview</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight">Priority accounts</h2>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border/60">
              <div className="grid grid-cols-[1.2fr_0.9fr_0.8fr] gap-4 border-b border-border/60 bg-muted/40 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <span>Account</span>
                <span>Status</span>
                <span className="text-right">Owner</span>
              </div>
              {[
              { account: "Northstar Logistics", status: "At risk", owner: "Maya R." },
              { account: "Acme Health", status: "In review", owner: "Jordan K." },
              { account: "Meridian Finance", status: "Negotiation", owner: "Priya S." },
              { account: "Brightline Retail", status: "Qualified", owner: "Chris T." }].
              map((item, index) =>
              <div key={item.account} className={`grid grid-cols-[1.2fr_0.9fr_0.8fr] gap-4 px-4 py-4 text-sm ${index !== 3 ? "border-b border-border/60" : ""}`}>
                  <span className="font-medium">{item.account}</span>
                  <span className="text-muted-foreground">{item.status}</span>
                  <span className="text-right text-muted-foreground">{item.owner}</span>
                </div>
              )}
            </div>
          </div>
          <div id="tasks" className="rounded-3xl border border-border/60 bg-background p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Tasks and reminders</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight">Priority follow-ups</h2>
            <div className="mt-6 space-y-4">
              {[
              { title: "Send revised security deck to Acme Health", due: "Due today · 2:00 PM" },
              { title: "Confirm pricing call with Meridian Finance", due: "Due today · 4:30 PM" },
              { title: "Prep renewal summary for Northstar Logistics", due: "Tomorrow · 9:00 AM" },
              { title: "Update forecast notes for leadership review", due: "Tomorrow · 11:00 AM" }].
              map((item) =>
              <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-border/60 bg-muted/30 p-4">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-foreground" />
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.due}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>


















      
    </div>);}