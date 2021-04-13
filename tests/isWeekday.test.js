describe('isWeekday' , function(){
    it('should find out if the parameter passed in is a day of the week (ie. Not a weekend day).' , function(){
        assert.equal(true,isWeekday("Monday"));

    });
    it('should find out if the parameter passed in is a day of the week (ie. Not a weekend day).' , function(){
        assert.equal(true,isWeekday("Tuesday"));
    });
    it('should find out if the parameter passed in is a day of the week (ie. Not a weekend day).' , function(){
        assert.equal(true,isWeekday("Wednesday"));
    });
    it('should find out if the parameter passed in is a day of the week (ie. Not a weekend day).' , function(){
        assert.equal(true,isWeekday("Thursday"));
    });
    it('should find out if the parameter passed in is a day of the week (ie. Not a weekend day).' , function(){
        assert.equal(true,isWeekday("Friday"));
    });
    it('should find out if the parameter passed in is not a day of the week (ie.weekend day).' , function(){
        assert.equal(false,isWeekday("Sartuday")); 
});
});