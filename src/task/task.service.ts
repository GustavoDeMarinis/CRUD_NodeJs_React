import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './interfaces/task.interface';
import { CreateTaskDTO } from './dto/task.dto';

@Injectable()
export class TaskService {
  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

  async getTasks(): Promise<Task[]> {
    const tasks = await this.taskModel.find();
    return tasks;
  }

  async getTask(taskID: string): Promise<Task> {
    const task = await this.taskModel.findById(taskID);
    return task;
  }

  async createTask(createTaskDTO: CreateTaskDTO): Promise<Task> {
    const task = new this.taskModel(createTaskDTO);
    return await task.save();
  }

  async deleteTask(taskID: string): Promise<Task> {
    const deletedTask = await this.taskModel.findByIdAndDelete(taskID);
    return deletedTask;
  }

  async updateTask(taskID: string, createTaskDTO: CreateTaskDTO) {
    const updatedTask = await this.taskModel.findByIdAndUpdate(
      taskID,
      createTaskDTO,
      { new: true },
    );
    return updatedTask;
  }
}
