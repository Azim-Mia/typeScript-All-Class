// Enum data type discribtion
//store constans, duplicate value is not allow here..
//enum type -3: numeric, string, hetergenous
// use numeric enum...type
enum RequestType {
  getData=1,
  saveData,
  deleteData,
}
console.log(RequestType);
//string enum type..
enum RequestType2 {
  redData="Read_Data",
  saveData="Save_Data",
  deleteData="Delete_Data",
}
//hetergenous enum type
console.log(RequestType2.deleteData)
console.log(RequestType2["saveData"]);
enum RequestType3 {
  redData="Read_Data",
  saveData=true,
  id=101,
}
console.log(RequestType3.saveData);