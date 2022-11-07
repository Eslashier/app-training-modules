import { IsEmail, IsString, Length } from 'class-validator';

export class UserDto {
    @IsString()
    @Length(2, 50)
    nombre: string;

    @IsString()
    @Length(2, 50)
    apellidos?: string;

    @IsEmail()
    correo: string;
}
