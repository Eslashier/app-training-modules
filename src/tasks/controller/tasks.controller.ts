import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Put,
    ValidationPipe
} from '@nestjs/common';
import { TaskPatchDto } from '../dto/task-patch.dto';
import { TaskDto } from '../dto/task.dto';
import { Task } from '../entities/task.entity';
import { TasksService } from '../services/tasks.service';

@Controller('task')
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
    // eslint-disable-next-line prettier/prettier
    addTask(@Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))body: TaskDto): Task {
        return this.tasksService.addTask(body);
    }

    @Put(`/:uuid`)
    // eslint-disable-next-line prettier/prettier
    putTask(@Param('uuid') uuid: string, @Body(new ValidationPipe({whitelist: true, forbidNonWhitelisted:true})) body: TaskDto): Task | undefined{
        return this.tasksService.putTask(uuid, body);
    }

    @Patch(`/:uuid`)
    // eslint-disable-next-line prettier/prettier
    patchTask(@Param('uuid') uuid: string, @Body() body: TaskPatchDto): Task | undefined{
        return this.tasksService.patchTask(uuid, body);
    }

    @Delete(`/:uuid`)
    deleteTask(@Param('uuid') uuid: string) {
        return this.tasksService.deleteTask(uuid);
    }
}
