console.log("ishu..")

const mySym = Symbol("key1");

const jsUser = {
    Name: "Ishu",
    "full name": "Ishu Yadav",
    age: 20,
    location: "Rewari",
    email: "ishu@mail",
    isLoggedIn: true,
    [mySym]: "myKeyOne"
}

jsUser.greetings = function(){
    console.log(`hello js user ${this.Name}`)
}

console.log(jsUser.greetings())
console.log(jsUser)
