const express=require('express');
const app= express();

const usermodel=require('./models/user');

app.set("view engine","ejs");
const path=require('path');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.render("index");
})

app.get('/read',async (req,res)=>{
   
    let users=await usermodel.find();
    res.render("read",{users:users}); 
})

app.post('/create', async (req,res)=>{
  let createduser= await usermodel.create({
        name: req.body.name,
        email: req.body.email,
        url: req.body.url
    })
    res.redirect('/read');
}) 

app.get('/delete/:id', async (req,res)=>{
    let deleteuser=await usermodel.findByIdAndDelete(req.params.id);
    res.redirect('/read');
    
})

app.get('/edit/:id', async (req,res)=>{
    let edituser=await usermodel.findById(req.params.id);
    res.render("edit",{user:edituser});
})

app.post('/update/:id', async (req,res)=>{
    let updateduser=await usermodel.findByIdAndUpdate(req.params.id,{
        name: req.body.name,
        email: req.body.email,
        url: req.body.url
    });
    res.redirect('/read');
})


app.listen(3000);
