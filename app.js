const express = require('express')
const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).json({'slackUsername': 'josiah', 'backend': true, 'age': 24, 'bio': `Hi, I'm on my way to becoming word class` })
})

app.get('*',(req,res)=>{
    res.status(401).json({'mesage':'page not found'})
})

app.post('/', (req, res) => {
    const { operation_type, x, y } = req.body;
    if (operation_type && x && y) {
      ///////////
      if (
        operation_type === 'addition' ||
        operation_type.includes('add') ||
        operation_type.includes('addition')
      ) {
        const result = x + y;
        res.json({ slackUsername: 'josiah', result, operation_type: 'addition' });
      }
      //////////
      else if (
        operation_type === 'subtraction' ||
        operation_type.includes('subtract') ||
        operation_type.includes('subtraction')
      ) {
        const result = x - y;
        res.json({
          slackUsername: 'josiah',
          result,
          operation_type: 'subtraction',
        });
      }
      //////////
      else if (
        operation_type === 'multiplication' ||
        operation_type.includes('multiply') ||
        operation_type.includes('multiplication')
      ) {
        const result = x * y;
        res.json({
          slackUsername: 'josiah',
          result,
          operation_type: 'multiplication',
        });
      }
    } else res.send({ msg: 'please input valid fields' });
  });


const PORT = process.env.PORT || 3334

app.listen(PORT, ()=>{
    console.log(`server listening to http://localhost:${PORT}`);
})
