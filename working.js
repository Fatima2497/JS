var obj1 = {a:"1"}
undefined
var obj2 = {b:"1"}

undefined
var obj = Object.assign(obj1, obj2)
undefined
obj
{a: '1', b: '1'}
var objs = {...obj1, ...obj2}
undefined
objs
{a: '1', b: '1'}
var arr1 = ["a","b"]
undefined
var arr2 = ["c","d"]
undefined
var arr3 = arr1.concat(arr2)
undefined
arr3
(4) ['a', 'b', 'c', 'd']
var arr4 = [...arr1,...arr2]
undefined
arr4
(4) ['a', 'b', 'c', 'd']
func\
VM963:1 Uncaught SyntaxError: Invalid or unexpected token
function sp(a,b, ..rest){console.log(rest)}
VM1086:1 Uncaught SyntaxError: Unexpected token '.'
function sp(a,b, ...rest){console.log(rest)}
undefined
sp('a','b',3,2,1,6)
VM1144:1 (4) [3, 2, 1, 6]0: 31: 22: 13: 6length: 4[[Prototype]]: Array(0)
undefined
sp("a","b",3,2,1,6)
VM1144:1 (4) [3, 2, 1, 6]0: 31: 22: 13: 6length: 4[[Prototype]]: Array(0)
undefined
var value = true
undefined
true ? "Valid" : "Invalid"
'Valid'
false ? "Valid" : "Invalid"
'Invalid'
var onj = {fName: "Arfa", age: 23, lName: "fatima"}
undefined
var {fName, age} = onj
undefined
fName
'Arfa'
age
23
onj.f\
VM1722:1 Uncaught SyntaxError: Invalid or unexpected token
onj.fName
'Arfa'
fName
'Arfa'