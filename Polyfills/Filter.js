//implementation
function arrayFilter(iterator){
    const array = this;
    const filtered_array = [];

    for(let i=0; i<array.length; i++){
        if(iterator(array[i],i)===true){
            filtered_array.push(array[i]);
        }
    };

    return filtered_array;
};

Array.prototype.arrayFilter = arrayFilter;

//example
const array = [1,2,3,4,5,6,7];
const filtered_array = array.arrayFilter(item=>item<4);

console.log('Before', array);
console.log('After', filtered_array);


