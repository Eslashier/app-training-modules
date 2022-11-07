import { IsOptional, IsString, Length, Max } from 'class-validator';

export class TaskDto {
    @IsString()
    @Max(10)
    @IsOptional()
    usuarioUuid?: string;

    @Length(2, 100)
    @IsString()
    tarea: string;
}
