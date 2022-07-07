// DEFINE YOUR FUNCTIONS HERE BASED ON THE PROVIDED CRITERIA

function includes(item, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item)  {
            return true;
        }
    }
    return false;
}