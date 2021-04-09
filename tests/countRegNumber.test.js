describe('countRegNumber' , function(){
    it('should count the number of Registration numbers' , function(){
        assert.equal(3,countRegNumber("CA 182736,CY 523519,CJ 812328"));

    });
    it('should count the number of Registration numbers' , function(){
        assert.equal(1,countRegNumber("CA 182736"));
});
});