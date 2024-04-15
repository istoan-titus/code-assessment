import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers['authorization'];
    console.log(token);
    if (token) {
      return this.authService
        .validateToken(token.split(' ')[1])
        .then((user) => {
          if (user) {
            request.user = user;
            return true;
          }
          return false;
        });
    } else {
      const { username, password } = request.body;
      return this.authService.validateUser(username, password).then((user) => {
        if (user) {
          request.user = user;
          return true;
        }
        return false;
      });
    }
  }
}
