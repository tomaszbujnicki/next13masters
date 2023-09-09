import type { Product } from "../../types";
import { ProductItem } from "./ProductItem";

type ProductListProps = {
	products: Product[];
};

export const ProductList = ({ products }: ProductListProps) => {
	return (
		<ul
			data-testid="products-list"
			className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
		>
			{products.map((product) => (
				<li key={product.id}>
					<ProductItem product={product} />
				</li>
			))}
		</ul>
	);
};
