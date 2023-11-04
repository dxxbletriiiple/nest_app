import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Patch,
	Post,
} from '@nestjs/common';
import { ProductModel } from 'src/product/product.model/product.model';
import { FindProductDTO } from 'src/product/productDTO';

@Controller('top-page')
export class TopPageController {
	@Post('create')
	async create(@Body() dto: Omit<ProductModel, 'id'>) {}

	@Get(':id')
	async get(@Param('id') id: string) {}

	@Delete(':id')
	async delete(@Param('id') id: string) {}

	@Patch(':id')
	async patch(@Param('id') id: string, @Body() dto: ProductModel) {}

	@HttpCode(200)
	@Post()
	async find(@Body() dto: FindProductDTO) {}
}
