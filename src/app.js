var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
// class chocolate{
//     constructor(color,count){
//         chocolates.push("green","green");
//     }
// };
function addChocolates(chocolates,color,count){
   //var count=chocolates.length;
    if (count <= 0)
    return "Number cannot be zero/negative";

for (var i = 0; i < count; i++) {
    chocolates.unshift(color);
}

}  
    //var dispenser=color+count;
//return dispenser;



//Progression 2: Remove ___ chocolates from the top the dispenser
function removeChocolates(chocolates, number) {
    let arr = [];
    var count = chocolates.length;
    if (count < number) {
        return "Insufficient chocolates in the dispenser";

    }
    if (number <= 0) {
        return "Number cannot be zero/negative";
    }
    for (var i = 0; i < number; i++) {
        arr.push(chocolates.shift());
    }
    return arr;
}


//Progression 3: Dispense ___ chocolates
function dispenseChocolates(chocolates, number) {
    let arr = [];
    if (number <= 0)
        return "Number cannot be zero/negative";
    if (number > chocolates.length)
        return "Insufficient chocolates in the dispenser";
    for (var i = 0; i < number; i++) {
        arr.push(chocolates.pop());
    }
    return arr;
}

//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates,number, color){
    let arr = [];
    var favourite = 0;
    if (number > chocolates.length)
        return "Insufficient chocolates in the dispenser";
    if (number <= 0)
        return "Number cannot be zero/negative";
    for (var i = chocolates.length - 1; i >= 0; i--) {
        if (chocolates[i] == color) {
            arr.push(chocolates.pop());
            favourite++;
            if (favourite == number)
                return arr;
        }
    }
    if (favourite != number)
        return "Insufficient chocolates in the dispenser";
}


//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]
function noOfChocolates(chocolates) {

    let arr = [];
    for (var i = 0; i < chocolates.length; i++) {
        if (chocolates[i] !== 0) {
            var count = 1;
            for (var j = i + 1; j < chocolates.length; j++) {
                if (chocolates[i] == chocolates[j]) {
                    count++;
                    chocolates[j] = 0;
                }
            }
            arr.push(count);
        }
    }
    return arr;
}


//Progression 6: Sort chocolates based on count in each color. Return array of colors
function sortChocolateBasedOnCount(chocolates) {
    let dark = chocolates.reduce(function(b, a) {
        if (a in b) {
            b[a]++;
        } else {
            b[a] = 1;
        }
        return b;
    }, {});
    let sorted = chocolates.sort((a, b) => {
        if (dark[b] > dark[a]) {
            return 1;
        }
        if (dark[b] < dark[a]) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
    });
    chocolates = sorted;
}


//Progression 7: Change ___ chocolates of ____ color to ____ color
function changeChocolateColor(chocolates, number, color, finalColor) {
    var count = 0;
    if (chocolates.length == 0)
        return chocolates;
    if (number <= 0)
        return "Number cannot be zero/negative";
    if (number > chocolates.length)
        return "Insufficient chocolates in the dispenser";
    for (var i = 0; i <= chocolates.length; i++) {
        if (chocolates[i] == finalColor)
            return "Can't replace the same chocolates";
        if (chocolates[i] == color) {
            chocolates[i] = finalColor;
            count++;
            if (count == number)
                return chocolates;

        }
    }
    if (count < number)
        return "Insufficient chocolates in the dispenser";
}



//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates, Color, finalColor) {
    if (Color == finalColor)
        return "Can't replace the same chocolates";
    else
        for (var i = chocolates.length; i >= 0; i--) {
            if (chocolates[i] == Color)
                chocolates[i] = finalColor;
        }
    var temp1 = [chocolates.length, chocolates];
    return temp1;
}



//Challenge 1: Remove one chocolate of ____ color from the top
function removeChocolateOfColor(chocolates, color) {
    let arr = [];
    var count = chocolates.length;
    // if (count < color) {
    //     return "Insufficient chocolates in the dispenser";

    // }
    // if (color <= 0) {
    //     return "Number cannot be zero/negative";
    // }
    for (var i = 0; i < color; i++) {
        arr.push(chocolates.shift());
    }
    return arr;
}



//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
function dispenseRainbowChocolates(number,color){
    let arr = [];
    var count = chocolates.length;
    if (count < number) {
        return "Insufficient chocolates in the dispenser";

    }
    if (number <= 0) {
        return "Number cannot be zero/negative";
    }
    for (var i = 0; i < number; i++) {
        arr.push(chocolates.shift());
    }
    return arr;
}