import { IsString, IsEmail, Length } from 'class-validator';

export class TaskDto {
    @Length(2, 20)
    @IsString()
    nombre: string;

    @Length(2, 20)
    @IsString()
    apellido?: string;

    @IsEmail()
    @IsString()
    email: string;
}
