const mongoose = require("mongoose");
const Quote = require("./QuoteShemas");
mongoose.connect('mongodb://127.0.0.1:27017/quotes', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

const GetQuotes = async() => {
    try{
        for(let i = 0; i < 50; i++){
            const res = await fetch("https://meigen.doodlenote.net/api/json.php?c=1");
            const data = await res.json();
            const Info = new Quote({
                quote: data[0].meigen,
                author: data[0].auther
            });
            await Info.save();
            console.log('data is successfuly saved', Info);
        }
       
    }catch(error){
        console.log(error)
    }
    
}

GetQuotes();
