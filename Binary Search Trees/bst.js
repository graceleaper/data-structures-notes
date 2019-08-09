// our binary search tree constructor function
function BST(value) {
    // 3 properties on our binary search tree instances
    this.value = value;
    // insert function will assign left and right child nodes
    this.left = null;
    this.right = null;
}

BST.prototype.insert = function(value) {
    // consider if value is less than or greater than root node
    if (value <= this.value) {
        // if there is NO left child...
        if (!this.left) this.left = new BST(value);
        // if there IS a left child...
        else this.left.insert(value);
    } else if (value > this.value) { // could just make this an else block
        if (!this.right) this.right = new BST(value)
        else this.right.insert(value);
    }
};

const bst = new BST(50); // an instance of one node without any child nodes
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);
console.log(bst.right.left.left); // return us our node of 59
console.log(bst.left.right.left); // return us our node of 35
console.log(bst.right.right); // return us our node of 100
