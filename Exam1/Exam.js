//Q1.2
let arr=[1,2,3]
arr.push(4);
arr.unshift(0);
console.log(arr);

//Q2.1
console.log("3");

//Q2.2
console.log("[0,1,2,3,4]");
//Q2.3
console.log("['baz']");

//Q2.4
console.log("1 ,Hello ,true")

//Q2.5
console.log("true")
console.log("['carName', 'Bmw'], ['carPrice', 1000000],[1,2,3,4]")

//Q3

function getMaxValue(sum){
    let max=sum[0];
    let index=0;
       for(let i=0;i<sum.length;i++){
           if(sum[i]>max){
               max=sum[i];
               index=i;
           }
       }
       console.log("index is:"+index+" value is :"+max) 
    }

    getMaxValue([1,2,3,4,5])
 //Q3.5
class Calulator {
    x = 0;
    y = 0;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    Sum() {

        let res = this.x + this.y;
        console.log(res);
        return;
    }
    substract() {
        let res = Math.abs(this.x - this.y);
        console.log(res);
        return;
    }
    multiply(x, y) {
        let res = this.x * this.y;
        console.log(res);
        return;
    }
    divide(x, y) {

            let res = this.x / this.y;
            console.log(res);
            return;
    }
}
let cal1 = new Calulator(5,3);
cal1.Sum();
let cal2 = new Calulator(20,10);
cal2.substract();
let cal3 = new Calulator(2,10);
cal3.multiply();
let cal4 = new Calulator(25,5);
cal4.divide();



//Q3.7

let  Revarrey = (x) => {
  let result = x.reverse();
  console.log(result);
}
Revarrey([1,2,3,4,5,6,7]);


 //Bouns 2


 let add = function(x) {
    return function(y) { 
        return x + y; };
}

console.log(add(2,3))


//bouns 3

let list = ["Aly", "Mohamed", "Ahmed"];

function search(name) {
    let x = list.find(e=>name);
    console.log(x);
}
search("Aly");




