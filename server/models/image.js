import mongoose from 'mongoose';
const {Schema, model} = mongoose;

const imageSchema = new Schema({
    node: {
      type: String,
      required: [true, "Node Name is required"]
    },
    image: {
      type: String,
      required: [true, "Image Name is required"]
    },
    number_of_faces: {
      type: Number,
      required: [true, "Number of Faces is required"]
    },
    processing_time: {
      type: Number,
      required: [true, "Processing Time is required"]
    },
    taken_at: {
      type: Date,
      required: [true, "Taken At date and time are required"]
    }
  }, {
    timestamps: true
  }
);

const Image = model('Image', imageSchema);

export default Image;
