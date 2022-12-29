import express from 'express';

const app = express();
const port = 5555;

app.listen(port, ()=> {
    console.log(`App is running on localhost:${port}`)
})