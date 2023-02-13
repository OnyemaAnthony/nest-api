import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  signIn(@Body() dto: AuthDto) {
    console.log(dto.email);
    return this.authService.signIn();
  }

  @Post('signup')
  signUp() {
    return this.authService.signUp();
  }
}
