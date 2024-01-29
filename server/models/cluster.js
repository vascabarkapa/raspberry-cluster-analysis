import mongoose from 'mongoose';
const {Schema, model} = mongoose;

const clusterSchema = new Schema({
    age: {
      type: Number,
      required: [true, "Cluster Age is required"]
    },
    number_of_nodes: {
      type: Number,
      default: null
    },
    min_pods: {
      type: Number,
      required: [true, "Minimal number of Pods is required"]
    },
    max_pods: {
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
    load_threshold: {
      type: Number,
      required: [true, "Threshold od Load is required"]
    },
  }, {
    timestamps: true
  }
);

const Cluster = model('Cluster', clusterSchema);
export default Cluster;
