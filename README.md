# 📦 Tirinha Embalagens - Sistema de Gestão

Este é um sistema de gerenciamento administrativo desenvolvido para a loja **Tirinha Embalagens**, especializada em caixas decoradas e embalagens para presentes. O projeto foi construído focando em uma arquitetura limpa, responsividade e conformidade com requisitos técnicos acadêmicos.

## 🚀 Funcionalidades

- **Autenticação:** Tela de login para acesso restrito ao sistema.
- **Dashboard Administrativo:** Resumo visual de vendas, pedidos e alertas de estoque.
- **Gestão de Catálogo:** Módulos completos para visualização, adição e edição de produtos.
- **Controle de Pedidos:** Acompanhamento detalhado do fluxo de vendas.
- **Gestão de Clientes:** Cadastro e manutenção da base de consumidores.
- **Interface Responsiva:** Layout adaptável para desktops, tablets e smartphones.

## 🛠️ Tecnologias e Metodologias

- **HTML5:** Estruturação semântica de todas as páginas.
- **CSS3 Avançado:**
  - **Metodologia BEM:** Organização de classes para evitar conflitos e melhorar a legibilidade.
  - **Variáveis CSS:** Centralização de cores e estilos globais para fácil manutenção.
  - **Flexbox:** Utilizado para o alinhamento dinâmico dos componentes.
  - **Arquitetura Modular:** Separação de estilos por responsabilidade (Base, Layout, Componentes e Responsivo).
- **JavaScript (Bibliotecas Externas):**
  - **jQuery 3.7.1:** Utilizado para manipulação de interface, controle do menu hamburger e efeitos de modais, seguindo a restrição de não utilizar lógica autoral pura.

## 📁 Estrutura de Arquivos

```text
├── css/
│   ├── base.css        # Variáveis e resets
│   ├── layout.css      # Estrutura da Sidebar e Main
│   ├── componentes.css # Cards, botões, tabelas e modais
│   └── responsive.css  # Media queries para dispositivos móveis
├── js/
│   └── script.js       # Interatividade baseada em jQuery
├── index.html          # Página de Login (Ponto de entrada)
├── dashboard.html      # Painel principal do sistema
└── ...                 # Demais páginas de gestão
