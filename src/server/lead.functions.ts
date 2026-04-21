import { createServerFn } from "@tanstack/react-start";

export const submitLead = createServerFn({ method: "POST" })
  .validator((data: { name: string; email: string; source: string }) => data)
  .handler(async ({ data }) => {
    // Busca a variável de ambiente segura (apenas no servidor)
    const WEBHOOK_URL = process.env.MAKE_WEBHOOK_URL;

    if (!WEBHOOK_URL || WEBHOOK_URL.includes("SUA_CHAVE")) {
      await new Promise((resolve) => setTimeout(resolve, 900));
      console.warn("Webhook não configurado. Simulando envio seguro.");
      return { success: true };
    }

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("Falha na resposta do Webhook");
      
      return { success: true };
    } catch (e) {
      console.error(e);
      throw new Error("Erro ao processar o lead no servidor.");
    }
  });
