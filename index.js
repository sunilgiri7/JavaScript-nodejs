// comment
console.log("Hello world");

let name = 'sunil';
console.log(name);
// also we can make variable one or more in one line
let myname='sunil', age=21;

//primitive type of variable in js
let myself = 'sunil';
let myage = 21;
// let isApporved = True;
let firstname = undefined;

//object
let selectedColor = null;
let person = {
    name:'sunil',
    age: 21
};
console.log(person)

//dot notation
person.name = 'rohan';
console.log(person.name)

//bracket notation
person['name'] = 'sunil';
console.log(person.name)

let selection = 'name';
person[selection] = 'rohan';
console.log(person.name);

// array
let selectColor = ['red', 'blue'];
selectColor[2] = 'green';
selectColor[3] = 1;
console.log(selectColor);
console.log(selectColor.length);

// function
// performing a task
function intro(name, lastname){    // name is parameter
    console.log('hello ' + name + ' ' + lastname);
}
intro('sunil', 'giri') // 'sunil' is argument
// calculation a value
function square(num){
    return num * num;
}
console.log(square(2));

//http module

const http = require('http');
const server = http.createServer((req, res) =>{
    if (req.url === '/'){
        res.write('hello world');
        res.end();
    }
    if (req.url==='/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
})
server.listen(3000);
console.log("listining on port 3000...")