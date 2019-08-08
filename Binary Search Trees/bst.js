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
