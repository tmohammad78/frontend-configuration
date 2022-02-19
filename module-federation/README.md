# Micro Frontend App

This is a sample micro frontend project , with Vue and React
for making micro frontend , I used module federation plugin in webpack ,
Its base Route
example :

/auth --> React App <br />
/app --> Vue App <br />
/ --> React App as container

For testing go to ```/auth``` and enter username and password

## share state

For sharing data and state I used custom event , but we can use rxjs and observable or local storage and or a share component for sharing.

## Run

```
docker-compose up --build
```

if you dont want to use docker compose , you can run seperatly :

#### Auth

```
cd /auth
npm start
```

#### App

```
cd /app
npm run serve
```

#### Container

```
cd /container
npm start
```

## How its works
We should expose the module we want to share , like this :
```
exposes: {
    "./App": "./src/bootstrap",
},
```
and on the other part we connect that app to our container:
```
remotes: {
    auth: "auth@http://localhost:8081/remoteEntry.js",
    app: "app@http://localhost:8082/remoteEntry.js",
    // checkout: "checkout@http://localhost:8083/remoteEntry.js",
},
```
and we import these component like this :
```
import { mount } from "app/App";
```

In each component we create a bootstrap file for append element to specifc id of HTML with calling mount function 