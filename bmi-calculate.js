const bmiCalc = function ( weight, height) {
    var bmi;
    
    bmi = (weight / Math.pow( (height/100), 2 )).toFixed(1);
    console.log(bmi); 

    if(bmi < 18.5){
      category = "Underweight";
    }
  //If BMI is >=18.5 and <=24.9
    else if( bmi >= 18.5 && bmi <= 24.9 ){
      category = "Normal Weight";
    }
  //If BMI is >= 25 and <= 29.9 
    else if( bmi >= 25 && bmi <= 29.9 ){
      category = "Overweight";
    }
  //If BMI is <= 30
    else{
      category = "Obese";
    }
  return category;  
 }
module.exports = { bmiCalc };