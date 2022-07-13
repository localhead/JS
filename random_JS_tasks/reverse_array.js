let a = [1, 2, 3, 4, 5]

console.log(a.reverse());


//method 1

function r1(array) {
    return array.reverse();
}

console.log(r1(a));


// method 2

function r2(array){
    res =[];
    array.forEach(element => {
        res.unshift(element);
    });
    return res;
}

// method 3

function r3(array){
    res = [];
    for (let i = array.length - 1; i >=0; i--) {
        res.push(array[i]);
    }
    return res;
}

console.log(r3(a));