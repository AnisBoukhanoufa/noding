// const { firstName, myPhone, email } = require("./module.js");
// const cc = require("./secondModule.js");
// // console.log(infos)

// cc(myPhone);
// cc(firstName);
// cc(email)

const { readFileSync, writeFileSync, readFile, writeFile } = require("fs");

// const os=require('os');
// const path=require('path');

// console.log(path.resolve(__dirname,'app.js'))
// console.log(os.userInfo())
// console.log(os.arch());

// const text = readFileSync("./content/firstFile.txt", "utf8");
// console.log(text);
// writeFileSync("./content/writing.txt", "the writing",{flag:"a"});
// readFile("./content/second.txt", "utf8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     const first = result;
//     console.log(result)
//     readFile("./content/firstFile.txt", "utf-8", (err, result) => {
//       if (err) {
//         console.log(err);
//         return;
//       } else {
//         const second = result;
//         console.log(second)
//         writeFile(
//           "./content/async.txt",
//           `the new is ${first} ** ${second}`,{flag:'a'},
//           (err,result) => {
//             if (err) {
//               console.log(err);
//               return;
//             }
//             else console.log(result)
//           }
//         );
//       }
//     });
//   }
// });

const http = require("http");

const server = http.createServer((request, response) => {
  // console.log(request)
  if (request.url === "/") {
    response.write("home page");
    response.end();
  }
  if (request.url === "/About") {
    response.write("About Us");
    response.end();
  } else {
    response.write("404");
    response.end();
  }
});

server.listen(5000);
