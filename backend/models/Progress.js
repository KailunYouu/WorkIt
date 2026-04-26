const mongoose = require("mongoose");

const ProgressSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    workoutId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Workout",
    },
    status: {
        type: String,
        enum: ["completed", "not_completed"],
    },

    createdAt: {
        type: Date,
        default: Date.now()
    },
});

// export model worout with ProgressSchema
module.exports = mongoose.model("Progress", ProgressSchema);