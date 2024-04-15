import {
  IsNotEmpty,
  IsNumber,
  IsDateString,
  IsBoolean,
  IsDecimal,
} from 'class-validator';

export class InvoiceDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  vendorName: string;

  @IsDecimal()
  @IsNotEmpty()
  amount: number;

  @IsDateString()
  @IsNotEmpty()
  dueDate: Date;

  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @IsBoolean()
  @IsNotEmpty()
  paid: boolean;
}
