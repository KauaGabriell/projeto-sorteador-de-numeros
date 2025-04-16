# Sistema de Cores - Projeto Sorteador de Números

Este projeto contém um sistema de cores CSS baseado nas variáveis da imagem de referência.

## Estrutura de Arquivos

- `index.html` - Página de exemplo básica
- `cores.html` - Página de demonstração das cores
- `css/styles.css` - Arquivo CSS com todas as variáveis e classes de utilidade

## Paleta de Cores

### Cores de Conteúdo
- `--content-primary: #FFFFFF`
- `--content-secondary: #C7C9CC`
- `--content-tertiary: #D9D9D9`
- `--content-brand: #C58DE7`
- `--color-inverse: #030203`

### Cores de Fundo
- `--background-primary: #020202`
- `--background-secondary: #111012`
- `--background-tertiary: #24222E`
- `--background-brand: #C58DE7`
- `--background-gray: #3D3D3D`

### Cores de Destaque
- `--accent-pink: #D586E0`
- `--accent-blue: #91A1FA`
- `--accent-green: #77C0AA`
- `--accent-lime: #D1DC97`
- `--accent-red: #E9A9B3`

### Gradientes
- `--gradient-border: linear-gradient(14.84deg, #D586E0 45.79%, #91A1FA 94.98%)`
- `--gradient-background: linear-gradient(98.93deg, #D586E0 0%, #91A1FA 100%)`
- `--gradient-content: linear-gradient(100%, #C7C9CC 0%, #3D3D3D 100%)`

## Como Usar

### Classes de Texto
```html
<p class="text-content-primary">Texto em cor primária</p>
<p class="text-content-secondary">Texto em cor secundária</p>
<p class="text-content-tertiary">Texto em cor terciária</p>
<p class="text-content-brand">Texto em cor da marca</p>
<p class="text-color-inverse">Texto em cor inversa</p>

<p class="text-accent-pink">Texto em rosa</p>
<p class="text-accent-blue">Texto em azul</p>
<p class="text-accent-green">Texto em verde</p>
<p class="text-accent-lime">Texto em lima</p>
<p class="text-accent-red">Texto em vermelho</p>
```

### Classes de Fundo
```html
<div class="bg-background-primary">Fundo primário</div>
<div class="bg-background-secondary">Fundo secundário</div>
<div class="bg-background-tertiary">Fundo terciário</div>
<div class="bg-background-brand">Fundo da marca</div>
<div class="bg-background-gray">Fundo cinza</div>

<div class="bg-accent-pink">Fundo rosa</div>
<div class="bg-accent-blue">Fundo azul</div>
<div class="bg-accent-green">Fundo verde</div>
<div class="bg-accent-lime">Fundo lima</div>
<div class="bg-accent-red">Fundo vermelho</div>
```

### Classes de Gradiente
```html
<div class="gradient-border">Gradiente de borda</div>
<div class="gradient-background">Gradiente de fundo</div>
<div class="gradient-content">Gradiente de conteúdo</div>
```

## Visualizar Demonstração

Abra o arquivo `cores.html` em seu navegador para visualizar todas as cores e gradientes disponíveis. 