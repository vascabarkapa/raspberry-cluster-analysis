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
    numberOfFaces: {
      type: Number,
      required: [true, "Number of Faces is required"]
    },
    processingTime: {
      type: Number,
      required: [true, "Processing Time is required"]
    }
  }, {
    timestamps: true
  }
);

const Image = model('Image', imageSchema);

export default Image;
