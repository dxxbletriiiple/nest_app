export class ProductModel {
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
