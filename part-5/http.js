const http = require('http')

// const server = http.createServer((req,res)=>{
//   res.write('response send')
//   res.end()
// })

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('response send')
        res.end()
    }
    else if (req.url === '/about') {
        res.write('about page')
        res.end()
    }
    else {
        res.write('not found')
        res.end()
    }
})


// server.on('connection' , ()=>{
//     console.log("connected....")            //real project e amra eta kokhonoi use korbo na
// })

server.listen(3000)

console.log('server is running on port 3000')