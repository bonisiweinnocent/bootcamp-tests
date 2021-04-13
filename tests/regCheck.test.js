describe('regCheck' , function(){
    it('should  check if a registration number is for  GP registration plates and returns true' , function(){
        assert.equal(true,regCheck("DV 23 NB GP", "GP"));

    });
    it('should  check if a registration number is L,  registration plates and returns true' , function(){
        assert.equal(true,regCheck("HZ 1877 L", "L"));
    });
    it('should  check if a registration number is EC,  registration plates and returns true' , function(){
        assert.equal(true,regCheck("HZ 111 EC", "EC"));
    });
    it('should  check if a registration number is MP,  registration plates and returns true' , function(){
        assert.equal(true,regCheck("BA 1994 MP", "MP"));
    });
    it('should check  if a registration number is for GP, L, EC, MP registration plates and returns false if not' , function(){
        assert.equal(false,regCheck("CK 1559", 'CA'));
});
});
