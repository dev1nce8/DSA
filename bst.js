import Tree from "./bst/index.js";

function randomNumberArray(length) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
  return arr;
}

const array = randomNumberArray(15);

const bst = new Tree();
bst.buildTree(array);

prettyPrint(bst.root);
console.log(["isBalanced?", bst.isBalanced()]); // true;
let LOarr = [];
bst.levelOrder((d) => LOarr.push(d));
let IOarr = [];
bst.inOrder((d) => IOarr.push(d));
let POarr = [];
bst.postOrder((d) => POarr.push(d));
console.log("level-order", LOarr);
console.log("in-order", IOarr);
console.log("pre-order", POarr);

console.log("Unbalancing...");
const newArr = randomNumberArray(50);
newArr.forEach((n) => bst.insert(n));
prettyPrint(bst.root);
console.log(["isBalanced?", bst.isBalanced()]);
console.log("Rebalancing...");
bst.reBalance();
prettyPrint(bst.root);
console.log(["isBalanced?", bst.isBalanced()]);
LOarr = [];
bst.levelOrder((d) => LOarr.push(d));
IOarr = [];
bst.inOrder((d) => IOarr.push(d));
POarr = [];
bst.postOrder((d) => POarr.push(d));
console.log("level-order", LOarr);
console.log("in-order", IOarr);
console.log("pre-order", POarr);

function prettyPrint(node, prefix = "", isLeft = true) {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
}
