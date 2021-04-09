describe('countAllPaarl' , function(){
    it('should return the number of registration numbers in the string for Paarl' , function(){
        assert.equal(1,countAllPaarl("CJ 89457"));

    });
    it('should return the number of registration numbers in the string for Paarl' , function(){
        assert.equal(2,countAllPaarl("CJ 89457, CJ 8945"));
});
});

