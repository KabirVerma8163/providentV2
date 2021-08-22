// require('dotenv').config();
// console.log(process.env.SANDBOX_TOKEN);

const http = require('http')
const fs = require('fs')
const url = require('url')
const path = require('path')
const PORT = process.env.PORT || 5002

const server = http.createServer((req, res) => {
  // if(req.url === '/'){
  //   fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
  //     if(err) throw err;
  //     res.writeHead(200, { 'Content-Type' : 'text/html'})
  //     res.end(content)
  //   })
  // }
  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)

  // Extension of the file
  let extName = path.extname(filePath)

  // Initial content type
  let contentType = 'text/html'

  // Check the ext and set content type
  switch (extName){
    case  '.js':
      contentType = 'text/javascript'
      break
    case '.css':
      contentType = 'text/css'
      break
    case  '.json':
      contentType = 'application/json'
      break
    case '.png':
      contentType = 'image/png'
      break
    case '.jpg':
      contentType = 'image/jpg'
      break
  }

  // Read the file
  fs.readFile(filePath, (err, content) => {
    if(err){
      if(err.code === 'ENOENT'){
        // Page not found
        fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
          res.writeHead(200, {'Content-Type': 'text/html'})
          res.end(content, 'utf8')
        })
      } else {
        // Some server error
        res.writeHead(500)
        res.end(`Server Error ${err.code}`)
      }
    } else {
      // Success
      res.writeHead(200, {'Content-Type': contentType})
      res.end(content, 'utf8')
    }
  })
})

server.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
})
