describe('findItemsOver20' , function(){
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

    it('should return products that have quantity higher than 20.' , function(){
        assert.deepEqual([{name : 'pears', qty : 37},{name : 'bananas', qty : 27}],findItemsOver20(itemList));

});
it('should return all the products with a quantity over than 25. ' , function(){
    assert.deepEqual([{name : 'pears', qty : 37},
    {name : 'bananas', qty : 27}],findItemsOver20(itemList));
});
});