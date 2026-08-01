# Portfólio Maria Clara Pereira — React + TypeScript + Tailwind (Vite)

## Como rodar

```bash
npm install
npm run dev
```

Abre em http://localhost:5173

## Build de produção

```bash
npm run build
npm run preview
```

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS (utilitários — sem CSS custom além dos diretivas @tailwind)

## Arquitetura

```
src/
  components/     um componente por arquivo, responsabilidade única
    Navbar.tsx
    BackgroundBlobs.tsx
    SectionHeading.tsx     reutilizado por About/Projects/Skills/Experience
    Hero.tsx
    About.tsx / HighlightCard.tsx
    Projects.tsx / ProjectCard.tsx
    Skills.tsx / SkillGroupCard.tsx
    Experience.tsx / ExperienceItem.tsx
    Contact.tsx
    Footer.tsx
  data/           conteúdo tipado, sem JSX — edite aqui para atualizar textos/links
    about.ts
    projects.ts
    skills.ts
    experience.ts
    socialLinks.ts
  types.ts        interfaces compartilhadas (AboutHighlight, Project, SkillGroup, ExperienceEntry, SocialLinks)
  assets/         imagens (foto de perfil, screenshots dos projetos)
  App.tsx         composição das seções, sem lógica própria
  main.tsx        bootstrap do React
```

Princípios seguidos:
- **Separação de dados e apresentação**: conteúdo (`data/`) tipado via `types.ts`, nunca misturado com JSX de layout.
- **Um componente, uma responsabilidade**: seções (`Projects`, `Skills`, `Experience`) orquestram listas; os itens (`ProjectCard`, `SkillGroupCard`, `ExperienceItem`) cuidam da apresentação individual.
- **Estilo via Tailwind**: cores da marca (roxo/violeta) e fontes registradas em `tailwind.config.js` (`primary`, `primary-dark`, `primary-light`, `primary-pale`, `ink`, `font-heading`, `font-body`) — sem CSS solto.
- **Tipagem estrita**: `tsconfig.json` com `strict: true`.

## Editar conteúdo

- Projetos, skills, experiência e links sociais: edite os arquivos em `src/data/`.
- Paleta e tipografia: edite `tailwind.config.js`.
- Layout de uma seção específica: edite o componente correspondente em `src/components/`.
