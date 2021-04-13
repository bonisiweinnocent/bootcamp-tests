describe('transportFee' , function(){
    it('should return the right price for the morning shift' , function(){
        assert.equal('R20',transportFee("morning"));

    });
    it('should return the right price for the afternoon shift', function(){
        assert.equal('R10',transportFee("afternoon"));


});
it('should return the right price for the nightshift', function(){
    assert.equal('free',transportFee("nightshift"));
});
});