import { Test } from '@nestjs/testing';
//import { INestApplication } from '@nestjs/common';
import { Types, disconnect } from 'mongoose';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
//import { CreateReviewDTO } from 'src/review/reviewDTO';
import { writeFile } from 'fs';

const productId = new Types.ObjectId().toHexString();

const testDTO = {
	name: 'Test',
	title: 'Test Title',
	description: 'Test Description',
	rating: 4,
	productId,
};

describe('AppController (e2e)', () => {
	let app;
	let createdId;

	beforeEach(async () => {
		const moduleFixture = await Test.createTestingModule({
			imports: [AppModule],
		}).compile();

		app = moduleFixture.createNestApplication();
		await app.init();
	});

	it('/review/create (POST)', async () => {
		return request(app.getHttpServer())
			.post('/review/create')
			.send(testDTO)
			.expect(201)
			.then((response) => {
				writeFile('some.txt', response.toString(), console.error);
				createdId = response.status;
				//createdId = 1;

				expect(createdId).toBeDefined();
			});
	});

	afterAll(disconnect);
});
