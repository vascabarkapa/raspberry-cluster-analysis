import mongoose from 'mongoose';

const {Schema, model} = mongoose;

const clusterSchema = new Schema({
    load: {
      type: Number,
      required: [true, "Load is required"]
    },
    numberOfPods: {
      type: Number,
      required: [true, "Number of Pods is required"]
    },
    numberOfNodes: {
      type: Number,
      required: [true, "Number of Nodes is required"]
    }
  }, {
    timestamps: true
  }
);

const Cluster = model('Cluster', clusterSchema)
export default Cluster
