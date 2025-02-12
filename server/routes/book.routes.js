import { Router } from "express";
import bookSchema from "../models/book.schema.js";
import auth from "../middleware/auth.js";
import { MongoTopologyClosedError } from "mongodb";


const route = Router()

route.use(auth)

route.get("/", async (req, res) => {
    try{
        const books = await bookSchema.find({})
       return res.json(books)
    }
    catch(err) {
        res.json(err)
    }
})

route.get("/:id", async (req, res) => {
    try{
        const id = req.params.id
    const book = await bookSchema.findById(id)
    if(!book){
         res.status(404).json({message: "Book not found"})
    }
     res.json(book)
    }
    catch (err) {
        res.json(err)
    }
})

route.post("/post", async (req, res) => {
    try {
    const book = await bookSchema.create(req.body)
    res.json({message: "Book created",book})
        
    } catch (error) {
    (err) => res.json(err)
        
    }
})

route.delete("/:id", async (req, res) => {
    try{
      const id = req.params.id
        await bookSchema.findByIdAndDelete(id)
        res.json({message: "Book Deleted"})
    }
    catch (err) {
        res.json(err)
    }
})

route.put("/:id", async(req, res) => {
  try {
    const id = req.params.id
    const book = await bookSchema.findByIdAndUpdate(id, req.body, {new: true})
    if(!book){
         res.status(404).json({message: "Book not found"})
    }
      res.json({message:"Book updated"})
  } catch (error) {
      
       res.status(500).json({message: "Internal server error",error :error.message})
  }
})

export default route