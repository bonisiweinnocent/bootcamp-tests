describe('totalPhoneBill' , function(){
    it('should  Calculate the total bill for the data provided..' , function(){
        assert.equal('R7.45',totalPhoneBill("call, sms, call, sms, sms"));
    });
    it('should  Calculate the total bill for the data provided..' , function(){
        assert.equal('R4.05',totalPhoneBill("call, sms, sms"));
    });
    it('should  Calculate the total bill for the data provided..' , function(){
        assert.equal('R2.75',totalPhoneBill("call"));
    });
});