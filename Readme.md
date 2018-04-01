# React BoilerPlate

A simple boilerplate that you can use as a template for your React apps. It's fast, easy to implement and modify.

It uses Webpack, devServer, babel, react hot loading and more to handle and compile modules into plain javascript and other static assets. It also supports Redux as a state manager.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js installed. If you don't, install it from [here](https://nodejs.org/en/)

### Installing

Download the repository
 

```
   $git clone https://github.com/geronde/Personal-React-BoilerPlate.git

```

Then in repo folder

```
   $ npm install 

```
### How to use 

For Development, it uses devServer, and to run it simply execute:

```
   npm run dev

```

And run the application at http://localhost:9000

   For Production, it uses Express as a server, if needed, and to run it simply execute:

```
   npm run build

```

And run the production build at http://localhost:7700

You can always execute the production on client side using `npm run prod:client` or simply run the server side using `npm run prod:server`.

### Linting/Prettify

To lint and prettify code, run

```
npm run lint

```
