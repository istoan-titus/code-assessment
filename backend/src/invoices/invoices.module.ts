import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { InvoiceService } from './invoices.service';
import { InvoicesController } from './invoices.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [InvoicesController],
  providers: [InvoiceService],
})
export class InvoicesModule {}
