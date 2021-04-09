function transportFee(shift){
    switch (shift){
      case 'morning':
        return 'R20';
      case 'afternoon':
        return 'R10';
      case 'nightshift':
     return 'free';
    
           }
  }
  assert.equal(transportFee('morning'), 'R20');
  assert.equal(transportFee('afternoon'), 'R10');
  assert.equal(transportFee('nightshift'), 'free');