const fs = require('fs');
const path = require('path');

const users = [
    {name:'Oleg',gender:'male',age:30},
    {name:'Viktor',gender:'male',age:25},
    {name:'Olya',gender:'female',age:21},
    {name:'Oksana',gender:'female',age:18},
    {name:'Anna',gender:'female',age:29},
    {name:'Yura',gender:'male',age:35},
    {name:'Inna',gender:'female',age:21},
    {name:'Marta',gender:'female',age:28},
    {name:'Mykola',gender:'male',age:33},
    {name:'Huanito',gender:'male',age:39},
]

const manOlder20 = path.join(__dirname, 'manOlder20');
const manYounger20 = path.join(__dirname, 'manYounger20');
const womanOlder20 = path.join(__dirname, 'womanOlder20');
const womanYounger20 = path.join(__dirname, 'womanYounger20');

// fs.mkdir(manOlder20,{recursive:true},(err) => {console.log(err)})
// fs.mkdir(manYounger20,{recursive:true},(err) => {console.log(err)})
// fs.mkdir(womanOlder20,{recursive:true},(err) => {console.log(err)})
// fs.mkdir(womanYounger20,{recursive:true},(err) => {console.log(err)})

for (const user of users) {

    const {gender, age, name} = user;
    // console.log(user)
    if (gender === 'male' && age < 20) {
        fs.writeFile(path.join(manYounger20, `${name}.txt`), JSON.stringify(user), (err) => err && console.log(err))
    }
    if (gender === 'male' && age > 20) {
        fs.writeFile(path.join(manOlder20, `${name}.txt`),  JSON.stringify(user),(err) => console.log(err))
    }
    if (gender === 'female' && age > 20) {
        fs.writeFile(path.join(womanOlder20, `${name}.txt`),  JSON.stringify(user),(err) => console.log(err))
    }
    else if (gender === 'female' && age < 20) {
        fs.writeFile(path.join(womanYounger20, `${name}.txt`),  JSON.stringify(user),(err) => console.log(err))
    }
}


