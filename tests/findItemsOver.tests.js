describe('findItemsOver' , function(){

var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];
it('should return all the products with a quantity over than 25. ' , function(){
    assert.deepEqual([{name : 'pears', qty : 37},
    {name : 'bananas', qty : 27}],findItemsOver(itemList,25));
});
it('should return all the products with a quantity less than 20. ' , function(){
    assert.deepEqual([{name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},],findItemsOver(itemList,25));
});
});