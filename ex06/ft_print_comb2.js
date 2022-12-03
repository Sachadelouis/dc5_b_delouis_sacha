function ordrecroissant() {
    for (let a = 0; a <= 99; a++) {
      for (let b = a + 1; b <= 99; b++) {
        for (let c = b + 1; c <= 99; c++) {
          console.log(a, b, c);
        }
      }
    }
  }
  ordrecroissant();

// J'ai pas trouvé mieux, désolé 