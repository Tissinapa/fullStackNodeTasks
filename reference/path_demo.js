const path = require("path")


// Base file name
console.log(path.basename(__filename))

//dir name
console.log(path.dirname(__filename))

//file extenssion
console.log(path.extname(__filename))

// Create path obj
console.log(path.parse(__filename).base)

// Concatenate paths
console.log(path.join(__dirname,"test","hello.html"))