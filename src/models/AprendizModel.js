import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema (
    {
        name: { type: String, require:true },
        document: { type: Number, require:true },
        ficha: { type: Number, require:true },
        email: {type: String, require:true },
        phone: {type: Number, require:true },
    },
    {
        timestamps: true,
    }
);

const AprendizModel = mongoose.models.Aprendiz || mongoose.model("Aprendice", topicSchema);
 
export default AprendizModel;