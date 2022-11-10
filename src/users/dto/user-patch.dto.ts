import { IsEmail, IsOptional, IsString } from 'class-validator';
import { UserInterfacePatch } from '../interfaces/user.interface-patch';

export class UserDtoPatch implements UserInterfacePatch {
    @IsString({
        message: 'Nombre debe ser de tipo string'
    })
    @IsOptional()
    nombre?: string;
    @IsOptional()
    @IsString({
        message: 'Apellidos debe ser de tipo string'
    })
    apellidos?: string;
    @IsOptional()
    @IsEmail({
        message: 'Correo debe de tener la forma ejemplo@dominio.com'
    })
    correo?: string;
}
