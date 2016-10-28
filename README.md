# CLI colors

*Under development, don't use*

## Why

[Marak/colors](https://github.com/Marak/colors.js) – modifies `String` prototype... [facepalm](https://github.com/yeoman/yo/issues/68).

[SindreSorhus/chalk](https://github.com/chalk) – overengineered, fluent API sucks at composition

## Usage

```js
let {red, bold} = require("cli-colors")

console.log("one " + red("two " + bold("three ") + "four ") + "five")
```

![Sample](./sample.gif)
