import { IsEmail, IsOptional, IsString } from 'class-validator';
import { UserInterfacePatch } from '../interfaces/user.interface-patch';

export class UserDtoPatch implements UserInterfacePatch {
    @IsString()
    @IsOptional()
    name?: string;
    @IsString()
    @IsOptional()
    lastName?: string;
    @IsEmail()
    @IsOptional()
    email?: string;
}
