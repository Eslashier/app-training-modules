import { IsEmail, IsOptional, IsString, IsUUID } from 'class-validator';
import { UserInterface } from '../entities/user.interface';
import { v4 as uuid } from 'uuid';

export class UserDto implements UserInterface {
    @IsUUID()
    uuid: string;
    @IsString()
    name: string;
    @IsString()
    @IsOptional()
    lastName?: string;
    @IsEmail()
    email: string;

    constructor(data: UserInterface) {
        this.uuid = data.uuid ?? uuid();
        this.name = data.name;
        if (this.lastName) {
            this.lastName = data.lastName;
        }
        this.email = data.email;
    }
}
