
const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/dog', (req, res)=>{
    res.send('<h1>강아지</h1>');
})

app.get('/cat', (req, res)=>{
    res.json({'sound' : '야옹'});
})

app.get('/user/', (req, res)=>{
    // const q = req.params;
    // console.log(q);
    const q = req.query;
    console.log(q);

    res.json({'sound' : q.id});
})

app.get('/sound/:name', (req, res)=>{
    const { name } = req.params;
    if(name=="dog"){
        res.json({'sound' : '멍멍'});
    }else if(name == "cat"){
        res.json({'sound' : '야옹'});
    }else if(name == "pig"){
        res.json({'sound' : '꿀꿀'});
    }else {
        res.json({'sound' : '알 수 없음'});
    }
})


app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})