describe('regCheck' , function(){
    it('should  check if a registration number is for GP, L, EC, MP registration plates and returns true' , function(){
        assert.equal(true,regCheck("DV 23 NB GP", 'GP'));

    });

    it('should check  if a registration number is for GP, L, EC, MP registration plates and returns false if not' , function(){
        assert.equal(false,regCheck("CK 1559"));
});
});
