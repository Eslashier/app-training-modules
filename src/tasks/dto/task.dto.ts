import { IsString, Length } from 'class-validator';

export class TaskDto {
    @IsString()
    usuarioUuid?: string;

    @Length(2, 100)
    @IsString()
    tarea: string;
}
