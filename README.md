# 🎮 Games Suggest - Seu Hub de Sugestões

Este repositório faz parte da disciplina Desenvolvimento Front-End Avançado da PUC-Rio, integrante do curso de Pós-Graduação em Desenvolvimento Fullstack.

Uma plataforma web moderna e interativa para descobrir jogos incríveis curados pela nossa equipe apaixonada, desenvolvida com React e Vite.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?style=flat&logo=vite)
![React Router](https://img.shields.io/badge/React_Router-6.20.0-CA4245?style=flat&logo=react-router)

## 📋 Sobre o Projeto

Games Suggest é uma aplicação web que oferece sugestões de jogos curados pela nossa equipe apaixonada. Explore uma coleção selecionada de jogos organizados por plataforma, com filtros avançados e informações detalhadas. O projeto foi desenvolvido como parte da disciplina de Frontend Avançado, seguindo as melhores práticas de componentização e design responsivo.

### ✨ Funcionalidades Principais

- 🏠 **Página Inicial**: Visão geral da biblioteca com estatísticas e destaques
- 📚 **Biblioteca**: Catálogo completo com busca, filtros e ordenação
- 🎯 **Detalhes do Jogo**: Informações completas de cada título
- ⭐ **Lista de Desejos**: Gerenciamento de jogos desejados
- 🔍 **Busca em Tempo Real**: Encontre jogos rapidamente pelo título
- 🎨 **Design Responsivo**: Funciona perfeitamente em desktop, tablet e celular
- ⚡ **Feedback Visual**: Animações e notificações de ações do usuário

## 🛠️ Tecnologias Utilizadas

- **React 18.2.0** - Biblioteca JavaScript para construção de interfaces
- **React Router 6.20.0** - Gerenciamento de rotas e navegação
- **Vite 5.0.8** - Build tool e dev server rápido
- **CSS3** - Estilização com design moderno e responsivo
- **JavaScript (ES6+)** - Sem TypeScript, conforme requisito

## 📁 Estrutura do Projeto

```
frontendavancado/
├── public/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Alert/           # Componente de alertas
│   │   ├── Breadcrumb/      # Navegação estrutural
│   │   ├── Button/          # Botão customizado
│   │   ├── GameCard/        # Card de exibição de jogo
│   │   ├── Header/          # Cabeçalho com navegação
│   │   ├── LoadingSpinner/  # Indicador de carregamento
│   │   ├── Modal/           # Modal reutilizável
│   │   └── SearchBar/       # Barra de busca
│   ├── data/                # Dados mockados
│   │   ├── api.js           # Simulação de API
│   │   └── games.json       # Base de dados de jogos
│   ├── pages/               # Páginas da aplicação
│   │   ├── Home/            # Página inicial
│   │   ├── Biblioteca/      # Catálogo de jogos
│   │   ├── DetalhesJogo/    # Detalhes de um jogo
│   │   ├── Wishlist/        # Lista de desejos
│   │   └── NotFound/        # Página 404
│   ├── App.jsx              # Componente raiz com rotas
│   ├── App.css              # Estilos globais
│   └── main.jsx             # Ponto de entrada
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Instalação e Execução

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para Instalação

1. **Clone o repositório** (ou baixe os arquivos)

```bash
git clone <url-do-repositorio>
cd frontendavancado
```

2. **Instale as dependências**

```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
```

4. **Acesse a aplicação**

Abra seu navegador e acesse: `http://localhost:5173`

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm run preview` - Visualiza a versão de produção localmente

## 🎯 Requisitos Atendidos

### ✅ Componentização (3,5 pts)

- ✓ **8 componentes reutilizáveis criados:**
  1. Header - Cabeçalho com navegação
  2. GameCard - Card de jogo
  3. SearchBar - Barra de busca
  4. Button - Botão customizado
  5. LoadingSpinner - Indicador de carregamento
  6. Modal - Modal reutilizável
  7. Alert - Alertas de feedback
  8. Breadcrumb - Navegação estrutural

- ✓ **Componentes utilizados em múltiplas páginas**
- ✓ **Interface original com elementos personalizados**
- ✓ **Simulação de API com leitura de JSON**

### ✅ React e Roteamento (2,5 pts)

- ✓ **Uso correto de hooks:**
  - `useState` - Gerenciamento de estados
  - `useEffect` - Efeitos colaterais e carregamento de dados
  - `useParams` - Captura de parâmetros da URL (ID do jogo)
  - `useNavigate` - Navegação programática
  - `useLocation` - Leitura da URL atual e query params

- ✓ **4 rotas principais + rota 404:**
  - `/` - Home
  - `/biblioteca` - Biblioteca
  - `/jogo/:id` - Detalhes
  - `/wishlist` - Lista de Desejos
  - `*` - Página 404

### ✅ Usabilidade (2 pts)

- ✓ **Feedback visual:**
  - Loading spinners durante carregamento
  - Alertas de sucesso/erro
  - Animações em hover e transições
  - Modal de confirmação
  - Mensagens contextuais ("nenhum jogo encontrado")

- ✓ **Layout responsivo:**
  - Mobile (< 480px)
  - Tablet (< 768px)
  - Desktop (> 768px)

### ✅ Organização e Documentação (2 pts)

- ✓ Projeto no GitHub
- ✓ README.md completo com instruções
- ✓ Estrutura de pastas organizada
- ✓ Convenções de nomenclatura consistentes
- ✓ Comentários em código quando necessário

## 📱 Páginas da Aplicação

### 1. Home (`/`)
- Visão geral da biblioteca
- Estatísticas (total de jogos, plataformas, nota média)
- Destaques (top 3 jogos)
- Acesso rápido às plataformas

### 2. Biblioteca (`/biblioteca`)
- Catálogo completo de jogos
- Busca por título
- Filtro por plataforma
- Ordenação (A-Z, nota)
- Contador de resultados

### 3. Detalhes do Jogo (`/jogo/:id`)
- Breadcrumb de navegação
- Imagem grande da capa
- Avaliação com estrelas
- Comentário completo
- Informações detalhadas
- Jogos relacionados da mesma plataforma

### 4. Lista de Desejos (`/wishlist`)
- Jogos marcados como desejados
- Filtro por plataforma
- Ações de adicionar à biblioteca ou remover
- Estado vazio amigável

### 5. Página 404 (`/*`)
- Design criativo com tema de jogos
- Botões de navegação para Home e Biblioteca
- Animações divertidas

## 🎨 Design e UX

### Paleta de Cores

- **Primária**: Gradiente roxo/azul (#667eea → #764ba2)
- **Fundo**: #f5f5f5 e #ffffff
- **Texto**: #333333 e #666666
- **Sucesso**: #2ecc71
- **Erro**: #ff4757
- **Warning**: #ffd700

### Elementos Visuais

- Bordas arredondadas (8-12px)
- Sombras suaves para profundidade
- Animações sutis em hover
- Ícones emoji para identidade visual divertida

## 📊 Dados Mockados

A aplicação utiliza um arquivo JSON com 12 jogos distribuídos em 3 plataformas:

- **Nintendo** (4 jogos)
- **PC** (4 jogos)
- **PlayStation** (4 jogos)

A simulação de API inclui delay artificial para demonstrar estados de loading.

## 🔄 Hooks do React Router Utilizados

1. **useParams** - Captura o ID do jogo na URL para exibir detalhes
2. **useNavigate** - Redireciona usuário entre páginas programaticamente
3. **useLocation** - Lê query parameters para filtros e destaca link ativo

## 🌟 Diferenciais do Projeto

- Interface moderna e profissional
- Experiência de usuário fluida
- Feedback visual constante
- Design responsivo completo
- Componentização avançada
- Código limpo e organizado
- Documentação detalhada

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais como parte do curso de Frontend Avançado.

## 👨‍💻 Autor

Desenvolvido como projeto da disciplina de Frontend Avançado - PUC

---

⭐ Se você gostou deste projeto, considere dar uma estrela no repositório!
