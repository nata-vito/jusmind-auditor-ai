import { createServerFn } from "@tanstack/react-start";

export const submitLead = createServerFn({ method: "POST" })
  .handler(async ({ data }: any) => {
    const payload = data as { name: string; email: string; source: string };
    // No Cloudflare Workers, process.env não existe e causa erro 500.
    // Como esta função roda APENAS no servidor, é 100% seguro colocar a URL aqui,
    // pois esse código nunca é enviado para o navegador do usuário.
    const WEBHOOK_URL = "https://hook.us2.make.com/7ym9ndd49rg6jdcj0us6r8fx43gj4qv7";

    if (!WEBHOOK_URL || WEBHOOK_URL.includes("SUA_CHAVE")) {
      await new Promise((resolve) => setTimeout(resolve, 900));
      console.warn("Webhook não configurado. Simulando envio seguro.");
      return { success: true };
    }

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Falha na resposta do Webhook");
      
      return { success: true };
    } catch (e) {
      console.error(e);
      throw new Error("Erro ao processar o lead no servidor.");
    }
  });
