import { IsEmail, IsOptional, IsString } from 'class-validator';
import { UserInterfacePatch } from '../interfaces/user.interface-patch';

export class UserDtoPut implements UserInterfacePatch {
    @IsString()
    @IsOptional()
    nombre: string;
    @IsString()
    @IsOptional()
    apellidos?: string;
    @IsEmail()
    @IsOptional()
    correo: string;
}
