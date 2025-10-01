
//simple print
console.log("Hello World");

// small number
let a = 10, b = 20;
console.log(a < b ? a : b);


//even or odd
let num = 8;
console.log(num % 2 === 0 ? "Even" : "Odd");


//find max and min in array

// let arr = [1, 2, 31, 4, 5];
// console.log(Math.max(...arr));
// console.log(Math.min(...arr));

//replace value
let x = 5, y = 10;
[x, y] = [y, x];
console.log(x, y);


//join array

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];
console.log(arr3);

// reapt string
let str = "hello";
console.log(str.repeat(3));

//table of 5

// let n = 5;
// for(let i=1; i<=10; i++){
//     console.log(`${n} x ${i} = ${n*i}`);
// }

// 
let n = 10, sum = 0;
for(let i=1; i<=n; i++){

    sum += i;
    console.log(i, sum);
}

//reverse string

let hi = "hello";
console.log(hi.split("").reverse().join(""));

//join string

let str1 = "hello";
let str2 = "world";
console.log(str1.concat(" ", str2));

//find vovewel
let st = "javascript";
let count = st.match(/[aeiou]/gi).length;
console.log(count);

//find duplicate

// let arr = [1,2,3,2,4,1,5];
// let duplicates = arr.filter((item, index) => arr.indexOf(item) );
// console.log([...new Set(duplicates)]);

//remove duplicate

let ar = [1,2,2,3,4,4,5];
let unique = [...new Set(ar)];
console.log(unique);

//sort descending

// let arr = [40, 10, 30, 20];
// arr.sort((a, b) => b - a);
// console.log(arr);

//sort ascending

// let arr = [10,20,30,40];
// let summ = arr.reduce((a,b)=>a+b);
// console.log(summ);

//find average

let arr = [10, 20, 30, 40];
let avg = arr.reduce((a,b)=>a+b,0) / arr.length;
console.log(avg);


let araay = [1, -2, 0, 4, -5];
let pos = araay.filter(x=>x>0);
let neg = araay.filter(x=>x<0).length;
let zero = araay.filter(x=>x===0).length;
console.log({pos, neg, zero});

let bin = "11001";
console.log(parseInt(bin,2));


let numq = 25;
console.log(numq.toString(2));

let h = "hello world from js";
// let res = str.split(" ")
//              .map(word => word[0].toUpperCase()+word.slice(1))
//              .join(" ");

let res = h[0].toUpperCase() + h.slice(1);
console.log(res);



// let s = "I love JavaScript programming programming";
// let words = s.split(" ");
// let longest = words.reduce((a,b)=> a.length  > b.length ?a:b );
// console.log(longest);


let sr = "JavaScript is powerful";
console.log(sr.split(" ").length);
