var str = "Hello, World!";

for (var i = 0; i < str.length; i++) {
  var codePoint = str.codePointAt(i);
  console.log(codePoint);
}




// var str = "Hello, World!";: This line declares a variable named str and assigns it the string "Hello, World!".

// for (var i = 0; i < str.length; i++) { ... }: This line starts a for loop. 
// The loop iterates over each character in the string str using the index i, which starts at 0 and goes up to one less than the length of the string (str.length - 1).

// var codePoint = str.codePointAt(i);: Inside the loop, this line retrieves the Unicode code point of the character at the current index i in the string str. 
// The codePointAt method is used for this purpose. The Unicode code point is an integer value that represents a specific character in the Unicode standard.

// console.log(codePoint);: After obtaining the Unicode code point using codePointAt, this line logs the code point to the console using the console.log function. T
// his will print each code point on a new line as the loop iterates through the characters of the string.