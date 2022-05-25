import { Schema } from 'mongoose';

export const TaskSchema = new Schema({
  name: String,
  description: String,
  state: {
    type: Number,
    default: 1,
  },
  priority: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
