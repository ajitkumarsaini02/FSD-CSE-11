
This repository contains practice work for Full Stack Development, including
JavaScript asynchronous programming, DOM manipulation, and React applications.

## Repository Contents

### JavaScript fundamentals

- `aSync.js`, `Await.js`, `CallBack.js`, `promise.js`, and `sync.js` demonstrate
	synchronous and asynchronous JavaScript concepts.
- `demo1.js` through `demo5.js`, `ex1.js` through `ex3.js`, and `test.js` contain
	additional practice programs.
- `fetchDemo.html` and `demo5fetch.html` demonstrate fetching data in the browser.

### DOM examples

The `DOM` folder contains browser-based exercises for selecting, updating, and
rendering page content:

- `domex.html` and `domscript.js`
- `bookStore.html` and `bookStoreScript.js`

Open the HTML files directly in a browser to run these examples.

### React applications

- `Book_App/` - React application built with Vite.
- `shopping-app/client/` - shopping application built with React, Vite, and
	React Router.
- `BOOK_CDN_APP/` - React example using the CDN build in a plain HTML page.
- `Book_npm_App/` - React example bundled with Parcel.

## Running the Vite Applications

Install dependencies and start each application from its own directory.

```bash
cd Book_App
npm install
npm run dev
```

For the shopping application:

```bash
cd shopping-app/client
npm install
npm run dev
```

Useful commands in either Vite application:

```bash
npm run build   # create a production build
npm run lint    # run ESLint
npm run preview # preview the production build
```

## Running the Parcel Example

```bash
cd Book_npm_App
npm install
npm start
```

The Parcel app will print its local development URL in the terminal.

## Technologies

- HTML, CSS, and JavaScript
- React 19
- Vite
- React Router
- Parcel

