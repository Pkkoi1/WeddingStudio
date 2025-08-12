const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    location: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Location",
      required: false,
    },
    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
      required: false,
    },
    content: [
      {
        text: {
          type: String,
          required: true,
        },
        img: {
          type: String,
          required: false,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("News", newsSchema);
