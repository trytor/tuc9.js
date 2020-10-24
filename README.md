# TUC-9
Tuc9.js is base implementation of TUC-9 on JavaScript (used only one tryte).

Usage (example):
  let Char = require('./tuc9.js').Char
  let TUC9 = require('./tuc9.js').TUC9

  let string = new TUC9("Hello Ternary World!")
  console.log(string.getTernary())
  //'OOOOPONOOOOOOPPNPNOOOOPPOOOOOOOPPOOOOOOOPPOPOOOOOOPPNNOOOOPOOPOOOOOPPNPNOOOOPPPNOOOOOPPOPNOOOOPPNNPOOOOPPPNOOOOOPPPPPOOOOOPPNNOOOOPOPNOOOOOPPOPOOOOOPPPNOOOOOPPOOOOOOOPPNOPOOOOOPPNO'
  let tuc9 = new TUC9('')
  let ternaryString =  'OOOOPOOPNOOOOPPNNPOOOOPPPPPOOOOOPPNNOOOOPPONNOOOOPPONOOOOOOPPNO'
  console.log(tuc9.decode(ternaryString))
  //'Say hi!'
  let char = new Char('A')
  console.log(char.getTernary())
  //'OOOOPNPPN'
  console.log(char.getCharInt())
  //65
  char.setChar(82)
  console.log(char.getChar())
  //R
