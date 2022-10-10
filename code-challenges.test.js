// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical";
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook";
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric";
// Expected output: "3cc3ntr1c"


describe("codedMessage", () => {
  it(`Takes in a string and returns a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.`, () => {
    const secretCodeWord1 = "Lackadaisical";
    // Expected output: "L4ck4d41s1c4l"
    const secretCodeWord2 = "Gobbledygook";
    // Expected output: "G0bbl3dyg00k"
    const secretCodeWord3 = "Eccentric";
    // Expected output: "3cc3ntr1c"
    expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l");
    expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k");
    expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c");
  });
});

// ReferenceError: codedMessage is not defined

// b) Create the function that makes the test pass.


// PSEUDOCODE:
// I will create a function which iterates over the string so that it uses a conditional to assess each value.
// I'll utilize the .split() method in order to convert the string to an array.
// I'll utilize  the .map() method in conjuction with the array in order to get a string of the same length that iterates through the newly established array.
// Next, I'll check each value inside of the array to  determine if it matches a/e/i/o/u. 
// It will return the original value if it does not match, otherwise it will update the value and utilize the .join() method with the array to return the array to a string.


const codedMessage = (str) => {
  return str
    .split("")
    .map((v) => {
      if (v === "a" || v === "A") {
        return 4;
      } else if (v === "e" || v === "E") {
        return 3;
      } else if (v === "i" || v === "I") {
        return 1;
      } else if (v === "o" || v === "O") {
        return 0;
      } else {
        return v;
      }
    })
    .join("");
};

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]


describe("specificLetter", () => {
  it(`takes in an array of words and a single letter and returns an array of all the words containing that particular letter.`, () => {
    const fruitArray = [
      "Mango",
      "Cherry",
      "Apricot",
      "Blueberry",
      "Peach",
      "Kiwi",
    ];

    const letterA = "a";
    // Expected output: ["Mango", "Apricot", "Peach"]
    const letterE = "e";
    // Expected output: ["Cherry", "Blueberry", "Peach"]

    expect(specificLetter(fruitArray, letterA)).toEqual([
      "Mango",
      "Apricot",
      "Peach",
    ]);
    expect(specificLetter(fruitArray, letterE)).toEqual([
      "Cherry",
      "Blueberry",
      "Peach",
    ]);
  });
});

// b) Create the function that makes the test pass.

// PSEUDOCODE:
// I"ll create a function which will  iterate over the array and return an array of an modified length utilizing the .filter() method.
// Utilizing the .includes() method I'll use a  conditional statement to determine if the current element includes the string that was passed.
// Utilizing the .filter() method I'll check to remove the elements that don't meet the parameters that its filtering for.



const specificLetter = (arr, str) => {
  return arr.filter((v) => v.includes(str) || v.includes(str.toUpperCase()));
};

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true


describe("niceHand", () => {
  it(`Takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.`, () => {
    const hand1 = [5, 5, 5, 3, 3];
    // Expected output: true
    const hand2 = [5, 5, 3, 3, 4];
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4];
    // Expected output: false
    const hand4 = [7, 2, 7, 2, 7];
    // Expected output: true
    const hand5 = [5, 5, 5, 3, 3, 6];
    // Expected output: "A full house cannot be more than 5 cards."
    expect(niceHand(hand1)).toEqual(true);
    expect(niceHand(hand2)).toEqual(false);
    expect(niceHand(hand3)).toEqual(false);
    expect(niceHand(hand4)).toEqual(true);
    expect(niceHand(hand5)).toEqual(
      "A full house cannot be more than 5 cards."
    );
  });
});

// ReferenceError: niceHand is not defined

// b) Create the function that makes the test pass.



// PSEUDOCODE:
// I'll create an empty object and an empty array to store values.  The result of Object.values will be stored in the empty array inorder to  access the last element's index and 
// I'll utilize the for.Each method to iterate, it will add that to our object with a 1 as the value in the key:value pair. As it progresses, if it sees that number again as it continues , it will update the value in  +1 increments and reset to 1 once a new number is found upon the return and I'll use an esle statement based upon the conditions of what constitutes a full house hand.



const niceHand = (arr) => {
  const obj = {};
  let arr1 = [];
  if (arr.length > 5) {
    return "A full house cannot be more than 5 cards.";
  } else {
    arr.forEach((v) => {
      obj[v] = obj[v] ? obj[v] + 1 : 1;
      arr1.push(Object.values(obj));
    });
    return arr1[4].includes(2 && 3);
  }
};
