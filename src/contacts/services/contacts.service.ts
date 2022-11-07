import { Injectable, NotFoundException } from '@nestjs/common';
import { Contact } from '../entities/contact.entity';
import { ContactDto } from '../dto/contact.dto';
import { ContactPatchDto } from '../dto/contact-patch.dto';

@Injectable()
export class ContactsService {
    private contacts: Contact[] = [
        {
            uuid: '1',
            usuarioUuid: '30',
            tarea: 'Tarea de prueba'
        },
        {
            uuid: '2',
            usuarioUuid: '20',
            tarea: 'Tarea de prueba 2'
        },
        {
            uuid: '3',
            usuarioUuid: '50',
            tarea: 'Tarea de prueba 3'
        }
    ];

    getMessage(): string {
        return 'Hola desde el servicio de Contacts';
    }

    getContacts(): Contact[] {
        return this.contacts;
    }

    getContact(uuid: string): Contact | undefined {
        if (this.contacts.find((contact) => contact.uuid === uuid)) {
            return this.contacts.find((contact) => contact.uuid === uuid);
        }
        throw new NotFoundException('Contact not found');
    }

    addContact(contact: ContactDto): Contact {
        let contactToCreate = new Contact();
        const uuid = Math.floor(Math.random() * 10000000).toString();
        contactToCreate = { uuid, ...contact };
        this.contacts = [...this.contacts, contactToCreate];
        return contactToCreate;
    }

    putContact(uuid: string, contact: ContactDto): Contact | undefined {
        if (this.contacts.find((contact) => contact.uuid === uuid)) {
            const index = this.contacts.findIndex(
                (contact) => contact.uuid === uuid
            );
            let contactToUpdate = new Contact();
            contactToUpdate = { uuid, ...contact };
            this.contacts[index] = contactToUpdate;
            return this.contacts[index];
        }
        throw new NotFoundException('Contact not found');
    }

    patchContact(uuid: string, contact: ContactDto | ContactPatchDto): Contact {
        if (this.contacts.find((contact) => contact.uuid === uuid)) {
            const index = this.contacts.findIndex(
                (contact) => contact.uuid === uuid
            );
            const contactToUpdate = { ...this.contacts[index], ...contact };
            this.contacts[index] = contactToUpdate;
            return this.contacts[index];
        }
        throw new NotFoundException('Contact not found');
    }

    deleteContact(uuid: string): boolean {
        if (this.contacts.find((contact) => contact.uuid === uuid)) {
            // eslint-disable-next-line prettier/prettier
            const index = this.contacts.findIndex((contact) => contact.uuid === uuid);
            this.contacts.splice(index, 1);
            return true;
        }
        throw new NotFoundException('Contact not found');
    }
}
