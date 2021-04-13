
function findItemsOver(itemList,threshold){
    var list = [];
     for (var p = 0; p < itemList.length; p++){
       if (itemList[p].qty > threshold){
       list.push(itemList[p]);
       }
     }
     return list
   }
   