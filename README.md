<h1 align="center"> Planej.ai </h1>

<div align="center"><div/>

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

<div align="left"><div/>

O Planej.ai é uma aplicação web de planejamento financeiro pessoal. O usuário preenche um formulário com informações sobre sua renda, gastos e uma meta financeira (como uma viagem ou a compra de um bem), e a aplicação usa inteligência artificial para gerar um diagnóstico personalizado com sugestões práticas, ideias de renda extra e um plano de ação.

Tudo funciona diretamente no navegador: sem backend, sem banco de dados remoto. Os dados são salvos no localStorage e as análises são geradas em tempo real pela API do Google Gemini.


## ✅ Funcionalidades
- Cadastro de simulações financeiras;
- Cálculo automático da economia mensal necessária;
- Insight Financeiro Personalizado;
- Visualização detalhada de cada simulação;
- Histórico de simulações armazenadas no navegador;
- Exclusão de simulações;
- Interface responsiva para dispositivos móveis e desktop;

## 🚀Demonstração de uso

<div align="center"><div/>

https://github.com/user-attachments/assets/80305022-e688-4a01-b0b8-ba63722e9220

<div align="left"><div/>


## 🧩Ferramentas de desenvolvimento

<div align="center"><div/>


| 🎸 Tecnologias Utilizadas                                                                                                | Descrição                                                                                         |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)                          | Linguagem de estilo                                                                               |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)        | Linguagem de programação                                                                          |
| ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)                       | Biblioteca JavaScript para construir interfaces.                                                  |
| ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)                    | Ferramenta de build de aplicações front-end.                                                      |
| ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)                       | Controle de versão.                                                                               |
| ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)              | Hospedagem de código e colaboração entre desenvolvedores.                         |


##

| 📚Bibliotecas Utilizadas                                                                                                              | Descrição                                   |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------|
| ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)   | Gerencia rotas em aplicações React.         |
| ![Lucide React](https://img.shields.io/badge/Lucide_React-F56565?style=for-the-badge&logo=lucide&logoColor=white) | Biblioteca de ícones SVG para aplicações React. |
| ![React Loading Skeleton](https://img.shields.io/badge/React_Loading_Skeleton-06B6D4?style=for-the-badge&logo=react&logoColor=white) | Exibe skeletons (placeholders de carregamento) durante a busca de dados. |

##

 
| 🌎 API's Utilizadas                                                                                                                | Descrição                                   |
|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------|
| ![Google Gemini](https://img.shields.io/badge/Google_Gemini-8E75B2?style=for-the-badge&logo=googlegemini&logoColor=white)                  | API de inteligência artificial utilizada para gerar insights e respostas contextualizadas. |


<div align="left"><div/>

## 📂 Estrutura do projeto

```text

planejai/
├── public/
│   ├── favicon.svg           # Ícone da aba do navegador
│   └── icons.svg             # Sprite de ícones SVG
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── piggy-bank.png  # Imagem ilustrativa (hero)
│   ├── components/
│   │   ├── features/
│   │   │   ├── History/
│   │   │   │   ├── HistoryCard.tsx
│   │   │   ├── Insights/       # Componentes de exibição dos insights da IA
│   │   │   │   ├── Content.tsx
│   │   │   │   └── Error.tsx
│   │   │   ├── Simulation/     # Componentes do formulário multi-step
│   │   │   │   ├── Form.tsx
│   │   │   │   ├── FormStep.tsx
│   │   │   │   ├── Hero.tsx
│   │   │   │   └── Progress.tsx
│   │   │   └── SimulationResults/  # Componentes da página de resultados
│   │   │       ├── AIInsightCardProps.tsx
│   │   │       └── Card.tsx
│   │   ├── layout/
│   │   │   └── RootLayout.tsx  # Layout raiz com Header
│   │   └── shared/             # Componentes reutilizáveis
│   │       ├── Button.tsx
│   │       ├── Divider.tsx
│   │       ├── Header.tsx
│   │       ├── Input.tsx
│   │       └── PageHero.tsx
│   ├── context/
│   │   └── theme/
│   │       ├── ThemeContext.tsx   # Contexto de tema (claro/escuro)
│   │       └── ThemeProvider.tsx  # Provider do contexto de tema
│   ├── data/
│   │   ├── aiPrompt.ts       # Montagem do prompt para o Gemini
│   │   └── simulation.ts     # Dados e configuração do formulário
│   ├── hooks/
│   │   ├── useInsight.tsx         # Hook de chamada à API do Gemini
│   │   ├── useSimulationStorage.tsx  # Hook de leitura/escrita no localStorage
│   │   └── useTheme.tsx           # Hook de acesso ao contexto de tema
│   ├── pages/
│   │   ├── SimulationFormPage.tsx    # Página do formulário
│   │   └── SimulationHistoryPage.tsx # Página de histórico
│   │   └── SimulationResultsPage.tsx # Página de resultados
│   ├── services/
│   │   └── aiService.ts      # Chamada HTTP à API do Google Gemini
│   ├── styles/
│   │   └── theme.css         # Variáveis CSS de tema (claro/escuro)
│   ├── utils/
│   │   ├── currency.ts       # Máscara e formatação de moeda
│   │   └── simulation.ts     # Utilitários de simulação
│   ├── App.tsx               # Componente raiz
│   ├── index.css             # Estilos globais e imports
│   ├── main.tsx              # Entry point da aplicação
│   └── router.tsx            # Definição das rotas
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts

```

## 🔨Construção e instalação de dependências

1. No seu terminal, clone o repositório;
```
git clone https://github.com/BrunoViscardi/planejai-Desafio_DIO
```

2. Navegue até o diretório do projeto;
```
cd planejai
```

3. Instale as dependências;
```
npm install
```

4. Inicie o Visual Studio Code;
```
code .
```

5. Configure o arquivo .env com a chave da API do Google Gemini;
```
   VITE_GEMINI_API_KEY=
```


## ▶️Execução

1. Gere a versão de produção

```bash
npm run build
```

2. Visualize a versão de produção localmente:

```bash
npm run preview
```

## 📱 Responsividade

A interface foi desenvolvida seguindo a abordagem **Mobile First**, utilizando os breakpoints do Tailwind CSS para adaptação entre dispositivos móveis, tablets e desktops.

---


