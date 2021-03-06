function convert(num) {  
  var int = '',
    decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  for (var i=0; i<decimals.length; i++) {
    while (num >= decimals[i]) {
      int += roman[i];
      num -= decimals[i];
    }
  }
  return int;
}

convert(36);

----------------------------------------------------------------------------------------------------
/* -- alternative, long form solution:

function convert(num) {
  var ourNumber = num;
  var roman = "";
  
  while (ourNumber >= 1000){
    roman += "M";
    var ourNumber = ourNumber - 1000;
  }
  
  while (ourNumber >= 500){
    roman += "D";
    var ourNumber = ourNumber - 500;
  }
  
  while (ourNumber >= 100){
    roman += "C";
    var ourNumber = ourNumber - 100;
  }
  
  if (ourNumber < 100 && ourNumber > 89){
    roman += "XC";
    var ourNumber = ourNumber - 90;
  }
  
  while (ourNumber >= 50){
    roman += "L";
    var ourNumber = ourNumber - 50;
  }
  
  if (ourNumber < 50 && ourNumber > 39){
    roman += "XL";
    var ourNumber = ourNumber - 40;
  }
  
  while(ourNumber > 9){  
    roman += "X";
    var ourNumber = ourNumber - 10;
  }
  
  // special case for 9's since they don't follow normal convention i.e. "IX"
  if (ourNumber == 9){
    roman += "IX";
    var ourNumber = ourNumber - 9;
  }
  
  while(ourNumber > 4){  
    roman += "V";
    var ourNumber = ourNumber - 5;
  }
  
  if(ourNumber == 4){
    roman += "IV";
    var ourNumber = ourNumber - 4;
  }
  
  while(ourNumber > 0){
    roman += "I";
    var ourNumber = ourNumber - 1;  
  }
return roman;
};

convert(36);
*/
