const express = require('express');
const sendMail = require('./public/mail.js');
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

app.use(express.urlencoded({
 extended: false
}));

app.use(express.json());

app.post('/email', (req, res) =>{
    
    const {name,phone,email, subject,message } = req.body;
    console.log('Data: ', req.body);
    sendMail(name,phone,email, subject,message, function(data, err){
        if(err)
        {
            res.status(500).json({msg: 'Something went wrong!!!'});
        } else {
            res.json({msg: 'Email sent.'})
        }
    });
});

app.get('',(req,res) => {
    res.sendFile(__dirname + '/views/index.html')
});




/* listen on port 8000 */
app.listen(port,()=> console.info(`Listening on port ${port}`));