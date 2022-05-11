<p align="center">
  <img src="web/src/assets/logo.png" width="256" />
</p>

## Sobre

Feedget é uma aplicação web para acompanhar os feedbacks de usuários de um sistema.
Nela, você pode enviar feedbacks e verificar os feedbacks que foram enviados para o sistema. A cada feedback enviado, você receberá um e-mail com os detalhes do feedback.

## Tecnologias

- [ReactJS](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Jest](https://jestjs.io/)
- [Prisma](https://www.prisma.io/)
- [Axios](https://www.npmjs.com/package/axios)
- [Firebase](https://firebase.google.com/)
- [PostgreSQL](https://www.postgresql.org/)

Login com Autenticação do Google atráves do [Firebase](https://firebase.google.com/). Deploy na [Vercel](https://vercel.com) e [Heroku](https://www.heroku.com/).

## Como executar

```bash
$ git clone https://github.com/guilhermeomt/feedget
$ cd feedget
```

### API

```bash
$ cd api
$ yarn # or npm install
$ cp .env.example .env # fill down the .env file
$ yarn prisma migrate dev # or npx run prisma migrate dev
$ yarn dev # or npm run dev
```

### Web

```bash
$ cd web
$ yarn # or npm install
$ cp .env.example .env # fill down the .env file
$ yarn dev # or npm run dev
```

## Licença

MIT
