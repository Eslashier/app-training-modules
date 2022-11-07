import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Put
} from '@nestjs/common';
import { TaskPatchDto } from '../dto/task-patch.dto';
import { TaskDto } from '../dto/task.dto';
import { Task } from '../entities/task.entity';
import { TasksService } from '../services/tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get('message')
    getMessage(): string {
        return this.tasksService.getMessage();
    }

    @Get()
    getTasks(): Task[] {
        return this.tasksService.getTasks();
    }

    @Get(`/:uuid`)
    getTask(@Param('uuid') uuid: string): Task | undefined {
        return this.tasksService.getTask(uuid);
    }

    @Post()
    addTask(@Body() body: Task): Task {
        return this.tasksService.addTask(body);
    }

    @Put(`/:uuid`)
    // eslint-disable-next-line prettier/prettier
    putTask(@Param('uuid') uuid: string, @Body() body: TaskDto): Task | undefined{
        return this.tasksService.putTask(uuid, body);
    }

    @Patch(`/:uuid`)
    // eslint-disable-next-line prettier/prettier
    patchTask(@Param('uuid') uuid: string, @Body() body: TaskDto | TaskPatchDto): Task | undefined{
        return this.tasksService.patchTask(uuid, body);
    }

    @Delete(`/:uuid`)
    deleteTask(@Param('uuid') uuid: string) {
        return this.tasksService.deleteTask(uuid);
    }
}
