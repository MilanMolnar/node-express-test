const express = require('express')
const { FieldValue } = require('firebase-admin/firestore')
const router = express.Router()
const { db } = require("../firebase")

let guid = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

// "/firebase" path GET
router.get("/", async (req, res) => {
    console.log("firebase")
    //init reference to the noSQL collection
    const quoteRef = db.collection('quote').doc("quotes");
    // get doc from collection
    const doc = await quoteRef.get()
    //printing 200 and doc data as message to client
    res.status(200).send(doc.data())
})


// "/firebase/add" path POST
router.post("/add", async (req, res) => {
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
router.patch("/update", async (req, res) => {
    console.log("firebase-update")
    //retrieve id and new quote field from json request body
    const {id, newQuote} = req.body
    //init reference to the noSQL collection
    const quoteRef = db.collection('quote').doc("quotes");
    //updating reference with req body vaules
    const res2 = await quoteRef.update({
        [id] : newQuote
    }) 
    res.status(201)
})


// "/firebase/delete" path DELETE
router.delete("/delete", async (req, res) => {
    console.log("firebase-delete")
    //retrieve id field from json request body
    const {id} = req.body
    //init reference to the noSQL collection
    const quoteRef = db.collection('quote').doc("quotes");
    //updating reference with req body vaules
    const res2 = await quoteRef.update({
        [id] : FieldValue.delete()
    }) 
    res.status(201)
})


module.exports = router