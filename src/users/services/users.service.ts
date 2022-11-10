import { Injectable, NotFoundException } from '@nestjs/common';
import { UserDtoPatch } from '../dto/user-patch.dto';
import { UserDtoPut } from '../dto/user-put.dto';
import { UserDto } from '../dto/user.dto';
import { v4 as uuid } from 'uuid';

function userExist(userId: string, users: UserDto[]): boolean {
    if (users.find((user) => user.uuid === userId)) {
        return true;
    }
    return false;
}

@Injectable()
export class UsersService {
    private users: UserDto[] = [
        {
            uuid: uuid(),
            nombre: 'Galileo',
            apellidos: 'Galilei',
            correo: 'galileo@galilei.com'
        },
        {
            uuid: uuid(),
            nombre: 'Robert',
            apellidos: 'Hooke',
            correo: 'robert@gmail.com'
        },
        {
            uuid: uuid(),
            nombre: 'Galileo',
            apellidos: 'Galilei',
            correo: 'galileo@galilei.com'
        }
    ];

    getMessage(): string {
        return 'Hola desde el servicio de Users';
    }

    getUsers(): UserDto[] {
        return this.users;
    }

    getUser(uuid: string): UserDto | undefined {
        if (userExist(uuid, this.users)) {
            return this.users.find((user) => user.uuid === uuid);
        }
        throw new NotFoundException('User not found');
    }

    addUser(user: UserDtoPut): UserDto {
        let createUser = new UserDto();
        createUser.uuid = uuid();
        createUser = { ...createUser, ...user };
        this.users = [...this.users, createUser];
        return createUser;
    }

    putUser(uuid: string, user: UserDtoPut): UserDto | undefined {
        if (userExist(uuid, this.users)) {
            const index = this.users.findIndex((user) => user.uuid === uuid);
            this.users[index] = { ...this.users[index], ...user };
            return this.users[index];
        }
        throw new NotFoundException('User not found');
    }

    patchUser(uuid: string, user: UserDtoPatch): UserDto | undefined {
        if (userExist(uuid, this.users)) {
            const index = this.users.findIndex((user) => user.uuid === uuid);
            this.users[index] = { ...this.users[index], ...user };
            return this.users[index];
        }
        throw new NotFoundException('User not found');
    }

    deleteUser(uuid: string): boolean {
        if (userExist(uuid, this.users)) {
            // eslint-disable-next-line prettier/prettier
            const index = this.users.findIndex((user) => user.uuid === uuid);
            this.users.splice(index, 1);
            return true;
        }
        throw new NotFoundException('User not found');
    }
}
