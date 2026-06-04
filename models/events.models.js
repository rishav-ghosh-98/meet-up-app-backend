const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      enum: ["Online", "Offline"],
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    date: {
      type: Date,
      required: true,
    },

    topic: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    sessionTimings: {
      type: String,
      required: true,
    },

    speaker: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      default: 0,
    },

    // Offline only
    venue: {
      type: String,
      default: "",
    },

    address: {
      type: String,
      default: "",
    },

    // Online only
    meetingLink: {
      type: String,
      default: "",
    },

    platform: {
      type: String,
      default: "",
    },

    dressCode: String,

    ageRestriction: String,

    tags: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Event", eventSchema);
