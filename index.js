let escape = require("escape-string-regexp")

let styles = {
  // reset
  reset: "\u001b[0m",

  // modifier
  bold: {open: "\u001b[1m", close: "\u001b[22m"},
  hidden: {open: "\u001b[8m", close: "\u001b[28m"},
  inverse: {open: "\u001b[7m", close: "\u001b[27m"},
  italic: {open: "\u001b[3m", close: "\u001b[23m"},
  strikethrough: {open: "\u001b[9m", close: "\u001b[29m"},
  underline: {open: "\u001b[4m", close: "\u001b[24m"},

  // color
  black: {open: "\u001b[30m", close: "\u001b[39m"},
  blue: {open: "\u001b[34m", close: "\u001b[39m"},
  cyan: {open: "\u001b[36m", close: "\u001b[39m"},
  gray: {open: "\u001b[90m", close: "\u001b[39m"},
  green: {open: "\u001b[32m", close: "\u001b[39m"},
  magenta: {open: "\u001b[35m", close: "\u001b[39m"},
  red: {open: "\u001b[31m", close: "\u001b[39m"},
  yellow: {open: "\u001b[33m", close: "\u001b[39m"},
  white: {open: "\u001b[37m", close: "\u001b[39m"},

  // backgrounds
  bgBlack: {open: "\u001b[40m", close: "\u001b[49m"},
  bgBlue: {open: "\u001b[44m", close: "\u001b[49m"},
  bgCyan: {open: "\u001b[46m", close: "\u001b[49m"},
  bgGreen: {open: "\u001b[42m", close: "\u001b[49m"},
  bgMagenta: {open: "\u001b[45m", close: "\u001b[49m"},
  bgRed: {open: "\u001b[41m", close: "\u001b[49m"},
  bgYellow: {open: "\u001b[43m", close: "\u001b[49m"},
  bgWhite: {open: "\u001b[47m", close: "\u001b[49m"}
}

let make = (style) => {
  let styleClose = new RegExp(escape(styles[style].close), "g")
  return (v) => {
    return styles[style].open
      + v.replace(styleClose, styles[style].open)
      + styles[style].close
  }
}

// modifiers
module.exports.bold = make("bold")
module.exports.hidden = make("hidden")
module.exports.inverse = make("inverse")
module.exports.italic = make("italic")
module.exports.strikethrough = make("strikethrough")
module.exports.underline = make("underline")

// colors
module.exports.black = make("black")
module.exports.blue = make("blue")
module.exports.cyan = make("cyan")
module.exports.gray = make("gray")
module.exports.green = make("green")
module.exports.grey = module.exports.gray
module.exports.magenta = make("magenta")
module.exports.red = make("red")
module.exports.yellow = make("yellow")
module.exports.white = make("white")

// backgrounds
module.exports.bgBlack = make("bgBlack")
module.exports.bgBlue = make("bgBlue")
module.exports.bgCyan = make("bgCyan")
module.exports.bgGreen = make("bgGreen")
module.exports.bgMagenta = make("bgMagenta")
module.exports.bgRed = make("bgRed")
module.exports.bgYellow = make("bgYellow")
module.exports.bgWhite = make("bgWhite")

// special
module.exports.reset = styles.reset
module.exports.styles = styles
