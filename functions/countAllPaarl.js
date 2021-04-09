function countAllPaarl(regNum){
    var regNums = regNum.split(", ")
    var numReg = [];
    for (var i=0;i<regNums.length;i++){
      var n = regNums[i]
      if (n.startsWith("CJ")){
        numReg.push(n)
       
  }
   
  } return numReg.length
  }