import mongoose from 'mongoose';

const {Schema, model} = mongoose;

const clusterSchema = new Schema({
    age: {
      type: Number,
      required: [true, "Cluster Age is required"]
    },
    numberOfNodes: {
      type: Number,
      default: null
    },
    minPods: {
      type: Number,
      required: [true, "Minimal number of Pods is required"]
    },
    maxPods: {
      type: Number,
      required: [true, "Maximal number of Pods is required"]
    },
    replicas: {
      type: Number,
      required: [true, "Replicas is required"]
    },
    load: {
      type: Number,
      required: [true, "Cluster Load is required"]
    },
    maxLoad: {
      type: Number,
      required: [true, "Maximal number of Load is required"]
    },
  }, {
    timestamps: true
  }
);

const Cluster = model('Cluster', clusterSchema);
export default Cluster;
