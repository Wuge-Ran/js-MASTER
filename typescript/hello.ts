let i : any = 12;
i = '12';
function abc(a:number,b:number,c:number=233){
    console.log(a,b,c)
}
abc(12,3);
function getStock(){
    return {
        code:'apple',
        price:135
    }
}
let {code,price} = getStock();
console.log(code,price);
let arr1 = [1,2,3,4,5];
let [number1,,number2] = arr1;
console.log(number1,number2);//print:1 3
let arr2 = [99,23,12,76,35];
for(let val in arr2){
    console.log(val);
}