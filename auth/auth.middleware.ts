import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
//import { UserService } from 'src/user/user.service';
import * as jwt from 'jsonwebtoken';
import { SECRET } from 'src/config';
import { Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  //constructor(private readonly userService: UserService) {}

  // async use(req: Request, res: Response, next: () => void) {
  //   const authHeaders = req.headers.authorization;

  //   if (authHeaders && (authHeaders as string).split(' ')[1]) {
  //     const token = (authHeaders as string).split(' ')[1];
  //     const decoded: any = jwt.verify(token, SECRET);
  //     const user = await this.userService.findById(decoded.id);

  //     if (!user) {
  //       throw new HttpException('User not found.', HttpStatus.UNAUTHORIZED);
  //     }

  //     req.body.user = user.user;
  //     next();
  //   } else {
  //     throw new HttpException('Not authorized.', HttpStatus.UNAUTHORIZED);
  //   }
  // }
  async use(req: Request, res: Response, next: () => void) {
    next();
  }
}
