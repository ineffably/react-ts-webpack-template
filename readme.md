# React Typescript Webpack Template

Boilerplate for react single page client apps built with webpack and written in typescript. Hostable in github pages.

## Usage

Clone the repo and decouple the origin
```
git clone 
cd react-ts-webpack-template
rm -rf ./git/
git init
```
or

Download zip and un-zip to a local folder

or 

This is also a [Template Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository#about-template-repositories)

## Pages

The app lib is built and deployed so that I can run prototypes on static sites like github pages. 

You can see the app built and running from this template here on github pages: 
https://ineffably.github.io/react-ts-webpack-template/


## Technologies

The main dependencies used to write and build the app are:

| Dependency | Info |
| ---------- | --- |
| NPM | node package manager |
| Webpack | flexible build and bundler utility |
| Typescript | the language used to write the app |
| React / ReactDOM | A reactive rendering library |
| React Router | routes for application navigation |
| Jest | for React tests; asserts and mocks |
| Testing Library React | powerful React rendering for React DOM tests |

For more details on the dependencies used see the [package.json](./package.json)

## React Structures Provided:

> React Context and State Provider 
- for application wide state mechanics using a reducer for dispatching updates.
- for optionally persisting application state in local storage or other store.
- demonstrates an easy, basic structure for app state management that can be extended.

> React Router
- for "inner app" navigation
- easy for sharing links to navigate to a specific catalog item

> Sample App
- sample calls to an open disney api 
- sample navigation using React Router and Links
- sample disney api types along with the app types

One can easily replace the sample calls with their own and follow the structure.  

