const mongoose= require('mongoose');
mongoose.connect('mongodb+srv://riteshghadge205:3HO8iAIixO7dOUQ8@cluster1.jn6jf2z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1');

const userSchema=mongoose.Schema({
    name:String,
    email:String,
    url:String
})

module.exports=mongoose.model('user',userSchema);
