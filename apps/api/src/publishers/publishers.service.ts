import { Inject, Injectable } from '@nestjs/common';
import { CreatePublisherInput } from './dto/create-publisher.input';
import { UpdatePublisherInput } from './dto/update-publisher.input';
import { ENHANCED_PRISMA } from '@zenstackhq/server/nestjs';
import { PrismaService } from '../common/database/prisma.service';

@Injectable()
export class PublishersService {
  constructor(
    @Inject(ENHANCED_PRISMA) private readonly prisma: PrismaService,
  ) {}
  create(createPublisherInput: CreatePublisherInput) {
    return this.prisma.publisher.create({ data: createPublisherInput });
  }

  findAll() {
    return this.prisma.publisher.findMany({ where: { deleted: false } });
  }

  findOne(id: string) {
    return this.prisma.publisher.findUnique({ where: { id, deleted: false } });
  }

  update(id: string, updatePublisherInput: UpdatePublisherInput) {
    return this.prisma.publisher.update({
      where: { id, deleted: false },
      data: updatePublisherInput,
    });
  }

  remove(id: string) {
    return this.prisma.publisher.update({
      where: { id, deleted: false },
      data: {
        deleted: true,
      },
    });
  }
}
