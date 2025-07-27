const Color = {
  RED:   Symbol('Red'),
  GREEN: Symbol('Green'),
  BLUE:  Symbol('Blue'),
};

Object.freeze(Color);

function getColorName(colorSymbol) {
  for (const key in Color) {
    if (Color[key] === colorSymbol) {
      return key; 
    }
  }
  
  return null;
}

console.log(getColorName(Color.White))