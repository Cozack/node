const fs = require('fs');
require('./user1/package.json');
const path = require('path');


// fs.mkdir(`${__dirname}/1800/`,{recursive:true},(err) => {console.log(err)})
// fs.mkdir(`${__dirname}/2000/`,{recursive:true},(err) => {console.log(err)})
//
let firstUsersPath = path.join(__dirname,'1800','firstArrUsers.json');
// let secondUsersPath = path.join(__dirname,'2000','secondArrUsers.json');

const firstArrUsers = [
    {name:'Oleg',gender:'male'},
    {name:'Oksana',gender:'female'},
    {name:'Yulia',gender:'female'}

]
fs.writeFile(firstUsersPath,JSON.parse(firstArrUsers),(err) => {console.log(err)})

// let firstArrUsers = fs.readFileSync('./user1/package.json');
// let users1 = JSON.parse(firstArrUsers);
// console.log(users1)



// const firstArrUsers = [
//     {name:'Oleg',gender:'male'},
//     {name:'Oksana',gender:'female'},
//     {name:'Yulia',gender:'female'}
//
// ]

