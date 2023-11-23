import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { Types, disconnect } from 'mongoose';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { CreateReviewDTO } from 'src/review/reviewDTO';

const productId = new Types.ObjectId().toHexString();

const testDTO: CreateReviewDTO = {
	name: 'Test',
	title: 'Test Title',
	description: 'Test Description',
	rating: 4,
	productId,
};

describe('AppController (e2e)', () => {
	let app: INestApplication;
	let createdId: string;

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule],
		}).compile();

		app = moduleFixture.createNestApplication();
		await app.init();
	});

	it('/review/create (POST)', async (done) => {
		return request(app.getHttpServer())
			.post('/review/create')
			.send(testDTO)
			.expect(201)
			.then(({ body }: request.Response) => {
				createdId = body._id;
				console.log(createdId);
				expect(createdId).toBeDefined();
				//done();
			});
	});

	afterAll(() => disconnect());
});
