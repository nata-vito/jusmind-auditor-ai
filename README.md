<div align="center">
  <img src="public/favicon.svg" alt="JusMind Logo" width="80" height="80">
  <h1 align="center">JusMind Auditor AI</h1>
  <p align="center">
    <strong>Auditoria Contratual com Inteligência Artificial. Precisão de Big Law em Segundos.</strong>
  </p>
</div>

---

## 🎯 Sobre o Projeto

O **JusMind** é uma plataforma SaaS (Software as a Service) voltada para a auditoria inteligente de contratos jurídicos. Este repositório contém a versão de **Validação de Mercado (MVP)** focada em testar a proposta de valor, apresentar a interface (UI/UX) de alta fidelidade e captar leads qualificados.

## ✨ Funcionalidades do MVP

- **Landing Page de Alta Conversão:** Interface elegante com animações suaves e design premium corporativo.
- **Captura de Leads Automática:** Integração serverless via Webhook (Make.com) enviando os leads diretamente para uma planilha do Google Sheets.
- **Micro-interações:** Design focado na experiência do usuário para maximizar as conversões na fase de Beta Fechada.
- **Performance Optimizada:** Construído com o moderno ecossistema TanStack para carregamentos instantâneos.

## 🛠 Tecnologias Utilizadas

A stack foi escolhida sob a arquitetura *Antigravity Kit* para oferecer performance máxima, código limpo e facilidade de deploy:

- **Framework Core:** React 19 + Vite
- **Roteamento Avançado:** @tanstack/react-start & @tanstack/react-router
- **Estilização:** Tailwind CSS v4 (Design System customizado)
- **Componentes Acessíveis:** Radix UI primitives
- **Animações:** Framer Motion
- **Ícones:** Lucide React
- **Deploy:** Cloudflare Pages (via `wrangler.jsonc`)

## 🚀 Como Executar Localmente

Siga os passos abaixo para rodar o projeto na sua máquina em menos de 2 minutos:

### Pré-requisitos
- Node.js versão 20 ou superior.

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/jusmind-auditor-ai.git
   cd jusmind-auditor-ai
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador**
   Abra `http://localhost:5173` (ou a porta informada no seu terminal).

## 🔗 Integração do Formulário de Leads (Webhook)

O formulário de captura de leads na Landing Page (`src/components/landing/LeadForm.tsx`) não requer um backend próprio. Ele está integrado ao Make.com.
Para testar a integração:
1. Verifique se a variável `WEBHOOK_URL` está preenchida com a sua URL do cenário do Make.com.
2. Certifique-se de que o cenário no Make está ativo ("ON").
3. Preencha os dados e verifique sua planilha no Google Sheets.

## 🤝 Roadmap & Próximos Passos (Fase 2)

Após a validação bem-sucedida do mercado, o desenvolvimento avançará para:
- Conexão com Supabase/Firebase para autenticação de usuários e banco de dados relacional.
- Integração direta com a API de Inteligência Artificial (OpenAI/Anthropic/Gemini) para o motor de análise real dos PDFs contratuais.
- Criação das rotas privadas e do Painel do Auditor (Dashboard real).

---
<div align="center">
  <sub>Construído com excelência pela equipe <b>JusMind</b>.</sub>
</div>
