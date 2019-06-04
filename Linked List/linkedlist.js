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
  
  //adding a head
  LinkedList.prototype.addToHead = function(value) {
    const newNode = new Node(value, this.head, null);
    //if there's even one node (so just a head)...
    if(this.head) { // referencing old head of the linked list
      this.head.prev = newNode;
    } else { // if there is no head to begin with...
      this.tail = newNode; // only node -- will be both head and tail
    }
    this.head = newNode; // finally, set our new node as our head
  }
  
  // adding a tail
  LinkedList.prototype.addToTail = function(value) {
    const newNode = new Node(value, null, this.tail) // the current this.tail will be the previous node
    if(this.tail) {
      this.tail.next = newNode; // current tail's next node will be our new node
    } else {
      this.head = newNode;
    }
    this.tail = newNode; // we do what we had set out to do: creating a tail with our new node!
  }
  
  const ll = new LinkedList(); // create an linked list
  
  ll.addToHead(100); // added first node
  ll.addToHead(99); // setting new node as our head
  ll.addToHead(98); // setting a new node as our head
  console.log(ll);
  
  // const LL = new LinkedList();
  // console.log(LL); // LinkedList {head: null, tail: null}
  
  // const node1 = new Node(100, 'node2', null); // first node
  // console.log(node1);