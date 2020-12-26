# RxjsSeries

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.3.

Project Based on https://www.youtube.com/playlist?list=PLLhsXdvz0qjI68a8tLUUMyXmNhl608mcn

# Project Creation 

ng new RxjsSeries --minimal=true --inlineStyle=false --inlineTemplate=false --routing=true --skipTests=true --style=scss --strict=false

npm install bootstrap
npm install jquery
npm install @popperjs/core
npm install faker
npm install @types/faker
npm install lodash
npm install @ngx-loading-bar/core --save
npm install @ngx-loading-bar/router --save

Reference:
https://github.com/aitboudad/ngx-loading-bar
https://github.com/aitboudad/ngx-loading-bar/blob/main/packages/router/README.md

icons from:
https://www.stickpng.com/img/icons-logos-emojis/social-media-icons/circle-facebook-icon
https://www.stickpng.com/img/icons-logos-emojis/social-media-icons/simple-twitter-logo-in-circle

faker & lodash is a commonJS, so you need to configure it in 

angular.json

https://angular.io/guide/build#configuring-commonjs-dependencies

"build": {
  "builder": "@angular-devkit/build-angular:browser",
  "options": {
     "allowedCommonJsDependencies": [
        "lodash",
        "faker"
     ]
     ...
   }
   ...
},


and modify angular.json

as like the below

"styles": [
            "node_modules/bootstrap/dist/css/bootstrap.min.css",
            "src/styles.scss"
          ],
"scripts": [
            "node_modules/jquery/dist/jquery.min.js",
            "node_modules/@popperjs/core/dist/umd/popper.min.js",
            "node_modules/bootstrap/dist/js/bootstrap.min.js"
           ]

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

ng g c includes/header
ng g d shared/dropdown

ng g c promise
ng g c observable
ng g c async-await

ng g c observable/list
ng g c observable/from-event

ng g s app-services/design-utility
ng g s app-services/search

ng g c observable/interval
ng g c observable/of-from
ng g c observable/to-array
ng g c observable/custom
ng g c observable/map
ng g c observable/pluck
ng g c observable/filter
ng g c observable/tap
ng g c observable/take
ng g c observable/retry
ng g c observable/debouncetime
ng g c observable/subject
ng g c observable/subject/comp1
ng g c observable/subject/comp2
ng g c observable/subject/comp3
ng g c observable/replay-subject
ng g c observable/async-subject
ng g c observable/concat
ng g c observable/merge
ng g c observable/merge-map
ng g c observable/concat-map
ng g c observable/concat-map2
ng g c observable/switchmap
ng g c observable/exhaust-map
ng g c observable/zip-forkjoin



## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
