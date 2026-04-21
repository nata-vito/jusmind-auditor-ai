import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { LeadForm } from "@/components/landing/LeadForm";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "JusMind" },
      {
        name: "description",
        content:
          "JusMind é a IA que audita contratos com precisão de Big Law: lê tudo, sinaliza riscos e detecta omissões antes que você assine.",
      },
      { property: "og:title", content: "JusMind — Auditoria Contratual com IA" },
      {
        property: "og:description",
        content: "Senior Contract Auditor powered by AI. Beta fechada em andamento.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="dark min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <LeadForm />
      <Footer />
      <Toaster theme="dark" position="top-center" />
    </main>
  );
}
