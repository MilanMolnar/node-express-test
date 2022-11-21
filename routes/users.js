const express = require('express')
const router = express.Router()


// "/users" root path GET
router.get("/", (req, res) => {
    res.send("UserList")
})


// "/users" => '/new' path GET
router.get("/new", (req, res) => {
    res.send("new")
})


// "/users" root path POST
router.post("/", (req, res) => {
    res.send("Create USER")
})


router
    .route("/:id")
    .get((req, res) => { // "/users" => '/id' ('id' is a var) path GET
            res.send(`user with id: ${req.params.id}`)
    })
    .put((req, res) => { // "/users" => '/id' ('id' is a var) path PUT
        res.send(`UPDATE user with id: ${req.params.id}`)
    })
    .delete((req, res) => { // "/users" => '/id' ('id' is a var) path DELETE
        res.send(`DELETE user with id: ${req.params.id}`)
    })


module.exports = router