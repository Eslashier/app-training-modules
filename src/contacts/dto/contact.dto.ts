import { IsString, IsInt, IsEmail } from 'class-validator';

export class ContactDto {
    @IsString()
    usuarioUuid: string;
    @IsString()
    nombre: string;
    @IsString()
    apellidos?: string;
    @IsInt()
    telefono: number;
    @IsEmail()
    correo: string;
}
