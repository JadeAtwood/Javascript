function alwaysHungry(arr) {
    for(i = 0; i < alwaysHungry[0].length; i++); 
        if (alwaysHungry[i] =="food") {
            console.log("yummy");
        } else {
            console.log("I'm hungry");  
        } 
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
// // this should console log "yummy", "yummy"
// alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"
// ---------------------------------------------------------------------------------
//return a new array containing only the values larger than cutoff.
function highPass(arr, cutoff) {
    var filteredArr = [];
    var imports = highPass[arr];
    var howLongIsIt = imports.length;
    console.log(howLongIsIt);
    for (let i = 0; i < howLongIsIt; i++) {
        var temp = highPass[0][i];
        if (temp > cutoff) {            
            filteredArr.push(temp);
            console.log(filteredArr);
        }
    }
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]
// --    --     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

