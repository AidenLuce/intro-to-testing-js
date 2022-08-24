// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
function sayHello(name) {
    if (name === true){
        return (`Hello, World!`)
    } else if (name === false){
        return (`Hello, World!`)
    }
    return (`Hello, ${name}!`)
}
function isFive(num){
   if (parseFloat(num) === 5){
       return true
   }
}

function isEven(num) {
    if (parseFloat(num) % 2 || parseFloat(num) === 0){
        return true;
    }else if (num === undefined){
        return  true
    }
}
//