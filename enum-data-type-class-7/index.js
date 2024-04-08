// Enum data type discribtion
//store constans, duplicate value is not allow here..
//enum type -3: numeric, string, hetergenous
// use numeric enum...type
var RequestType;
(function (RequestType) {
    RequestType[RequestType["getData"] = 1] = "getData";
    RequestType[RequestType["saveData"] = 2] = "saveData";
    RequestType[RequestType["deleteData"] = 3] = "deleteData";
})(RequestType || (RequestType = {}));
console.log(RequestType);
//string enum type..
var RequestType2;
(function (RequestType2) {
    RequestType2["redData"] = "Read_Data";
    RequestType2["saveData"] = "Save_Data";
    RequestType2["deleteData"] = "Delete_Data";
})(RequestType2 || (RequestType2 = {}));
//hetergenous enum type
console.log(RequestType2.deleteData);
console.log(RequestType2["saveData"]);
var RequestType3;
(function (RequestType3) {
    RequestType3["redData"] = "Read_Data";
    RequestType3[RequestType3["saveData"] = true] = "saveData";
    RequestType3[RequestType3["id"] = 101] = "id";
})(RequestType3 || (RequestType3 = {}));
console.log(RequestType3.saveData);
