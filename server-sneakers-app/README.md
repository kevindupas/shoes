## Rappel !!!
npm i // installe les dependences du projet

## Les variables d'environnement
créer le fichier .env et compléter les différentes variable

MONGODB_LOCAL_URI=mongodb://localhost:27017/
MONGODB_DB_MAIN=sneakers_db
PORT=8000
SECRET=###########
MONGO_USER_DB=###########
MONGODB_PASSWORD=###########
MONGODB_URI=###########

npm run start // lance le projet sur le port 8000

## App skeleton
Rappel du squelette de base issue de express-generator-typescript-api
.
├── LICENSE
├── README.md
├── nodemon.json
├── package.json
├── src
│   ├── components
│   │   ├── Auth
│   │   │   ├── index.ts
│   │   │   ├── interface.ts
│   │   │   ├── service.ts
│   │   │   └── validation.ts
│   │   ├── User
│   │   │   ├── index.ts
│   │   │   ├── interface.ts
│   │   │   ├── model.ts
│   │   │   ├── service.ts
│   │   │   └── validation.ts
│   │   ├── index.ts
│   │   └── validation.ts
│   ├── config
│   │   ├── connection
│   │   │   └── connection.ts
│   │   ├── env
│   │   │   └── index.ts
│   │   ├── error
│   │   │   ├── index.ts
│   │   │   └── sendHttpError.ts
│   │   ├── middleware
│   │   │   ├── middleware.ts
│   │   │   └── passport.ts
│   │   └── server
│   │       ├── ServerInterface.ts
│   │       ├── index.ts
│   │       ├── server.ts
│   │       └── serverHandlers.ts
│   └── routes
│       ├── AuthRouter.ts
│       ├── UserRouter.ts
│       └── index.ts
├── swaggerDef.js
├── tsconfig.json
└── .eslintrc.json
```
## Running the API
### Development
To start the application in development mode, run:

```bash
npm install -g nodemon
npm install -g ts-node
npm install -g typescript
npm install
```

Start the application in dev env:
```
nodemon
```
Start the application in production env:

Install ts pm2 and typescript compiler:
```
npm install -g pm2
pm2 install typescript
```

example start with scale on 2 core:
```
pm2 start ./src/index.ts -i 2 --no-daemon
```

Express server listening on http://localhost:3000/, in development mode
The developer mode will watch your changes then will transpile the TypeScript code and re-run the node application automatically.

### Testing
To run integration tests:
```bash
npm test
```

## Set up environment
In root folder you can find `.env`. You can use this config or change it for your purposes.
If you want to add some new variables, you also need to add them to interface and config object (Look `src/config/index.ts`)

## Usage as OAuth2.0 Server
To use this generator as OAuth2.0 server you should implement client side, that will be handle your redirectUris and make requests to `/auth/token/` route. [Read more about OAuth2.0](https://alexbilbie.com/guide-to-oauth-2-grants/)

Swagger documentation will be available on route:
```bash
http://localhost:3000/docs
```
![Alt Text](https://i.ibb.co/b6SdyQV/gif1.gif)

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

[travis-image]: https://travis-ci.org/caiobsouza/generator-ts-node-api.svg?branch=master
[travis-url]: https://travis-ci.org/caiobsouza/generator-ts-node-api
