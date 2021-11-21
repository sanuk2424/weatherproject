
const express = require('express');
const hbs = require('hbs');
const path = require('path')
const app = express();


const port = process.env.PORT || 8000;
const staticPath = path.join(__dirname,'../public');
const templatePath = path.join(__dirname, '../templates');
const partialsPath = path.join(__dirname, '../templates/partials');

//Settings
app.use(express.static(staticPath));
app.set('view engine', 'hbs')
app.set('views', templatePath);
hbs.registerPartials(partialsPath);


app.get('/',(req,res)=>{
    // res.send("<h1>Welcome to ale technical channel.</h1>");
    res.render('views/index');
})

app.get('/about',(req,res)=>{
    // res.send("<h1>Welcome to about page.</h1>");
    res.render('views/about');
})

app.get('/weather',(req,res)=>{
    // res.send("<h1>Welcome to weather page.</h1>");
    res.render('views/weather');
})

app.get('*',(req,res)=>{
    // res.send("<h1>Opps 404 error page</h1>");
    res.render('views/error',{
        errorMsg:'Opps! Page Not Found'
    });
})

app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})
