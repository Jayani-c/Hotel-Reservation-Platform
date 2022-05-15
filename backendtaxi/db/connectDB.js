const mongoose = require ("mongoose")

mongoose.connect(process.env.dbURI,{
    useNewUrlParser:true, 
    useUnifiedTopology:true
})
.then(() => console.log(`Db connection Successfull`))
.catch(() => console.log(`DB connection failed`))