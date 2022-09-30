const express=require('express');
const bodyParser=require('body-parser')
const path=require('path')

const db=require('./models/db-config')
const playerRouter=require('./routes/player-route');
const teamsDataRouter=require('./routes/teams-data-route');
const contestRouter=require('./routes/contest-route');

const router=express.Router();

const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/',router);

app.use('/player',playerRouter);
app.use('/teams-data',teamsDataRouter);
app.use('/contest',contestRouter);

app.get('/',(req,res)=>{
    res.send('Hello World')
})

const port=process.env.PORT || 3000;
app.listen(port,(err)=>{
    console.log("Listening on ",port);
})