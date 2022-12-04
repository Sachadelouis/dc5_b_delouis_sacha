function combinaisondeN(n) {
    let result = [];
    for (let a = 0; a < Math.pow(10, n); i++) {
      let num = a.toString().padStart(n, '0');
      result.push(num);
    }
    return result;
  }
  combinaisondeN()
