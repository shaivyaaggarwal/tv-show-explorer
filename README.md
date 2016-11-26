# TV Show Explorer
This app used free [api](https://www.omdbapi.com/) which pulls information about tv shows from IMDB.

#### Architechture
App is organized in containers and components. Containers are per url, and it is built up of components. Containers have their own controllers to wire up the logic with the components.

Each container and component is angular module itself, and they are injected into the main container and component module. These container and component module are then injected as module dependencies in the main app module, which is used to bootstrap out tvshowexplorer application.

### Installation
```sh
$ cd tvshowexplorer
$ npm install webpack -g
$ node install
$ node run dev
```

This will run a local `webpack-dev-server` on `port :3000`. Fireup browser and navigate to `localhost:3000`

### Tech

tvshowexplorer uses a number of open source projects:

* [AngularJS] - HTML enhanced for web apps!
* [Webpack] - JS module bundler
* [Materialize] - Responsive CSS and Components on Material Design
* [OMDBAPI] - IMDB Api on episodes info

   [AngularJS]: <http://angularjs.org>
   [Webpack]: <https://webpack.github.io/>
   [Materialize]: <http://materializecss.com/>
   [OMDBAPI]: <https://www.omdbapi.com/>