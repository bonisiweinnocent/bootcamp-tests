describe('isFromBellville' , function(){
    it('should return true if the registration number is from Bellville' , function(){
        assert.equal(true,isFromBellville("CY 1559"));

    });
    it('should return false if the registration number is  not from Bellville' , function(){
        assert.equal(false,isFromBellville("CK 1559"));
});
});