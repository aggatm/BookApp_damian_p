import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { PrismaModule } from 'src/infrastructure/db/prisma/prisma.module';

@Module({
  imports: [PrismaModule, BooksModule],
})
export class AppModule {}
