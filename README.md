# CLI colors

*Under development, don't use*

## Why

[Marak/colors](https://github.com/Marak/colors.js) – modifies `String` prototype... [facepalm](https://github.com/yeoman/yo/issues/68).

[SindreSorhus/chalk](https://github.com/chalk) – overengineered, fluent API [sucks](http://paqmind.com/posts/fluent-api-debunked/) at composition

## Usage

```js
let {blue, red} = require("cli-colors")

console.log("one " + red("two " + blue("three ") + "four " + blue("five ") + "six ") + "seven")
```

![Sample](./sample.gif)

Use function composition to combine styles:

```js
let {pipe} = require("ramda")
let {bgBlue, white} = require("cli-colors")

let banner = pipe(bgBlue, white)

console.log(banner("============="))
console.log(banner("  H E L L O  "))
console.log(banner("============="))
```

## API

```js
let colors = require("cli-colors")
// or import * as colors from "cli-colors"
```

### Modifiers

```
colors.bold
colors.hidden
colors.inverse
colors.italic
colors.strikethrough
colors.underline
```

### Colors

```js
colors.black
colors.blue
colors.cyan
colors.gray
colors.green
colors.grey (alias)
colors.magenta
colors.red
colors.yellow
colors.white
```

### Backgrounds

```js
colors.bgBlack
colors.bgBlue
colors.bgCyan
colors.bgGreen
colors.bgMagenta
colors.bgRed
colors.bgYellow
colors.bgWhite
```

### Special

```
colors.reset
colors.styles
```
