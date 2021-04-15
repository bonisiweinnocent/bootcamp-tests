describe('isWeekday' , function(){
    it('should return true if the parameter passed in is Monday.' , function(){
        assert.equal(true,isWeekday("Monday"));

    });
    it('should return if the parameter passed in is Tuesday.' , function(){
        assert.equal(true,isWeekday("Tuesday"));
    });
    it('should return if the parameter passed in is Wednensday.' , function(){
        assert.equal(true,isWeekday("Wednesday"));
    });
    it('should return if the parameter passed in is Thursday.' , function(){
        assert.equal(true,isWeekday("Thursday"));
    });
    it('should return true if the parameter passed in is Friday.' , function(){
        assert.equal(true,isWeekday("Friday"));
    });
    it('should return false if the parameter passed in is Sartuday.' , function(){
        assert.equal(false,isWeekday("Sartuday")); 
});
});