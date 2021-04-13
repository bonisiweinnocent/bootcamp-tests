function findItemsOver20(itemList){
    var array = [];
    for (var i = 0; i < itemList.length; i++){
      if (itemList[i].qty > 20){
        array.push(itemList[i]);
       
        }
    }
    return array
  }
  