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

BST.prototype.contains = function(value) {
    // if value passed in is root node...
    if (value === this.value) return true;
    // if value passed in is less than root node...
    else if (value < this.value) {
        // if this.value (root node) does not have a this.left, return false
        if (!this.left) return false;
        // if this.value DOES have a this.left, run the contains method on it
        else return this.left.contains(value);
        // if value passed in is greater than root node...
    } else if (value > this.value) {
        // if this.value (root node) does not have a this.right, return false
        if (!this.right) return false;
        // if this.value DOES have a this.right, run the contains method on it
        else return this.right.contains(value);
    }
};

/*
    depthFirstTraversal will travel through all nodes and
    iteratorFunc will run on each node

    our iteratorFunc will log out nodes to the console
*/

BST.prototype.depthFirstTraversal = function(iteratorFunc, order) {
    // first hit parent node, then left branch, then right branch
    if (order === 'pre-order') iteratorFunc(this.value);
    /*
        if there is a this.left, recursively call depthFirstTraversal
        until we reach the very last node on the left side of the bst
    */
    if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);
    if (order === 'in-order') iteratorFunc(this.value);
    if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
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
/*
console.log(bst.right.left.left); // return us our node of 59
console.log(bst.left.right.left); // return us our node of 35
console.log(bst.right.right); // return us our node of 100
console.log(bst.contains(50)); // return true
console.log(bst.contains(7)); // return false
*/

// bst.depthFirstTraversal(log, 'in-order');
bst.depthFirstTraversal(log, 'pre-order');

function log(value) {
    console.log(value);
}
