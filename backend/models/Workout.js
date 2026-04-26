const mongoose = require("mongoose");

const WorkoutSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    title: {
        type: String,
        required: true,
    },
    exercises : {
        type: [String],
        required: true,
    },
    goal: {
        type: String,
        required: true,
    }, 
    createdAt: {
        type: Date,
        default: Date.now()
    },
});


// export model worout with WorkoutSchema
module.exports = mongoose.model("Workout", WorkoutSchema);