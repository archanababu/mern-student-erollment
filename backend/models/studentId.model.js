import { Schema, Mongoose } from "mongoose";

const studentIdSchema = new Schema({
    studentId:{
        type: Number,
        required: true,
        minlength: 6,
    },
},{
        timestamps: true,
});
    
    const StudentId = Mongoose.model('StudentId', studentIdSchema);
    model.exports = StudentId;