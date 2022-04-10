//implementation
function arrayReduce(reducer,initial_value = 0){
    const array = this;
    let reduced_value = initial_value;

    for(let i=0; i<array.length; i++){
        reduced_value = reducer(reduced_value,array[i]);
    }

    return reduced_value;
}

Array.prototype.arrayReduce = arrayReduce;

//example
const array = [1,2,3,4,5,6,7];
const reduced_value = array.arrayReduce((prev, next)=>prev+next, 10);

console.log('Before', array);
console.log('After', reduced_value);