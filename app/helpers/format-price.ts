export function formatPrice(input: number) {
  const isNegative = input < 0;
  const [digitsStr, decimals] = Math.abs(input).toString().split('.');
  const digits = digitsStr.split('');
  let outputChunks = [];
  while(digits.length) {
    outputChunks.unshift(digits.splice(-3).join(''));
  }
  const A = (!isNegative ? '' : '-');
  const B = outputChunks.join(',')
  const C = (!decimals ? '' : '.' + decimals)
  return `${A}${B}${C}`;
}
