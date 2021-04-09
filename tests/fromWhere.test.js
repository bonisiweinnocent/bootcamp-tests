describe('fromWhere' , function(){
    it('should return Bellville if the reg number starts with CY.' , function(){
        assert.equal('Bellville',fromWhere("CY"));

    });
    it('should return Paarl if the reg number starts with CJ.' , function(){
        assert.equal('Paarl',fromWhere("CJ"));

});
it('should return Cape Town if the reg number starts with CA.' , function(){
    assert.equal('Cape Town',fromWhere("CA"));

});
it('should return Some other place! if the reg number starts with anything but not CY,CJ,CA.' , function(){
    assert.equal('Some other place!',fromWhere("MP"));

});
});