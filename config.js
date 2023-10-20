const mongoose=require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017/post-panalLOCAL',{

    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log('db connection done'))

//mongodb+srv://abscod:656Erl14ZlApi95b@cluster0.7tsoi9r.mongodb.net/pos-panel

//localHOST connection String:mongodb://localhost:27017

