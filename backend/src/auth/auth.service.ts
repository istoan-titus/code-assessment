import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  private readonly secretKey = 'secret_secret_key';

  async validateToken(token: string): Promise<any> {
    try {
      const decodedToken = jwt.verify(token, this.secretKey);

      const { userId, username } = decodedToken;

      return { userId, username };
    } catch (error) {
      return null;
    }
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (user && user.password === password) {
      const token = jwt.sign(
        { email: user.email, userId: user.id },
        'secret_secret_key',
        { expiresIn: '2h' },
      );

      return { token, user };
    }
    return null;
  }
}
