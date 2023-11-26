
var json = [{
    "id" : "manikandan", 
    "msg"   : "Remainder your task yelia For the given JSON iterate over all for loops (for, for in, for of, forEach)",
    "task" : "zen class portal task",
    "mail": "manikandan007@gmail.com"
},
{
    "id" : "yelia", 
    "msg"   : "today i complete my task",
    "task" : "zen class day-5 task",
    "mail": "eliyabandar@gmail.com"
}];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.id);
    console.log(obj.msg);
    console.log(obj.task);
    console.log(obj.mail);

}

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].task);

}
}

//for Of
let text = "";
for (let x of json[key].msg) {
 text += x; 
}
 console.log(text);

//for Each
json.forEach(function(obj) { console.log(obj.msg); });



