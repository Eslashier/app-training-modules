import { IsEmail, IsOptional, IsString, Length } from 'class-validator';

export class UserDto {
    @IsString()
    @Length(2, 50)
    nombre: string;

    @IsString()
    @Length(2, 50)
    @IsOptional()
    apellidos?: string;

    @IsEmail()
    correo: string;
}
