alert("Check my js");

// write a function that takes the input string and reverses it
function reverseString(string) {
    var newString = "";
    for (var i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
};
const argument= reverseString('Hello');
console.log(argument);

// write a function that takes the input string and switches all uppercase characters to lowercase and lowercase charcaters to uppercase
function swapCase(letters) {
    var newLetters = "";
    for(var i = 0; i<letters.length; i++){
        if(letters[i] === letters[i].toUpperCase()){
            newLetters += letters[i].toLowerCase();     
        }
        else {
            newLetters += letters[i].toUpperCase();  
        }       
    }
    return newLetters; 
};
const argument1=swapCase('Hello World');
console.log(argument1);

//convert array of numbers from farenheit to celcius
function toCelcius(array){
    return array.map(                
      function(temp) {               
        return (temp - 32) * 5 / 9
      }
    );
} 
var array = [23, 32, 41, 50, 59];
var result = toCelcius(array);
console.log(result);

//write a function that takes an input array and returns an array of booleans (>=75) or fail (<75)
const grade=[20, 30, 50, 80, 90, 100].map(function passOrFail(grad){
    if (grad >=75){return true;}
    else{return false;}
});
console.log(grade);

//write code that loops through the two variables returns an array ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs'] 
function germanNumbers() {
    var sayNumber = [];
    const cardinalNumbers = [2, 3, 4, 5, 6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'funf', 'sechs'];
    for (i = 0; i < 5; i++) {
    sayNumber[i]= cardinalNumbers[i] + " is " + germanNumbers[i] ;
    }
    return sayNumber;

}
const germanLanguage=germanNumbers();
console.log(`["${germanLanguage}"]`); 

// write code that returns an array of ONLY prime numbers that are in the array numbers
function returnPrimeNumbers(){
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    const primeNumbers=numbers.filter(function(number){
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true;
    });
    return primeNumbers;
};
const isPrime=returnPrimeNumbers();
console.log(isPrime);
//console.log(primeNumbers);

//Write a function that loops through and console.log's the numbers from 1 to 100, except multiples of three, log (without quotes) "CSC225 RULES" instead of the number, for the multiples of five, log (without quotes) "I LOVE JAVASCRIPT". For numbers which are multiples of both three and five, log (without quotes) "CSC225 RULES I LOVE JAVASCRIPT" Console log out:
 function displayNumbers(num){
    for(var num=1; num<=100; num++){
        if(num%3===0){
            console.log("CSC225 RULES");
        }
        else if(num%5===0){
            console.log("I LOVE JAVASCRIPT");
        }
        else if(num%3===0 && num%5===0){
            console.log("I LOVE JAVASCRIPT");
        }
        else{
            console.log(num)
        }
    } 
}
const numb = displayNumbers();
console.log(numb); 
