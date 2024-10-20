# Bem vindos ao repositório do Lacrei-Challenge 🌈

Esta é uma aplicação Front end **Next.js** em **Typescript**, utilizando **Styled-Components** para estilização.

Este projeto consiste em duas páginas web interativas, com roteamento entre elas, incorporando os seguintes elementos:

- **Header e Footer**: Com designs que refletem a essência acolhedora da Lacrei Saúde.
- **Três Botões**: Cada um com uma funcionalidade única, fazendo link com páginas da Lacrei Saúde.
- **Teste Unitário**: Utilizando Jest e RTL.
- **Responsividade**: garantindo uma boa visualização em dispositivos móveis e desktops.

## Rodando o Projeto 💻

⚠️ **É necessário uma versão Node igual ou superior à 18.18.0.**

1 - Clone o repositório com o comando:

```bash
git clone git@github.com:linahsu/lacrei-challenge.git
```

2 - Entre na pasta do projeto:

```bash
cd lacrei-challenge
```

3 - Instale as dependências:

```bash
npm install
```

4 - Rode o comando:

```bash
npm run dev
```

5 - Abra **http://localhost:3000** com o seu navegador para visualizar o projeto rodando.

## Executando o Teste 🛠️

Foi implementado um teste no projeto:

```bash
./tests/homePage.test.tsx
```

Nele temos um teste para o botão "Quem Somos" localizado na Home page.

Ele testa se o comportamento do botão está funcionando corretamente.

A estrutura do teste é a seguinte:

1. Mockamos a abertura de uma nova janela ao início de cada teste dentro do scopo describe.
2. Limpamos todos os mocks feitos após cada teste dentro do escopo describe.
3. Renderizamos a HomePage.
4. Encontramos o botão "Quem Somos" e guardamos em uma variável AboutButton.
5. Simulamos um click neste botão.
6. Engloba o esperado em um waitFor para garantir a abertura da janela.
7. Verifica que foi aberta uma nova janela na URL correta.

Rode o teste com o comando:

```bash
npm run test
```
