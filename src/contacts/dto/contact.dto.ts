import { IsString, IsInt, IsEmail, IsOptional, Length } from 'class-validator';

export class ContactDto {
    @IsString()
    @Length(0, 10)
    usuarioUuid: string;
    @IsString()
    @Length(2, 50)
    nombre: string;
    @IsOptional()
    @IsString()
    @Length(2, 50)
    apellidos?: string;
    @IsInt()
    telefono: number;
    @IsEmail()
    correo: string;
}
