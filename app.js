//CHAPTER 21-25

// var fName = prompt("Enter first name..")
// var lName = prompt("Enter last name..")
// var full_name = fName + lName;
// alert("Welcome "+full_name)

// var mob = prompt("Enter your favorite mobile..")
// var mob_len = mob.length;
// alert("Your favorite phone is : "+mob)
// alert("Length of string is : "+mob_len)

// var country = "Pakistani";
// var ind = country.indexOf('n')
// document.write('String : '+country+"<br>")
// document.write('Index of n : '+ind)

// var text = "Hello World";
// var ind = text.lastIndexOf('l')
// document.write('Text : '+text+ "<br>")
// document.write('LastIndex of l is : '+ind+ "<br>")

// var text="Pakistan";
// var cha = text.charAt(3)
// document.write("String : "+text+"<br>")
// document.write("Character at 3 : "+cha)

// var fName = prompt("Enter first name..")
// var lName = prompt("Enter last name..")
// var full_name = fName.concat(lName)
// alert("Welcome "+full_name)

// var city ="Hyderabad";
// var change = city.replace('Hyder','Islam')
// alert(city)
// alert(change)

// var message = 'Ali and Sami are best friends.They play cricket and football together.';
// var change = message.replace(/and/g,'&')
// alert(message)
// alert(change)

// var num = '472'
// var con = parseInt(num);
// document.write('Number :'+num+"<br>"+"Type : Number"+"<br>")
// document.write('Number :'+con+"<br>"+"Type : String"+"<br>")

// var inp = prompt("Enter something..")
// var cha = inp.toUpperCase();
// alert(inp)
// alert(cha)

// var inp = prompt("Enter something in lower case");
// inp = inp.charAt(0).toUpperCase()+inp.substr(1).toLowerCase();
// console.log(inp)

// var word = 'UIniversity of Karachi';
// word = word.split('');
// for (var i=0; i<word.length; i++){
//     console.log(word[i])
// }

// var inp = prompt("Enter something");
// for (var i=0; i<inp.length; i++){
//     if(i==inp.length-1){
//         console.log(inp[i])
//     }
// }

// var word = "The quick brown fox jumps over the lazy dog.".toLowerCase();
// console.log(word.match(/the/g))

// var inp = prompt("What do you want?")
// var items = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
// for (var i= items; i<=4; i++){
//     if(inp===items[i]){
//         alert('Item found at index'+items[i].indexOf(items[i]))
//     }
// }

// var inp = prompt("ENTER SOMETHING....")
// for (var i = 0; i < inp.length; i++){
//         if (inp.charCodeAt(i) <= 64){
//             alert('Your string has invalid character')
//         }         
// }

// var pass = prompt("Enter a valid password")
//     if(pass.charAt(0)>=0){
//         alert("Password cannot start with a number")
//     }
//      else if(pass.charCodeAt()<=64){
//         alert("Passowrd shouldn't contain special characters")
//     }
//     else if(pass.length<6){
//         alert("Password should have atleast 6 characters")
//     }


// var check = prompt("Enter your item")
// check=check.toLowerCase();
// var items =  ['cake', 'apple pie', 'cookie', 'chips', 'patties']
// if(items[0]==check){
//     alert("Your item is available at "+items.indexOf(items[0]))
// }
// else if(items[1]==check){
//     alert("Your item is available at "+items.indexOf(items[1]))
// }
// else if(items[2]==check){
//     alert("Your item is available at "+items.indexOf(items[2]))
// }
// else if(items[3]==check){
//     alert("Your item is available at "+items.indexOf(items[3]))
// }
// else if(items[4]==check){
//     alert("Your item is available at "+items.indexOf(items[4]))
// }
// else{
//     alert("Your item is not found")
// }
    
// var check = prompt("Enter your item")
// check=check.toLowerCase();
// var items =  ['cake', 'apple pie', 'cookie', 'chips', 'patties']
// for(var i = 0; i<=items.length; i++){
//     if(items[i]===check){
//         alert("Your item is found at "+items.indexOf(items[i])+" index")        
//     }
// }



// var num = 35.36 ;
// var con = num.toString();
// var con1 = con.replace('.','')
// alert(con1)

