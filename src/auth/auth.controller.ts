import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthDTO } from './authDTO';

@Controller('auth')
export class AuthController {
	@Post('sigup')
	async signUp(@Body() dto: AuthDTO) {}

	@HttpCode(200)
	@Post('login')
	async login(@Body() dto: AuthDTO) {}
}
