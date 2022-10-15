// If you're having trouble, use lines 12-14 for expected inputs and outputs
const phoneBook = {};
const names = ['Mira', 'Royce', 'Kathie'];
const numbers = ['3234958675', '9164059384', '4154958675']

// Write your code below this line
// define a function that takes 3 args = obj, array, array
// function doesn't return anything
// use a for loop to populate the object phoneBook.  
// The key/value pair comes from each indexed element of the array
const populatePhoneBook = function (obj, arr1, arr2) {
    const populatedPhonebook = {};
    for (let i = 0; i < arr1.length; i++) {
        phoneBook[arr1[i]] = arr2[i];
    }
}



populatePhoneBook(phoneBook, names, numbers);

//Uncomment the lines below to test your code

console.log(phoneBook["Mira"]); //=> 3234958675
console.log(phoneBook["Royce"]); //=> 9164059384
console.log(phoneBook["Kathie"]); //=> 4154958675

// You are given an array of names along with an array of phone numbers. 
// Using a loop, populate the existing phoneBook object to build a proper phonebook 
// with the keys being people's names and the values being their respective phone numbers.