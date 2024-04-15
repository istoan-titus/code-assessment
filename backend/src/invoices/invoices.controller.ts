import { Controller, Get, Param, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { InvoiceService } from './invoices.service';
import { InvoiceDto } from './dto/invoice.dto'; // Import the DTO
import { Response } from 'express';

@Controller('invoices')
export class InvoicesController {
  constructor(private readonly invoiceService: InvoiceService) {}
  @Get('/findAll')
  @UseGuards(AuthGuard)
  async findAll(@Res() res: Response): Promise<void> {
    const invoices = await this.invoiceService.findAll();
    const formattedInvoices = invoices.map((invoice) => ({
      id: invoice.id,
      vendorName: invoice.vendorName,
      amount: Number(invoice.amount.toString()),
      dueDate: invoice.dueDate,
      description: invoice.description,
      userId: invoice.userId,
      paid: invoice.paid,
    }));
    console.log(formattedInvoices);
    res.json(formattedInvoices); // Send JSON response
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  async findOne(@Param('id') id: string): Promise<InvoiceDto> {
    console.log(id);
    const invoice = await this.invoiceService.findOne(id);
    return {
      id: invoice.id,
      vendorName: invoice.vendorName,
      amount: Number(invoice.amount.toString()),
      dueDate: invoice.dueDate,
      description: invoice.description,
      userId: invoice.userId,
      paid: invoice.paid,
    };
  }

  @Get('total')
  @UseGuards(AuthGuard)
  async getTotal(): Promise<number> {
    return this.invoiceService.getTotal();
  }
}
