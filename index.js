const http = require('http')
const path = require('path')
const fs = require('fs')


const server = http.createServer((req,res) => {
/*     if(req.url === '/'){
        fs.readFile(
            path.join(__dirname, 'public', 'index.html'),
            (err,content) =>{
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'})
            res.end(content)
        })
    }
    if(req.url === '/api/users'){
        const users = [
            {name: "Jaska Jokunen", age: 15},
            {name: "Snooppy", age: 14}
        ]
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(users))
    } */

    // build file path
    let filePath = path.join(__dirname, "public", req.url === '/' ? 'index.html': req.url)

    //console.log(filePath)
    


    //extension of file
    let extname = path.extname(filePath)

    // initial content type
    let contentType = 'text/html'
    // Check ext and set contet type
    switch(extname){
        case '.js':
            contentType = "text/javascript"
            break
        case '.css':
            contentType = "text/css"
            break            
        case '.json':
            contentType = "application/json"
            break            
        case '.png':
            contentType = "image/png"
            break            
        case '.jpg':
            contentType = "image/jpg"
            break
    }
    if (contentType == "text/html" && extname == "") filePath += ".html";

    // log the filePath
    //console.log(filePath);
    // read file
    fs.readFile(filePath, (err, content) =>{
        if(err){
            if(err.code == 'ENOENT'){
                //Page not found
                fs.readFile(path.join(__dirname, 'public','404.html'),(err, content)=>{
                    res.writeHead(404, {'Content-Type': 'text/html'})
                    res.end(content, 'utf8')
                }
                )
            } else {
                //some server err
                res.writeHead(500)
                res.end('Sever error: '+err.code)
            }
        } else {
            //success
            res.writeHead(200, {'Content-Type': contentType})
            res.end(content, 'utf8')
        }
    });
});


const PORT = process.env.PORT || 5000;




server.listen(PORT, ()=> console.log("Server runing on port: "+PORT))