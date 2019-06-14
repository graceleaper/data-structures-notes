/*
Linked list:
a list of elements, called nodes,
that are connected together (or linked together)
in a single file line

Singly linked list:
each node only has reference
to the node after it (or the next node)

Doubly linked list:
each node has a reference to the next
AND previous node
*/

function LinkedList() {
  //when we create LinkedList,there won't be any nodes to begin with
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

// adding a head
LinkedList.prototype.addToHead = function(value) {
  const newNode = new Node(value, this.head, null);
  //if there's even one node (so just a head)...
  if (this.head) {
    // referencing old head of the linked list
    // the this.head node's previous value will be the new node
    this.head.prev = newNode;
  } else {
    // if there is no head to begin with...
    this.tail = newNode; // only node -- will be both head and tail
  }
  this.head = newNode; // finally, set our new node as our head
};

// adding a tail
LinkedList.prototype.addToTail = function(value) {
  const newNode = new Node(value, null, this.tail); // the current this.tail will be the previous node
  if (this.tail) {
    this.tail.next = newNode; // current tail's next node will be our new node
  } else {
    this.head = newNode;
  }
  this.tail = newNode; // we do what we had set out to do: creating a tail with our new node!
};

// removing a head
LinkedList.prototype.removeHead = function() {
  if (!this.head) {
    return null;
  }
  const val = this.head.value;
  this.head = this.head.next; // new head node
  if (this.head) { // if linked list had more than one node to begin with
    this.head.prev = null;
  } else { // account for a linked list that had only one head to begin with
    this.tail = null; // at this point, this.head will already be null
  }
  return val;
};

// removing a tail
LinkedList.prototype.removeTail = function() {
  if (!this.tail) {
    return null;
  }
  const val = this.tail.value;
  this.tail = this.tail.prev; // new tail node
  if (this.tail) {
    this.tail.next = null;
  } else {
    this.head = null; // at this point, this.tail will already be null
  }
  return val;
}

// searching through the linked list
// see if certain piece of data (searchValue) resides in our linked list
LinkedList.prototype.search = function(searchValue) {
  let currentNode = this.head;
  while (currentNode) {
    if (currentNode.value === searchValue) {
      return currentNode.value;
    }
    currentNode = currentNode.next;
    /*
    ^ eventually, we'll get to the tail node, which
    does not have a next value. Then, 
    currentNode will be null--meaning the condition in the while loop
    will evaluate to false 
    */
  }
  return null;
};

LinkedList.prototype.indexOf = function(value) {
  let indexes = [];
  let currentIndex = 0;
  let currentNode = this.head;
  // while loop will allow us to travel through our linked list
  while (currentNode) {
    if (currentNode.value === value) {
      indexes.push(currentIndex);
    }
    currentNode = currentNode.next;
    currentIndex++;
  }
  return indexes;
}

const ll = new LinkedList(); // create a linked list

// ***** TESTING ADDING HEADS AND TAILS ***** // 

// ll.addToTail(10); // add first node
// ll.addToTail(20); // setting new node as our tail
// ll.addToTail(30); // setting new node as our tail
// ll.addToHead(100); // setting new node as our head
// console.log(ll.tail.prev.prev.prev); // will print the head (100)

// ***** TESTING REMOVING HEAD ***** // 

// ll.addToHead(1000);
// ll.addToHead(2000);
// ll.addToTail(3000);
// ll.removeHead();
// console.log(ll.removeHead());

// ***** TESTING REMOVING HEAD ***** // 

// ll.addToHead('one');
// ll.addToHead('two');
// ll.addToHead('three');
// console.log(ll.removeTail());

// ***** TESTING SEARCH VALUE ***** // 

// ll.addToHead(123);
// ll.addToHead(70);
// ll.addToHead('hello');
// ll.addToTail(19);
// ll.addToTail('world');
// ll.addToTail(20);
// console.log(ll.search(5555))

// ***** TESTING INDEXOF METHOD ***** // 
ll.addToTail(1);
ll.addToTail(5);
ll.addToTail(3);
ll.addToTail(5);
ll.addToTail(8);
ll.addToTail(7);
ll.addToTail(5);

console.log(ll.indexOf(5))