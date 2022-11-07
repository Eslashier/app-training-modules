import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskPatchDto } from '../dto/task-patch.dto';
import { TaskDto } from '../dto/task.dto';
import { Task } from '../entities/task.entity';

@Injectable()
export class TasksService {
    private tasks: Task[] = [
        {
            uuid: '100',
            usuarioUuid: '1',
            tarea: 'Tarea 1'
        },
        {
            uuid: '200',
            usuarioUuid: '2',
            tarea: 'Tarea 2'
        },
        {
            uuid: '300',
            usuarioUuid: '3',
            tarea: 'Tarea 3'
        }
    ];

    getMessage(): string {
        return 'Hola desde el servicio de Tasks';
    }

    getTasks(): Task[] {
        return this.tasks;
    }

    getTask(uuid: string): Task | undefined {
        if (this.tasks.find((task) => task.uuid === uuid)) {
            return this.tasks.find((task) => task.uuid === uuid);
        }
        throw new NotFoundException('Task not found');
    }

    addTask(task: TaskDto): Task {
        let taskToCreate = new Task();
        const uuid = Math.floor(Math.random() * 10000000).toString();
        taskToCreate = { uuid, ...task };
        this.tasks = [...this.tasks, taskToCreate];
        return taskToCreate;
    }

    putTask(uuid: string, task: TaskDto): Task | undefined {
        if (this.tasks.find((task) => task.uuid === uuid)) {
            const index = this.tasks.findIndex((task) => task.uuid === uuid);
            let taskToUpdate = new Task();
            taskToUpdate = { uuid, ...task };
            this.tasks[index] = taskToUpdate;
            return this.tasks[index];
        }
        throw new NotFoundException('Task not found');
    }

    patchTask(uuid: string, task: TaskPatchDto): Task {
        if (this.tasks.find((task) => task.uuid === uuid)) {
            const index = this.tasks.findIndex((task) => task.uuid === uuid);
            const taskToUpdate = { ...this.tasks[index], ...task };
            this.tasks[index] = taskToUpdate;
            return this.tasks[index];
        }
        throw new NotFoundException('Task not found');
    }

    deleteTask(uuid: string): boolean {
        if (this.tasks.find((task) => task.uuid === uuid)) {
            const index = this.tasks.findIndex((task) => task.uuid === uuid);
            this.tasks.splice(index, 1);
            return true;
        }
        throw new NotFoundException('Task not found');
    }
}
