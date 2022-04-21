const express = require('express');
var cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello from my smarty first node!!!')
})

const users = [
    {id:1, name:"mehedi1", job:"kaj kore", email:'meheid1420@gmail.com', phone:'01722222222'},
    {id:2, name:"mehedi2", job:"kaj kore", email:'meheid2420@gmail.com', phone:'01722222222'},
    {id:3, name:"mehedi3", job:"kaj kore", email:'meheid3420@gmail.com', phone:'01722222222'},
    {id:4, name:"mehedi4", job:"kaj kore", email:'meheid4420@gmail.com', phone:'01722222222'},
    {id:5, name:"mehedi5", job:"kaj kore", email:'meheid5420@gmail.com', phone:'01722222222'},
    {id:6, name:"mehedi6", job:"kaj kore", email:'meheid6420@gmail.com', phone:'01722222222'},
    {id:7, name:"mehedi7", job:"kaj kore", email:'meheid7420@gmail.com', phone:'01722222222'},
]

app.get('/users', (req,res) => {
    if(req.query.name){
        const search = req.query.name.toLocaleLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(matched)
    }else{        
        res.send(users)
    }
});
app.get('/user/:id', (req, res) => {
    console.log(req.params)
    const id = req.params.id;
    const user = users.find(u => u.id == id)
    res.send(user)
})


app.post('/user', (req, res) => {
    console.log('requst', req.body)
    const user = req.body;
    user.id = user.length + 1;
    users.push(user)
    res.send(user)
})


app.listen(port, () => {
    console.log('listening to port', port);
})