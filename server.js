import express, { static } from 'express';
var app = express();
var path = require('path');

app.use(static("dist"));
app.get('*', (req, res) =>{
   res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});
app.listen(process.env.PORT || 8080);