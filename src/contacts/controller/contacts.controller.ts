import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { Contact } from '../entities/contact.entity';
import { ContactsService } from '../services/contacts.service';
import { ContactDto } from '../dto/contact.dto';
import { ContactPatchDto } from '../dto/contact-patch.dto';

@Controller('contact')
export class ContactsController {
    constructor(private contactsService: ContactsService) {}

    @Get('message')
    getMessage(): string {
        return this.contactsService.getMessage();
    }

    @Get()
    getContacts(): Contact[] {
        return this.contactsService.getContacts();
    }

    @Get(`/:uuid`)
    getContact(@Param('uuid') uuid: string): Contact | undefined {
        return this.contactsService.getContact(uuid);
    }

    @Post()
    addContact(@Body() body: Contact): Contact {
        return this.contactsService.addContact(body);
    }

    @Put(`/:uuid`)
    // eslint-disable-next-line prettier/prettier
    putContact(@Param('uuid') uuid: string, @Body() body: ContactDto): Contact | undefined{
        return this.contactsService.putContact(uuid, body);
    }

    @Patch(`/:uuid`)
    // eslint-disable-next-line prettier/prettier
    patchContact(@Param('uuid') uuid: string, @Body() body: ContactDto | ContactPatchDto): Contact | undefined{
        return this.contactsService.patchContact(uuid, body);
    }

    @Delete(`/:uuid`)
    deleteContact(@Param('uuid') uuid: string) {
        return this.contactsService.deleteContact(uuid);
    }
}
