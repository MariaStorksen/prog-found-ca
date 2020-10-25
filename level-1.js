// Question 1 

var song = "In my place";
console.log(song);


//Question 2 

var person = {
	gender: "Female",
	age: 40, 
};
console.log(person);


//Question 3 

var outOfStock = true; 

if(outOfStock === true) {
console.log(outOfStock);
}

else {
console.log("In stock");
}

console.log("Out of stock");


// Question 4 

var numberArray = [12, 11, 15, 18, 1];
for (var i=0;i<numberArray.length; i++) {
	console.log(numberArray);
}


// Question 5 

for(var i=15; i<=25; i++) {
console.log(i);
}

// Question 6 

for(var i=15; i<=25; i++) {
	var i = true;
	if(i === true) {
	console.log(20);
}	
}


// Question 7 

var dogAndCatArray = [
	
	{
	breed: "Golden retriever",
	age: 2,
	colourCream: true
	},
	
	{
	breed: "Maine coon",
	age: 4, 
	colourCream: true	
	},
]

console.log(dogAndCatArray);

for(var i=0; i < dogAndCatArray.length; i++) {
	console.log(dogAndCatArray[i].age);
	console.log(dogAndCatArray[i].colourCream);
}

// Question 8

function whatIDontLike (donaldTrump){
	console.log("I don't like " + donaldTrump);
}

whatIDontLike("Donald Trump");


// Question 9

function subtractTwoNumbers (number1, number2) {
	var sum = number1-number2;
	console.log(sum);
}
subtractTwoNumbers(5, 3);


// Question 10 

var phoneArray = [];

function findMyPhone (samsung) {
	phoneArray.push(samsung);
	console.log(phoneArray);
}
findMyPhone("I can't find my phone");