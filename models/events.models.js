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

    // Offline Events
    venue: {
      type: String,
      default: "",
    },

    address: {
      type: String,
      default: "",
    },

    // Online Events
    platform: {
      type: String,
      default: "",
    },

    meetingLink: {
      type: String,
      default: "",
    },

    dressCode: {
      type: String,
      default: "",
    },

    ageRestriction: {
      type: String,
      default: "",
    },

    tags: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Events", eventSchema);