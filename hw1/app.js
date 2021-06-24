const fs = require('fs');
const path = require('path');

const path1800 = path.join(__dirname, '1800');
const path2000 = path.join(__dirname, '2000');
const male = path.join(__dirname, 'male');
const female = path.join(__dirname, 'female');
const allFiles = path.join(__dirname, 'allFiles');
//
// fs.mkdir(path1800,{recursive:true},(err) => {err && console.log(err)})
// fs.mkdir(allFiles,{recursive:true},(err) => {err && console.log(err)})
// fs.mkdir(path2000,{recursive:true},(err) => {err && console.log(err)})
// fs.mkdir(male, {recursive: true}, (err) => {
//     console.log(err)
// })
// fs.mkdir(female, {recursive: true}, (err) => {
//     console.log(err)
// })
//
// let firstUser = path.join(__dirname,'1800','user1.json');
// let secondUser = path.join(__dirname,'1800','user2.json');
// let thirdUser = path.join(__dirname,'1800','user3.json');
//
// fs.writeFile(firstUser,JSON.stringify({name:'Oleg',gender:'male'}),(err) => {err && console.log(err)})
// fs.writeFile(secondUser,JSON.stringify({name:'Katya',gender:'female'}),(err) => {err && console.log(err)})
// fs.writeFile(thirdUser,JSON.stringify({name:'Vitya',gender:'male'}),(err) => {err && console.log(err)})
//
// let fourthUser = path.join(__dirname,'2000','user4.json');
// let fiveUser = path.join(__dirname,'2000','user5.json');
// let sixUser = path.join(__dirname,'2000','user6.json');
//
//
// fs.writeFile(fourthUser,JSON.stringify({name:'Inna',gender:'female'}),(err) => {err && console.log(err)})
// fs.writeFile(fiveUser,JSON.stringify({name:'Olga',gender:'female'}),(err) => {err && console.log(err)})
// fs.writeFile(sixUser,JSON.stringify({name:'Yura',gender:'male'}),(err) => {err && console.log(err)})




// CHANGED FOLDERS BY PLACES

// fs.readdir(path1800,(err, files) => {
//     if (err){
//         console.log(err)
//         return
//     }
//     for (const file of files) {
//         fs.rename(path.join(path1800,file),path.join(path2000,file),(err1) =>console.log(err))
//
//     }
// })
// fs.readdir(path2000, (err, files) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     for (const file of files) {
//         fs.rename(path.join(path2000, file), path.join(path1800, file), (err1) => console.log(err))
//
//     }
// })




// SORT MALE AND FEMALE


// fs.readdir(path1800, (err, files) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     for (const file of files) {
//         fs.readFile(path.join(path1800, file), (err1, data) => {
//             if (!err1) {
//                const {gender} = JSON.parse(data.toString());
//                if (gender==='male'){
//                    fs.rename(path.join(path1800, file), path.join(male, file), (err1) => console.log(err))
//                } else {
//                    fs.rename(path.join(path1800, file), path.join(female, file), (err1) => console.log(err))
//
//                }
//             }
//         })
//
//     }
// })
// fs.readdir(path2000, (err, files) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     for (const file of files) {
//         fs.readFile(path.join(path2000, file), (err1, data) => {
//             if (!err1) {
//                const {gender} = JSON.parse(data.toString());
//                if (gender==='male'){
//                    fs.rename(path.join(path2000, file), path.join(male, file), (err1) => console.log(err))
//                } else {
//                    fs.rename(path.join(path2000, file), path.join(female, file), (err1) => console.log(err))
//
//                }
//             }
//         })
//
//     }
// })



