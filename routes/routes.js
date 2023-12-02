const express = require('express');
const app = express();
let port = 3400

app.listen(port,()=>{
    console.log(`${new Date().toJSON()} - routes - listening on https:localhost:${port}`);
})