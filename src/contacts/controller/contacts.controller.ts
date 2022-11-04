import { Controller, Get } from '@nestjs/common';
import { ContactsService } from '../services/contacts.service';

@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) {}

  @Get('message')
  getMessage(): string {
    return this.contactsService.getMessage();
  }
}
