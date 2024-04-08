// more data type accept in union type for example
let userId: (number | string | boolean);
userId =100;
console.log(userId);
// argument type 
function myfun(userId:string | number){
  console.log(userId)
}
myfun(444)