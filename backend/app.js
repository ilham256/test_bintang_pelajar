const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('Hello About')
})
app.get('/contact', (req, res) => {
  res.send('Hello Contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// const http = require('http');
// const fs = require('fs');

// const renderHTML = (path, res) => {
//     fs.readFile(path, (err, data) => {
//         if (err) {
//             res.writeHead(404);
//             res.write('Error: file not found! yo')
//         } else {
//             res.write(data);
//         }
//         res.end();               
//     });
// };

// http
//     .createServer((req, res) => {
        
//         res.writeHead(200, {
//             'Content-Type' : 'text/html'
//         });

//         const url = req.url;
//         if(url === '/about') {
//             renderHTML ('./about.html', res);
//         } else if (url === '/contact') {
//             renderHTML ('./contact.html', res);
//         } else {
//             //res.write('Hello World!');
//             renderHTML ('./index.html', res);
//         }        
//     })
//     .listen(3000, () => {
//         console.log('Server is listening on port 3000..');
//     })