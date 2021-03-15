# vue-app-2

Project about Markdown notes managing.

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

## API

For now, the API is hosted on Heroku at this address :
https://salty-earth-36065.herokuapp.com/

The first request is very long cause of cold start.

Bugs : There is no data persistence, when the app shut down, your data is lost...

## Greetings

Thanks to **Alex Jover Morales** for his tutorial for recursive tree component : https://www.digitalocean.com/community/tutorials/vuejs-recursive-components

Be careful ! Dynamic recursive generation need to import component in lazy loading. Ex :

```js
components: {
    Leaf: () => import('./Leaf')
}
```
