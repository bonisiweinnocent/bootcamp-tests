describe('findItemsOver' , function(){

var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

var results = findItemsOver(itemList, 25)
var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];
    it('should  Calculate the total bill for the data provided..' , function(){
        assert.deepEqual(findItemsOver(itemList,25), results);
        
    });
    it('should  Calculate the total bill for the data provided..' , function(){
        assert.deepEqual(findItemsOver(itemList,10), results);

});
});