//CHAPTER 26-30

// var inp = prompt("Enter a +ve decimal number");
// inp = parseFloat(inp);
// var round = Math.round(inp)
// var fl = Math.floor(inp);
// var cl = Math.ceil(inp)
// document.write("Number: "+inp+"<br>")
// document.write("Round: "+round+"<br>")
// document.write("Floor: "+fl+"<br>")
// document.write("Ceil: "+cl)

// var inp = prompt("Enter a -ve decimal number");
// inp = parseFloat(inp);
// var round = Math.round(inp)
// var fl = Math.floor(inp);
// var cl = Math.ceil(inp)
// document.write("Number: "+inp+"<br>")
// document.write("Round: "+round+"<br>")
// document.write("Floor: "+fl+"<br>")
// document.write("Ceil: "+cl)

// var inp = prompt("Enter a number")
// var cha = Math.abs(inp);
// document.write("The absolute value of "+inp+" is "+cha)

// var rnd = Math.random();
// var rnd1 = Math.floor(rnd*6);
// var dice = rnd1+1;
// document.write("Random dice value: "+dice)

// var rnd = Math.random();
// var rnd1=Math.floor(rnd*2);
// var toss=rnd1+1;
// if(toss=='1'){
//     document.write(toss+" Result is Heads")

// }
// else{
//     document.write(toss+" Result is Tails")   
// }

// var rnd = Math.random();
// var rnd1 =  Math.floor(rnd*100);
// var num = rnd1+1;
// document.write('Random number between 1 - 100 is :'+num)

// var rnd = Math.random();
// var rnd1= Math.floor(rnd*10)
// var secretNum = rnd1+1;
// var guess = prompt('Guess the number between 1-10')
// guess=parseInt(guess)
// console.log(secretNum)
// if(guess==secretNum){
//     alert("Congratulations")
// }
// else{
//     alert('Try again')
// }

// var inp = prompt("Enter your weight in kilograms")
// alert(inp)

//CHAPTER 31-34

// var date = new Date();
// alert(date)

// var date = new Date();
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var n = months[date.getMonth()];
// alert(n)

// var date = new Date();
// var days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
// var d = days[date.getDay()];
// d=d.slice(0,3)
// alert(d)

// var date = new Date();
// var days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
// var d = days[date.getDay()];
// if(d=='Sunday'|| d=='Saturday'){
//     alert('Its Funday')
// }
// else{
//     alert('Normal Day')
// }

// var date = new Date();
// var day = date.getDate();
// if(day<='15'){
//     alert('First fifteen days of the month')
// }
// else{
//     alert('Last fifteen days')
// }

// var date= new Date();
// var mili = date.getTime()
// var min = mili / 100 /60
// document.write("DATE: "+date+"<br> Miliseconds"+mili+"<br> Minutes "+min)

// var date = new Date();
// var time = date.getHours();
// alert(time)
// if(time>=13){
//     alert('Its P.M')
// }
// else{
//     alert('Its A.M')
// }

// var date = new Date("December 31, 2020");
// alert(date)

// var end = new Date();
// var start = new Date("April 25,2020");
// var endTime = end.getTime();
// var startTime = start.getTime();
// var diff = end - start
// var fin = Math.floor(diff /(1000*60*60*24));
// document.write(fin+ " days have passed since 1st Ramadan") 

// var date =  new Date();
// var ref = new Date ("December 1, 2015");
// var endSec = date.getSeconds();
// var startSec = ref.getSeconds();
// var fin = endSec-startSec;
// document.write(fin)

// var curr =  new Date().getTime() 
// var refDate= new Date("January 1, 2015").getTime() ;
// var msDiff = curr - refDate;
// var diff = Math.floor(msDiff / 1000); 
// document.write(diff+" seconds have been elapsed between today and 1 Jan 2015")

// var age = parseInt(prompt("Enter your age"));
// var date = new Date().getFullYear()-age;
// document.write("Your age : "+ age)
// document.write("Your birthyear : "+ date)

