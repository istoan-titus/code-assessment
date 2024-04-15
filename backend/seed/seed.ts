import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.invoice.deleteMany();

  await prisma.user.deleteMany();
  const testUser = await prisma.user.create({
    data: {
      name: 'user',
      email: 'test@example.com',
      password: 'password',
    },
  });

  // Create invoices
  await prisma.invoice.createMany({
    data: [
      {
        vendorName: 'Company A',
        amount: 100.0,
        dueDate: new Date('2024-05-15'),
        description: 'Product Purchase',
        userId: testUser.id,
        paid: false,
      },
      {
        vendorName: 'Company B',
        amount: 200.0,
        dueDate: new Date('2024-05-20'),
        description: 'Service Payment',
        userId: testUser.id,
        paid: true,
      },
      {
        vendorName: 'Company C',
        amount: 150.0,
        dueDate: new Date('2024-05-25'),
        description: 'Consulting Fee',
        userId: testUser.id,
        paid: false,
      },
      {
        vendorName: 'Company D',
        amount: 300.0,
        dueDate: new Date('2024-05-30'),
        description: 'Equipment Rental',
        userId: testUser.id,
        paid: false,
      },
      {
        vendorName: 'Company E',
        amount: 250.0,
        dueDate: new Date('2024-06-05'),
        description: 'Maintenance Service',
        userId: testUser.id,
        paid: false,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
