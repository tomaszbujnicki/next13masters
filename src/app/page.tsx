import { useMemo } from "react";
import { vehicles } from "./vehicles";
import { ProductList } from "components/Product/ProductList";
import { formatMoney } from "utils/formatMoney";

import type { Cent } from "types";

export default function Home() {
	const vehicleList = useMemo(
		() =>
			vehicles.map((vehicle) => ({
				id: vehicle.id,
				name: vehicle.name,
				category: vehicle.brand,
				price: formatMoney(vehicle.price as Cent),
				coverImage: {
					src: vehicle.src,
					alt: vehicle.name,
				},
			})),
		[],
	);

	return (
		<main>
			<section className="p-6 sm:p-12">
				<ProductList products={vehicleList} />
			</section>
		</main>
	);
}
