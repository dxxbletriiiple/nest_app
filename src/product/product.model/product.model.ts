export class ProductModel {
	id: string;
	image: string;
	title: string;
	price: number;
	oldPrice: number;
	loan: number;
	calculatedRating: number;
	description: string;
	advantages: string;
	disAvantages: string;
	categories: string[];
	tags: string[];
	characteristics: {
		[key: string]: string;
	};
}
