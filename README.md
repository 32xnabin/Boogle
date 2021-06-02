# Fullstack Typescript boilerplate for electronic shop

these things are deleiverately left for the purpose of simplicity for now
JWT or any other authentication for api 
Redux for state management on frontend

# backend 

language: typescript
seneca is used for microservices framework
docker-compose run the mongodb database service in seprate container

Nodejs api with seneca for microservices that uses mongodb as database

## Installation

```
cd backend-node-typescript
```

Copy `.env.dist` to `.env` and use it to specify mongodb properties

```
cp .env.dist .env
```

Run mongo db using docker compose

```
docker-compose up -d
```

Install npm packages form package.json (I am expecting node and npm installed in the system)

```
npm install
```

To compile the typescript run

```
npm run build
```

TS files will be compiled and builds will be in `dist` folder

So, to start the application

```
npm run start
```



## frontend

laguage: typescript
material ui and styledcomponets are used as ui librares
very simple test is implemented
React-query is implemented

cd frontend-React-typescript

npm install

npm start

npm test








