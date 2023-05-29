import mongoose from 'mongoose'

let DocumentSchema = new mongoose.Schema(
    {
        message: {type: String, require: true}
    }
);

export default mongoose.model('Document', DocumentSchema);
//module.exports = mongoose.model("Document",DocumentSchema);