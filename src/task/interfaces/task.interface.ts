import { Document } from 'mongoose';

export interface Task extends Document {
  readonly name: string;
  readonly description: string;
  readonly priority: number;
  readonly state: number;
  readonly createdAt: Date;
}
