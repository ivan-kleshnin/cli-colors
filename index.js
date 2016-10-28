let styles = {
  // reset
  reset: "\u001b[0m",

  // modifier
  bold: {open: "\u001b[1m", close: "\u001b[22m"},
  italic: {open: "\u001b[3m", close: "\u001b[23m"},
  underline: {open: "\u001b[4m", close: "\u001b[24m"},
  inverse: {open: "\u001b[7m", close: "\u001b[27m"},
  hidden: {open: "\u001b[8m", close: "\u001b[28m"},
  strikethrough: {open: "\u001b[9m", close: "\u001b[29m"},

  // color
  black: {open: "\u001b[30m", close: "\u001b[39m"},
  red: {open: "\u001b[31m", close: "\u001b[39m"},
  green: {open: "\u001b[32m", close: "\u001b[39m"},
  yellow: {open: "\u001b[33m", close: "\u001b[39m"},
  blue: {open: "\u001b[34m", close: "\u001b[39m"},
  magenta: {open: "\u001b[35m", close: "\u001b[39m"},
  cyan: {open: "\u001b[36m", close: "\u001b[39m"},
  white: {open: "\u001b[37m", close: "\u001b[39m"},
  gray: {open: "\u001b[90m", close: "\u001b[39m"},

  // backgrounds
  bgBlack: {open: "\u001b[40m", close: "\u001b[49m"},
  bgRed: {open: "\u001b[41m", close: "\u001b[49m"},
  bgGreen: {open: "\u001b[42m", close: "\u001b[49m"},
  bgYellow: {open: "\u001b[43m", close: "\u001b[49m"},
  bgBlue: {open: "\u001b[44m", close: "\u001b[49m"},
  bgMagenta: {open: "\u001b[45m", close: "\u001b[49m"},
  bgCyan: {open: "\u001b[46m", close: "\u001b[49m"},
  bgWhite: {open: "\u001b[47m", close: "\u001b[49m"}
}

module.exports.styles = styles

// reset
module.exports.reset = styles.reset

// modifiers
module.exports.bold = (v) => styles.bold.open + v + styles.bold.close
module.exports.italic = (v) => styles.italic.open + v + styles.italic.close
module.exports.underline = (v) => styles.underline.open + v + styles.underline.close
module.exports.inverse = (v) => styles.inverse.open + v + styles.inverse.close
module.exports.hidden = (v) => styles.hidden.open + v + styles.hidden.close
module.exports.strikethrough = (v) => styles.strikethrough.open + v + styles.strikethrough.close

// colors
module.exports.black = (v) => styles.black.open + v + styles.black.close
module.exports.red = (v) => styles.red.open + v + styles.red.close
module.exports.green = (v) => styles.green.open + v + styles.green.close
module.exports.yellow = (v) => styles.yellow.open + v + styles.yellow.close
module.exports.blue = (v) => styles.blue.open + v + styles.blue.close
module.exports.magenta = (v) => styles.magenta.open + v + styles.magenta.close
module.exports.cyan = (v) => styles.cyan.open + v + styles.cyan.close
module.exports.white = (v) => styles.white.open + v + styles.white.close
module.exports.gray = (v) => styles.gray.open + v + styles.gray.close
module.exports.grey = module.exports.gray

// backgrounds
module.exports.bgBlack = (v) => styles.bgBlack.open + v + styles.bgBlack.close
module.exports.bgRed = (v) => styles.bgRed.open + v + styles.bgRed.close
module.exports.bgGreen = (v) => styles.bgGreen.open + v + styles.bgGreen.close
module.exports.bgYellow = (v) => styles.bgYellow.open + v + styles.bgYellow.close
module.exports.bgBlue = (v) => styles.bgBlue.open + v + styles.bgBlue.close
module.exports.bgMagenta = (v) => styles.bgMagenta.open + v + styles.bgMagenta.close
module.exports.bgCyan = (v) => styles.bgCyan.open + v + styles.bgCyan.close
module.exports.bgWhite = (v) => styles.bgWhite.open + v + styles.bgWhite.close
