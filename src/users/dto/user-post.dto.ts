import { IsEmail, IsOptional, IsString } from 'class-validator';
import { UserInterfacePost } from '../interfaces/user.interface-post';

export class UserDtoPatch implements UserInterfacePost {
    @IsString()
    name: string;
    @IsString()
    @IsOptional()
    lastName?: string;
    @IsEmail()
    email: string;
}
