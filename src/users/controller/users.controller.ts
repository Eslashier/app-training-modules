import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Put
} from '@nestjs/common';
import { UserPatchDto } from '../dto/user-patch.dto';
import { UserDto } from '../dto/user.dto';
import { User } from '../entities/user.entity';
import { UsersService } from '../services/users.service';

@Controller('users')
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
    addUser(@Body() body: User): User {
        return this.usersService.addUser(body);
    }

    @Put(`/:uuid`)
    // eslint-disable-next-line prettier/prettier
    putUser(@Param('uuid') uuid: string, @Body() body: UserDto): User | undefined{
        return this.usersService.putUser(uuid, body);
    }

    @Patch(`/:uuid`)
    // eslint-disable-next-line prettier/prettier
    patchUser(@Param('uuid') uuid: string, @Body() body: UserDto | UserPatchDto): User | undefined{
        return this.usersService.patchUser(uuid, body);
    }

    @Delete(`/:uuid`)
    deleteUser(@Param('uuid') uuid: string) {
        return this.usersService.deleteUser(uuid);
    }
}
