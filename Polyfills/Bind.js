//implementation
function functionBind(obj,...args1){
    const func = this;
    return function(...args2){
        func.call(obj,...args1,...args2)
    }
}

Object.prototype.functionBind = functionBind;

//example
let person = {
    name: 'Sanchit',
    introduce: function(age, company){
        console.log(`Hi my name is ${this.name} and i am ${age} years old. I work as a software engineer in ${company}.`);
    }
}

const introduce = person.introduce.functionBind(person, 23);
introduce('Razorpay');