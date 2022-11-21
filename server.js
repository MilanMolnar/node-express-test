const express = require("express");
const app = express();
app.use(express.json());
const cron = require('node-cron');
const { db } = require("./firebase.js")

let scheduledJob = ""

let guid = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

// set npm view engine to: ejs
app.set("view engine", "ejs")


// root path GET
app.get("/", (req, res) => {
    console.log("get-log")
    //send 200OK back
    res.sendStatus(200)
})

// "/firebase" path GET
app.get("/firebase", async (req, res) => {
    console.log("firebase")
    const quoteRef = db.collection('quote').doc("quotes");
    const doc = await quoteRef.get()
    res.status(200).send(doc.data())
})


// "/firebase/add" path POST
app.post("/firebase/add", async (req, res) => {
    console.log("firebase-add")
    //Generate GUID for unique identidfier in our noSQL
    const quoteId = guid()
    //retrieve quote field from json request body
    const {quote} = req.body
    //init reference to the noSQL collection
    const quoteRef = db.collection('quote').doc("quotes");
    //updating reference with req body vaules
    const res2 = await quoteRef.update({
        [quoteId] : quote
    }) 
    res.status(201)
})



// "/firebase/update" path PATCH
app.patch("/firebase/update", async (req, res) => {
    console.log("firebase-update")
    //retrieve quote field from json request body
    const {id, newQuote} = req.body
    //init reference to the noSQL collection
    const quoteRef = db.collection('quote').doc("quotes");
    //updating reference with req body vaules
    const res2 = await quoteRef.update({
        [id] : newQuote
    }) 
    res.status(201)
})

// "schedule" path GET
app.get("/schedule", (req, res) => {
    //start scheduled job
    scheduledJob = cron.schedule('*/3 * * * * *', () => {
        var ts = new Date();
        console.log("schedule: " + ts.toGMTString())
    });

    console.log("schedule start")
    scheduledJob.start();
    res.sendStatus(200);
})

// "schedule" path GET
app.get("/schedule/stop", (req, res) => {
    //stop scheduled job
    if (scheduledJob != ""){
        console.log("schedule stop")
        scheduledJob.stop();
    }
    res.sendStatus(200);
})

// "/error" path GET
app.get("/error", (req, res) => {
    console.log("get-error")
    //send 500 ISE back
    res.json({message: "500 ISE"})
})

// "/download" path GET
app.get("/download", (req, res) => {
    console.log("get-download")
    // set res to download 'server.js'
    res.download("server.js")
})

// "/render" path GET
app.get("/render", (req, res) => {
    console.log("get-render")
    // set res to render 'views/index.ejs'
    res.render("index")
})


// "/rendervar" path GET
app.get("/rendervar", (req, res) => {
    console.log("get-render")
    // set res to render 'views/index.ejs'
    res.render("index", {text : "text-var"})
})


// Create user router and link it to '/users' path 
const userRouter = require('./routes/users')
app.use('/users', userRouter)


//npm run devStart listening on port 3000
app.listen(3000)