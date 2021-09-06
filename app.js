//Ejercicio 0
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };
let users = [ john, pete, mary ];
let usersMapped = function(arr) {
    let myArr = []
    for(let key in arr) {
        myArr.unshift({fullName: `${arr[key].name} ${arr[key].surname}`, id: arr[key].id})
    }
    return myArr
}

console.log(usersMapped(users))




//Ejercicio 1
const fruits = ["Apples", "Pear", "Orange"]
const shoppingCart = [...fruits,"Banana"]
    


alert(fruits)
alert(shoppingCart)



//Ejercicio 2
let music = ["Jazz","Blues"]
let myMusic = function(anArr) {
    anArr = anArr
    anArr.push("Rock-n-Roll")
    console.log(anArr)
    anArr.splice(Math.round(anArr.lenght/2),1,"Classics")
    console.log(anArr.lenght)
    console.log(anArr)
    anArr.shift()
    console.log(anArr)
    anArr.unshift("Rap","Reggae")
    console.log(anArr)
}
myMusic(music)




//Ejercicio 3
let mySum = []
let sumInput = function() {
    let result = 0
    let num = prompt("Ingrese un numero")
    if (!!Number(num) === true) {
        mySum.push(Number(num))
        sumInput()
    } else {
        for(let key in mySum) {
        result += mySum[key]
        console.log(result)   
        }  
    }
    alert(result) 
}
sumInput()




//Ejercicio 4
const numbers = [5,3,8,1] 
const filtered = function(a,b) {
    let myArr = numbers.filter(number => number >= a|| number <= b)
    console.log(myArr)
}
filtered(1, 4)




//Ejercicio 5
const arr5 = ["HTML","JavaScript","CSS"]
let sorted = [...arr5].sort()
alert(sorted)
alert(arr5)



//Ejercicio 6
const Calculator = function() {
    this.operators = {
        "+": (a,b) => a+b,
        "-": (a,b) => a-b,
    }
}

Calculator.prototype.addOperator =  function(string,func) {
    this.operators[string] = func
}



Calculator.prototype.calculate = function(str) {
    myString = str.split(" ")
    number1 = Number(myString[0])
    number2 = Number(myString[2])
    console.log(myString)
    for(let key in this.operators) {
        if (key === myString[1]) {
            return this.operators[key](number1,number2)
        }
        else {
        
        }
    }
}

const strCacl = new Calculator()

//srtCacl.addOperator("*",(a,b)=>a*b)
console.log(strCacl.calculate("12 + 34"))
strCacl.addOperator('*', (a, b)=> a*b)
console.log(strCacl.calculate("10 * 34"))



//Ejercicio 8
const login = "Empleado"
let mensaje 
const whatIf =  login === "Empleado" ? mensaje = "Hola" : 
                login === "Director" ? mensaje = "Saludos" :
                login === "" ? mensaje = "Sin inicio de sesion" : 
                mensaje = ""

console.log(mensaje)