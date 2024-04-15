import { Injectable } from '@nestjs/common';
import { Invoice } from '@prisma/client';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class InvoiceService {
  constructor(private readonly prisma: PrismaClient) {}

  async generateDummyInvoices(): Promise<void> {
    await this.prisma.invoice.createMany({
      data: [
        {
          vendorName: 'Vendor 1',
          amount: 100,
          dueDate: new Date('2024-04-15'),
          description: 'Dummy Invoice 1',
          userId: 1,
          paid: false,
        },
        {
          vendorName: 'Vendor 2',
          amount: 200,
          dueDate: new Date('2024-04-20'),
          description: 'Dummy Invoice 2',
          userId: 1,
          paid: false,
        },
      ],
    });
  }

  async findAll(): Promise<Invoice[]> {
    return this.prisma.invoice.findMany();
  }

  async findOne(id: string): Promise<Invoice | null> {
    const numericId = parseInt(id, 10);
    return this.prisma.invoice.findUnique({ where: { id: numericId } });
  }

  async getTotal(): Promise<number> {
    const invoices = await this.prisma.invoice.findMany();
    return invoices.reduce(
      (total, invoice) => total + Number(invoice.amount.toString()),
      0,
    );
  }
}
