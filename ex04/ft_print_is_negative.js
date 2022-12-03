function nbNouP(n) {
    let result;
    if (n >= 0) {
      result = 'P';
    } else {
      result = 'N';
    }
    return result;
  }
  
  console.log(nbNouP(-2));
