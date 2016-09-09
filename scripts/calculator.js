//The main calculator object responsible for performing calculations and returning results.
var Calculator = function( element ) {
  
    this.displayElement = element;
    
    //capture value from the button click event on the Calculator. 
    this.captureInput = function( param ){

    //evaluate input and perform operation based on input type, i.e. an operator or a number has been entered.
    switch( param ){

      case "+":
        performCalculation(param);
        break;

      case "-":
          performCalculation(param);
          break;

      case "*":
          performCalculation(param);
          break;

      case "/":
          performCalculation(param);
          break;

      case "=":
          performCalculation(param);
          break;

      case "C":
          clearCalculator();
          break;

      case "<-":
          performBackspace();
          break;

      case ".":
          captureDecimal(param);
          break;

        //if not an operator then process the numeric value.
      default:
          updateInputs(param);
          break;
     };
     
   }

  //create an input array to hold the values to be calculated as well as the operator.
  var inputs = [null,null,null];

  //sets the display back to 0 and clears the array.
  var clearCalculator = function(){
    inputs = [null,null,null];
    updateDisplay("0");
  }

  // ensures that only one decimal is present.
  var captureDecimal = function (param){
    var value = getDisplayValue();

    if(value != null || value != ""){

      if(value.indexOf(".") < 0){
        value += param;
      }

    } else {
        value = "0" + param;
    }
    
    var value1 = inputs[0];
    var value2 = inputs[2];
    var operator = inputs[1];

    if(operator == null){

      if(value1 == null){

        value1 = value;

      } else if(value1.length == 9) {

        value1 = value1;

      } else {

        value1 = value1 + param;
        
      }
      inputs[0] = value1;
    } else {
      if(value2 == null){
        value2 = value;
      } else if(value2.length==9){
        value2 = value2;
      } else {
        value2 = value2 + param;
      }
      inputs[2] = value2;
    }
  }

  //determines if user is entering first value or second value and updates inputs array as well as the display.
  //based on the prescense of the operator.
  var updateInputs = function (param){
    var value1 = inputs[0];
    var value2 = inputs[2];
    var operator = inputs[1];

    // if no operator has been selected
    if(operator == null){

      // if no value has been stored for value1
      if(value1 == null){

        // set value1 to the value entered.
        value1 = param;

        // also if value 1 is already 9 characters, don't allow additional.
      } else if(value1.length == 9) {

        // set value1 to itself.
        value1 = value1;

      } else {

        // if value1 is not yet 9 characters, set value1 equal to it's current value and the character entered
        value1 = getDisplayValue() + param;
      }

      // update the input array for value 1
      inputs[0] = value1;

      // update the user display for value 1
      updateDisplay(value1);

      // if an operator is present, then value1 should have a value and the user is enterng value 2.
    } else {

      // if value2 is currently null, set value2 to the value that was entered.
      if(value2 == null){

        value2 = param;

      // also, if value2 has 9 characters, set value2 to itself leaving it unchanged.
      } else if(value2.length==9){

        value2 = value2;

      // otherwise, set value2 to the value itself plus the value entered.
      } else {

        value2 = value2 + param;
      }

      //update the input array for value2
      inputs[2] = value2;

      // update the display for value2
      updateDisplay(value2);
    }

  }

  //displays the value that has been passed in on the calculator display.
  var updateDisplay = function (value){
    document.getElementById('displayLabel').textContent = value;
  }

  //gets value in display.
  var getDisplayValue = function(){
    return document.getElementById('displayLabel').textContent;
  }

  //perform calculation based on the operator that has been entered as passed in 
  //in the param parameter.
  var performCalculation = function ( param ){
        
        console.log("logging " + param + " from pc function");

        //set a default result to 0.
        var result = 0;

        try {
          
            if( param != "=" ){
            
                inputs[1] = param;
            
                var value1 = inputs[0];
                var operation= inputs[1];
                var value2 = inputs[2];
            
                try{
                    if( value1 != null && value2 != null ) {

                      console.log("performing calculation");
                      result = eval(Number(value1) + operation + Number(value2));
                      console.log(result);
                      updateDisplay(result);
                  }
                } catch ( ex ){}
            
            } else {

                // if the param is the = sign, all of the parameters should be captured
                // perform calculation and reset the inputs
                var value1 = inputs[0];
                var operation= inputs[1];
                var value2 = inputs[2];
            
                try{
                    if( value1 != null && value2 != null ) {

                      console.log("performing calculation");
                      result = eval(Number(value1) + operation + Number(value2));
                      console.log(result);
                      updateDisplay(result);
                  }
                } catch ( ex ){}

                // set inputs to null if '=' is pressed.
                inputs = [null,null,null];
            }

            console.log(result);
            
        } catch( ex ) {
            
          // log errors.
          console.log(ex);
        }
  }

  // performs the command of a Backspace button by deleting the value before.
  var performBackspace = function(){
      
      // get value being displayd
      var value = getDisplayValue();

      // if the value is not null nor an empty string perform substring subtracting last character.
      if(value != null || value != ""){

        // remove last character.
        value = value.substr(0,value.length-1);
        
        //if all characters have been removed, set display to zero (?)
        if(value.length < 1){
          value = "0";
        }
      }
      
      // update the display with the updated value.
      updateDisplay(value);
  }
}