import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , 'Please Enter Book Name'],
        trim : true,
        },
    author : {
        type : String,
        required : [true , 'Please Enter Author Name'],
        trim : true , 
        minLength : 2,
        maxLength : 15,
    }
} , {timestamps : true})

const Books = mongoose.model('Books' , bookSchema);

export default Books;
