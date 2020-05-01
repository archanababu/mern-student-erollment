import { Schema, Mongoose } from "mongoose";
import { Course } from './courses.model';

const studentSchema = new Schema({
    studentId:{ type: Number, required: true },
    name:{ type: String, required: true },
    Course: new Course(),
    status:{ type: String, required: true }
},{
    timestamps: true,
});

const Student = Mongoose.model('Student', studentSchema);
model.exports = Student;