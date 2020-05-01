import { Schema, Mongoose } from "mongoose";

const courseSchema = new Schema({
    courseId:{
        type: Number,
        required: true,
        minlength: 6,
    },
    courseName:{
        type: String,
        required: true,
    }
},{
        timestamps: true,
});
    
    const Course = Mongoose.model('Course', courseSchema);
    model.exports = Course;