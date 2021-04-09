function countAllFromTown(regList,regStart){
    var regNum = regList.split(",")
    var regTotal = [];
    for (var i=0;i<regNum.length;i++){
    var k = regNum[i].trim()
    if (k.startsWith(regStart)){
      regTotal.push(k)
    }
  }
    return regTotal.length
  }
   