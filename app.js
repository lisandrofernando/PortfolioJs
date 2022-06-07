const express = require('express');
const app = express();
const path = require('path');
const host = '0.0.0.0';
const port =process.env.Port || 5000;



/**
Static Files
*/
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/js', express.static(__dirname + 'public/js'));
/**
Data Parsing
*/


app.get('',(req,res) => {
    res.sendFile(__dirname + '/views/index.html')
});




/* listen on port 5000 */
app.listen(process.env.Port, '0.0.0.0',()=> console.info(`Listening on port ${port}:${host}`));
