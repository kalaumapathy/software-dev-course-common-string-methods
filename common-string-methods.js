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



Practice Problem #2

Objective
Practice using common string methods to manipulate and extract information from strings.

Instructions:
You are tasked with processing a single string and
performing a series of operations using the string methods covered in the lesson.
Each task corresponds to one or more methods and can be completed independently.

String to Use:
  let inputString = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";

Tasks:
Complete the following tasks and assign the results to the specified variables. Log each result to the console.

1. Searching
  - Check if the word "JavaScript" is in the string using includes and assign the result to a variable named hasJavaScript.
  - Find the position of the word "Coding" in the string using indexOf and assign the result to a variable named codingPosition.
  - Check if the string starts with "Welcome" using startsWith and assign the result to a variable named startsWithWelcome.
  - Check if the string ends with "today." using endsWith and assign the result to a variable named endsWithToday.

2. Transforming
  - Convert the string to all lowercase letters using toLowerCase and assign the result to a variable named lowercaseString.
  - Convert the string to all uppercase letters using toUpperCase and assign the result to a variable named uppercaseString.
  - Remove the extra spaces from the beginning and end of the string using trim and assign the result to a variable named trimmedString.
  - Replace the word "JavaScript" with "coding" using replace and assign the result to a variable named replacedString.

3. Breaking Apart
  - Split the string into an array of words using split with a space (" ") as the delimiter and assign the result to a variable named wordsArray.

4. Retrieving
  - Retrieve the first character of the trimmed string using charAt and assign the result to a variable named firstCharacter.
  - Extract the word "Bootcamp" from the string using slice and assign the result to a variable named extractedBootcamp.

*/

//Starter Code
let inputString = "  Welcome to the Coding Bootcamp! Learn JavaScript today.  ";

// 1. Searching
let hasJavaScript = inputString.includes("JavaScript");
let codingPosition = inputString.indexOf("Coding"); 
let startsWithWelcome =inputString.trim().startsWith("Welcome"); 
let endsWithToday = inputString.trim().endsWith("today."); 

// 2. Transforming
let lowercaseString = inputString.toLowerCase();
let uppercaseString = inputString.toUpperCase();
let trimmedString = inputString.trim();
let replacedString = inputString.replace("JavaScript", "coding");


// 3. Breaking Apart
let wordsArray = inputString.trim().split(" ");


// 4. Retrieving
let firstCharacter =  trimmedString.charAt(0); 
let extractedBootcamp= trimmedString.slice(
  trimmedString.indexOf("Bootcamp"),
  trimmedString.indexOf("Bootcamp") + "Bootcamp".length
);


// Log all results
console.log("=== SEARCHING ===");
console.log("Has JavaScript:", hasJavaScript);
console.log("Coding Position:", codingPosition);
console.log("Starts with 'Welcome':", startsWithWelcome);
console.log("Ends with 'today.':", endsWithToday);

console.log("\n=== TRANSFORMING ===");
console.log("Lowercase:", lowercaseString);
console.log("Uppercase:", uppercaseString);
console.log("Trimmed:", trimmedString);
console.log("Replaced:", replacedString);

console.log("\n=== BREAKING APART ===");
console.log("Words Array:", wordsArray);

console.log("\n=== RETRIEVING ===");
console.log("First Character:", firstCharacter);
console.log("Extracted 'Bootcamp':", extractedBootcamp);

/* Expected Output
=== SEARCHING ===
Has JavaScript: true
Coding Position: 17
Starts with 'Welcome': true
Ends with 'today.': true

=== TRANSFORMING ===
Lowercase:   welcome to the coding bootcamp! learn javascript today.  
Uppercase:   WELCOME TO THE CODING BOOTCAMP! LEARN JAVASCRIPT TODAY.  
Trimmed: Welcome to the Coding Bootcamp! Learn JavaScript today.
Replaced:   Welcome to the Coding Bootcamp! Learn coding today.  

=== BREAKING APART ===
Words Array: [
  'Welcome',
  'to',
  'the',
  'Coding',
  'Bootcamp!',
  'Learn',
  'JavaScript',
  'today.'
]

=== RETRIEVING ===
First Character: W
Extracted 'Bootcamp': Bootcamp */