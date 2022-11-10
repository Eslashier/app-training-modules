import { IsEmail, IsOptional, IsString } from 'class-validator';
import { UserInterfacePatch } from '../interfaces/user.interface-patch';

export class UserDtoPut implements UserInterfacePatch {
    @IsString()
    @IsOptional()
    nombre: string;

    @IsOptional()
    @IsString({
        message: 'The field `lastname` must be of type string'
    })
    apellidos?: string;
    @IsEmail()
    @IsOptional()
    correo: string;
}
