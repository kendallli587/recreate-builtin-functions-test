// DEFINE YOUR FUNCTIONS HERE BASED ON THE PROVIDED CRITERIA

function includes(item, array) {
    // console.log(JSON.stringify(array[2]))

    // console.log(JSON.stringify(item))
    // console.log(JSON.stringify(array[2]) === JSON.stringify(item))

    let arrayStr = JSON.stringify(array);
    let itemStr = JSON.stringify(item);

    for (let i = 0; i < array.length; i++) {
        if (arrayStr[i] === itemStr)  {
            return true;
        } else {
            return false;
        }
    }
}