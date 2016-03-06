let getDolCent = function(n) {
  if (isNaN(Number(n))) {throw new Error('money must be a number! You supplied ' + n)}
  let str = n.toString().replace(/^[0]*/, '');
  str = (str.length === 0) ? '00' : str.length === 1 ? '0'+str : str;
  const d = str.substr(str.length-2);
  const i = str.substr(0, str.length-2) ? str.substr(0, str.length-2) : '0';
  return i + '.' + d;
}

let getDollars = function(n) {
  if (isNaN(Number(n))) {throw new Error('money must be a number! You supplied ' + n)}
  let str = n.toString().replace(/^[0]*/, '');
  str = (str.length === 0) ? '00' : str.length === 1 ? '0'+str : str;
  const i = str.substr(0, str.length-2) ? str.substr(0, str.length-2) : '0';
  return i;
}

let getCents = function(n) {
  if (isNaN(Number(n))) {throw new Error('money must be a number! You supplied ' + n)}
  let str = n.toString().replace(/^[0]*/, '');
  str = (str.length === 0) ? '00' : str.length === 1 ? '0'+str : str;
  const d = str.substr(str.length-2);
  return d;
}

export {getDolCent, getDollars, getCents}
