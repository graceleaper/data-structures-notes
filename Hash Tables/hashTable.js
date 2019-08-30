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
}

function HashNode(key, value, next) {
    this.key = key;
    this.value = value;
    this.next = next || null; // if no next parameter (next node) is passed in, set to null
}

const myHT = new HashTable(30);

console.log(myHT);
