import mongoose, {Schema} from "mongoose";

const visualizeSchema=new Schema({
    end_year:{
        type: String,
        required: false
    },
    intensity:{
        type: Number,
        required: true
    },
    sector:{
        type: String,
        required: true
    },
    topic:{
        type: String,
        required: true
    },
    insight:{
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true
    },
    region:{
        type: String,
        required: false
    },
    start_year:{
        type: Number,
        required: false
    },
    impact:{
        type: String,
        required: false
    },
    country:{
        type: String,
        required: false
    },
    relevance:{
        type: Number,
        required: true
    },
    pestle:{
        type: String,
        required: true
    },
    source:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    likelihood:{
        type: Number,
        required: true
    },
    added:{
        type: Date,
        required: true
    },
    published:{
        type: Date,
        required: true
    }
})

export const Visualize=mongoose.model("Visulaize", visualizeSchema);