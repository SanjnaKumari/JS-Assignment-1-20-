//Chapter#1
//Task#1
/*alert("Welcome")

//Task#2
alert("Error! Please enter a valid password.")

//Task#3
alert("Welcome to JS Land...\n Happy Coding!" )

//Task#4
alert("Welcome to JS Land...")
alert("Happy Coding! \n Prevent this page from creating additional dialogs.")

//Task#5
alert("Hello... I can run JS through my web browser's console")
console.log("Hello... I can run JS through my web browser's console")





//Chapter#2
//Task#1
var username = "";

//Task#2
var myName = "Sanjna Kumari";

//Task#3
var message = "Hello World"
alert(message)

//Task#4
var name = "Jhone Doe"
alert(name)
var age = "15 years old"
alert(age)
var course = "Certified Mobile Application Development"
alert(course)

//Task#5
var pizza = "Pizza \nPizz \nPiz \nPi \nP"
alert(pizza)

//Task#6
var email = "SanjnaKumari@gmail.com"
alert("My email address is " + email)

//Task#7
var book = " A smarter way to learn JavaScript"
alert("I am trying to learn from the Book " + book)

//Task#8
document.write("Yay! I can write HTML content through Javascript")

//Task#9
var design = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"
alert(design)
console.log(design)


//Chapter#3
//Task#1
var age = 20;
alert("I am " + age + " years old.")

//Task#3
var birthYear = 2000
document.write("my birth year is " + birthYear + " <br>" + "Data type of my declared variable is number")

//Task#4
var Visitorname  = "John Doe"
var Producttitle = "T-Shirt(s)"
Quantity = 5
document.write(Visitorname + " ordered " + Quantity +" " + Producttitle + " on XYZ Clothing store")



//Chapter#4
//Task#1
var variable1 = "One", variable2 = "Second", variable3 = "Third";

//Task#2
//Legal
var name = "Sanjna"
var age123 = 20
var $name = "kumari"
var birth_year = 2020;
var _name = "sanjna"
//Illegal
var "name" = "Sanjna";
var 123 = 20;
var 3lastname = "kumari"
var birth year = 2020;
var alert = "Sanjna"

//Task#3
document.write("<h1><h1>Rules for naming Js variables</h1>")
document.write("Variable names can only contain , numbers , $ , and _ . For example : my_1stVariable <br>Variables must begin with a letter, $ or,_____. For example $name, _name or name <br>Variable names are case sensitive <br>Variable names should not be JS keywords")





//Chapter#5
//Task#1
var input1 = +prompt("Enter one num");
var input2 = +prompt("Enter 2nd number");
var sum = input1+input2
document.write("Sum of " + input1 + " and " + input2 + " is " + sum)

//Task#2
var input1 = +prompt("Enter one num");
var input2 = +prompt("Enter 2nd number");
var result = input1-input2;
var mult = input1*input2;
var div = input1/input2;
var mod = input1%input2;
document.write("After Subtraction result of " + input1 + " and " + input2 + " is " + result  + " <br> After Multiplying result of " + input1 + " and " + input2 + " is " + mult + " <br> After division result of " + input1 + " and " + input2 + " is " + div +"<br> In modulus result of " + input1 + " and " + input2 + " is " + mod)

//Task#3
var value = "";
document.write("Value after variable declaration is undefined <br>")
var value = 5;
document.write("Initial value: " + value + "<br>")
value++;
document.write("Value after increment is: " + value + "<br>")
var value = value+7;
document.write("Value after addition is: " + value + "<br>")
value--;
document.write("Value after decrement is: " + value + "<br>")
var value = value%3;
document.write("The remainder is: " + value)

//Task#4
var ticketPrice = 600
var quantity = 5
var total = quantity*ticketPrice
document.write("Total cost to buy "+quantity+" tickets to movie is "+total+" PKR")

//Task#5
var table = 4;
document.write("Table of "+table+"<br>")
for(var i = 1; i < 11; i++ ){
       document.write(table+"x"+i+"="+table*i+"<br>")
    }

//Task#6
var TempC = 25;
var TempC_to_F = ((TempC*9/5)+32);
document.write(TempC+"°C is " +TempC_to_F+"°F"+"<br>");
var TempF = 70;
var TempF_to_C = ((TempF-32)*(5/9));
document.write(TempF+"°C is " +TempF_to_C+"°F"+"<br>");

//Task#7
document.write("<h1>Shopping Cart")
var item1 = 650;
var item2 = 100;
var quantity1 = 3;
var quantity2 = 7;
var shipping_charges = 100;
var total_cost = (item1*quantity1)+(item2*quantity2)+shipping_charges;
document.write("Price of Item 1 is: "+item1+"<br>");
document.write("Quantity of Item 1 is: "+quantity1+"<br>");
document.write("Price of Item 2 is: "+item2+"<br>");
document.write("Quantity of Item 2 is: "+quantity2+"<br>");
document.write("Shipping Charges: "+shipping_charges+"<br><br>");
document.write("Total cost of your order is: "+total_cost+"<br>");

//Task8
document.write("<h1>Marks Sheet")
var Tmarks = 980
var Obtmarks = 804
var percent = (Obtmarks/Tmarks)*100
document.write("Total marks :" + Tmarks + "<br>")
document.write("Marks Obtained :" + Obtmarks +"<br>")
document.write("Percentage :" + percent +"<br>")

//Task#9
document.write("<h1>Currency in PKR")
var Dollars = 10;
var Riyals = 25;
var PKR = (Dollars*104.80)+(Riyals*28);
document.write("Total Currency in PKR: "+PKR+"<br>");

//Task#10
var number = 12;
var total_number = (((number+5)*10)/2);
document.write("Result is: "+total_number+"<br>");

//Task#11
document.write("<h1>Age Calculator")
var currentYear = 2020;
var birthYear = 1995;
var currentAge = currentYear - birthYear;
var possibleAge = currentAge+1;
document.write("Current year:" + currentYear+"<br>")
document.write("Birth year:" + birthYear+"<br>")
document.write("They are either "+currentAge+" or " +possibleAge+ " years old <br>");

//Task#12
document.write("<h1>AThe Geometrizer</h1>")
var radius = 20;
var pi = 3.142;
var circumference = 2*pi*radius;
var area = pi*(radius**2);
document.write("Radius of a circle is: "+radius+"<br>");
document.write("The circumference is: "+circumference+"<br>");
document.write("The area is: "+area+"<br>");

//Task#13
document.write("<h1>AThe Lifetime Supply Calculator</h1>")
var food = "Chocolate chip"
var age = 15;
 var maxAge = 65;
var amountOfSnack = 3;
document.write("Favourite Snack: "+food+"<br>");
document.write("Current Age: "+age+"<br>");
document.write("Estimated Maximum Age: "+maxAge+"<br>");
document.write("Amount of snacks per day: "+amountOfSnack+"<br>");
document.write("You will need "+(maxAge-age)*amountOfSnack+" "+food+" to last you until the ripe old age "+maxAge+"<br>");
        



//Chapter#6-9
//Task#1
var a = 10;
document.write("Result: <br>")
document.write("The value of a is: " + a + "<br> <br>")
a++;
document.write("The value of ++a is: " + a + "<br> Now the value of a is " + a + "<br> <br>") 
document.write("The value of a++ is: " + a + "<br>")
a++;
document.write("Now the value of a is " + a + "<br> <br>") 
--a;
document.write("The value of --a is: " + a + "<br> Now the value of a is " + a + "<br> <br>") 
document.write("The value of a-- is: " + a + "<br>")
a--;
document.write( "Now the value of a is " + a + "<br> <br>")

//Task#2
  var a = 2, b = 1;
var result = --a - --b + ++b + b--
//var result = --a - --b + ++b + b--;
document.write("a is 2 <br> b is 1 <br> result is " + result)
//Explaining the output at each stage:
//--a; Result will be 1
//--a - --b; Result will be 1
//--a - --b + ++b; Result will be 2 
//--a - --b + ++b + b--; Result will be 3

//Task#3
var user = prompt("Enter your name")
document.write("Welcome " + user)

//Task6
document.write("<h1>Subjects Total Marks Obtained Marks Percentage</h1>")
var subject1 = prompt("Enter Subject 1 ")
var subject2 = prompt("Enter Subject 2 ")
var subject3 = prompt("Enter Subject 3 ")
var total_mark = 100 ;
var total = total_mark + total_mark + total_mark
var obt_1 = +prompt("Enter marks for 1st subject")
var obt_2 = +prompt("Enter marks for 2nd subject")
var obt_3 = +prompt("Enter marks for 3rd subject")
var obt = obt_1 + obt_2 + obt_3
var perc_1 = (obt_1/total_mark * 100  )
var perc_2 = (obt_2/total_mark * 100   )
var perc_3 = (obt_3/total_mark * 100  )
var perc = ((+perc_1) + (+perc_2) + (+perc_3))/3
var perc1 = Math.trunc(perc)
document.write( subject1 + "   " + total_mark + "    "+ obt_1 +  "     " + perc_1 + "%" + "<br>") 
document.write( subject2 + "   " + total_mark + "    "+ obt_2 +  "     " + perc_2 +  "%" +"<br>") 
document.write( subject3 + "   "  + total_mark + "    "+ obt_3 +  "     " + perc_3 +  "%" +"<br>")
document.write(  "Total" +"   "  + total + "    "+ obt +  "     " + perc1+  "%" +"<br>")






//Chapter#9-11
//Task#1
var city = prompt("Enter City")
if (city === "Karachi"){
    document.write("Welcome to city of lights")
}

//Task#2
var gender = prompt("Enter gender")
if (gender === "male"){
    document.write("Good Morning Sir")
}
if (gender === "female") {
    document.write("Good Morning Ma'am")
}

//Task#3
var color = prompt("Enter color")
if (color === "Red"){
    document.write("Must Stop")
}
if (color === "Yellow"){
    document.write("Ready to move")
}
if (color === "Green") {
    document.write("Move now")
}

//Task#4
var fuel = prompt("Enter fuel")
if (fuel < "0.25 litres"){
    document.write("Please refill the fuel in your car")
}

//Task#5
//Part a
var a = 4;
if (++a === 5){
alert("given condition for variable a is true")}//it will diplay output bcz condition is satisfied
//Part b
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}// it will not display the output
//Part c
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true"); //This output will be displayed
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true"); //This will also be displayed
}
//Part d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");//this output will be displayed
}
//Part e
if (true){
    alert("True");//This will be displayed
    }
if (false){
    alert("False");
    }
//Part f    
if("car" < "cat"){
    alert("car is smaller than cat"); //THis will be displayed
    }
 * 

//Task#6
document.write("<h1>Marks Sheet</h1>")
var subject1 = prompt("Enter Subject 1 ")
var subject2 = prompt("Enter Subject 2 ")
var subject3 = prompt("Enter Subject 3 ")
var total_mark = 100 ;
var total = total_mark + total_mark + total_mark
var obt_1 = +prompt("Enter marks for 1st subject")
var obt_2 = +prompt("Enter marks for 2nd subject")
var obt_3 = +prompt("Enter marks for 3rd subject")
var obt = obt_1 + obt_2 + obt_3
var perc_1 = (obt_1/total_mark * 100  )
var perc_2 = (obt_2/total_mark * 100   )
var perc_3 = (obt_3/total_mark * 100  )
var perc = ((+perc_1) + (+perc_2) + (+perc_3))/3
var perc1 = Math.trunc(perc)
if (perc1 >= 80){
    document.write("Total Marks: " + total + "<br> Marks obtained: " + obt + "<br> Percentage: " + perc_1 + " % <br>Grade: A-one <br> Remarks: Excellent <br>")
}
if (perc1 >= 70 && perc1 <80){
    document.write("Total Marks: " + total + "<br> Marks obtained: " + obt + "<br> Percentage: " + perc_1 + " % <br>Grade: A <br> Remarks: Good <br>")
}
if (perc1 >= 60 && perc1<70){
    document.write("Total Marks: " + total + "<br> Marks obtained: " + obt + "<br> Percentage: " + perc_1 + " % <br>Grade: B <br> Remarks: You need to improve <br>")
}
if (perc1 < 60) {
    document.write("Total Marks: " + total + "<br> Marks obtained: " + obt + "<br> Percentage: " + perc_1 + " % <br>Grade: Fail <br> Remarks: Sorry <br>")
}

//Task#7
var secret = 9;
var num = +prompt("Enter secret number");
if (num === secret){
    alert("Bingo! Correct answer")
}
if (num === ++secret){
    alert("Close enough to the correct answer")
}

//Task#8
var inp = +prompt("Enter number")
if ( inp %3 === 0){
    alert("Your num is divisible by 3")
}

//Task#9
var num = +prompt("Enter number")
if (num%2 ===0){
    alert("Even number")
}
if (num%2 != 0){
    alert("Odd number")
}

//Task#10
var temp = +prompt("Enter temperature")
if (temp >40){
    alert("It is too hot outside.")
}
if (temp >30 && temp <=40){
    alert("The Weather today is normal")
}
if (temp >20 && temp <=30){
    alert("Today's Weather is cool.")
}
if (temp>10 && temp <=20){
    alert("OMG! Today's Weather is so Cool.")
}

//Task11
var val1 = prompt("Enter your first value")
var val2 = prompt("Enter your second value")
var sign = prompt("Enter your operator")
console.log(val1 + sign + val2)
if (sign==="+"){
    alert(val1+sign+val2 + "=" + ((+val1)+(+val2)))
}
else if (sign==="-"){
    alert(val1+sign+val2 + "=" + (val1-val2))
}
else if (sign==="*"){
    alert(val1+sign+val2 + "=" + (val1*val2))
}
else if (sign==="/"){
    alert(val1+sign+val2 + "=" + (val1/val2))
}
else if (sign==="%"){
    alert(val1+sign+val2 + "=" + (val1%val2)+)
}



//Chapter#12-13
//Task#1
var character = prompt("Enter Character: ");
check = character.charCodeAt(0);
if (check >= 65 && check <= 90){
document.write("Character is Upper Case Alphabet")
} 
else if (check >= 97 && check <= 122){
    document.write("Character is Lower Case Alphabet")
}
else if (check >= 48 && check <= 57) {
    document.write("Character is a Digit");
}

 //Task#2
 var a = parseInt(prompt("Enter number 1"))
var b = parseInt(prompt("Enter number 2"))
if (a<b){
    document.write(b+" is larger imteger")
}
else if (b<a){
    document.write(a+" is larger imteger")
}
else{
    document.write("Both are equal")
}

//Task#3
var a = parseInt(prompt("Enter number"))
if (a>0){
    document.write("Positive number")
}
else if (a<0){
    document.write("Negative number")
}
else{
     document.write("Entered value is 0")
 }

 //Task#4
 var a = prompt("enter character")
var b = a.toLocaleLowerCase()
if(b=="a" || b=="e" || b=="i" || b=="o" || b=="u"){
     document.write("True")
}
else{
    document.write("False")
}

//Task#5
var pass = "welcome123"   
var a = prompt("Enter pass")
if(pass === a){
    document.write("Correct! the password you entered matches the previous pasword")
}
else{
     document.write("Incorrect password")
}

//Task#6
 var greeting; 
var hour = 13; 
if (hour < 18) { 
    greeting = "Good day"; 
    document.write(greeting);
 }
else {    
    greeting = "Good evening"; 
    document.write(greeting);
}

//Task#7
 userTime = parseInt(prompt("Enter userTime in 24 hr format"))
 if(userTime>=0000 && userTime<1200){
    document.write("Good Morning");
}
else if (userTime>=1200 && userTime<1700){
    document.write("Good Afternoon");
}
else if (userTime>=1700 && userTime<2100){
     document.write("Good Evening");
}
else if (userTime>=2100 && userTime<=2400){
    document.write("Good Night");
}



//Chapter#14-16
//Task#1 JS Literal notation
var students = [];

//Task#2 JS object notation
var myarray = {
    students :[]
}

//Task#3
var strings = ["Hello " , " Your name"]
document.write(strings)

//Task#4
var numbers = [1 ,2 ,3 ,4]
document.write(numbers)

//Task#5
var boolean = ["True ","False"]
document.write(boolean)

//Task#6
var mixed = [1," Name",2," Age", "True"]
doNotTrackw.write(mixed)

//Task#7
document.write("<h1>Qualifications</h1>")
var Qual = ["1) SSC" , "<br> 2) HSC " , " <br> 3) BCS " , " <br> 4) BS"," <br> 5) BCOM " , " <br> 6) MS ","<br> 7) M. Phil." , " <br> 8) PhD"];
document.write(Qual)

//Task#8
var students = ["Michael","John","Tony"];
var score = [320, 230,480];
var total = 500;
//for (i = 0; i<score.length;i++){
var perc1 = ((score[0]/total)*100 + " %<br>")
var perc2 = ((score[1]/total)*100 + " %<br>")
var perc3 = ((score[2]/total)*100 + " %<br>")
    document.write("Score of " + students[0] + " is " + score[0] + " Percentage: " + perc1)
    document.write("Score of " + students[1] + " is " + score[1] + " Percentage: " + perc2)
    document.write("Score of " + students[2] + " is "  + score[2] + " Percentage: " + perc3)
}

//Task#10
var scores = [320,230,480,120]
document.write("Scores of Students: " + scores + "<br>")
document.write("Ordered Scores of Students: " + scores.sort())

//Task#11
var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
document.write("Cities list: <br>" + cities)
var copy_cities = cities.slice(2,4)
document.write("<br> Selected cities list: <br>" + copy_cities)

//Task#12
var arr = ["This ","is ","my ","cat "]
document.write("Array: <br>" + arr)
var str = arr.join(" ")
document.write("<br> String: <br> " + str)

//Task#13
var devices = []
devices.push("keyboard")
devices.push("mouse")
devices.push("printer")
devices.push("monitor")
document.write("Devices: <br>" + devices)
document.write("<br> <br> Out: <br>" + devices.shift())
document.write(" <br> Out: <br>" + devices.shift())
document.write(" <br> Out: <br>" + devices.shift())
document.write(" <br> Out: <br>" + devices.shift())

//Task#14
var devices = []
devices.push("keyboard")
devices.push("mouse")
devices.push("printer")
devices.push("monitor")
document.write("Devices: <br>" + devices)
document.write("<br> <br> Out: <br>" + devices.pop())
document.write(" <br> Out: <br>" + devices.pop())
document.write(" <br> Out: <br>" + devices.pop())
document.write(" <br> Out: <br>" + devices.pop())

//Task#15
var array =["Apple" , " Samsung", " Motorola"," Nokia"," Sony"," Haier"]
for (i =0; i<array.length; i++){
    document.write( array[i] + "<br>")
}




//Chapter#17-20
//Task#01
var multi = [
    [ ]
]

//Task#02
var multi = [
    [0 ,1 ,2 ,3 ],
    [1, 0 ,1 ,2],
    [2, 1 ,0 ,1]
]
document.write(multi[0].join(" ") + "<br> <br>" + multi[1].join(" ") + "<br> <br>"  + multi[2].join(" "))

//Task#3
for (i=1;i<11;i++){
    document.write(i + "<br>")
}

//Task#4
var mult = +prompt("Enter a number to show its multipliaction table")
var length = +prompt("Enter length multiplication table")
for(i=1;i<=length;i++){
    document.write(mult + " x " + i  + " = " + mult*i +"<br>")
}

//Task#5
 var fruits = ["apple", "banana", "mango", "orange","strawberry"]
 for(i=0;i<fruits.length;i++){
     document.write(fruits[i] + "<br>")  
}
document.write("<br>")
for(i=0;i<fruits.length;i++){
    document.write("Element at index " + i + " is " + fruits[i] + "<br>")
}

//Task#6
document.write("Counting:<br>" ) 
for (i=1;i<16;i++){
    document.write( i + " , ")
}
document.write("<br> Reverse counting: <br>" ) 
for (i=10;i>0;i--){
    document.write(i + " , ")
}
document.write("<br> Even: <br>" ) 
for (i=0;i<21;i+=2){
    document.write(i + " , ")
}
document.write("<br> Odd <br>" ) 
for (i=1;i<20;i+=2){
    document.write(i + " , ")
}
document.write("<br> Series: <br>" ) 
for (i=2;i<21;i+=2){
    document.write(i  + "k , ")
}

//Task#7
var  bak = ["cake", "apple pie", "cookie", "chipe", "paties"];
var inp = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")
for(i=0;i<bak.length;i++){
    if (bak[i] === inp){
        document.write(inp + " is available at index " + i + " in our bakery.")
        break;
    } 
}
if (bak[i] != inp){
    document.write("We are sorry. " + inp + " is  not available in our bakery.")
}

//Task#8
var array = [24, 53, 78, 91, 12]
document.write("Array items: " + array + "<br> The largest number is " + Math.max.apply(null,array))

//Task#9
var array = [24, 53, 78, 91, 12]
document.write("Array items: " + array + "<br> The smallest number is " + Math.min.apply(null,array))

//Task#10
for(i=5;i<=100;i+=5){
    document.write(i + " , ")
}*/







