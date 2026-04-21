import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Lock, Sparkles, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SURVEY_URL = "https://tally.so/r/D4vdRl";

export function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 🔴 IMPORTANTE: Substitua esta URL pela sua URL do Webhook do Make.com
      const WEBHOOK_URL = "https://hook.us2.make.com/7ym9ndd49rg6jdcj0us6r8fx43gj4qv7";
      
      if (WEBHOOK_URL.includes("SUA_CHAVE")) {
        // Modo de demonstração (se a URL não foi configurada ainda)
        await new Promise(resolve => setTimeout(resolve, 900));
        console.warn("Webhook não configurado. Simulando envio de:", { name, email });
      } else {
        // Envio real para o Webhook
        await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, source: "JusMind MVP" }),
        });
      }

      setLoading(false);
      setDone(true);
      toast.success("Você está na lista!", {
        description: "Confira seu próximo passo abaixo.",
      });
    } catch (error) {
      console.error(error);
      setLoading(false);
      toast.error("Erro ao enviar", {
        description: "Ocorreu um erro. Por favor, tente novamente.",
      });
    }
  };

  return (
    <section id="lead" className="relative py-24 md:py-32">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--gradient-hero)" }} />

      <div className="relative mx-auto max-w-2xl px-4">
        {!done && (
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
        )}

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-strong rounded-3xl p-8 md:p-10 shadow-[var(--shadow-elegant)] relative overflow-hidden"
        >
          <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-[var(--gold)]/10 blur-3xl pointer-events-none" />

          {done ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center py-4 relative"
            >
              <div className="mx-auto mb-5 inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium">
                <Sparkles className="h-3.5 w-3.5 text-[var(--gold)]" />
                <span>Lista de espera confirmada</span>
              </div>

              <h3 className="font-display text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
                Inscrição Confirmada! <span className="inline-block">🎉</span>
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
                Você acaba de entrar para a lista de espera. Quer{" "}
                <span className="text-foreground font-medium">furar a fila</span> e ganhar{" "}
                <span className="text-[var(--gold)] font-semibold">10 análises completas de contratos (100% gratuitas)</span>{" "}
                no lançamento?
              </p>

              <div className="mt-8 relative inline-block group">
                {/* Glow ring */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[var(--gold)] via-[var(--gold-soft)] to-[var(--gold)] opacity-60 blur-lg group-hover:opacity-100 transition-opacity animate-pulse" />
                <Button
                  asChild
                  className="relative h-13 px-7 py-3 bg-background border-2 border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--primary-foreground)] font-semibold text-base shadow-[var(--shadow-gold)] transition-colors"
                >
                  <a href={SURVEY_URL} target="_blank" rel="noopener noreferrer">
                    Responder Pesquisa de Diagnóstico (2 min)
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              <p className="mt-5 text-xs text-muted-foreground">
                Leva menos de 2 minutos · Suas respostas moldam o produto
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 relative">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm">Nome</Label>
                <Input
                  id="name"
                  required
                  placeholder="Maria Silva"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                    Garantir Acesso Antecipado
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
