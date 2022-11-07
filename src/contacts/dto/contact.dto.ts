import { IsString } from 'class-validator';

export class ContactDto {
    @IsString()
    usuarioUuid: string;
    @IsString()
    tarea?: string;
}
