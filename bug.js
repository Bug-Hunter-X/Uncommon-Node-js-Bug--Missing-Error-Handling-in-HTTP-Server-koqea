const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests here
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Uncommon Bug:  Improper Error Handling
//The above code lacks error handling for potential issues. Network errors, unexpected request formats, and file system errors (if interacting with files) can cause server crashes.

//Example of improved error handling:
const http = require('http');

const server = http.createServer((req, res) => {
  try {
    //Your code here
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  } catch (error) {
    console.error('Error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
}).on('error', err => {
  console.error(`Server failed to start: ${err}`);
});