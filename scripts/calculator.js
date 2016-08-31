//The main calculator object responsible for performing calculations and returning results.
var Calculator = {
  //capture value from the button click event on the Calculator. 
   captureInput:function(param){
     //evaluate input and perform operation based on input type, i.e. an operator or a number has been entered.
     switch(param){
       case "+":
        console.log("here");
        performCalculation(param);
        break;
        case "-":
        performCalculation(param);
        break;
        case "*":
        performCalculation(param);
        break;
        case "/":
        console.log("wazzup");
        performCalculation(param);
        break;
        case "=":
        performCalculation(param);
        break;
        case "C":
        clearCalculator();
        break;
        case "<-":
        console.log("here");
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
}

//create an input array to hold the values to be calculated as well as the operator.
var inputs = [null,null,null];

//sets the display back to 0 and clears the array.
function clearCalculator(){
  inputs = [null,null,null];
  updateDisplay("0");
}
function captureDecimal(param){
  var value = getDisplay();
  if( value != null || value != ""){

      if(value.indexOf(".") < 0){
         value += param;
         inputs[0]=value;
      } else{
        value = "0" + param;
      }
      
     } 
   updateDisplay(value);
}

//determines if user is entering first value or second value and updates inputs array as well as the display.
//based on the prescense of the operator.
function updateInputs(param){
  var value1 = inputs[0];
  var value2 = inputs[2];
  var operator = inputs[1];

  if(operator == null){
    if(value1 == null){
          value1 = param;
    } else {
          value1 = value1 + param;
    }
    inputs[0] = value1;
    updateDisplay(value1);
  }else {
    if(value2 == null){
           value2 = param;
    }
     else {
           value2 = param;
    }
    inputs[2] = value2;
    updateDisplay(value2);
  }

}

//displays the value that has been passed in on the calculator display.
function updateDisplay(value){
  $('#displayLabel').text(value);
}

function getDisplay(){
  return $('#displayLabel').text();
}
//perform calculation based on the operator that has been entered as passed in 
//in the param parameter.
function performCalculation(param){
      
      console.log("logging " + param + " from pc function");

      //set a default result to 0.
			var firstResult = 0;
     
      try {
        
          if(param != "="){

            inputs[1] = param;
          
      
			    var value1 = inputs[0];
          var operation= inputs[1];
          var value2 = inputs[2];
      

          try{
              if(value1 != null && value2 != null){
                console.log("performing calculation");
                firstResult = eval(Number(value1) + operation + Number(value2));
                console.log(firstResult);
                updateDisplay(firstResult);
                inputs[0] = firstResult;

              }
            } catch (ex){ }

          }else{
              var value1 = inputs[0];
              var operation= inputs[1];
              var value2 = inputs[2];
      

            try{
                if(value1 != null && value2 != null){
                  console.log("performing calculation");
                  firstResult = eval(Number(value1) + operation + Number(value2));
                  console.log(firstResult);
                  updateDisplay(firstResult);
                  inputs[0] = firstResult;

              }
            } catch (ex){ }
                inputs = [null,null,null];
          }

              console.log(firstResult);
			}
			catch( ex ) {
  				
				// log errors.
				console.log(ex);
			}
}
// performs the command of a Backspace button by deleteing the value before.
    function performBackspace(){
          var operator = inputs[1];
          var workingValue = "";
          var inputIndex = 0;
          if(operator == null){
              workingValue = inputs[0];
              inputIndex = 0;
          }else
          {
              workingValue = inputs[2];
              inputIndex = 2;
          }
          workingValue = workingValue.substring(0, workingValue.length-1);
          updateDisplay(workingValue);
          inputs[inputIndex] = workingValue;
     }

	// Adds to numbers and displays sum in the result input box.
		function add() {
                   
                   try {  
  			
			// get the first number.
                   	var value1 = document.getElementById('addvalue1').value;
			
			// get the second number.
			var value2=document.getElementById('addvalue2').value;
			
			// perform addition while converting text to number format
			var sum = Number(value1) + Number(value2);
			
			// write result to the result text box.
			document.getElementById('AddResult').value = sum;
			}
			catch( ex ) {
  				
				// log errors.
				console.log('oops!');
			}
		}
    
    //subtracts numbers and displays differences in the subResults input box.
    function subtract(){
             try{
               //gets first number.
               var value1 = document.getElementById('subtractvalue1').value;
              //gets the second number.
               var value2= document.getElementById('subtractvalue2').value;
               //Subtracts the numbers and saves it into a variable.
               var difference = Number(value1) - Number(value2);
               //displays the difference in the input box.
               document.getElementById('SubtractResult').value =difference;
              
             }
       catch(ex) {
         console.log('oops!')
       }
    }
    
    
     function multiply(){
              try{
                var value1 = document.getElementById('multiplyvalue1').value;
                
                var value2= document.getElementById('multiplyvalue2').value;
                
                var product = Number(value1) * Number(value2);

        
                
                  
               document.getElementById('MultiplyResult').value = product;
              }
             catch(ex) {
         console.log('oops!')
       }                           
     } 