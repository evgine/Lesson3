//console.log("Hello Node");
/*var os = require("os");
var message = "The platform is ";

function main(){
    console.log(message + os.platform())
}
main();*/

/*var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hello world");
});

app.listen(3000, function(){
    console.log("Example is running on port 3000");
})*/









// var express = require("express");
// var app = express();

// app.get("/", function(req, res){
//     res.send("<h1>Hello world</h1>");

// });
// app.get("/name/:name", function(req, res){
//     var n = req.params.name;
//     res.send("<h1>Hello " + n +"</h1>");
// });
// // app.get("/:surname/:username", function(req, res){
// //     var s = req.params.surname;
// //     var u = req.params.username;
// //     res.send("<h1>Hello " + s + "  " + u + "</h1>")

// // });
// app.get("/google", function(req, res){
//     res.redirect('http://google.com');

// });
// app.get("/google/:search", function(req, res){
//      var s = req.params.search;
//     res.redirect('https://google.com/search?q=' + s);

// });
// // app.get("/*404/", function(req, res){
// //     res.send('404 error');
// // });

// app.get('/*', function(req, res){
//     res.send('ERROR 404', 404);
//   });

// app.listen(3000, function(){
//     console.log("Example is running on port 3000");
// });

//վերջնական առաջադրանքը
// var express = require("express");
// var app = express();

// app.use(express.static("public"));

// app.get("/", function(req, res){
//    res.redirect("index.html");
// });

// app.listen(3000, function(){
//    console.log("Example is running on port 3000");
// });




// var Square = require("./module");
// var mySquareObjekt = new Square(5);

// function main(){
//     console.log(mySquareObjekt.getArea());
// }
// main();





// var fs = require('fs');

// function main(){
//    var file  = "hello.txt";
//    fs.appendFileSync(file, "Hello world\n");
// }
// main();




// var fs = require("fs");

// function main(){
//     fs.writeFile("hello.txt","Hello world\n", function(err){
//         console.log("fs.writeFile ended");
//     });
//     console.log("fs.writeFile");
// }
// main();


// var fs = require('fs');

// function main() {
//    fs.writeFileSync("hello.txt", "Hello world\n");
//    console.log("fs.writeFile");
// }
// main();



// var fs = require("fs");
// var dummyText = "Apple yep";

// function main() {
//     fs.writeFileSync("dummytext.txt", dummyText);
//     var text = fs.readFileSync("dummytext.txt").toString();
//     console.log(dummyText == text);
//     console.log(text);
//     fs.writeFileSync("undummytext.txt",
//         text.replace("Apple", "Microsoft")
//     );
// }
// main();

var obj =
{
    "first_name":"Vardan",
    "last_name":"Hovsepyna",
    "age":13,
    "tumo_student":true
}

var fs = require('fs');
var myJSON = JSON.stringify(obj);

function main(){
   var file  = "obj.json";
   fs.writeFileSync(file,myJSON);
}
main();











