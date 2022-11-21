const express = require("express")
const app = express()

// set npm view engine to: ejs
app.set("view engine", "ejs")

// root path GET
app.get("/", (req, res) => {
    console.log("get-log")
    //send 200OK back
    res.sendStatus(200)
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

//npm run devStart
app.listen(3000)