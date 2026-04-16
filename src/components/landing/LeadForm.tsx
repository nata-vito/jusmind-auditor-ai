import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Lock, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
      toast.success("Você está na lista!", {
        description: "Entraremos em contato com seu acesso prioritário em breve.",
      });
    }, 900);
  };

  return (
    <section id="lead" className="relative py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />

      <div className="relative mx-auto max-w-2xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold)] mb-3">Beta fechada</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
            Assuma o controle dos seus <span className="text-gradient-gold italic">contratos</span>.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            O JusMind está atualmente em fase beta fechada. Inscreva-se para garantir seu lugar na
            lista de espera e receber acesso prioritário.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-strong rounded-3xl p-8 md:p-10 shadow-[var(--shadow-elegant)] relative overflow-hidden"
        >
          <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-[var(--gold)]/10 blur-3xl pointer-events-none" />

          {done ? (
            <div className="text-center py-8 relative">
              <div className="mx-auto h-14 w-14 rounded-full bg-[var(--risk-low)]/15 border border-[var(--risk-low)]/40 flex items-center justify-center mb-4">
                <CheckCircle2 className="h-7 w-7 text-[var(--risk-low)]" />
              </div>
              <h3 className="font-display text-2xl font-semibold mb-2">Inscrição confirmada</h3>
              <p className="text-muted-foreground text-sm">
                Você receberá seu convite de acesso por e-mail em breve.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 relative">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm">Nome Completo</Label>
                <Input
                  id="name"
                  required
                  placeholder="Maria Silva"
                  className="h-12 bg-white/5 border-white/10 focus-visible:border-[var(--gold)]/50 focus-visible:ring-[var(--gold)]/20"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm">E-mail Corporativo</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="maria@empresa.com.br"
                  className="h-12 bg-white/5 border-white/10 focus-visible:border-[var(--gold)]/50 focus-visible:ring-[var(--gold)]/20"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role" className="text-sm">Cargo / Profissão</Label>
                <Input
                  id="role"
                  required
                  placeholder="Advogado, CEO, Founder..."
                  className="h-12 bg-white/5 border-white/10 focus-visible:border-[var(--gold)]/50 focus-visible:ring-[var(--gold)]/20"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-13 py-3 bg-gradient-to-r from-[var(--gold-soft)] to-[var(--gold)] text-[var(--primary-foreground)] hover:opacity-90 shadow-[var(--shadow-gold)] font-semibold text-base group"
              >
                {loading ? "Enviando..." : (
                  <>
                    Entrar para a Lista de Espera
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>

              <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-1.5">
                <Lock className="h-3 w-3" />
                Seus dados estão protegidos. Sem spam.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
