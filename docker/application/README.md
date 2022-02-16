# React App
This is sample React app with docker file 

## development
To start in the development , you can run this command :
- development
```
docker build -t sample-app .
docker run -d -it -p 3000:3000 sample-app

```
- production
```
docker build -t sample-app -f Dockerfile.prod .
docker run -d -it -p 8080:80 sample-app

```