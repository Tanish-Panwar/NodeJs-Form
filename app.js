const express = require("express");
const fs  = require("fs");
const path = require("path");
const app = express();
const port = 80;

// EXPRESS RELATED 
 app.use('/static', express.static('static')) // for serving static files 

 app.use(express.urlencoded())

//  PUG RELATED
app.set('view engine', 'pug') //set the template engine as pug
app.set('views', path.join(__dirname, 'views') ) // set the views dictionary

// EDPOINTS
app.get('/', (req, res)=>{
    const con = "hello ji"
    const params = {'title': 'Java', "content": con}
    res.status(200).render('index.pug', params);
})




app.post('/',(req , res)=>{
    name = req.body.name
    number = req.body.number
    email = req.body.email


let output = `Name ${name}, Number ${number}, Email ${email}`
    fs.writeFileSync('output.txt', output)
    const params ={'message': 'Your form has been submitted'}
    res.status(200).render('index.pug' , params)
})


app.listen(port, ()=>{
    console.log(`this application started on port ${port}`)
});


