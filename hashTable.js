import HashMap from "./hash-table/index.js";

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden"); // threshold of 12 reached, capacity doubled, 16 -> 32;
test.set("maroon", "red");
test.set("philippines", "yellow");
test.set("japan", "orange");
test.set("china", "brown");
test.set("malaysia", "gray");
test.set("america", "green");
test.set("asia", "purple");
test.set("australia", "black");
test.set("chilly", "white");
test.set("cheessy", "blue");
test.set("pickles", "pink");
test.set("pink", "golden"); // threshold of 24 reached, capacity doubled 32 -> 64

console.log(test.entries()); // returns an array of all the entries
console.log(test.length()); // returns the length of all the entries
console.log(test.get("frog")); // returns ["frog", "green"]
console.log(test.get("animal")); // returns null
console.log(test.has("chilly")); // returns true
console.log(test.has("spicy")); // returns false
console.log(test.remove("pink")); // removes 'pink'
/* I could re-calculate the capacity again and re-allocate the entries since
 * the length is now 23 from 24 and the current threshold is 24,
 * but it's just another work, not for me but for the computer*/

console.log(test.clear()); // clear the entries

console.log(test.entries()); // returns an array of all the entries
