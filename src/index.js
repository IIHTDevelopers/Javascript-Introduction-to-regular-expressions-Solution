// Example usage of regular expressions

let text = "Hello, my phone number is 123-456-7890.";
let regex = /\d{3}-\d{3}-\d{4}/;  // Regex to match phone numbers

if (regex.test(text)) {
    console.log("Phone number found!");
} else {
    console.log("No phone number found.");
}
