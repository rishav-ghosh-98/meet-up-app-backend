const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
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

    venue: {
      type: String,
      required: function () {
        return this.type === "Offline";
      },
    },

    address: {
      type: String,
      required: function () {
        return this.type === "Offline";
      },
    },

    dressCode: {
      type: String,
      default: "Not Specified",
    },

    ageRestriction: {
      type: String,
      default: "All Ages",
    },

    tags: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Event", eventSchema);
