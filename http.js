import Express from 'express';

const app = Express();

app.get('/', (req,res)=>{
    res.send("hello worldeee");
})

app.post('/post', (req,res)=>{
    if (!req.body){
        return res.status(400).send("Request body is missing")
    }
    res.send('hello');
})

app.listen(3000,() => {
    console.log("server is running on port 3000")
})