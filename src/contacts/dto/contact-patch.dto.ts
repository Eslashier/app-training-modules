import { PartialType } from '@nestjs/mapped-types';
import { ContactDto } from './contact.dto';

export class ContactPatchDto extends PartialType(ContactDto) {}
