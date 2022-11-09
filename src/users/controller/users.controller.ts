import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Put,
    ValidationPipe
} from '@nestjs/common';
import { UserPatchDto } from '../dto/user-patch.dto';
import { UserDto } from '../dto/user.dto';
import { User } from '../entities/user.interface';
import { UsersService } from '../services/users.service';

@Controller('user')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get('message')
    getMessage(): string {
        return this.usersService.getMessage();
    }

    @Get()
    getUsers(): User[] {
        return this.usersService.getUsers();
    }

    @Get(`/:uuid`)
    getUser(@Param('uuid') uuid: string): User | undefined {
        return this.usersService.getUser(uuid);
    }

    @Post()
    // eslint-disable-next-line prettier/prettier
    addUser(@Body(new ValidationPipe({whitelist: true, forbidNonWhitelisted:true})) body: UserDto): User {
        return this.usersService.addUser(body);
    }

    @Put(`/:uuid`)
    // eslint-disable-next-line prettier/prettier
    putUser(@Param('uuid') uuid: string, @Body(new ValidationPipe({whitelist: true, forbidNonWhitelisted:true})) body: UserDto): User | undefined{
        return this.usersService.putUser(uuid, body);
    }

    @Patch(`/:uuid`)
    // eslint-disable-next-line prettier/prettier
    patchUser(@Param('uuid') uuid: string, @Body(new ValidationPipe({whitelist: true, forbidNonWhitelisted:true})) body: UserPatchDto): User | undefined{
        return this.usersService.patchUser(uuid, body);
    }

    @Delete(`/:uuid`)
    deleteUser(@Param('uuid') uuid: string) {
        return this.usersService.deleteUser(uuid);
    }
}
