import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const notificationSchema = new Schema({
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User ID is required']
    },
    model_name: {
      type: String,
      required: [true, 'Model Name is required']
    },
    model_id: {
      type: String,
      required: [true, 'Model ID is required']
    },
    title: {
      type: String,
      required: [true, 'Title is required']
    },
    description: {
      type: String,
      required: [true, 'Description is required']
    },
    is_read: {
      type: Boolean,
      required: [true, 'Is read is required']
    }
  }, {
    timestamps: true
  }
);

const Notification = model('Notification', notificationSchema);

export default Notification;
