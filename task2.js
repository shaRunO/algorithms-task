/*2. Write a function named "checkYuGiOh" that takes a number, n, as an argument,
creates an array of numbers from 1 to n and replaces multiples of 2, 3, and 5 with 
"yu", "gi" and "oh", then returns the resulting array.*/
function checkYuGiOh(n) {
    //if input is not a number
    if (!Number(n)) {
        var content = JSON.stringify(n);
        return `invalid parameter: "${content}"`;
    }

    //if input is a negative number
    if (!(Number(n) > 0)) {
        var content = JSON.stringify(n);
        return `${content} is a negative number`;
    }

    var arr = [];
    for (var i = 1; i <= n; i++) {

        //if  2, 3, 5 is a multiple of this number 
        if ((i % 2 === 0) && (i % 3 === 0) && (i % 5 === 0)) {
            arr.push("yu-gi-oh");
        }
        //if  2, 3 is a multiple of this number
        else if ((i % 2 === 0) && (i % 3 === 0)) {
            arr.push("yu-gi");
        }
        //if  2, 5 is a multiple of this number  
        else if ((i % 2 === 0) && (i % 5 === 0)) {
            arr.push("yu-oh");
        }
        //if  3, 5 is a multiple of this number 
        else if ((i % 3 === 0) && (i % 5 === 0)) {
            arr.push("gi-oh");
        }
        //if  2 is a multiple of this number 
        else if (i % 2 === 0) {
            arr.push("yu");
        }
        //if  3 is a multiple of this number 
        else if (i % 3 === 0) {
            arr.push("gi");
        }
        //if 5 is a multiple of this number 
        else if (i % 5 === 0) {
            arr.push("oh");
        }
        //if  their is no multiple then return the number itself
        else { arr.push(i); }
    }
    return arr;
}