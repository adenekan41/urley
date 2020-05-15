<br />
<p align="center">
	<a href="https://i.ibb.co/kcpWdj0/EY.png">
		<img src="https://i.ibb.co/kcpWdj0/EY.png" width="290" alt="urley">
	</a>
</p>

<p align="center">A cross-platform library with a collection of handy utilites to work with URLs</p>

<hr / >
<br />

[![npm](https://badge.fury.io/js/urley.svg)](https://www.npmjs.com/package/urley)

[![NPM](https://nodei.co/npm/urley.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/urley/)

<br />

### 🔍 [Try out the interactive Demo](https://codesandbox.io/embed/red-tdd-q45p3?fontsize=13&hidenavigation=1&theme=dark) on codesandbox

## ⚡️About

[Urley](https://github.com/adenekan41/urley), A cross-platform utility library
to work with URLs. Urely has a **collection of handy helpers** to use when
working with URLs, with just a few imports you are set.

## ✨ Features

- 📦 Light Weight ~885b (gzipped)
- 🔧 Cross platform supported
- 🙅‍♂️ Zero dependencies
- ✅ Fully tested and reliable
- ⚒ CommonJS, ESM & browser standalone support

## ⬇ Installing [urley](https://github.com/adenekan41/urley)

### Using NPM

```bash
npm i urley
```

### Using Yarn

```bash
yarn add urley
```

## 🛠 Usage

Getting familiar with the libary and you want to use some helper functions like
`getBaseUrl`, `getPathnameToObject`, `isAbsoluteUrl` helpers e.t.c you can
easily just import them the following ways.

```js
import { isAbsolute } from 'urley';
```

All methods are exported as a flat namesapce so you can also call them like this

```js
import isAbsolute from 'urley/bundle-es/isAbsolute';
```

or

```js
var isAbsolute = require('urley');
```

and then we have the exported helpers and can already do this

```js
isAbsolute('https://google.com');
// => true
```

## 📁 Documentation [View Here](https://urley.netlify.com)

### Is Absolute

> returns - Boolean

- `isAbsolute` - Returns `Boolean` if the given string is an absolute URL.
  https://seoclarity.net/resources/knowledgebase/difference-relative-absolute-url-15325/
  see file
  [here](https://github.com/adenekan41/urley/blob/master/src/isAbsolute.js)

### Is Browser

> returns - Boolean

- `isBrowser` - Determines if the current runtime environment is a browser. see
  file [here](https://github.com/adenekan41/urley/blob/master/src/isBrowser.js)

### Get Base URL

> parameters - url (String)

> returns - String

- `getBaseUrl` - Returns the current URL without any parameters. see file
  [here](https://github.com/adenekan41/urley/blob/master/src/getBaseUrl.js)

### Decode URL

> parameters - str (String)

> returns - String

- `decodeUrl` - Function decodes a Uniform Resource Identifier (URI) component
  previously created by decodeURIComponent or by a similar routine. see file
  [here](https://github.com/adenekan41/urley/blob/master/src/decodeUrl.js)

### Encode URL

> parameters - str (String)

> returns - String

- `encodeUrl` - Function encodes a Uniform Resource Identifier (URI) component
  previously created by encodeURIComponent or by a similar routine. see file
  [here](https://github.com/adenekan41/urley/blob/master/src/encodeUrl.js)

### Get URL Parameters

> parameters - url (String)

> returns - Object

- `getUrlParameters` - Returns an object containing the parameters of the
  current URL. see file
  [here](https://github.com/adenekan41/urley/blob/master/src/getUrlParams.js)

### Get Path Name

> parameters - url (String)

> returns - String

- `getPathname` - Returns pathname with a regex exec function see file
  [here](https://github.com/adenekan41/urley/blob/master/src/getPathName.js)

### Path Name To Object

> parameters - url (String)

> returns - Object

- `pathnameToObject` - Returns pathname into an object see file
  [here](https://github.com/adenekan41/urley/blob/master/src/getPathnameToObject.js)

### Window Portion

> parameters - url (String)

> returns - string

- `getWindowPathname` - Return pathname if parameter is passed or uses the one
  in the current window environment. see file
  [here](https://github.com/adenekan41/urley/blob/master/src/windowPortion.js)

- `getWindowHost` - Return host if parameter is passed or uses the one in the
  current window environment. see file
  [here](https://github.com/adenekan41/urley/blob/master/src/windowPortion.js)

- `getWindowHostName` - Return hostname if parameter is passed or uses the one
  in the current window environment. see file
  [here](https://github.com/adenekan41/urley/blob/master/src/windowPortion.js)

- `getWindowHash` - Return hash if parameter is passed or uses the one in the
  current window environment. see file
  [here](https://github.com/adenekan41/urley/blob/master/src/windowPortion.js)

- `getWindowHref` - Return href if parameter is passed or uses the one in the
  current window environment. see file
  [here](https://github.com/adenekan41/urley/blob/master/src/windowPortion.js)

- `getWindowPort` - Return port if parameter is passed or uses the one in the
  current window environment. see file
  [here](https://github.com/adenekan41/urley/blob/master/src/windowPortion.js)

- `getWindowProtocol` - Return protocol if parameter is passed or uses the one
  in the current window environment. see file
  [here](https://github.com/adenekan41/urley/blob/master/src/windowPortion.js)

- `getWindowSearch` - Return search if parameter is passed or uses the one in
  the current window environment. see file
  [here](https://github.com/adenekan41/urley/blob/master/src/windowPortion.js)

MIT © [codewonders.dev](https://codewonders.dev) &nbsp;&middot;&nbsp; GitHub
[@adenekan41](https://github.com/adenekan41) > &nbsp;&middot;&nbsp;
