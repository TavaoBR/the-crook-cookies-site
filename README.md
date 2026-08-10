# THE CROOK. — Landing Page

Landing page da marca **The Crook Cookies** (Aracaju/SE).

## Stack

- Vue 3 + Vite
- Tailwind CSS v4
- Flowbite / Flowbite Vue

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy (Railway)

Docker + Caddy servindo o `dist` estático. Deploy automático via GitHub Actions em push para `main` (ver `.github/workflows/deploy-railway.yml`).

### Setup no Railway

1. Criar um projeto/serviço no Railway apontando para este repositório (ou deploy via CLI/`railway up`).
2. Build: Dockerfile na raiz (Railway detecta automaticamente).
3. Gerar domínio público no serviço (ou configurar DNS customizado).

### Secrets / variáveis no GitHub

| Tipo | Nome | Descrição |
|---|---|---|
| Secret | `RAILWAY_TOKEN` | Token do Railway (Account/Project token) |
| Variable | `RAILWAY_SERVICE_NAME` | Nome do serviço no Railway (opcional) |
| Variable | `RAILWAY_ENVIRONMENT_NAME` | Ambiente (ex.: `production`, opcional) |

### Checklist pós-deploy

- [ ] `/health` responde 200
- [ ] Home carrega título, imagens e CTAs de WhatsApp
- [ ] Domínio customizado (se houver) aponta para o serviço Railway

## Contato (conversão)

- WhatsApp: (79) 99806-2898
- Instagram: [@thecrookcookies](https://www.instagram.com/thecrookcookies/)
- Endereço: Rua Vereador Deocleciano Ramos, 5 — Suíssa, Aracaju/SE
