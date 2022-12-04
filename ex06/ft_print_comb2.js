function formatNumber (number) {
  if (number < 10) return '0' + number
  return number.toString()
}

function comb2() {
    for (let a = 0; a <= 99; a++) {
      for (let b = a + 1; b <= 99; b++) {
       const keyValue = [formatNumber(a), formatNumber(b)].sort().join(' ')
       console.log(keyValue)
      }
    }
  }
  comb2();

