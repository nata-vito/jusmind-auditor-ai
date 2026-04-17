import { useEffect, useState } from "react";
import { Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SECTIONS = ["hero", "features", "how", "lead"] as const;

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("hero");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <nav className="flex items-center justify-between rounded-2xl px-5 py-3 border border-white/10 bg-background/60 backdrop-blur-xl backdrop-saturate-150 shadow-lg supports-[backdrop-filter]:bg-background/40">
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-2 group"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--gold-soft)] to-[var(--gold)] text-[var(--primary-foreground)] shadow-[var(--shadow-gold)] transition-transform group-hover:scale-105">
              <Scale className="h-4 w-4" strokeWidth={2.5} />
            </span>
            <span className="font-display text-2xl font-semibold tracking-tight">
              Jus<span className="text-gradient-gold">Mind</span>
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <button onClick={() => scrollTo("features")} className="hover:text-foreground transition-colors">Features</button>
            <button onClick={() => scrollTo("how")} className="hover:text-foreground transition-colors">How it Works</button>
            <button onClick={() => scrollTo("pricing")} className="hover:text-foreground transition-colors">Pricing</button>
          </div>

          <Button
            onClick={() => scrollTo("lead")}
            className="bg-gradient-to-r from-[var(--gold-soft)] to-[var(--gold)] text-[var(--primary-foreground)] hover:opacity-90 shadow-[var(--shadow-gold)] font-medium"
          >
            Solicitar Acesso
          </Button>
        </nav>
      </div>
    </header>
  );
}
