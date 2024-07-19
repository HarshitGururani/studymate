import mongoose from "mongoose";

const subjectsSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
  },
  backgroundUrl: {
    type: String,
    required: true,
  },
  pdf: {
    type: String,
  },
  url: {
    type: [String],
  },
  channelName: {
    type: [String],
  },
  videoLink: {
    type: [String],
  },
  zoom: {
    type: Number,
  },
});

export const Subjects =
  mongoose.models.Subjects || mongoose.model("Subjects", subjectsSchema);
