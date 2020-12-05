# RxjsSeries

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.3.

Project Based on https://www.youtube.com/playlist?list=PLLhsXdvz0qjI68a8tLUUMyXmNhl608mcn 

# Project Creation 

ng new RxjsSeries --minimal=true --inlineStyle=false --inlineTemplate=false --routing=true --skipTests=true --style=scss --strict=false

npm install bootstrap
npm install jquery
npm install @popperjs/core

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


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
