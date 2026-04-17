import { useEffect, useState } from "react";
import { Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SECTIONS = ["features", "how", "lead"] as const;

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const detect = () => {
      const probe = window.innerHeight * 0.3; // linha de referência
      let current = "";
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= probe && rect.bottom > probe) {
          current = id;
          break;
        }
      }
      setActiveSection(current);
    };

    detect();
    window.addEventListener("scroll", detect, { passive: true });
    window.addEventListener("resize", detect);
    return () => {
      window.removeEventListener("scroll", detect);
      window.removeEventListener("resize", detect);
    };
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

          <div className="hidden md:flex items-center gap-2 text-sm">
            {[
              { id: "features", label: "O Problema" },
              { id: "how", label: "Como Funciona" },
              { id: "lead", label: "Acesso Antecipado" },
            ].map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={cn(
                    "px-2 py-1 transition-all",
                    isActive
                      ? "text-white font-semibold [text-shadow:0_0_8px_color-mix(in_oklab,var(--gold)_55%,transparent)]"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                </button>
              );
            })}
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
