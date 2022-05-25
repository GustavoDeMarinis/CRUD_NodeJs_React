import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Res,
  Body,
  HttpStatus,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { TaskService } from './task.service';

import { CreateTaskDTO } from './dto/task.dto';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Post('/create')
  async createTask(@Res() res, @Body() createTaskDTO: CreateTaskDTO) {
    const task = await this.taskService.createTask(createTaskDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Task Created',
      task,
    });
  }

  @Get('/')
  async getTasks(@Res() res) {
    const tasks = await this.taskService.getTasks();

    return res.status(HttpStatus.OK).json({
      message: 'Request Succesfully',
      tasks,
    });
  }

  @Get('/:taskID')
  async getTask(@Res() res, @Param('taskID') taskID: string) {
    const task = await this.taskService.getTask(taskID);

    if (!task) throw new NotFoundException('Task does not exist');

    return res.status(HttpStatus.OK).json({
      message: 'Request Succesfully',
      task,
    });
  }

  @Delete('/delete/:taskID')
  async deleteTask(@Res() res, @Param('taskID') taskID: string) {
    const task = await this.taskService.deleteTask(taskID);

    if (!task) throw new NotFoundException('Task does not exist');

    return res.status(HttpStatus.OK).json({
      message: 'Task deleted succesfully',
      task,
    });
  }

  @Put('/update/:taskID')
  async updateTask(
    @Res() res,
    @Body() createTaskDTO: CreateTaskDTO,
    @Param('taskID') taskID: string,
  ) {
    const updatedTask = await this.taskService.updateTask(
      taskID,
      createTaskDTO,
    );

    if (!updatedTask) throw new NotFoundException('Task does not exist');

    return res.status(HttpStatus.OK).json({
      message: 'Task updated succesfully',
      updatedTask,
    });
  }
}
