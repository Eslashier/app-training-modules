import { IsEmail, IsOptional, IsString, IsUUID } from 'class-validator';
import { UserInterface } from '../interfaces/user.interface';

export class UserDto implements UserInterface {
    @IsUUID()
    uuid?: string;
    @IsString()
    nombre: string;
    @IsString()
    @IsOptional()
    apellidos?: string;
    @IsEmail()
    correo: string;
}
