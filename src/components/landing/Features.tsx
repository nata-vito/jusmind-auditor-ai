import { motion } from "framer-motion";
import { Zap, TrafficCone, SearchCheck, FileBarChart } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Leitura Integral",
    desc: 'Esqueça o "skimming". O JusMind lê todas as páginas, anexos e letras miúdas.',
  },
  {
    icon: TrafficCone,
    title: "Matriz de Risco",
    desc: "Identificação instantânea de Deal Breakers (Alto), Pontos de Atenção (Médio) e Cláusulas Padrão.",
  },
  {
    icon: SearchCheck,
    title: "Detector de Omissões",
    desc: "Descubra não apenas o que está ruim, mas o que falta no contrato para blindar sua empresa.",
  },
  {
    icon: FileBarChart,
    title: "Relatório Executivo",
    desc: 'Saída padronizada, direta ao ponto, focada no negócio — não em "juridiquês".',
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold)] mb-3">Capabilities</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            Engenharia jurídica de <span className="text-gradient-gold italic">elite</span>, automatizada.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover:border-[var(--gold)]/30 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-[var(--gold)]/20 to-[var(--gold)]/5 border border-[var(--gold)]/20 flex items-center justify-center mb-5 group-hover:shadow-[var(--shadow-gold)] transition-shadow">
                <f.icon className="h-5 w-5 text-[var(--gold)]" strokeWidth={2} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
