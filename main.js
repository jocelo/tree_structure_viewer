class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

var tree = new Node(6);

var three = new Node(3);
var ten = new Node(10);
var one = new Node(1);
var two = new Node(2);
var eight = new Node(8);
var twelve = new Node(12);
var seven = new Node(7);
var nine = new Node(9);

eight.left = seven;
eight.right = nine;

ten.left = eight;
ten.right = twelve;

three.left = one;
three.right = two;

tree.left = three;
tree.right = ten;

/*
    __6__ 
   /     \
  3       10
 / \     /  \
1   2   8   12
       / \
      7   9
*/

console.log(tree);