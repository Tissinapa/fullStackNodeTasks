const fs = require('fs');
const path = require('path');


//Create folder
fs.mkdir(path.join(__dirname, '/test'),{}, err => {
    if (err) throw err
    console.log('Folder created')

});

// Create and write to file
fs.writeFile(path.join(__dirname, '/test','hello.txt'),'Hello world ', err => {
    if (err) throw err
    console.log('Folder created')
    const person = {
        name: "Seppo",
        age: 50
    }
    //Add to file
    fs.appendFile(path.join(__dirname, '/test','hello.txt'),person.name, err => {
        if (err) throw err
        console.log('aded')
    
    });
    

});

//Read file
fs.readFile(path.join(__dirname, '/test','hello.txt'),'utf8', (err,data) => {
    if (err) throw err
    console.log(data)

});
// Rename
fs.rename(
    path.join(__dirname, '/test','hello.txt'),
    path.join(__dirname, '/test','hellorenamed.txt'), (err,data) => {
    if (err) throw err
    console.log("file renamed")

});
