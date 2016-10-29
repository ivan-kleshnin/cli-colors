# CLI colors

*Under development, don't use*

## Why

[Marak/colors](https://github.com/Marak/colors.js) – modifies `String` prototype... [facepalm](https://github.com/yeoman/yo/issues/68).

[SindreSorhus/chalk](https://github.com/chalk) – overengineered, fluent API sucks at composition

## Usage

```js
let {blue, red} = require("./index")

console.log("one " + red("two " + blue("three ") + "four " + blue("five ") + "six ") + "seven")
```

![Sample](./sample.gif)

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
