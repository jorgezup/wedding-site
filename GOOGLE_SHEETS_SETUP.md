# 📝 Configuração do Google Sheets para Confirmação de Presença

Este guia explica como configurar o Google Sheets para receber as confirmações de presença do seu site de casamento.

## 🔧 Passo 1: Criar a Planilha

1. Acesse [Google Sheets](https://sheets.google.com)
2. Crie uma nova planilha
3. Renomeie para "Confirmações de Presença - Casamento"
4. Na primeira linha (cabeçalho), adicione as colunas:

```
A1: Nome
B1: Convidado de
C1: Adultos
D1: Crianças
E1: Pequeninos
F1: Telefone
G1: Presença Confirmada
H1: Data/Hora (opcional)
```

## 🔑 Passo 2: Configurar Google Cloud Project

### 2.1 Criar Projeto
1. Acesse [Google Cloud Console](https://console.cloud.google.com)
2. Crie um novo projeto ou selecione um existente
3. Ative a **Google Sheets API**:
   - Vá em "APIs & Services" > "Library"
   - Pesquise por "Google Sheets API"
   - Clique em "Enable"

### 2.2 Criar Service Account
1. Vá em "APIs & Services" > "Credentials"
2. Clique em "Create Credentials" > "Service Account"
3. Preencha:
   - **Nome**: `wedding-site-sheets`
   - **Descrição**: `Service account para formulário de confirmação`
4. Clique em "Create and Continue"
5. Em "Roles", adicione: **Editor**
6. Clique em "Done"

### 2.3 Gerar Chave Privada
1. Na lista de Service Accounts, clique no que você criou
2. Vá na aba "Keys"
3. Clique em "Add Key" > "Create New Key"
4. Escolha formato **JSON**
5. Baixe o arquivo (será usado no próximo passo)

## 🔐 Passo 3: Configurar Variáveis de Ambiente

### 3.1 Informações da Chave JSON
Abra o arquivo JSON baixado e encontre:
- `client_email`: Email do service account
- `private_key`: Chave privada (começa com `-----BEGIN PRIVATE KEY-----`)

### 3.2 ID da Planilha
Na URL da sua planilha:
```
https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
```
O ID é a parte entre `/d/` e `/edit`: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`

### 3.3 Arquivo .env.local
Crie o arquivo `.env.local` na raiz do projeto:

```env
# Google Sheets Configuration
GOOGLE_CLIENT_EMAIL=seu-service-account@projeto.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nSUA_CHAVE_PRIVADA_AQUI\n-----END PRIVATE KEY-----"
GOOGLE_SHEET_ID=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
```

⚠️ **IMPORTANTE**: 
- Substitua pelas suas informações reais
- A `GOOGLE_PRIVATE_KEY` deve estar entre aspas duplas
- Mantenha as quebras de linha como `\n`

## 👥 Passo 4: Compartilhar Planilha

1. Na sua planilha do Google Sheets
2. Clique em "Share" (Compartilhar)
3. Adicione o email do service account como **Editor**:
   ```
   seu-service-account@projeto.iam.gserviceacount.com
   ```
4. Clique em "Send"

## 🧪 Passo 5: Testar

1. Execute o projeto: `npm run dev`
2. Acesse `http://localhost:3000`
3. Vá até a seção "Confirme sua Presença"
4. Preencha e envie o formulário
5. Verifique se os dados aparecem na planilha

## 🔒 Segurança

### ✅ Boas Práticas:
- ✅ Nunca commite o arquivo `.env.local`
- ✅ Use service account em vez de suas credenciais pessoais
- ✅ Dê apenas as permissões mínimas necessárias
- ✅ Para produção, configure as variáveis no seu provedor (Vercel, Netlify, etc.)

### 🚫 Evite:
- ❌ Expor as chaves no código fonte
- ❌ Usar sua conta pessoal do Google
- ❌ Dar permissões de "Owner" desnecessariamente

## 📊 Estrutura dos Dados

Os dados são salvos na planilha no seguinte formato:

| Nome | Convidado de | Adultos | Crianças | Pequeninos | Telefone | Presença Confirmada |
|------|--------------|---------|-----------|-------------|-----------|-------------------|
| João Silva | Jorge (Noivo) | 2 | 0 | 1 | (11) 99999-9999 | true |
| Maria Santos | Eiva (Noiva) | 1 | 1 | 0 | (21) 88888-8888 | false |

## 🛠️ Troubleshooting

### Erro: "The caller does not have permission"
- Verifique se compartilhou a planilha com o service account
- Confirme se o service account tem permissão de **Editor**

### Erro: "Unable to parse range"
- Verifique se o `GOOGLE_SHEET_ID` está correto
- Confirme se a planilha existe e está acessível

### Erro: "Invalid private key"
- Verifique se a `GOOGLE_PRIVATE_KEY` está formatada corretamente
- Confirme que tem as quebras de linha `\n`
- Verifique se está entre aspas duplas

### Erro: "Spreadsheet not found"
- Confirme o ID da planilha na URL
- Verifique se a planilha não foi deletada
- Confirme as permissões do service account

## 📱 Produção (Vercel)

Para deploy na Vercel:

1. Acesse o dashboard da Vercel
2. Vá em "Settings" > "Environment Variables"
3. Adicione as mesmas variáveis do `.env.local`:
   - `GOOGLE_CLIENT_EMAIL`
   - `GOOGLE_PRIVATE_KEY`
   - `GOOGLE_SHEET_ID`

## 🎉 Pronto!

Agora seu formulário de confirmação de presença está conectado ao Google Sheets!

Os convidados podem confirmar presença diretamente no site, e você pode acompanhar em tempo real na planilha.