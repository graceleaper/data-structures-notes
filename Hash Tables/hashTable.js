/* 
    parameter 'size' indicates how big our hash
    table will be, or how many "buckets" the hash table will have
*/

// constructor function for HashTable
function HashTable(size) {
    // make new array with whatever size we want
    // 'buckets' property will be our whole hash table. And be initially set to empty array
    this.buckets = Array(size);
    // keep track of how many buckets we have in our hash table
    this.numBuckets = this.buckets.length;
};

function HashNode(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next || null; // if no next parameter (next node) is passed in, set to null
};

HashTable.prototype.hash = function(key) {
    let total = 0; // initiate total variable
    // loop through every character in string/key parameter
    for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i); // add numeric value of every character at string to our total
    }
    // total is a large # now, but we need to make it a # corresponding to a bucket #
    let bucket = total % this.numBuckets; // divide any # by 30, and remainder will be a # between 0 and 29
    return bucket;
};

HashTable.prototype.insert = function(key, value) {
    let index = this.hash(key); // we know what bucket our hash node will go in
    if (!this.buckets[index]) this.buckets[index] = new HashNode(key, value);
    // if there is a node or multiple nodes chained to the bucket...
    else {
        let currNode = this.buckets[index];
        while (currNode.next) { // run while there's a node in the chain
            currNode = currNode.next;
        }
        currNode.next = new HashNode(key, value);
    }
};

const myHT = new HashTable(30);

// console.log(myHT);
console.log(myHT.hash('Becca')); // 12
