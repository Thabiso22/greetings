
describe("checkedRadioButt" ,function(firstName){
it('should return "Hello",when English is checked', function(){
assert.equal(checkedRadioButt("Hello"));});
it('should return "Molo",when IsiXhosa is checked', function(){
assert.equal(checkedRadioButt("Molo"));});
it('should return "Hallo",when Afrikaans is checked', function(){
assert.equal(checkedRadioButt("Hallo"));
});
});
