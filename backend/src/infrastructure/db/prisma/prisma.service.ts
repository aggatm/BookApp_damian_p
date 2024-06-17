import {
  Injectable,
  Logger,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private readonly logger = new Logger(PrismaService.name);

  async onModuleInit() {
    try {
      await this.$connect();

      this.logger.log('Database connected');
    } catch (error) {
      console.log(error);
      this.logger.error('Database connection error');
    }
  }
  async onModuleDestroy() {
    await this.$disconnect();

    this.logger.log('Database disconnected');
  }
}
