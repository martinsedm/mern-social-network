

//TODO
/** Example of Model Schema By Or Hasson **/
const mongoose = require("mongoose");
const SiteSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Missing name"],
        unique: true
    },
    description: {
        type: String,
        required: [true, "Missing description"]
    },
    areaId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Missing area id"]
    },
    adultPrice: {
        type: Number,
        required: [true, "Missing adult price"],
        min: [0, "Adult price can't be negative"],
        max: [1000, "Adult price can't exceed 1,000"]
    },
    childPrice: {
        type: Number,
        required: [true, "Missing child price"],
        min: [0, "Child price can't be negative"],
        max: [1000, "Child price can't exceed 1,000"]
    },
}, { versionKey: false, toJSON: { virtuals: true }, id: false });

SiteSchema.virtual("area", {
    ref: "AreaModel",
    localField: "areaId",
    foreignField: "_id",
    justOne: true
});

const SiteModel = mongoose.model("SiteModel", SiteSchema, "sites");

module.exports = SiteModel;
