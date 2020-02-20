let express = require('express')
let path = require('path')
let cors = require('cors')
let app = express()
app.use(cors())


app.use(express.static('./build'))

app.use('*',  (req, res)=> {
    res.sendFile(path.join(__dirname, '/build', 'index.html'));
   });

   
app.listen(process.env.PORT || 6070,()=>{
    console.log("server sahb is running");
    
})