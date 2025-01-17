// DEFINE YOUR FUNCTIONS HERE BASED ON THE PROVIDED CRITERIA

function includes(item, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item)  {
            return true;
        }
    }
    return false;
}

function indexOf(item, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item)  {
            // Return index
            return i;
        }
    }
    return -1;
}

function reverse(array) {
    let newArray = [];
    let start = array.length - 1;
    for (let i = start; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

function slice(start, stop, array) {
    let newArray = [];
    for (let i = start; i < stop; i++) {
        newArray.push(array[i]);
    }
    return newArray;
}

function concat(array1, array2) {
    let newArray = array1.slice();
    for (let i = 0; i < array2.length; i++) {
        newArray.push(array2[i])
    }
    return newArray;
}

function join(sep, array) {
    let string = "";
    for (let i = 0; i < array.length - 1; i++) {
        string += array[i];
        string += sep;
        // Creates join() result w/o last array value
    }
    // adds last value
    string += array[array.length - 1]
    return string;
} 

function max(array) {
    let maximum = "";
    for (let i = 0; i < array.length; i++) {
        // Don't use JSON.stringify otherwise output 'y' will turn into "'y'" with double quotations
        if ((array[i]) > maximum) {
            maximum = (array[i]);
        }
    }
    return maximum;
}