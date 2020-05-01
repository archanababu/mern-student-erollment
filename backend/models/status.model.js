import { Schema, Mongoose } from "mongoose";

const statusSchema = new Schema({
    status:{
        type: String,
        required: true,
    }
},{
        timestamps: true,
});
    
    const Status = Mongoose.model('Status', statusSchema);
    model.exports = Status;