import { Schema, Mongoose } from "mongoose";

const studentSchema = new Schema({
    name:{ type: String, required: true },
    dob:{ type: Date, required: true },
    experience:{ type: Number, required: true },
    status:{ type: String, required: true }
},{
    timestamps: true,
});

const Student = Mongoose.model('Student', studentSchema);
model.exports = Student;