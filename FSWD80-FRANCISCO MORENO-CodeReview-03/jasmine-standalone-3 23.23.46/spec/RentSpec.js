/*            
* This is the file which will call
* our javascript file that need to be tested.
* Each describe block is equivalent to one test case    
*    
*/   


// describe your code
describe("rentACar", function(){

       // what it should do
       it("should return Dear: francisco, the your insurance cost for the car that you choose is: 605€."function(){
               //expect something
               expect(calculateInsurance()).toEqual("Dear: francisco, the your insurance cost for the car that you choose is: 605€.");
       });

});


/*
Note how describe - it() argument reads like a sentence.
*/