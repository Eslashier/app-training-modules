import { PartialType } from '@nestjs/mapped-types';
import { TaskDto } from './task.dto';

export class ContactPatchDto extends PartialType(TaskDto) {}
