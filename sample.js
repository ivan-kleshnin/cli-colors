let {bold, blue, strikethrough, underline, red} = require("./index")

console.log("one " + red("two " + blue("three ") + "four " + blue("five ") + "six ") + "seven")
