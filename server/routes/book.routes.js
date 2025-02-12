import { Router } from "express";
import bookSchema from "../models/book.schema.js";
import auth from "../middleware/auth.js";


const route = Router()

route.use(auth)

route.get("/", async (req, res) => {
    const book = await bookSchema.find({})
    .then(books => {
        res.json(books)
    })
    .catch(err => {
        res.json(err)
    })
})
route.get("/:id", async (req, res) => {
    const id = req.params.id
    const book = await bookSchema.findById(id)
    .then(books => {
        res.json(books)
    })
    .catch(err => {
        res.json(err)
    })
})

route.post("/post", async (req, res) => {
    const book = await bookSchema.create(req.body)
    .then(book => res.send(book))
    .catch(err => res.send(err))
})

route.delete("/:id", async (req, res) => {
    const id = req.params.id
    const book = await bookSchema.findByIdAndDelete(id)
    .then(book => res.send("Book Deleted"))
    .catch(err => res.send(err))
})

route.put("/:id", async(req, res) => {
    const id = req.params.id
    const book = await bookSchema.findByIdAndUpdate(id, req.body)
    .then(book => res.send("Book updated"))
    .catch(err => res.send(err))
})

route.get("/:id", async (req, res) => {
    const id = req.params.id
    const book = await bookSchema.findById(id)
    .then(book => res.send(book))
    .catch(err => res.send(err))
})

export default route