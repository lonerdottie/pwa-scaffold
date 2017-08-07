# sandbox

> An attempt to build a versatile PWA scaffold with [VueJS](https://vuejs.org/), [Firebase](https://firebase.google.com/), and [MDL](https://getmdl.io)

## Requirements & Installation
* Node 6+
* Modify **helpers/firebaseConfig-sample.js** file with your Firebase credentials
```
  1. Go to 'Overview' for project in your Firebase Console
  3. Click 'Add Firebase to Your Web App'
  4. Copy/Paste your data into firebaseConfig-sample.js
  5. Rename file to firebaseConfig.js (remove '-sample')
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
