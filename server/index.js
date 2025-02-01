const express = require("express");
const app = express();
const cors = require("cors")
const corsOption = {origin: "http://localhost:5173",  methods: "GET,POST", // Allow GET and POST requests
    allowedHeaders: "Content-Type,Authorization",   };
const Quote = require("../server/schemas/QuoteShemas");
const List = require("./schemas/ListSchema")
const mongoose = require("mongoose");
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); // 
app.use(cors(corsOption));
mongoose.connect('mongodb://127.0.0.1:27017/quotes')
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});



app.get('/', async(req, res) => {
    const response = await Quote.find();
    res.json(response)
})

app.post("/favorites", async (req, res) => {
    const {quote} = req.body;
    const quoteRes = await Quote.find({quote: quote})
    // res.json('quoteRes');
    const ListFavo = new List({
        quote: quoteRes[0].quote,
        author: quoteRes[0].author
    });
    await ListFavo.save();
});

app.get("/favorites", async (req, res) =>{
    const lists = await List.find();
    res.json(lists);
})


app.listen(3001, (req, res) =>{

})