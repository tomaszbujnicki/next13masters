export type Cent = number & { __brand: "Cent" };

export type Product = {
	id: number;
	name: string;
	category: string;
	price: string;
	coverImage: {
		src: string;
		alt: string;
	};
};
