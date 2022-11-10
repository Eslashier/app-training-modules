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

import { UsersService } from '../services/users.service';
import { UserDto } from '../dto/user.dto';
import { UserDtoPut } from '../dto/user-put.dto';
import { UserDtoPatch } from '../dto/user-patch.dto';

@Controller('user')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get('message')
    getMessage(): string {
        return this.usersService.getMessage();
    }

    @Get()
    getUsers(): UserDto[] {
        return this.usersService.getUsers();
    }

    @Get(`/:uuid`)
    getUser(@Param('uuid') uuid: string): UserDto | undefined {
        return this.usersService.getUser(uuid);
    }

    @Post()
    // eslint-disable-next-line prettier/prettier
    addUser(@Body() body: UserDtoPut): UserDto {
        return this.usersService.addUser(body);
    }

    @Put(`/:uuid`)
    // eslint-disable-next-line prettier/prettier
    putUser(@Param('uuid') uuid: string, @Body() body: UserDtoPut): UserDto | undefined{
        return this.usersService.putUser(uuid, body);
    }

    @Patch(`/:uuid`)
    // eslint-disable-next-line prettier/prettier
    patchUser(@Param('uuid') uuid: string, @Body() body: UserDtoPatch): UserDto | undefined{
        return this.usersService.patchUser(uuid, body);
    }

    @Delete(`/:uuid`)
    deleteUser(@Param('uuid') uuid: string) {
        return this.usersService.deleteUser(uuid);
    }
}
