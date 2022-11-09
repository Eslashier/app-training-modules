import { IsEmail, IsOptional, IsString, IsUUID } from 'class-validator';
import { UserInterface } from '../interfaces/user.interface';
import { v4 as uuid } from 'uuid';

export class UserDtoPatch implements UserInterface {
    @IsUUID()
    @IsOptional()
    uuid: string;
    @IsString()
    @IsOptional()
    name: string;
    @IsString()
    @IsOptional()
    lastName?: string;
    @IsEmail()
    @IsOptional()
    email: string;

    constructor(data: UserInterface) {
        this.uuid = data.uuid ?? undefined;
        this.name = data.name ?? undefined;
        this.name = data.name ?? undefined;
        this.email = data.email ?? undefined;
    }
}
