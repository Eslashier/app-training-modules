import { IsEmail, IsOptional, IsString, IsUUID } from 'class-validator';
import { UserInterface } from '../interfaces/user.interface';

export class UserDto implements UserInterface {
    @IsUUID()
    uuid?: string;
    @IsString({
        message: 'Nombre debe ser de tipo string'
    })
    nombre: string;
    @IsOptional()
    @IsString({
        message: 'Apellidos debe ser de tipo string'
    })
    apellidos?: string;
    @IsEmail({
        message: 'Correo debe de tener la forma ejemplo@dominio.com'
    })
    correo: string;
}
