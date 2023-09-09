import type { Product } from "../../types";
import { CoverImage } from "./CoverImage";
import { Description } from "./Description";

type ProductItemProps = {
	product: Product;
};

export const ProductItem = ({ product }: ProductItemProps) => {
	return (
		<article>
			<CoverImage alt={product.coverImage.alt} src={product.coverImage.src} />
			<Description category={product.category} name={product.name} price={product.price} />
		</article>
	);
};
