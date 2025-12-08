## Análise SEO — Pontos críticos

### 1. Schema markup (prioridade alta)
Falta structured data. Adicione JSON-LD no `<head>`:

```html
<!-- Schema Markup para Personal Trainer -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Thalia Amorim",
  "jobTitle": "Personal Trainer",
  "description": "Especialista em treinamento de força, correção postural e fortalecimento funcional do core",
  "url": "https://seusite.com",
  "sameAs": [
    "https://www.instagram.com/thaliapersonalcore",
    "https://www.tiktok.com/@thaliapersonalcore",
    "https://www.youtube.com/@thaliamorimpersonalcore"
  ],
  "offers": [
    {
      "@type": "Offer",
      "name": "Programa Fortalecimento Inteligente",
      "price": "497.00",
      "priceCurrency": "BRL"
    },
    {
      "@type": "Offer",
      "name": "Consultoria Online Premium - Plano Semestral",
      "price": "997.00",
      "priceCurrency": "BRL"
    }
  ]
}
</script>

<!-- Schema para FAQ (se tiver seção de perguntas frequentes) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Como funciona o Programa de Fortalecimento Inteligente?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "O programa é focado em fortalecer o core, corrigir postura e eliminar dores através do Sistema 3C..."
    }
  }]
}
</script>
```

### 2. Canonical URL (prioridade alta)
Adicione no `<head>`:

```html
<link rel="canonical" href="https://seusite.com/" />
```

### 3. Meta tags faltando (prioridade alta)

```html
<!-- Idioma (já tem, mas verifique) -->
<html lang="pt-BR"> <!-- Use pt-BR maiúsculo -->

<!-- Viewport (já tem ✓) -->

<!-- Charset (já tem ✓) -->

<!-- Adicione estas: -->
<meta name="keywords" content="personal trainer, fortalecimento core, correção postural, diástase, treino gestante, pós-parto, dor nas costas, fortalecimento lombar">
<meta name="geo.region" content="BR">
<meta name="geo.placename" content="Brasil">

<!-- Previne indexação de versões mobile/desktop duplicadas -->
<meta name="mobile-web-app-capable" content="yes">
```

### 4. Open Graph incompleto (prioridade média)
Atualize com valores reais:

```html
<!-- Substitua os placeholders -->
<meta property="og:url" content="https://seusite.com/" />
<meta property="og:image" content="https://seusite.com/assets/img/og-image.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Thalia Amorim - Personal Trainer especialista em fortalecimento do core" />
<meta property="og:locale" content="pt_BR" />
<meta property="og:site_name" content="Thalia Amorim Personal Trainer" />
```

### 5. Hierarquia de headings (prioridade média)
Ajuste a estrutura:

```html
<!-- Hero: H1 está correto ✓ -->

<!-- Seção "Você se identifica?" -->
<h2>Você convive com isso?</h2>
<!-- Os artigos dentro deveriam ser h3, não h3 direto -->
<article>
  <h3>Dor Constante</h3> <!-- ✓ Correto -->
</article>

<!-- Sobre Mim: está correto com h2, h3 ✓ -->

<!-- Produtos: está correto com h2 ✓ -->
```

### 6. Alt text em imagens (prioridade alta)
Adicione alt descritivo na imagem do perfil:

```html
<!-- Atual: -->
<img src="/assets/img/img-2.jpeg" alt="Foto de Thalia Amorim, sua Personal Trainer" />

<!-- Melhor: -->
<img src="/assets/img/img-2.jpeg" 
     alt="Thalia Amorim, Personal Trainer especialista em fortalecimento do core e correção postural" 
     width="256" 
     height="256" />
```

### 7. Performance (prioridade alta)
Otimize fontes e scripts:

```html
<!-- Em vez de CDN do Tailwind (lento), use build local -->
<!-- Ou adicione preload para fontes críticas: -->
<link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap" as="style">
<link rel="preload" href="js/script.js" as="script">

<!-- Adicione defer/async nos scripts -->
<script src="js/script.js" defer></script>
```

### 8. Links internos e estrutura (prioridade média)
Melhore a navegação:

```html
<!-- Adicione um menu de navegação fixo no topo -->
<nav aria-label="Navegação principal">
  <a href="#programa-core">Programas</a>
  <a href="#consultoria">Consultoria</a>
  <a href="#maternidade">Maternidade</a>
  <a href="#sobre">Sobre</a>
</nav>

<!-- Adicione breadcrumbs (Schema markup também) -->
```

### 9. Conteúdo e keywords (prioridade média)
- Use variações de termos-chave naturalmente (ex.: "fortalecimento do core", "core forte", "fortalecimento core").
- Adicione uma seção de FAQ com perguntas comuns.
- Inclua depoimentos/testemunhos (com Schema markup).

### 10. Robots.txt e Sitemap (prioridade alta)
Crie `robots.txt`:

```
User-agent: *
Allow: /
Sitemap: https://seusite.com/sitemap.xml
```

E um `sitemap.xml` básico.

### 11. Velocidade de carregamento (prioridade alta)
- Use imagens WebP com fallback.
- Adicione `loading="lazy"` em imagens abaixo da dobra.
- Minimize CSS inline ou use build do Tailwind.

### 12. Acessibilidade (impacta SEO indiretamente)
- Adicione `aria-label` em botões sem texto claro.
- Use `role="button"` onde necessário.
- Garanta contraste adequado.

## Resumo de prioridades

1. Crítico: Schema markup, canonical URL, alt texts descritivos
2. Alto: Performance (fontes/scripts), meta tags completas, robots.txt/sitemap
3. Médio: Open Graph completo, estrutura de navegação, FAQ com Schema
