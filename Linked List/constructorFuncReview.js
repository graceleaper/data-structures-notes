/*
    constructor function creates an obj class
    and allows us to create multiple instances
    of that class easily. Objects will all have
    same properties and functionalities since they 
    are part of same class
*/
function User (first, last, age) { // used to create multiple 'User' objects
    this.first = first
    this.last = last
    this.age = age
}

// adding properties to dunder proto

User.prototype.emailDomain = '@gmail.com'

// creating a getEmail method
User.prototype.getEmail = function() {
    return this.first + this.last + this.emailDomain
}

const user1 = new User('Grace', 'Lee', 27)

console.log(user1) // { first: 'Grace', last: 'Lee', age: 27 }
console.log(user1.getEmail()) // GraceLee@gmail.com
