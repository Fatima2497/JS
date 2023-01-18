// Union function

let newArray = (arr1, arr2) => {
    let arr3 = [...arr1, ...arr2]
    console.log(arr3)
}

newArray([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])

// Intersection function

function interSect(arrOne, arrTwo) {
    var filteredArray = arrOne.filter(function (n) {
        return arrTwo.indexOf(n) !== -1;
    });

    return filteredArray

}

console.log(interSect([1, 2, 3, 4, 5], [6, 7, 5, 9, 10]))

// Even 
let even = (number) => number % 2 === 0 ? true : false

console.log(even(5))

// Odd
let odd = (number) => number % 2 === 1 ? true : false

console.log(odd(7))

//Square
function square(a, b) {
    if (Array.isArray(a)) {
      return a.map(item => item * item);
    }
    return a * a;
  }

  console.log(square([4,5,6,7]))

// Fabinocci Series
function fibonacci(n) {
    let n1 = 0, n2 = 1, nextTerm;

    for (let i = 1; i <= n; i++) {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;

        console.log('Fibonacci Series = ' + nextTerm)
    }
}
console.log(fibonacci(6))

// Prime number function
function test_prime(n) {

    if (n === 1) {
        return false;
    }
    else if (n === 2) {
        return true;
    } else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}

console.log(test_prime(4));

// Sum
function sum(a, b) {
    if (Array.isArray(a)) {
      return a.reduce((acc, curr) => acc + curr, 0);
    }
    return a + b;
  }

console.log(sum([2,4,9,8]))