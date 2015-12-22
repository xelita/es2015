// Expression bodies
var values = [1, 2, 3, 4, 5];
var powValues = values.map(v => Math.abs(v));

// Statement bodies
var powValues2 = values.map(v => {
    return Math.abs(v)
});

// Lexical this
var person = {
    _firstName: "John",
    _lastName: "Doe",
    _friends: ["xelita"],
    printFriends() {
        this._friends.forEach(f => console.log(f + " is a friend of " + this._firstName));
    }
};
