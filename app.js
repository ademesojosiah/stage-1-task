const express = require('express')
const app = express()



app.get('/',(req,res)=>{
    res.status(200).json({'slackUsername': 'josiah', 'backend': true, 'age': 24, 'bio': `Hi, I'm on my way to becoming word class` })
})

app.get('*',(req,res)=>{
    res.status(401).json({'mesage':'page not found'})
})


const PORT = process.env.PORT || 3334

app.listen(PORT, ()=>{
    console.log(`server listening to http://localhost:${PORT}`);
})
