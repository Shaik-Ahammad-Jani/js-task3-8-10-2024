console.log("primitive data types :")
console.log("1 number datatype :-")
let a=10;
console.log("a =",a)
console.log("datatype of a is =", typeof a);
console.log("--------------------------------")
console.log("2 sring datatype :-")
let b="jhonyy";
console.log("b =",b)
console.log("datatype of b is =", typeof b)
console.log("--------------------------------")
console.log("3 boolean datatype :-")
let c=20;
let C=Boolean()
console.log(c>10)
console.log(c>30)
console.log("datatype of C is =", typeof C)
console.log("--------------------------------")
let x=undefined;
console.log("x =",x);
console.log("datatype of x is =", typeof x)
console.log("--------------------------------")
let n=null;
console.log("n =",n);
console.log("datatype of n is =", typeof n)
console.log("")
// console.log("")
console.log("non-primitive datatypes : ")
console.log("1 object :-")
let obj={
    name:"jhony",
    age:22,
    gender:"male",
    village:"martur",
    edu:{
        bTech:"AEC",
        Inter:"Sri HJC",
        10:"High school"
    }
};
console.log("typeof obj is =",typeof obj)
console.log("obj=",obj)
console.log("name =",obj.name)
console.log("district=",obj.dis,"its shows undefined because when we try access the property or value which is not present in object")
console.log("education =",obj.edu)
console.log("10th=",obj.edu["10"],`(here we can't access the number 10 in directy we can access by taken it in string like ["10"])` )
console.log(" ")
console.log("2 arrays :-")
let array=[1,2,3,4,5,6]
let arr=Array()
// console.log("type of arr is = ",typeof arr)
console.log("typeof array is =",typeof array)
console.log(`first number in an array array[0] is = `,array[0])
console.log(`last number in an array array[5] is = `,array[5])
console.log(`accessing an array elements by using negative index array[-1] is = `,array[-1],"(we cannot access the array elements by using negative index)")











