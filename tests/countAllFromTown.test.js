describe('countAllFromTown' , function(){
    it('should return the number of registration numbers in the string that is for that town.' , function(){
        assert.equal(3,countAllFromTown("CL 124,CY 567,CL 345, CJ 456,CL 341","CL"));

});
it('should return the number of registration numbers in the string that is for that town.' , function(){
    assert.equal(0,countAllFromTown("CA 111, CY 4567, CF 555", 'CJ'));

});
it('should return the number of registration numbers in the string that is for that town.' , function(){
    assert.equal(1,countAllFromTown("CA 111, CY 4567, CF 555,CJ 6579", 'CJ'));

});
});