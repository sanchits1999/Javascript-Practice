//implementation
function arrayMap(iterator){
    const array = this;
    const new_array = [];

    for(let i=0; i<array.length; i++){
        new_array.push(iterator(array[i],i));
    }

    return new_array;
}

Array.prototype.arrayMap = arrayMap;

//example
let array = [1,2,3,4,5,6,7];
let new_array = array.arrayMap(item=>item*10);

console.log('Before',array);
console.log('After', new_array);