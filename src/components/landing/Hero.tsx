import { motion } from "framer-motion";
import { ArrowRight, Sparkles, AlertTriangle, FileText, ShieldAlert, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToLead = () => document.getElementById("lead")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
              <Sparkles className="h-3.5 w-3.5 text-[var(--gold)]" />
              <span>Senior Contract Auditor · Powered by AI</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight">
              Auditoria Contratual com{" "}
              <span className="text-gradient-gold italic">Precisão de Big Law</span>.
              <br />
              <span className="text-muted-foreground">Em Segundos.</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              A inteligência artificial que lê, analisa e expõe os riscos ocultos dos seus contratos
              <span className="text-foreground"> antes que você assine</span>. Proteja seu negócio com o JusMind.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                onClick={scrollToLead}
                className="group bg-gradient-to-r from-[var(--gold-soft)] to-[var(--gold)] text-[var(--primary-foreground)] hover:opacity-90 shadow-[var(--shadow-gold)] font-semibold h-12 px-6 text-base"
              >
                Quero Acesso Antecipado
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-[var(--risk-low)]" />
                Beta fechada · Vagas limitadas
              </div>
            </div>
          </motion.div>

          {/* Right — Contract scan mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-strong rounded-3xl p-6 shadow-[var(--shadow-elegant)] relative">
              {/* Header */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-white/10">
                <FileText className="h-4 w-4 text-[var(--gold)]" />
                <span className="text-sm font-medium">Contrato_M&A_v3.pdf</span>
                <span className="ml-auto text-xs text-muted-foreground flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--risk-low)] animate-pulse" />
                  Analisando...
                </span>
              </div>

              {/* Fake doc lines */}
              <div className="space-y-2.5">
                {[100, 92, 78, 95, 60, 88, 70, 96, 82].map((w, i) => (
                  <div
                    key={i}
                    className="h-2.5 rounded-full bg-white/5"
                    style={{ width: `${w}%` }}
                  />
                ))}
                {/* Highlighted risky line */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.4 }}
                  className="h-2.5 rounded-full bg-[var(--risk-high)]/40 border border-[var(--risk-high)]/60"
                  style={{ width: "85%" }}
                />
                <div className="h-2.5 rounded-full bg-white/5" style={{ width: "73%" }} />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4, duration: 0.4 }}
                  className="h-2.5 rounded-full bg-[var(--risk-mid)]/40 border border-[var(--risk-mid)]/60"
                  style={{ width: "68%" }}
                />
              </div>

              {/* Floating tags */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute -right-3 top-32 glass-strong rounded-xl px-3 py-2 flex items-center gap-2 shadow-[var(--shadow-elegant)]"
              >
                <span className="h-2 w-2 rounded-full bg-[var(--risk-high)]" />
                <span className="text-xs font-semibold">🔴 Risco Alto</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6 }}
                className="absolute -left-4 bottom-20 glass-strong rounded-xl px-3 py-2 flex items-center gap-2 shadow-[var(--shadow-elegant)]"
              >
                <ShieldAlert className="h-3.5 w-3.5 text-[var(--gold)]" />
                <span className="text-xs font-semibold">Omissão Detectada</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 }}
                className="absolute -right-6 -bottom-4 glass-strong rounded-xl px-3 py-2 flex items-center gap-2 shadow-[var(--shadow-elegant)]"
              >
                <AlertTriangle className="h-3.5 w-3.5 text-[var(--risk-mid)]" />
                <span className="text-xs font-semibold">Cláusula Ambígua</span>
              </motion.div>
            </div>

            {/* Glow */}
            <div className="absolute -inset-8 -z-10 bg-[var(--gold)]/10 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
