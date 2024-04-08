//built data type number,string,boolean,void, undefient, null
let userId:number
let firstName:string;
let lastName:string
let isLogin:boolean // data type boolean
userId=100;
firstName="azim";
lastName ="islam";
isLogin=true;
let fullName=firstName.concat(lastName)

console.log(`userId:${userId} fullName:${fullName}`)
//void type
function myfun() :void{
  console.log("void type..")
}
myfun();