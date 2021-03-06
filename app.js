const express = require('express');
const app = express();
const port = 8000;

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
app.listen(port, ()=> console.info(`Listening on port ${port}`));
