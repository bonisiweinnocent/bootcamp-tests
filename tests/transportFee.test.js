describe('transportFee' , function(){
    it('should returns the right price for the morning shift' , function(){
        assert.equal('R20',transportFee("morning"));

    });
    it('should returns the right price for the afternoon shift', function(){
        assert.equal('R10',transportFee("afternoon"));


});
it('should returns the right price for the nightshift', function(){
    assert.equal('free',transportFee("nightshift"));
});
});