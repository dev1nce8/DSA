import LinkedList from "./linked-list/index.js";

// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.append("penguin");
list.append("eagle");
list.append("rat");

console.log({ Append: list.toString(), size: list.size() });
list.prepend("egg");
console.log({ Preppend: list.toString(), size: list.size() });
console.log({ Head: list.head() });
console.log({ Tail: list.tail() });
console.log({ "At Index 3": list.at(3) });
list.pop();
console.log({ Pop: list.toString(), size: list.size() });
console.log({
  "Contains turtle": list.contains("turtle"),
  "Contains elephant": list.contains("elephant"),
});
console.log({
  "Find eagle": list.find("eagle"),
  "Find elephant": list.find("elephant"),
});
list.insertAt("camel", 5);
console.log({ "Insert camel At 5": list.toString(), size: list.size() });
list.removeAt(9);
console.log({ "Remove At 9 (eagle)": list.toString(), size: list.size() });