// var date = new Date();
// var custName = "Rayyan Ali"
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var n = months[date.getMonth()];
// var numOfUnits = 410;
// var chPerUnits = 16;
// var latePayment = 350;
// var net_amount = numOfUnits * chPerUnits;
// var Gross_amount = net_amount + latePayment;
// document.write("<h1>K-ELECTRIC BILLS</h1>"+"<br>")
// document.write("Customer Name : "+custName+"<br>")
// document.write("Current Month : "+n+"<br>")
// document.write("Number of units : "+numOfUnits+"<br>");
// document.write("Charges per unit :"+ chPerUnits+"<br>");
// document.write("Net amount payable (within due date) :"+ net_amount+"<br>");
// document.write("Late Payment : "+ latePayment+"<br>");
// document.write("Gross Payment : "+ Gross_amount);

// var date = new Date();
// var na = new Date()
// var sub = na.getFullYear()-100;
// var ne = na.setFullYear(sub);
// document.write(date+"<br>");
// document.write(na);

// var date = new Date();
// var na = new Date()
// var sub = na.getHours()-1;
// var ne = na.setHours(sub);
// document.write(date+"<br>");
// document.write(na);

//CHAPTER 35-38
// function date() {
//     var dt = new Date();
//     document.write(dt)
// }
// date();

// function greet (){
//     var fName = prompt("Enter first name")
//     var lName = prompt("Enter last name")
//     var full_name = fName+lName;
//     alert("Hello "+full_name)
// }
// greet();

// function sum (){
//     var num1=parseInt(prompt("Enter first value"))
//     var num2=parseInt(prompt("Enter second value"))
//     var res = num1+num2;
//     return res;
// }
// sum();

// function Calculator(){
//     var num1 = parseInt(prompt("Enter value 1"))
//     var num2 = parseInt(prompt("Enter value 2"))
//     var op = prompt("Enter operator")
//     if (op=='+'){
//         res = num1+num2;
//         alert(res)
//     }
//     else if(op=='-'){
//         res=num2-num1;
//         alert(res)
//     }
//     else if(op=='*'){
//         res = num1 * num2
//         alert(res)
//     }
// }
// Calculator();

// function square (num){
//     return num * num;
// }
// console.log(square(6))

// function factorial(n) {
//     if (n == 0 || n == 1) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// }
// var n = 4;
// answer = factorial(n)
// console.log("The factorial of " + n + " is " + answer);

// function counting() {
//     var start = parseInt(prompt("Start"))
//     var end = parseInt(prompt("End"))
//     for (var i = start; i<=end; i++){
//         console.log(i)
//     }
// }
// counting()

// function Hypotenuse(){
//     var base = parseInt(prompt("Enter base value"));
//     var perpendicular = parseInt(prompt("Enter perpendicular value"));
//     var hyp = Math.pow(base,2) * Math.pow(perpendicular,2)
//      function square() {
//         return Math.pow(hyp,2)   
//     } 
//         return square();
// }
// console.log(Hypotenuse())


// function rectangle (width=5, height=6){
//         var area = width * height;
//         return area;
// }
// console.log(rectangle())

// function palindrome (){
//     var check = prompt("Enter a word to check palindrome");
//     var pal = check.split('').reverse().join('')
//     if(pal==check){
//         alert(check+" is palindrome")
//     }
//     else{
//         alert("This is not palindrome")
//     }
// }
// palindrome();

// function convert(str) {
//     var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(convert('the quick brown fox'));

// function calcCircumference(){
//     var rad = 5;
//     var pi = 3.142;
//     var calc = 2 * pi * rad;
//     return calc; 
// }
// document.write("The circumference of a circle is :"+calcCircumference()+"<br>")

// function calcArea (){
//     var rad = 4;
//     var pi = 3.142;
//     var calc = pi * Math.pow(rad,2)
//     return calc
// }
// document.write("The Area of a circle is :"+calcArea())

// function longestWord(string) {
//     var str = string.split(" ");
//     console.log(str)
//     var longest = 0;
//     var word = null;
//     for (var i = 0; i < str.length - 1; i++) {
//         if (longest < str[i].length) {
//             longest = str[i].length;
//             console.log(longest)
//             word = str[i];
//         }
//     }
//     return word;
// }
// console.log(longestWord("Web Development Tutorial"))

// function occurence(word,letter) {
//     console.log(word.match(/o/g))    
// }
// occurence('JSResourceS.com','o')
