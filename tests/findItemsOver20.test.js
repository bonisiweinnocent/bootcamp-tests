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

    it('should return products that have quantity higher than the threshold.' , function(){
        assert.deepEqual(findItemsOver20(itemList), results);

});
it('should return all the products with a quantity higher than  25' , function(){
    assert.deepEqual(findItemsOver20(itemList), results);
});
it('should return all the products with a quantity higher than 30' , function(){
    assert.deepEqual(findItemsOver20(itemList), results);
});
});