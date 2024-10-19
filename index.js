const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const port = 5000;
app.get('/',(req,res)=>{
    res.status(200).send('Hello World!\n');
});
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});