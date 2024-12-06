import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {

  private data = [{
    "title": "Proyecto de TI",
    "priority": " ",
    "description": "TEST",
    "status": " ",
    "activity": " ",
  },
  {
    "title": "Solicitar Beca",
    "priority": " ",
    "description": "TEST",
    "status": ' ',
    "activity": " ",
  }]

  


  create(createTaskDto: CreateTaskDto) {
    return 'This action adds a new task';
  }

  findAll() {
    return this.data;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
