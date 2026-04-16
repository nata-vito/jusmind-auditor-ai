import { motion } from "framer-motion";
import { Upload, BrainCircuit, FileCheck2 } from "lucide-react";

const steps = [
  { icon: Upload, title: "Upload do contrato", desc: "Envie o arquivo em PDF ou Word. Sem limites de tamanho." },
  { icon: BrainCircuit, title: "IA processa e cruza dados", desc: "O JusMind analisa cláusulas, riscos e omissões com base jurídica." },
  { icon: FileCheck2, title: "Relatório com recomendações", desc: "Receba uma auditoria completa pronta para a tomada de decisão." },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold)] mb-3">Workflow</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
            Três passos. <span className="text-gradient-gold italic">Zero fricção.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent" />

          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="relative mx-auto mb-6 h-16 w-16 rounded-2xl glass-strong flex items-center justify-center">
                <s.icon className="h-7 w-7 text-[var(--gold)]" strokeWidth={1.8} />
                <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-gradient-to-br from-[var(--gold-soft)] to-[var(--gold)] text-[var(--primary-foreground)] text-xs font-bold flex items-center justify-center shadow-[var(--shadow-gold)]">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-display text-2xl font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
