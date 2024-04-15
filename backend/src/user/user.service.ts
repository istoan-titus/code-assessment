import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaClient) {
    prisma = new PrismaClient();
  }

  async findByEmail(email: string): Promise<User | null> {
    if (!email) {
      throw new Error('Email parameter is required');
    }
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async generateTestUser(): Promise<void> {
    await this.prisma.user.create({
      data: {
        email: 'test@example.com',
        password: 'password',
        name: 'User',
      },
    });
  }
}
