import { Scale } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 mt-10">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[var(--gold-soft)] to-[var(--gold)] text-[var(--primary-foreground)]">
            <Scale className="h-3.5 w-3.5" strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg font-semibold">
            Jus<span className="text-gradient-gold">Mind</span>
          </span>
        </div>

        <p className="text-xs text-muted-foreground">
          Copyright © 2026 JusMind. All rights reserved.
        </p>

        <div className="flex items-center gap-6 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
