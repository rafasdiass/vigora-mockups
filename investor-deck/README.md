# Vigora — Deck Investidor

Apresentação para investidores da Vigora (captação R$ 25 mil / 5% equity).

## Estrutura de arquivos

```
investor-deck/
├── index.html      # Deck principal (12 slides)
├── styles.css      # Estilos e animações
├── script.js       # Navegação e interatividade
└── README.md       # Este arquivo
```

## Como usar localmente

Abra o arquivo `index.html` diretamente no navegador. Não requer servidor.

## Deploy no GitHub Pages

1. Faça push para a branch `gh-pages`:
   ```bash
   git checkout -b gh-pages
   git push origin gh-pages
   ```

2. Configure o GitHub Pages:
   - Vá em Settings → Pages
   - Source: branch `gh-pages`, pasta `/ (root)`
   - Save

3. URL final: `https://rafasdiass.github.io/vigora-mockups/investor-deck/`

## Navegação

- **Setas do teclado**: ← → para navegar entre slides
- **Barra de espaço**: próximo slide
- **Touch swipe**: deslize horizontalmente em dispositivos móveis
- **Hash URL**: acesse diretamente qualquer slide via `#slide-1`, `#slide-2`, etc.

## Impressão/PDF

O deck é print-friendly. Use `Ctrl+P` (ou `Cmd+P` no Mac) para imprimir ou salvar como PDF. Cores e animações são otimizadas para impressão.

## Acessibilidade

- Conforme WCAG 2.1 nível AA
- Contraste de cores adequado
- Navegação por teclado completa
- Semântica HTML correta
- Suporte a leitores de tela

## Créditos

- **Identidade visual**: Vigora C4
- **Implementação**: Quiron + Íris (agentes Olimpo)
