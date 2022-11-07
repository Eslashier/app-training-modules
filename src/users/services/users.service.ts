import { Injectable, NotFoundException } from '@nestjs/common';
import { UserPatchDto } from '../dto/user-patch.dto';
import { UserDto } from '../dto/user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            uuid: '1',
            nombre: 'Galileo',
            apellidos: 'Galilei',
            correo: 'galileo@galilei.com'
        },
        {
            uuid: '2',
            nombre: 'Robert',
            apellidos: 'Hooke',
            correo: 'robert@gmail.com'
        },
        {
            uuid: '3',
            nombre: 'Galileo',
            apellidos: 'Galilei',
            correo: 'galileo@galilei.com'
        }
    ];

    getMessage(): string {
        return 'Hola desde el servicio de Users';
    }

    getUsers(): User[] {
        return this.users;
    }

    getUser(uuid: string): User | undefined {
        if (this.users.find((user) => user.uuid === uuid)) {
            return this.users.find((user) => user.uuid === uuid);
        }
        throw new NotFoundException('User not found');
    }

    addUser(user: UserDto): User {
        let userToCreate = new User();
        const uuid = Math.floor(Math.random() * 10000000).toString();
        userToCreate = { uuid, ...user };
        this.users = [...this.users, userToCreate];
        return userToCreate;
    }

    putUser(uuid: string, user: UserDto): User | undefined {
        if (this.users.find((user) => user.uuid === uuid)) {
            const index = this.users.findIndex((user) => user.uuid === uuid);
            let userToUpdate = new User();
            userToUpdate = { uuid, ...user };
            this.users[index] = userToUpdate;
            return this.users[index];
        }
        throw new NotFoundException('User not found');
    }

    patchUser(uuid: string, user: UserPatchDto): User {
        if (this.users.find((user) => user.uuid === uuid)) {
            const index = this.users.findIndex((user) => user.uuid === uuid);
            const userToUpdate = { ...this.users[index], ...user };
            this.users[index] = userToUpdate;
            return this.users[index];
        }
        throw new NotFoundException('User not found');
    }

    deleteUser(uuid: string): boolean {
        if (this.users.find((user) => user.uuid === uuid)) {
            // eslint-disable-next-line prettier/prettier
            const index = this.users.findIndex((user) => user.uuid === uuid);
            this.users.splice(index, 1);
            return true;
        }
        throw new NotFoundException('User not found');
    }
}
