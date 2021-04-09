function totalPhoneBill(logs){
    var phoneBill = logs.split(" ")
    var total = 0
    for (var i=0;i<phoneBill.length;i++){
     var a = phoneBill[i]
     if (a.includes("call")){
       total += 2.75
     }else if(a.includes("sms")){
      total += 0.65
       
     }
    }
    return "R" +total.toFixed(2)
  }