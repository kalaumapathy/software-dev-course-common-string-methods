
 /*

Practice Problem #1

Activity 1: Searching Strings
Write a program to:
Check if the text "JavaScript" is in the string "Learning JavaScript is fun!" using includes.
Find the position of the word "fun" in the string.

Activity 2: Transforming Strings
Convert the string " CODE BOOTCAMP " to lowercase and remove all extra whitespace.
Replace "BOOTCAMP" with "JavaScript" in the transformed string.

Activity 3: Breaking Apart a Sentence
Split the sentence "Coding is fun and educational" into an array of words.

Activity 4: Retrieving Substrings
Retrieve the first character of "Bootcamp" using charAt.
Extract the word "camp" from "Bootcamp" using slice.

Advanced Challenge
Write a program to process the following string:
Customer: John Doe
Order: Apple, Banana, Grape
Total: $20.50
Extract the customer name.
Split the order into an array of items.
Convert the total price to uppercase (e.g., "TOTAL: $20.50").
 
 */
 
// Activity 1: Searching Strings


let text = "Learning JavaScript is fun!";

let includesJavaScript = text.includes("JavaScript");

let funPosition = text.indexOf("fun");

console.log("Includes JavaScript:", includesJavaScript);
console.log("Position of 'fun':", funPosition);




// Activity 2: Transforming Strings
 let inputString = " CODE BOOTCAMP ";

// Remove spaces + convert to lowercase
let transformedString = inputString.trim().toLowerCase();

// Replace bootcamp with javascript
let replacedString = transformedString.replace("bootcamp", "javascript");

console.log("Transformed String:", transformedString);
console.log("Replaced String:", replacedString);



//  Activity 3: Breaking Apart Sentence

let sentence = "Coding is fun and educational";

let wordsArray = sentence.split(" ");

console.log("Words Array:", wordsArray);

//Activity 4: Retrieving Substrings

let word = "Bootcamp";

let firstCharacter = word.charAt(0);
let extractedCamp = word.slice(4);

console.log("First Character:", firstCharacter);
console.log("Extracted 'camp':", extractedCamp);


 
 //  Advanced Challenge

let customerData = `Customer: John Doe
Order: Apple, Banana, Grape
Total: $20.50`;

// Extract customer name
let customerLine = customerData.split("\n")[0];
let customerName = customerLine.split(": ")[1];

// Extract order items
let orderLine = customerData.split("\n")[1];
let orderItems = orderLine.split(": ")[1].split(", ");

// Convert total line to uppercase
let totalLine = customerData.split("\n")[2];
let totalUppercase = totalLine.toUpperCase();

console.log("Customer Name:", customerName);
console.log("Order Items:", orderItems);
console.log("Total Uppercase:", totalUppercase);

/* Expected output

Includes JavaScript: true
Position of 'fun': 23
Transformed String: code bootcamp
Replaced String: code javascript
Words Array: [ 'Coding', 'is', 'fun', 'and', 'educational' ]
First Character: B
Extracted 'camp': camp
Customer Name: John Doe
Order Items: [ 'Apple', 'Banana', 'Grape' ]
Total Uppercase: TOTAL: $20.50 */