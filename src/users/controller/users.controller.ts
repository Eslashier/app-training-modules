import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Put,
    UseGuards,
    UseInterceptors
} from '@nestjs/common';

import { UsersService } from '../services/users.service';
import { UserDto } from '../dto/user.dto';
import { UserDtoPut } from '../dto/user-put.dto';
import { UserDtoPatch } from '../dto/user-patch.dto';
import { AuthorizationGuard } from '../guard/authorization.guard';
import { NullLastnameInterceptor } from '../interceptor/nullLastname.inteceptor';

@Controller('user')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get('message')
    @UseInterceptors(NullLastnameInterceptor)
    getMessage(): string {
        return this.usersService.getMessage();
    }

    @Get()
    @UseInterceptors(NullLastnameInterceptor)
    getUsers(): UserDto[] {
        return this.usersService.getUsers();
    }

    @Get(`/:uuid`)
    @UseInterceptors(NullLastnameInterceptor)
    getUser(@Param('uuid') uuid: string): UserDto | undefined {
        return this.usersService.getUser(uuid);
    }

    @Post()
    @UseInterceptors(NullLastnameInterceptor)
    @UseGuards(AuthorizationGuard)
    // eslint-disable-next-line prettier/prettier
    addUser(@Body() body: UserDtoPut): UserDto {
        return this.usersService.addUser(body);
    }

    @Put(`/:uuid`)
    @UseInterceptors(NullLastnameInterceptor)
    @UseGuards(AuthorizationGuard)
    // eslint-disable-next-line prettier/prettier
    putUser(@Param('uuid') uuid: string, @Body() body: UserDtoPut): UserDto | undefined{
        return this.usersService.putUser(uuid, body);
    }

    @Patch(`/:uuid`)
    @UseInterceptors(NullLastnameInterceptor)
    @UseGuards(AuthorizationGuard)
    // eslint-disable-next-line prettier/prettier
    patchUser(@Param('uuid') uuid: string, @Body() body: UserDtoPatch): UserDto | undefined{
        return this.usersService.patchUser(uuid, body);
    }

    @Delete(`/:uuid`)
    @UseGuards(AuthorizationGuard)
    deleteUser(@Param('uuid') uuid: string) {
        return this.usersService.deleteUser(uuid);
    }
}
